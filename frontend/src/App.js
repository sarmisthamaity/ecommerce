import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Nav from './conponents/Nav';
import Register from './conponents/Register';
import Login from './conponents/Login';
import CreatePost from './conponents/Creapost';
import Details from './conponents/Details';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/admin' component={CreatePost}></Route>
        <Route exact path='/view' component={Details}></Route>
        
      </Switch>
    </>
  );
}

export default App;
