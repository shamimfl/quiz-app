import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Question = ({ ques , setCorrect , correct , wrong , setWrong }) => {

    const [disabled,setDisabled] = useState(false);

    
    const checkData =(opt, cqr)=>{
        if(opt == cqr){
            toast.success('correct Answer')
            setCorrect(correct + 1)
            setDisabled(true)
        }else{
            toast.error('Wrong  Answer')
            setWrong(wrong + 1)
            setDisabled(true)
        }
    }

    return (
        <div  className='border-2 mt-5 p-5 rounded lg:w-2/4 mx-auto'>
            <div className='flex  justify-between items-center'>
                <p className='text-red-400 font-bold'>{ques.question}</p>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-full bg-base-300 p-2 shadow shadow-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-green-400 font-bold text-white rounded-box w-52">
                        <p>{ques.correctAnswer}</p>
                    </ul>
                </div>
            </div>
            <div className="modal p-0 rounded-sm m-0" id="my-modal-2">
            </div>
            <div className='mt-5'>
                {
                    ques.options.map(option => (
                        <button disabled={disabled} name='option' onClick={()=> checkData(option , ques.correctAnswer)} className='flex gap-5 btn h-full p-2  w-full  mt-2 bg-white text-blue-700 font-bold hover:bg-blue-200 text-left justify-start'>
                            <div className='h-3 w-3 border-blue-700 border-2 1 rounded-full'>
                            </div>
                            <p>{option}</p>
                        </button>
                    ))
                }
            </div>

        </div>
    );
};

export default Question;



