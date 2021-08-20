import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes/routes';
import AuthProvider from 'providers/AuthProvider';

import './App.scss';

function App() {
   return (
      <AuthProvider>
         <Router>
            <Switch>
               {routes.map((route, index) => (
                  <RouteWithSubRoutes key={index} {...route} />
               ))}
            </Switch>
         </Router>
      </AuthProvider>
   );
}

function RouteWithSubRoutes(route) {
   return (
      <Route
         path={route.path} //
         exact={route.exact}
         render={(props) => <route.component routes={route.routes} {...props} />}
      />
   );
}

export default App;
