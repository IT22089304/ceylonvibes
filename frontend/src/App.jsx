import React, { useEffect, useState } from "react";
import Shop from "./pages/shop/Shop.jsx";
import FoodCatagory from "./components/Organic Items/Content/FoodCatagory.jsx";
import { Route, Router, Routes } from "react-router";
import ShopInside from "./pages/shop/ShopInside.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import InsertSlipS from "./components/Insert.jsx";
import Products from "./pages/shop/Products.jsx";
import axios from "axios";
import Admin from "./Admin/Admin.jsx";
import AddCatagory from "./Admin/AddCatagory.jsx";
import Image from "./components/Organic Items/Content/image.jsx";
import "./App.css"
import UpdateCatagory from "./Admin/UpdateCatagory.jsx";
import ItemsCatagory from "./Admin/ItemsCatagory.jsx";
import AddItemsCatagory from "./Admin/AddItemsCatagory.jsx";
import UpdateItemsCatagory from "./Admin/UpdateItemsCatagory.jsx";
import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile, ClerkProvider } from "@clerk/clerk-react";
import SignInPage from "./components/Header/sign-in.jsx";
import UserProfilePage  from "./components/Header/user-profile.jsx";
import TotalBill from "./pages/pay/TotalBill.jsx";
import Notification from "./pages/Noti/Notification.jsx";
import CardPayment from "./pages/pay/CardPayment.jsx";
import UploadSlip from "./pages/pay/UploadSlip.jsx";
import PaymentAdmin from "./pages/pay/PaymentAdmin.jsx";
import Eventpack from "./components/Bill/ddd.jsx";
import ArtCatorgeries from "./pages/Art/ArtCatorgeries.jsx";
import ArtHistorical from "./pages/Art/ArtHistorical.jsx";
import PaymentSuccess from "./pages/pay/Paymentsucess.jsx";
import SlipUploaded from "./pages/pay/SlipUploaded.jsx";
import Homepagee from "./pages/Hom/Homepagee.jsx";
import SpaHomepage from "./pages/SPA/SpaHomepage.jsx";
import AyurvedicPage from "./pages/SPA/AyurvedicSPAM.jsx";
import ClassicalPage from "./pages/SPA/AyurvedicSPAC.jsx";
import MenuEditPage from "./pages/SPA/SpaMenuEdit.jsx";
import ClassicalEditPage from "./pages/SPA/ClassicalSpaEdit.jsx";
import SpaAppointmentPage from "./pages/SPA/SpaServiceAppointment.jsx";
import ServiceConfirmPage from "./pages/SPA/SpaServiceConfirm.jsx";
import SPAADMINHOMEPAGE from "./pages/SPA/SpaAdminHomepage.jsx";
import SPAREPORTGENERATIONPAGE from "./pages/SPA/SpaReportGeneration.jsx";
import Festival from "./components/Events/Festival.jsx";
import Sport from "./components/Events/Sport.jsx";
import Payment from "./components/Events/payment.jsx";
import Food from "./components/Events/Food.jsx";
import EventPage from "./pages/EventPage.jsx";
import Eventadmin from "./components/Events/EventAdmin.jsx";
import InsertSlip from "./components/Insert.jsx";
const App = () => {
  console.disableYellowBox = true;

  const [nuts, setNuts] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [sweetners, setSweetners] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [offers, setOffers] = useState([]);
  const [cart, setCart] = useState([]);

  axios.defaults.baseURL = `http://localhost:5012`;

  const fetchNuts = async () => {
    try {
      const response = await axios.get("/api/Nuts&Seeds");
      setNuts(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const fetchSnacks = async () => {
    try {
      const response = await axios.get("/api/Snacks");
      setSnacks(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching snacks:", error);
    }
  };
  const fetchSweetners = async () => {
    try {
      const response = await axios.get("/api/Sweetners");
      setSweetners(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching sweetners:", error);
    }
  };

  const fetchCatagories = async () => {
    try {
      const response = await axios.get("/api/catagories");
      setCatagories(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchItemsCatagory = async () => {
    try {
      const response = await axios.get("/api/catagories");
      setCatagories(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchOffers = async () => {
    try {
      const response = await axios.get("/api/offers");
      setOffers(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // for cart
//   const fetchCart = () => {
//     fetch("http://localhost:5000/list")
//         .then((res) => res.json())
//         .then((data) => {
//             setCart(data);
//             console.log(cart)
//         });
// };
const fetchCart = async () => {
  try {
    const response = await axios.get("/api/lists");
    setCart(response.data.data);
    console.log(response);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
console.log(cart)

  
  return (    
  //   <BrowserRouter>
  //   <Routes>
         
  //   <Route path="/" element={<Homepagee />} />
  //   <Route path="/checkout/card" element={<CardPayment />} />
  //   <Route path="/checkout/slip" element={<UploadSlip />} />
  //   <Route path="/success" element={<PaymentSuccess />} />
  //   <Route path="/uploaded" element={<SlipUploaded />} /> 
  //   <Route path="/home" element={<Homepagee />} /> 
  //   <Route path="/homee" element={<Homepagee />} /> 
  //   <Route path="/pay" element={<TotalBill />} /> 
  //   <Route path="/SPAhome" element={<SpaHomepage />} /> 
  //   <Route path="/noti" element={<Notification />} /> 
     
  //    <Route path="/" element={<SpaHomepage />} />
  //     <Route path="/ayurvedic-spa-menu" element={<AyurvedicPage />} />
  //     <Route path="/ayurvedic-spa-classical" element={<ClassicalPage />} />
  //     <Route path="/appoitment" element={<SpaAppointmentPage />} />
  //     <Route path="/service-confirm" element={<ServiceConfirmPage />} />

  //     {/* Admin-side routes */}
  //     <Route path="/admin" element={<SPAADMINHOMEPAGE />} />
  //     <Route path="/spa-menu-edit-service" element={<MenuEditPage />} />
  //     <Route path="/classical-spa-rituals-edit-service" element={<ClassicalEditPage />} />
  //     <Route path="/generate-report" element={<SPAREPORTGENERATIONPAGE />} />

  //     <Route path="/even" element={<EventPage />} />
  //         <Route path="/Food" element={<Food />} />
  //          <Route path="/Festival" element={<Festival/>}/> 
  //          <Route path="/Sport" element={<Sport/>}/> 
  //          <Route path="/Payment" element={<Payment/>}/> 
           
  //          <Route path="/fes3" element={<Festival/>}/> 
  //          <Route path="/sport3" element={<Sport/>}/> 
  //          <Route path="/music3" element={<EventPage/>}/> 
  //          <Route path="/food3" element={<Food/>}/> 
           
  //          <Route path="/fes" element={<Festival/>}/> 
  //          <Route path="/sport1" element={<Sport/>}/> 
  //          <Route path="/music1" element={<EventPage/>}/> 
  //          <Route path="/food1" element={<Food/>}/> 
           
  //          <Route path="/fes2" element={<Festival/>}/> 
  //          <Route path="/sport2" element={<Sport/>}/> 
  //          <Route path="/music2" element={<EventPage/>}/> 
  //          <Route path="/food2" element={<Food/>}/> 
           
  //          <Route path="/shop" element={<Shop catagories={catagories} fetchCatagories={fetchCatagories} offers={offers} fetchOffers={fetchOffers} />} />
  //         <Route path="/products" element={<Products />} />
  //         <Route path="/shopInside/:id" element={<ShopInside nuts={nuts} fetchNuts={fetchNuts} snacks={snacks} fetchSnacks={fetchSnacks} sweetners={sweetners} fetchSweetners={fetchSweetners} fetchCartItems={fetchCart} cartItems={cart}/>}/>
  //         <Route path="/sign-in" element={<SignInPage />} />
  //         <Route path="/sign-up" element={<SignedOut />} />
  //         <Route path="/profile" element={<UserProfilePage />} />

  //         {/* <Route path="/" element={<Admin/>} /> */}
  //         <Route path="/addCatagory" element={<AddCatagory fetchCatagories={fetchCatagories} />} />
  //         <Route path="/updateCatagory/:id" element={<UpdateCatagory fetchCatagories={fetchCatagories} />} />
  //         <Route path="/ItemsCatagory/:id" element={<ItemsCatagory />} />
  //         <Route path="/addItemsCatagory" element={<AddItemsCatagory fetchItemsCatagory={fetchItemsCatagory} />} />
  //         <Route path="/updateItemsCatagory/:id" element={<UpdateItemsCatagory fetchCatagories={fetchCatagories} />} />


  //   </Routes>
  // </BrowserRouter> 
   <InsertSlip/>
  );
};
export default App;
