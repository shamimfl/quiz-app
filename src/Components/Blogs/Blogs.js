import React from 'react';

const Blogs = () => {
    return (
        <div className='md:px-10 p-5'>
            <h4 className='mt-10 text-red-900 font-bold text-xl'>1) what is the purpose of react-router?</h4>
            <p className='text-slate-500 font-bold mt-2 '>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>

            <h4 className='mt-10 text-red-900 font-bold text-xl'>2) How does context API work? </h4>
            <p className='text-slate-500 font-bold mt-2 '>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</p>

            <h4 className='mt-10 text-red-900 font-bold text-xl'>3) What is a useref?</h4>
            <p className='text-slate-500 font-bold mt-2 '>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with {"<div ref={myRef} />"} , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            
        </div>
    );
};

export default Blogs;