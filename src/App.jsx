import {} from "react";

import Navbar from "./component/navbar/Navbar.jsx";
import "./App.css";
import Community from "./component/community/Community.jsx";
import Communityupdate from "./component/communityupdate/Communityupdate.jsx";
import Hero from "./component/hero/Hero.jsx";
import Unlock from "./component/unlock/Unlock.jsx";
import Achievement from "./component/acheivenent/Achievement.jsx";
import Calender from "./component/calender/Calender.jsx";
import Client from "./component/clients/Client.jsx";
import Footer from "./component/footer/Footer.jsx";
import Customers from "./component/customers/Customers.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Client />
      <Community />
      <Unlock />
      <Achievement />
      <Calender />
      <Customers />

      <Communityupdate />
      <Footer />
    </div>
  );
}

export default App;
