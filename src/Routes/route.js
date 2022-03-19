import HomeTemplate from "../templateHome/HomeTemplate";
import LoginTemplate from "../templateLogin/LoginTemplate";

import { lazy } from "react";

const routesHome = [
  //Home
  {
    page: 'Trang chủ',
    exact: true,
    path: "/",
    component: lazy(() => import("../templateHome/Homepage/Homepage")),
  },
  //Courses
  {
    page: 'Khoá học',
    exact: false,
    path: "/courses",
    component: lazy(() => import("../templateHome/Courses/Courses")),
  },
  //About
  {
    page: 'Về chúng tôi',
    exact: false,
    path: "/about",
    // component: lazy(() => import("../templateHome/Courses/Courses")),
  },
  //Contact
  {
    page: 'Liên hệ',
    exact: false,
    path: "/contact",
    // component: lazy(() => import("../templateHome/Courses/Courses")),
  },
  //Course detail
  {
    exact: false,
    path: "/course-detail/:maKhoaHoc",
    component: lazy(() => import("../templateHome/CourseDetail/CourseDetail")),
  },
  //User profile
  {
    page: 'Người dùng',
    exact: false,
    path: "/user-profiles",
    component: lazy(() => import("../templateHome/UserProfile/UserProfile")),
  },
];

const routeLogin = [
  //SignIn
  {
    exact: false,
    path: "/signin",
    component: lazy(() => import("../templateLogin/SignIn/SignIn.js")),
  },
  // SignUp
  {
    exact: false,
    path: "/signup",
    component: lazy(() => import("../templateLogin/SignUp/SignUp.js")),
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

const renderRouteLogin = () => {
  return routeLogin.map((route, index) => {
    return (
      <LoginTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

export { renderRouteHome, renderRouteLogin, routesHome, routeLogin };
