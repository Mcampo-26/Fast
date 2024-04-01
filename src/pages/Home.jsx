import React from "react";
import { Center } from "../components/Center";
import { Banner } from "../components/Banner";
import { BannerMarcas } from "../components/BannerMarcas";
import { BannerInformativo } from "../components/BannerInformativo";






export const Home = () => {
  return (
    <>
      <Center />
      <BannerInformativo/>
      <Banner />
      <BannerMarcas/>
     
     
    </>
  );
};