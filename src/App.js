
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import Home from './pages/home/Home/Home';
import Footer from './pages/Footer/Footer';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound'
import FootDetails from './pages/FootDetails/FootDetails';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
         <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='/home'>
            <Home></Home>
         </Route>
         <Route path='/login'>
            <Login></Login>
         </Route>
         <Route path='/register'>
            <Register></Register>
         </Route>
         <Route path='/foodDetail/:foodKey'>
            <FootDetails></FootDetails>
         </Route>
         <Route path='*'>
            <NotFound></NotFound>
         </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
