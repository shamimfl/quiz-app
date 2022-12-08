import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Pages/Main';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import StartQuiz from './Components/StartQuiz/StartQuiz';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blogs from './Components/Blogs/Blogs';
import  Statics  from './Components/Statics/Statics';

function App() {

  const router = createBrowserRouter([
    {path: '/' , element: <Main></Main>,  children:[
      {path: '/' , element: <Home></Home> , loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')},
      {path: 'quiz/:id', element: <StartQuiz></StartQuiz>},
      {path: '/statics' , element: <Statics></Statics> , loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')},
      {path: '/blogs', element: <Blogs></Blogs>},
      {path: '*' , element: <NotFound></NotFound>}
    ]}
  ])
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
