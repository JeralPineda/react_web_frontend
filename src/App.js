import Admin from './pages/Admin';
import SignIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';

import './App.scss';

function App() {
   return (
      <>
         <h1>App</h1>

         <Admin />
         <SignIn />
         <Home />
         <Contact />
      </>
   );
}

export default App;
