import React, { useEffect, useState } from 'react';

export const LeaderBoard = () => {
    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        const storedNames = JSON.parse
            (localStorage.getItem('userNames')) || [];
        setUserNames(storedNames);
    }, []);
    return (
        <div>
            <h2>LeaderBoard</h2>
            <ol>
                {userNames.map((name, index) => (
                    <li
                        key={index}>
                        {name}
                    </li>
                ))}
            </ol>
        </div>
    )
}
