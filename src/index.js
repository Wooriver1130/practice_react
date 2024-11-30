import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/step00/Header.jsx";
import Main from "./components/step00/Main.jsx";
import Footer from "./components/step00/Footer.jsx";
import ArticleList01 from './components/Step01/ArticleList01.jsx';
import Library from './components/Step02/Library.jsx';
import Profile from './components/Step03/Profile.jsx';
import CommentList from './components/Step04/CommentList.jsx';
import ArticleList05 from './components/Step05/ArticleList05.jsx';
import ItemList06 from './components/Step06/ItemList06.jsx';
import People1 from './components/Step07/People1.jsx';
import People2 from './components/Step07/People2.jsx';
import People3 from './components/Step07/People3.jsx';
import Step108Event01 from './components/Step08/Step108Event01.jsx';
import Step108Event02 from './components/Step08/Step108Event02.jsx';
import Step109Count from './components/Step09/Step109Count.jsx';
import Btn01_10 from './components/Step10/Btn01_10.jsx';
import Btn02_10 from './components/Step10/Btn02_10.jsx';
import Input_11 from './components/Step11/Input_11.jsx';
import NumCount_12 from './components/Step12/NumCount_12.jsx';
import Toggle_12 from './components/Step12/Toggle_12.jsx';
import TodoList_13 from './components/Step13/TodoList_13.jsx';
import Parents_14 from './components/Step14/Parents_14.jsx';
import TmptConverter from './components/Step15/TmptConverter.jsx';
import EffectTest01 from './components/Step17/EffectTest01.jsx';
import EffectTest02 from './components/Step17/EffectTest02.jsx';
import EffectTest03 from './components/Step17/EffectTest03.jsx';
import MemoTest01 from './components/Step18/MemoTest01.jsx';
import MemoTest02 from './components/Step18/MemoTest02.jsx';
import MemoTest03 from './components/Step18/MemoTest03.jsx';
import Form from './components/Step16/Form.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DayList from './components/Step25/DayList.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <React.StrictMode>
  //   <App /> 
  <>
    <h1>Step00</h1>
    <button>Step 00</button>
    <Header />
    <Main />
    <Footer />
    <br /> <br /> <br /><hr />

    <h1>Step01</h1>
    <ArticleList01 />
    <br /> <br /> <br /><hr />

    <h1>Step02</h1>
    <Library />
    <br /> <br /> <br /><hr />

    <h1>Step03</h1>
    <Profile />
    <br /> <br /> <br /><hr />

    <h1>Step04</h1>
    <CommentList />
    <br /> <br /> <br /><hr />

    <h1>Step05</h1>
    <ArticleList05 />
    <br /> <br /> <br /><hr />

    <h1>Step06</h1>
    <ItemList06 />
    <br /> <br /> <br /><hr />

    <h1>Step07</h1>
    <People1 />
    <br /> <br /> <br /><hr />
    <People2 />
    <br /> <br /> <br /><hr />
    <People3 />
    <br /> <br /> <br /><hr />

    <h1>Step08</h1>
    <Step108Event01 />
    <br /> <br /> <br /><hr />
    <Step108Event02 />
    <br /> <br /> <br /><hr />

    <h1>Step09</h1>
    <Step109Count />
    <br /> <br /> <br /><hr />

    <h1>Step10</h1>
    <Btn01_10 /> 
    <br /> <br /> <br /><hr />
    <Btn02_10 /> 
    <br /> <br /> <br /><hr />

    <h1>Step11</h1>
    <Input_11 />  
    <br /> <br /> <br /><hr />

    <h1>Step12</h1>
    <NumCount_12 />  
    <br /> <br /> <br /><hr />
    <Toggle_12 /> 
    <br /> <br /> <br /><hr />

    <h1>Step13</h1>
    <TodoList_13 />   
    <br /> <br /> <br /><hr />
    

    <h1>Step14</h1>
    <Parents_14 />   
    <br /> <br /> <br /><hr />

    <h1>Step15</h1>
    <TmptConverter />   
    <br /> <br /> <br /><hr />

    <h1>Step16</h1>
    <Form />   
    <br /> <br /> <br /><hr />
    
    <h1>Step17</h1>
    <EffectTest01 />   
    <EffectTest02 />   
    <EffectTest03 /> 
    <br /> <br /> <br /><hr />

    <h1>Step18</h1>
    <MemoTest01 /> 
    <MemoTest02 /> 
    <MemoTest03 /> 
    <br /> <br /> <br /><hr />
    
    <h1>Step25</h1>
    <h2>주소창에 /daylist 추가하기</h2>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <DayList/>} />
      </Routes> 
    </BrowserRouter>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
