import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { name, total, id, logo } = quiz;
    return (
        <div className="quiz-card p-5 rounded">
            <div className="avatar flex justify-center">
                <div className="w-24 rounded-full">
                    <img className='bg' src={logo} />
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='w-1 full bg-green-400 rounded-full border-dotted'></div>
                <div>
                    <h4 className='text-xl text-base-200 font-bold'>{name}</h4>
                    <span className='flex gap-3 items-center text-base-200 mt-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                        <p>{total}</p>
                    </span>
                    <Link to={`quiz/${id}`} className='mt-5 bg-amber-400 px-5 py-2 block rounded font-bold text-black flex justify-between gap-5'>
                        <p>Start Now</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-400 bg-white p-1 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </Link>
                </div>
            </div>

        </div >
    );
};

export default Quiz;