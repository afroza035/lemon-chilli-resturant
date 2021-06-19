import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home/Home";
import MainNavbar from "./components/Shared/MainNavbar/MainNavbar";
import Footer from "./components/Shared/Footer/Footer";
import Menu from "./components/Menu/Menu/Menu";
import AboutUs from "./components/AboutUs/AboutUs/AboutUs";
function App() {
  return (
    <Router>
      <div className="">
        <MainNavbar></MainNavbar>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu/>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
