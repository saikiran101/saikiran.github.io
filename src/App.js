import "./App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume"
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar1 from "./components/Navbar1";
import Project from "./pages/Projects";
import ContactMe from "./pages/ContactMe"
import Footer from "./pages/Footer";

function App() {
  return (
		<div>
			<Navbar1 />
			<Switch>
				<Route exact from="/" component={Home} />
				<Route exact path="/Resume" component={Resume} />
				<Route exact path="/Projects" component={Project} />
				<Route exact path="/ContactMe" component={ContactMe} />
				<Redirect to="/" />
		  </Switch>
		  <Footer/>
		</div>
	);
}

export default App;
