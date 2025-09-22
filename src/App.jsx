import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Customer_view/Home_page/Home.page";
import SignIn from "./pages/Customer_view/Sign-in/Sign-in.page";
import HomeSeller from "./pages/Seller_view/Home_Seller/Home_Seller.component";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home-seller" element={<HomeSeller />} />
      </Routes>
    </Router>
  );
}

export default App;
