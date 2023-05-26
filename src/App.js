import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Edit from './Components/Edit';
import List from './Components/List';
import Add from './Components/Add';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Detail from './Components/Detail';
import NavbarComp from './Components/navbar';
import { Counter } from './Components/counter';
import CounterCopy from './Components/countercopy';


function App() {
  return (
    <div className="App">
       <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <NavbarComp/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user' element={<List></List>}></Route>
          <Route path='/user/add' element={<Add></Add>}></Route>
          <Route path='/user/edit/:code' element={<Edit></Edit>}></Route>
          <Route path='/user/detail/:code' element={<Detail></Detail>}></Route>
          <Route path='/counter' element={<Counter/>}></Route>
          <Route path='/countercopy' element={<CounterCopy/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="bottom-right"></ToastContainer>
    </div>
    </Provider>
    </div>
  );
}

export default App;
