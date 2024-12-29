import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ClassRoom,
  CreateRoom,
  Home,
  Layout,
  Login,
  MainApp,
  MainHome,
  ProtectedRoute,
  Setting,
  Signup,
  StdProfile,
  StdProfileMain,
  StdProfileSetting,
  Users,
} from "./utils/LazyLoadComponent";
import { Suspense } from "react";
import { ROUTES } from "./utils/routes";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./pages/NotFound";
import AdminProtectedRoute from "./context/AdminProtectedRoute";
function Fallback({ error }) {
  const regex = /\((.*?):\d+:\d+\)/;
  const match = error.stack.match(regex);
  let fileName = "Unknown";
  if (match) {
    const filePath = match[1];
    fileName = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.indexOf("?")
    );
  }
  return (
    <div
      role="alert"
      className="bg-red-800 flex flex-column w-full h-screen justify-content-center align-items-center"
    >
      <p className="text-white text-5xl text-600">Something went wrong:</p>
      <pre
        style={{ color: "yellow", backgroundColor: "green", padding: "5px" }}
      >
        {error.message}
      </pre>
      <pre
        style={{ color: "yellow", backgroundColor: "green", padding: "5px" }}
      >
        File: {fileName}
      </pre>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Routes>
            {/* Public Routes */}
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
            {/* Protected Routes for Users */}
            <Route path="/" element={<ProtectedRoute element={<MainApp />} />}>
              <Route index element={<MainHome />} />
              <Route path="/classroom" element={<ClassRoom />} />
              <Route path="/profile" element={<StdProfile />}>
                <Route index element={<StdProfileMain />} />
                <Route path="/profile/createroom" element={<CreateRoom />} />
                <Route
                  path="/profile/setting"
                  element={<StdProfileSetting />}
                />
              </Route>
            </Route>
            {/* Admin Routes */}
            <Route
              path="/dashboard"
              element={<AdminProtectedRoute element={<Layout />} />}
            >
              <Route index element={<Home />} />
              <Route path="users" element={<Users />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            {/* Not Found Route */}
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router>
  );
}

export default App;
