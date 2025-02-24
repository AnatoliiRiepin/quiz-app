import React, { useState } from 'react';

const QuizForm = ({ selectedThemeUrl }) => {
    const [numQuestions, setNumQuestions] = useState(5);
    const [allowSkipping, setAllowSkipping] = useState(false);
    const [showTimer, setShowTimer] = useState(false);

    // Function to validate and start the quiz
    const handleStartQuiz = (e) => {
        if (!selectedThemeUrl) {
            e.preventDefault();
            alert('Please select a theme.');
            return;
        }
        // Validate number of questions
        if (numQuestions < 5 || numQuestions > 10) {
            e.preventDefault();
            alert('Number of questions must be between 5 and 10.');
            return;
        }

        // Construct the quiz URL with user-selected parameters
        const quizUrl = `/quiz?url=${encodeURIComponent(selectedThemeUrl)}
            &questions=${numQuestions}
            &skip=${allowSkipping ? 'true' : 'false'}
            &timer=${showTimer}`;

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
            <button type="button" onClick={handleStartQuiz}>
                Start Quiz
            </button>
        </form>
    );
};

export default QuizForm;