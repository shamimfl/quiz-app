import React from 'react';
import Quiz from '../Quiz/Quiz';

const QuizType = ({ quiz }) => {
    return (
        <div className='p-5 '>
            <span className='font-bold text-amber-500 mt-20 flex justify-center items-center gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 bg-amber-400 text-white p-2 rounded-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <h1 className='text-3xl'>Quiz Types : {quiz.length}</h1>
            </span>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 lg:px-20 gap-10 mt-10'>
                {
                    quiz.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default QuizType;