// Layouts
import LayoutAdmin from '../layouts/LayoutAdmin';

// Admin
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

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
      ],
   },
];

export default routes;
