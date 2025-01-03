import React, { lazy } from "react";
export const Navbar = lazy(() => import("../components/Navbar"));
export const Login = lazy(() => import("../pages/Login"));
export const Signup = lazy(() => import("../pages/Signup"));
export const Users = lazy(() => import("../pages/Users"));
export const Setting = lazy(() => import("../pages/Setting"));
export const Home = lazy(() => import("../pages/Home"));
export const ProtectedRoute = lazy(() => import("../context/ProtectedRoutes"));
export const Layout = lazy(() => import("../layout/Layout"));

//
export const MainApp = lazy(() => import("../MainApp/pages/mainapp"));
export const MainHome = lazy(() => import("../MainApp/pages/Home"));
export const ClassRoom = lazy(() => import("../MainApp/pages/ClassRoom"));
export const StdProfile = lazy(() => import("../MainApp/pages/StdProfile"));
export const StdProfileMain = lazy(() =>
  import("../MainApp/components/StdProfileMain")
);
export const StdProfileSetting = lazy(() =>
  import("../MainApp/components/ProfilePageSetting")
);
export const CreateRoom = lazy(() =>
  import("../MainApp/components/CreateRoom")
); 
// export const EditStudents = lazy(()=>{
//   import("../MainApp/components/EditStudents")
// })
