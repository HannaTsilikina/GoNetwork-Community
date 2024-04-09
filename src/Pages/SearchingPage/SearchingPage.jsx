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
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>{searchMessage}</p>
            </div>
        </div>
    )
}