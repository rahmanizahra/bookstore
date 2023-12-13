import React,{useState,useEffect} from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Setup from './components/Setup';
import MainMenu from './components/MainMenu';
import NewBook from './components/NewBook';
import UpdateBook from './components/UpdateBook';
import DisplayBookAuthor from './components/DisplayBookAuthor';
import DisplayBookPrice from './components/DisplayBookPrice';
import Quit from './components/Quit';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
  axios.get('http://localhost:3001/client')
    .then(response => setData(response.data))
    .catch(error => console.error('Error fetching data:', error));
};
  useEffect(() => {
    fetchData();
  }, []);
const [maxBooks, setMaxBooks] = useState(10);
console.log(maxBooks);

  return (
   
    <BrowserRouter>
      <div className='App'>
      <h1 style={{color:"white", textAlign:"center",marginTop:"50px"}}>Bookstore</h1>    
      <Routes>
        <Route path="/" exact element={<Welcome/>} />
        <Route path="/setup" element={<Setup books={data} setMax={setMaxBooks} maxBooks={maxBooks}/>} />
        <Route path="/main-menu" element={<MainMenu books={data} maxBooks={maxBooks}/>} />
        <Route path="/add-book" element={<NewBook books={data} maxBooks={maxBooks} setBooks={setData} fetchData={fetchData}/>} />
        <Route path="/update-book" element={<UpdateBook books={data} maxBooks={maxBooks} setBooks={setData} fetchData={fetchData}/>} />
        <Route path="/display-book-author" element={<DisplayBookAuthor books={data} />} />
        <Route path="/display-book-price" element={<DisplayBookPrice books={data} />} />
        <Route path="/quit" component={Quit} />
      </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
