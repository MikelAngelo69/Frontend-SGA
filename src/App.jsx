import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Customer_view/Home_page/Home.page";
import SignIn from "./pages/Customer_view/Sign-in/Sign-in.page";
import HomeSeller from "./pages/Seller_view/Home_Seller/Home_Seller.component";
import NewRent from "./pages/Seller_view/New_rent/New_rent.component";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/home-seller" element={<HomeSeller />} />
        <Route path="/home-seller/new-rent" element={<NewRent />} />
        
      </Routes>
    </Router>
  );
}

export default App;
