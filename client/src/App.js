import { Switch, Route } from "react-router-dom";

// importing styles
import "./Sass/index/index.css";
import "./Sass/responsive/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

// importing slick-slider
import "./Sass/css-utils/slick.css";
import "./Sass/css-utils/slick-theme.css";

//importing Components
import Navbar from "./components/Header/Navbar";
import Packagepage from "./pages/Packagepage";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Signup from "./components/Header/Signup";
import Contactpage from "./pages/Contactpage";
import Packagedetails from "./components/Packages/Packagedetails";
import Login from "./components/Header/login";
import { BookingForm } from "./components/BookingForm";
import Sidebar from "./adminPanel/sidebar";
import Dashboard from "./adminPanel/pages/dashboard";
import Packages from "./adminPanel/pages/packages";
import Users from "./adminPanel/pages/users";
import Massages from "./adminPanel/pages/messages";
import Addpackage from "./adminPanel/pages/Addpackage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPackages } from "./features/Slices/packagesSlice";
import { fetchDestinations } from "./features/Slices/destinationsSlice";
import { fetchUsers } from "./features/Slices/userSlice";
import {fetchMessages} from "./features/Slices/messagesSlice"
import Admin from "./adminPanel/admin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPackages());
    dispatch(fetchDestinations());
    //  dispatch(fetchMessages());
    // dispatch(fetchUsers());
  });

  if (useLocation().pathname.includes("/admin")) {
    return (
      <>
        <Admin />
        <Switch>
          <Route exact path="/admin/" component={Dashboard} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/packages" component={Packages} />
          <Route exact path="/admin/packages/add" component={Addpackage} />
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/messages" component={Massages} />
        </Switch>
      </>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/packages" component={Packagepage} />
          <Route exact path="/About" component={Aboutpage} />
          <Route exact path="/contact" component={Contactpage} />
          <Route exact path="/r_packages/:id" component={Packagedetails} />
          <Route exact path="/booking/:id" component={BookingForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
