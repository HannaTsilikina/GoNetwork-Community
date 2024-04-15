import { useState, useEffect } from 'react';
import userData from '../../../WPT_data.json';
import './SearchingPage.scss';

export default function SearchingPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState('');
    const [positions, setPositions] = useState([]);
    const [isIntersectingThreshold, setIsIntersectingThreshold] = useState({ top: 7, left: 8 });

    useEffect(() => {
        if (searchTerm.length >= 3 && searchTerm.length <= 5) {
            const filteredUsers = userData.members.filter((user) =>
                (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setSearchResults(filteredUsers);
            setSearchMessage('');
        } else {
            const filteredUsers = userData.members.filter((user) =>
                (user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setSearchResults(filteredUsers);
            if (searchTerm.length > 5 && filteredUsers.length === 0) {
                setSearchMessage('Пользователь не найден');
            } else {
                setSearchMessage('');
            }
        }
    }, [searchTerm]);

    const handleSearchInputChange = (event) => {
        const inputText = event.target.value;
        setSearchTerm(inputText);
    }

    // Динамическое обновление пороговых значений в зависимости от изменений размера окна для адаптации условий пересечения позиций для разных размеров экрана.
    useEffect(() => {
        // Определение пороговых значений для условия isIntersecting
        const updateIntersectingThreshold = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setIsIntersectingThreshold({ top: 4, left: 10 });
            } else if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
                setIsIntersectingThreshold({ top: 5, left: 9 });
            } else if (window.innerWidth >= 1366 && window.innerWidth <= 1920) {
                setIsIntersectingThreshold({ top: 7, left: 8 });
            }
        };

        // Установка начальных пороговых значений в соответствии с текущим размером окна
        updateIntersectingThreshold();

        // Обработчик изменения размера окна
        const handleResize = () => {
            updateIntersectingThreshold();
        };

        // Слушатель события изменения размера окна
        window.addEventListener('resize', handleResize);

        // Удаление слушателя после размонтирования компонента, чтобы избежать утечки памяти
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const maxAttemptsPerElement = 50;
        const maxElements = searchResults.length;
        const maxAttempts = maxAttemptsPerElement * maxElements;

        // Генерация уникальных позиции для элементов
        const generateUniquePositions = (maxAttempts) => {
            const newPositions = [];
            for (let i = 0; i < maxElements; i++) {
                let attempts = 0;
                let newPosition;
                let isIntersecting;
                do {
                    newPosition = {
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 90}%`,
                    };
                    // Сравнение абсолютных значений разницы с пороговыми значениями
                    isIntersecting = newPositions.some(({ top, left }) =>
                        Math.abs(parseFloat(top) - parseFloat(newPosition.top)) < isIntersectingThreshold.top &&
                        Math.abs(parseFloat(left) - parseFloat(newPosition.left)) < isIntersectingThreshold.left
                    );
                    attempts++;
                } while (isIntersecting && attempts < maxAttempts);
                if (!isIntersecting) {
                    newPositions.push(newPosition);
                }
            }
            return newPositions;
        };

        const initialPositions = generateUniquePositions(maxAttempts);
        setPositions(initialPositions);
    }, [searchResults, isIntersectingThreshold]);

    const calculateContainerHeight = () => {
        const maxUsersPerPage = 20; // Максимальное количество пользователей на одной странице
        const usersPerPage = Math.min(maxUsersPerPage, searchResults.length); // Количество пользователей на странице
        const estimatedHeight = usersPerPage * (77.86 + 9); // Предполагаемая высота контейнера в пикселях
        return estimatedHeight;
    };

    return (
        <div className='sp__container'>
            <div className='sp__container-input'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    placeholder='Введите имя'
                /><span></span>
            </div>
            <div className='sp__container-result'>
                {searchMessage && (<p>{searchMessage}</p>)}
                {searchResults.length > 0 && (
                    <div className='sp__container-result-users' style={{ height: `${calculateContainerHeight()}px` }}>
                        {searchResults.map((user, index) => (
                            <div
                                key={user.id}
                                className="sp__container-result-users-user"
                                style={{
                                    top: positions[index] ? positions[index].top : '0%',
                                    left: positions[index] ? positions[index].left : '0%',
                                }}
                            >
                                {user.firstName} {user.lastName}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}