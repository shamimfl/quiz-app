import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizType from '../QuizType/QuizType';


const Home = () => {


    const quiz = useLoaderData()
    console.log(quiz)

    return (
        <section>
            <div className='bg-slate-800 p-5 md:flex items-center justify-center h-[80vh]'>
                <div className=' text-justify'>
                    <h4 className='md:text-5xl text-3xl font-bold uppercase  text-amber-400 text'>Start Your Journey Hare</h4>
                    <p className=' md:w-2/4 font-bold text-slate-200 mt-10'>Start the quiz and test your mettle completely free. Quiz timings and quizzes are fixed. Quiz topics are React, JavaScript, Git, CSS .</p>
                    <button className='btn mt-10 border-2 border-amber-400 rounded-sm bg-amber-400 hover:bg-amber-400  text-black font-bold flex justify-between px-5 mb-5 md:mb-0'>
                        <p>Start Quiz</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 bg-white ml-3 p-2 rounded-full text-amber-500 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>

                    </button>
                </div>
                <div className='md:w-2/4 flex justify-end'>
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/online-test-5727897-4788138.png' alt="" />
                </div>
            </div>
            <QuizType quiz={quiz.data}></QuizType>
        </section>
    );
};

export default Home;