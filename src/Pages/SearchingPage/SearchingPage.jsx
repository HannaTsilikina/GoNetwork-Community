import { useState, useEffect } from 'react';
import userData from '../../../data.json';
import './SearchingPage.scss';

export default function SearchingPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState('');
    const [positions, setPositions] = useState([]);

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

    const getRandomPosition = () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
    });

    useEffect(() => {
        const newPositions = [];
        searchResults.forEach(() => {
            let newPosition;
            do {
                newPosition = {
                    top: `${Math.random() * 90}%`,
                    left: `${Math.random() * 90}%`,
                };
            } while (
                newPositions.some(
                    ({ top, left }) =>
                        Math.abs(parseFloat(top) - parseFloat(newPosition.top)) < 10 &&
                        Math.abs(parseFloat(left) - parseFloat(newPosition.left)) < 10
                )
            );
            newPositions.push(newPosition);
        });
        setPositions(newPositions);
    }, [searchResults]);

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
                    <div className='sp__container-result-users'>
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