// Layouts
import LayoutAdmin from 'layouts/LayoutAdmin';
import LayoutBasic from 'layouts/LayoutBasic';

// Admin
import AdminHome from 'pages/Admin';
import AdminSignIn from 'pages/Admin/SignIn/SignIn';

// Pages
import Home from 'pages/Home';
import Contact from 'pages/Contact';

// Others
import Error404 from 'pages/Error404'; //siempre en la ultima posición

const routes = [
   {
      path: '/admin',
      component: LayoutAdmin,
      exact: false,
      routes: [
         {
            path: '/admin',
            component: AdminHome,
            exact: true,
         },
         {
            path: '/admin/Login',
            component: AdminSignIn,
            exact: true,
         },
         {
            component: Error404,
         },
      ],
   },
   {
      path: '/',
      component: LayoutBasic,
      exact: false,
      routes: [
         {
            path: '/',
            component: Home,
            exact: true,
         },
         {
            path: '/contact',
            component: Contact,
            exact: true,
         },
         {
            component: Error404,
         },
      ],
   },
];

export default routes;
