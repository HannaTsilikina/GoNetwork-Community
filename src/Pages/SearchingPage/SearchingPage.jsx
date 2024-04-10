import { useState, useEffect } from 'react';
import userData from '../../../data.json';
import './SearchingPage.scss';

export default function SearchingPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState('');

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

    const getRandomValue = () => Math.floor(Math.random() * 22) + 1;

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
                        {searchResults.map((user) => (
                            <div
                                key={user.id}
                                className="sp__container-result-users-user"
                                style={{
                                    gridColumn: `${getRandomValue()} / span 1`,
                                    gridRow: `${getRandomValue()} / span 1`,
                                }}
                            >
                                {user.firstName} {user.lastName}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}