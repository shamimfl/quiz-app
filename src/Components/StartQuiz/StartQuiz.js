import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../Question/Question';

const StartQuiz = () => {

    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)

    const [allQuiz, setAllQuiz] = useState([])
    const id = useParams()

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id.id}`)
            .then(res => res.json())
            .then(data => setAllQuiz(data.data))
    }, [])

    return (
        <div className='relative'>
            <h1 className='text-center text-2xl font-extrabold  mt-10 text-blue-800'>Start Quiz OF {allQuiz.name}</h1>
            <section className=''>
                <div className='md:w-1/4 w-2/4 mt-5 quiz-card p-5 font-bold sticky top-0 rounded'>
                    <h1 className='font-bold text text-amber-400'>Correct ans : {correct}</h1>
                    <h1 className='font-bold text text-amber-400'>Wrong  ans : {wrong}</h1>
                </div>
                <div className='px-5 '>
                    {
                        allQuiz?.questions?.map(ques => <Question ques={ques} correct={correct} setCorrect={setCorrect} setWrong={setWrong} wrong={wrong} ></Question>)
                    }
                </div>

            </section>
        </div>
    );
};

export default StartQuiz;