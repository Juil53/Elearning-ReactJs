import HomeTemplate from "../templateHome/HomeTemplate";
import Homepage from "../templateHome/Homepage/Homepage";
import UserProfile from "../templateHome/UserProfile/UserProfile";
import Courses from "../templateHome/Courses/Courses";

const routesHome = [
  //Home
  {
    exact: true,
    path: "/",
    component: Homepage,
  },
  //Courses
  {
    exact: false,
    path: "/courses",
    component: Courses,
  },
  //UserProfile
  {
    exact: false,
    path: "/user-profiles",
    component: UserProfile,
  },
];

const renderRouteHome = () => {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRouteHome };
