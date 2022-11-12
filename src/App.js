import { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { AuthContext } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/general/Navbar";

function App() {
  const { user } = useContext(AuthContext);
  const Layout1 = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Layout1>
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/register" />}
            </Route>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/register">
              {user ? <Redirect to="/" /> : <Register />}
            </Route>
            <Route path="/user/:id">
              {user ? <UserProfile /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </Layout1>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
