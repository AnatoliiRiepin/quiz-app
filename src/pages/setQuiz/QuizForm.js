import React, { useState } from 'react';

const QuizForm = ({ selectedThemeUrl }) => {
    const [numQuestions, setNumQuestions] = useState(5);
    const [allowSkipping, setAllowSkipping] = useState(false);
    const [showTimer, setShowTimer] = useState(false);
    const [userName, setUserName] = useState('');

    const handleStartQuiz = (e) => {
        if (!selectedThemeUrl) {
            e.preventDefault();
            alert('Please select a theme.');
            return;
        }
        if (numQuestions < 5 || numQuestions > 10) {
            e.preventDefault();
            alert('Number of questions must be between 5 and 10.');
            return;
        }

        if (!userName.trim()) {
            e.preventDefault();
            alert('Please enter your name.');
            return;
        }

        const storedNames = JSON.parse(localStorage.getItem('userNames')) || [];
        if (!storedNames.includes(userName)) {
            storedNames.push(userName);
            localStorage.setItem('userNames', JSON.stringify(storedNames));
        }

        const quizUrl = `/quiz?url=${encodeURIComponent(selectedThemeUrl)}
            &questions=${numQuestions}
            &skip=${allowSkipping ? 'true' : 'false'}
            &timer=${showTimer}
            &name=${encodeURIComponent(userName)}`;

        window.location.href = quizUrl;
    };

    return (
        <form>
            <label>
                Number of Questions (5-10):
                <input
                    type="number"
                    min="5"
                    max="10"
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(Number(e.target.value))}
                />
            </label>
            <label>
                Allow skipping and returning to questions:
                <input
                    type="checkbox"
                    checked={allowSkipping}
                    onChange={(e) => setAllowSkipping(e.target.checked)}
                />
            </label>
            <label>
                Show Timer During Quiz:
                <input
                    type='checkbox'
                    checked={showTimer}
                    onChange={(e => setShowTimer(e.target.checked))}
                />
            </label>
            <label>
                Enter Your Name:
                <input
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                >
                </input>
            </label>
            <button type="button" onClick={handleStartQuiz}>
                Start Quiz
            </button>
        </form>
    );
};

export default QuizForm;
