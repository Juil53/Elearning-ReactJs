import HomeTemplate from "../templateHome/HomeTemplate";
// import Homepage from "../templateHome/Homepage/Homepage";
// import UserProfile from "../templateHome/UserProfile/UserProfile";
// import Courses from "../templateHome/Courses/Courses";

import { lazy } from "react";

const routesHome = [
  //Home
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../templateHome/Homepage/Homepage")),
  },
  //Courses
  {
    exact: false,
    path: "/courses",
    component: lazy(() => import("../templateHome/Courses/Courses")),
  },
  //UserProfile
  {
    exact: false,
    path: "/user-profiles",
    component: lazy(() => import("../templateHome/UserProfile/UserProfile")),
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
