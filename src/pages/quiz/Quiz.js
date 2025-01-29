import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Quiz = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const apiUrl = queryParams.get('url')?.trim();
    const numQuestions = Number(queryParams.get('questions')?.trim()) || 5;
    const allowSkipping = queryParams.get('skip')?.trim() === 'true';
    const showTimer = queryParams.get('timer')?.trim() === 'true';

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [skippedQuestions, setSkippedQuestions] = useState([]);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [quizStartTime, setQuizStartTime] = useState(null);
    const [quizEndTime, setQuizEndTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isCurrentQuestionSkipped, setIsCurrentQuestionSkipped] = useState(false);

    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${hours.toString().padStart(2, '0')}
        :${minutes.toString().padStart(2, '0')}
        :${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setQuestions(data.results.slice(0, numQuestions));
                setQuizStartTime(Date.now());
            } catch (error) {
                console.error('Failed to fetch questions:', error);
            }
        };
        fetchQuestions();
    }, [apiUrl, numQuestions]);

    useEffect(() => {
        let timer;
        if (quizStartTime && !isQuizFinished) {
            timer = setInterval(() => {
                setElapsedTime(((Date.now() - quizStartTime) / 1000).toFixed(0));
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [quizStartTime, isQuizFinished]);

    const handleNextQuestion = useCallback(() => {
        if (selectedAnswer) {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedAnswer(null);
                setIsCurrentQuestionSkipped(false);
            } else if (skippedQuestions.length > 0) {
                const nextSkippedIndex = skippedQuestions[0];
                setSkippedQuestions((prev) => prev.slice(1));
                setCurrentQuestionIndex(nextSkippedIndex);
                setSelectedAnswer(null);
                setIsCurrentQuestionSkipped(true);
            } else {
                setIsQuizFinished(true);
                setQuizEndTime(Date.now());
            }
        }
    }, [selectedAnswer, currentQuestionIndex, questions.length, skippedQuestions]);

    const handleAnswerSection = (answer) => {
        setSelectedAnswer(answer);
        if (answer === questions[currentQuestionIndex]?.correct_answer) {
            setScore((prev) => prev + 1);
        }
    };

    const handleSkipQuestion = useCallback(() => {
        if (allowSkipping) {
            setSkippedQuestions((prev) => [...prev, currentQuestionIndex]);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedAnswer(null);
                setIsCurrentQuestionSkipped(false);
            } else if (skippedQuestions.length > 0) {
                const nextSkippedIndex = skippedQuestions[0];
                setSkippedQuestions((prev) => prev.slice(1));
                setCurrentQuestionIndex(nextSkippedIndex);
                setSelectedAnswer(null);
                setIsCurrentQuestionSkipped(true);
            } else {
                setIsQuizFinished(true);
                setQuizEndTime(Date.now());
            }
        }
    }, [allowSkipping, currentQuestionIndex, questions.length, skippedQuestions]);

    if (isQuizFinished) {
        const totalTime = ((quizEndTime - quizStartTime) / 1000).toFixed(2);
        return (
            <div>
                <h2>Quiz Results</h2>
                <p>Total Questions: {questions.length}</p>
                <p>Correct Answers: {score}</p>
                <p>Percentage: {((score / questions.length) * 100).toFixed(2)}%</p>
                <p>Total Time: {formatTime(totalTime)}</p>
                <button onClick={() => navigate('/')}>New Quiz</button>
                <button onClick={() => navigate('/leaderboard')}>Leaderboard</button>
            </div>
        );
    }

    if (questions.length === 0) {
        return <p>Loading questions...</p>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

    return (
        <div>
            <h2>{currentQuestion?.category}</h2>
            <p>{currentQuestion?.question}</p>
            <div>
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSection(answer)}
                        style={{
                            margin: '5px',
                            padding: '10px',
                            backgroundColor: selectedAnswer
                                ? answer === currentQuestion.correct_answer
                                    ? 'green'
                                    : answer === selectedAnswer
                                        ? 'red'
                                        : 'lightgray'
                                : 'white',
                            border: '1px solid black',
                        }}
                        disabled={!!selectedAnswer}
                    >
                        {answer}
                    </button>
                ))}
            </div>
            {showTimer && <p>Time Elapsed: {formatTime(elapsedTime)} seconds</p>}

            {allowSkipping && (
                <button onClick={handleSkipQuestion}
                    style={{ marginRight: '10px' }}
                    disabled={isCurrentQuestionSkipped}
                >
                    Skip
                </button>
            )}

            <button onClick={handleNextQuestion}>
                Next
            </button>
        </div>
    );

};
