import React, { useEffect, useState } from "react";
import Shop from "./pages/shop/Shop.jsx";
import FoodCatagory from "./components/Organic Items/Content/FoodCatagory.jsx";
import { Route, Router, Routes } from "react-router";
import ShopInside from "./pages/shop/ShopInside.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";

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
import SpaHomepage from "./pages/SpaHomepage.jsx";
import AyurvedicPage from "./pages/AyurvedicSPAM.jsx";
import ClassicalPage from "./pages/AyurvedicSPAC.jsx";
import MenuEditPage from "./pages/SpaMenuEdit.jsx";
import ClassicalEditPage from "./pages/ClassicalSpaEdit.jsx";
import SpaAppointmentPage from "./pages/SpaServiceAppointment.jsx";
import ServiceConfirmPage from "./pages/SpaServiceConfirm.jsx";
import SPAADMINHOMEPAGE from "./pages/SpaAdminHomepage.jsx";
import SPAREPORTGENERATIONPAGE from "./pages/SpaReportGeneration.jsx";

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
    <BrowserRouter>
    <Routes>
         
    <Route path="/" element={<Homepagee />} />
    <Route path="/checkout/card" element={<CardPayment />} />
    <Route path="/checkout/slip" element={<UploadSlip />} />
    <Route path="/success" element={<PaymentSuccess />} />
    <Route path="/uploaded" element={<SlipUploaded />} /> 
    <Route path="/home" element={<Homepagee />} /> 
    <Route path="/homee" element={<Homepagee />} /> 
    <Route path="/pay" element={<TotalBill />} /> 
    <Route path="/SPAhome" element={<SpaHomepage />} /> 

     {/* User-side routes */}
     <Route path="/" element={<SpaHomepage />} />
      <Route path="/ayurvedic-spa-menu" element={<AyurvedicPage />} />
      <Route path="/ayurvedic-spa-classical" element={<ClassicalPage />} />
      <Route path="/appoitment" element={<SpaAppointmentPage />} />
      <Route path="/service-confirm" element={<ServiceConfirmPage />} />

      {/* Admin-side routes */}
      <Route path="/admin" element={<SPAADMINHOMEPAGE />} />
      <Route path="/spa-menu-edit-service" element={<MenuEditPage />} />
      <Route path="/classical-spa-rituals-edit-service" element={<ClassicalEditPage />} />
      <Route path="/generate-report" element={<SPAREPORTGENERATIONPAGE />} />


    </Routes>
  </BrowserRouter> 
   
  );
};
export default App;
