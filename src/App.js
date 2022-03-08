import React from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Properties from "./Component/Pages/Properties";
import Blogs from "./Component/Pages/Blogs";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Terms from "./Component/Pages/Terms";
import Privacy from "./Component/Pages/Privacy";
import BlogsHome from "./Component/Pages/BlogsHome";
import PropertyPage from "./Component/Pages/Property pages/PropertyPage";
import OurStory from "./Component/Pages/OurStory";
import Team from "./Component/Pages/Team";
import KeyDisclosure from "./Component/Pages/KeyDisclosure";
import Faq from "./Component/Pages/Faq";
import Careers from "./Component/Pages/Careers";
import Events from "./Component/Pages/Events";
import Advisors from "./Component/Pages/Advisors";
import EventDetails from "./Component/Pages/EventDetails";
import InvestNowPopup from "./Component/popups/browcerPopup/InvestNowPopup";
import OldProperty from "./Component/popups/oldProperty/OldProperty";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/properties" component={Properties} />
          <Route exact path="/property/:property_id" component={PropertyPage} />
          <Route exact path="/previous-deals" component={OldProperty} />
          <Route exact path="/invest-property" component={InvestNowPopup} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blog/:blog_id" component={BlogsHome} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/ourstory" component={OurStory} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/advisors" component={Advisors} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/events" component={Events} />
          <Route
            exact
            path="/event-details/:event_id"
            component={EventDetails}
          />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/keyDisclosure" component={KeyDisclosure} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;

{
  /* <ProtectedRoute exact path="/login-dashboard/:id" component={LoginDashboard}></ProtectedRoute>
<Route exact path="/paymentpage/:id" component={Paymentpage}></Route>
<Route exact path="/dashboardHome" component={DashboardHome}></Route>
<Route exact path="/thank-you" component={DashboardRegister}></Route>
<Route exact path="/paymentstep" component={Paymentstep}></Route>
<Route exact path="/singupForm" component={SingupForm}></Route>
<Route exact path="/invest-details/:invest_id" component={Investdetails}></Route>
<Route exact path="/propertdoc" component={PropertyDocument}></Route>
<Route exact path="/forgetpassword" component={ForgetPassword} />
<Route exact path="/userresetpassword/:token" component={conformpassword}/>
{localStorage.getItem("landdepot-login") ? (
  <Route exact path="/login" component={Home}></Route>
) : (
  <Route exact path="/login" component={LoginForm}></Route>
)} */
}

// import DashboardHome from "./Component/Dashboard/DdashboardHome/DashboardHome";
// import DashboardRegister from "./Component/Dashboard/DdashboardHome/DashboardRegister";
// import Paymentpage from "./Component/Dashboard/Payment/Paymentpage";
// import Paymentstep from "./Component/Dashboard/Payment/Paymentstep";
// import LoginForm from "./Component/Dashboard/Forms/LoginForm";
// import SingupForm from "./Component/Dashboard/Forms/SingupForm";
// import LoginDashboard from "./Component/Dashboard/DdashboardHome/LoginDashboard/LoginDashboard";
// import ForgetPassword from "./Component/Dashboard/Forms/ForgetPassword";
// import conformpassword from "./Component/Dashboard/Forms/Confirmpassword";
// import ProtectedRoute from "./ProtectedRoute";
// import PropertyDocument from "./Component/Dashboard/DdashboardHome/LoginDashboard/DashboardPages/Documents/propertyDoc/PropertyDocument";
// import Investdetails from "./Component/Dashboard/DdashboardHome/LoginDashboard/DashboardPages/Documents/propertyDoc/InvestDetails";
