import './App.css';
import { BrowserRouter as Router,Route ,NavLink} from 'react-router-dom'
import Home from './components/Home'
import ResturantUpdate from './components/ResturantUpdate'
import ResturantDetail from './components/ResturantDetail'
import ResturantCreate from './components/ResturantCreate';
import ResturantSearch from './components/ResturantSearch'
import ResturantList from './components/ResturantList'
import Login from './components/Login'
import NavMenu from './components/NavMenu';
import Logout from './components/Logout';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <Router>
        
       <Protected exact path='/search' component={ResturantSearch}  />
       <Protected exact path='/create' component={ResturantCreate} />
       <Protected exact path='/detail' component={ResturantDetail} />
       <Protected exact path='/update/:id' component={ResturantUpdate} />
       <Protected  exact path='/list' component={ResturantList } />

        <Protected exact path='/' component={Home}/>
        <Route path='/logout'><Logout /></Route>  
        <Route path='/login' render={(props) => <Login {...props} />} /> 


      </Router>
    </div>
  );
}

export default App;
