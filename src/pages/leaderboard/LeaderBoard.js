import React, { useEffect, useState } from 'react';

export const LeaderBoard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse
            (localStorage.getItem('users')) || [];
        // Sort users by winRate (descending) and timeSpent (ascending if winRate is equal)
        const sortedUsers = storedUsers.sort((a, b) => {
            if (b.winRaate === a.winRate) {
                return a.timeSpent - b.timeSpent;
            }
            return b.winRate - a.winRate;
        })
        setUsers(sortedUsers);
    }, []); // Empty dependency array ensures this runs only once on mount
    return (
        <div>
            <h2>LeaderBoard</h2>
            <ol>
                {/* Render the sorted users in a list */}
                {users.map((user, index) => (
                    <li
                        key={index}>
                        {user.name} - Win Rate: {user.winRate}%
                        - Time Spent: {user.timeSpent} seconds
                    </li>
                ))}
            </ol>
        </div>
    )
}
