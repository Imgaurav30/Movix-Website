import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { fetchDataApi } from "./utils/api";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import TermsOfUse from "./pages/termsofuse/TermsOfUse";
const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      // console.log(url)
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        {/* <Route path="/explore/:mediaType" element={<Explore />} /> */}
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
