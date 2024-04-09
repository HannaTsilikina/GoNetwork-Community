import { useState, useEffect } from 'react';
import userData from '../../../data.json';
import './SearchingPage.scss';

export default function SearchingPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchMessage, setSearchMessage] = useState('');

    useEffect(() => {
        setSearchResults(userData.members)
    }, []);

    const handleSearchInputChange = (event) => {
        const inputText = event.target.value;
        setSearchTerm(inputText);
    }

    if (inputText.length >= 3 && inputText.length <= 5) {
        const filteredUsers = userData.members.filter((user) =>
            (user.firstName.toLowerCase.includes(inputText.toLowerCase()) || user.lastName.toLowerCase.includes(inputText.toLowerCase()))
        );
        setSearchResults(filteredUsers);
        setSearchMessage('');
    } else if (inputText.length > 5) {
        setSearchResults([]);
        setSearchMessage('Пользователь не найден');
    } else {
        setSearchResults(userData.members);
        setSearchMessage('');
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchInputChange}
                placeholder='Введите имя'
            />
            <div>
                <ul>
                    {searchResults.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}