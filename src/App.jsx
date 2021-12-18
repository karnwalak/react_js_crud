import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import NotFound from './components/NotFound';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddUser from './components/AddUser';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/add" element={<AddUser/>}/>
          <Route exact path="/edit/:id" element={<EditUser/>}/>
          <Route exact path="/view/:id" element={<ViewUser/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
