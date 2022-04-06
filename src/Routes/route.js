import HomeTemplate from "../templateHome/HomeTemplate";
import LoginTemplate from "../templateLogin/LoginTemplate";

import { lazy } from "react";
import AdminTemplate from "../templateAdmin/AdminTemplate";

const routesHome = [
  //Home
  {
    page: "Trang chủ",
    exact: true,
    path: "/",
    component: lazy(() => import("../templateHome/Homepage/Homepage")),
  },
  //Courses
  {
    page: "Khoá học",
    exact: false,
    path: "/courses",
    component: lazy(() => import("../templateHome/Courses/Courses")),
  },
  //About
  {
    page: "Thông tin",
    exact: false,
    path: "/about",
    component: lazy(() => import("../templateHome/AboutUs/AboutUs.js")),
  },
  //Contact
  {
    // page: "Liên hệ",
    // exact: false,
    // path: "/contact",
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
    page: "Người dùng",
    exact: false,
    path: "/user-profiles/:id",
    component: lazy(() => import("../templateHome/UserProfile/UserProfile")),
  },
];

const routeAdmin = [
  {
    page: "Quản Trị",
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../templateAdmin/Dashboard/DashBoard.js")),
  },
  {
    page: "Quản Lý Người Dùng",
    exact: false,
    path: "/adminusers",
    component: lazy(() => import("../templateAdmin/AdminUsers/AdminUsers.js")),
  },
  {
    page: "Quản Lý Khoá Học",
    exact: false,
    path: "/admincourses",
    component: lazy(() =>
      import("../templateAdmin/AdminCourses/AdminCourses.js")
    ),
  },
  {
    page: "Quản lý ghi danh",
    exact: false,
    path: "/adminregisters",
    component: lazy(()=> import("../templateAdmin/AdminRegisters/AdminRegisters.js")
    )
  }
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

const renderRouteAdmin = () => {
  return routeAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
};

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

export {
  renderRouteAdmin,
  renderRouteHome,
  renderRouteLogin,
  routesHome,
  routeLogin,
};
