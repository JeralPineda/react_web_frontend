import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

function App() {
   return (
      <Router>
         <div className='app'>
            <h1>Sistema de rutas básicas</h1>
            <Link to='/'>Home</Link> <br />
            <Link to='/contact'>Contact</Link> <br />
            <Link to='/users'>Users</Link>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/contact' component={Contact} />
               <Route exact path='/users' component={Users} />
               <Route component={Error404} />
            </Switch>
         </div>
      </Router>
   );
}

function Home() {
   return <h2>Home</h2>;
}

function Contact() {
   return <h2>Contact</h2>;
}
function Users() {
   return <h2>Users</h2>;
}
function Error404() {
   return <h2>Error 404</h2>;
}

export default App;
