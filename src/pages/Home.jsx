import React from "react";
import { Center } from "../components/Center";
import { Banner } from "../components/Banner";
import { BannerMarcas } from "../components/BannerMarcas";
import { BannerInformativo } from "../components/BannerInformativo";
import { ReservaTurnos } from "../components/ReservaTurnos";
import { Carrusel } from "../components/Carrusel";






export const Home = () => {
  return (
    <>
      <Center />
      <Carrusel/>
      <BannerInformativo/>
      <Banner />
      <BannerMarcas/>
      <ReservaTurnos/>
     
     
    </>
  );
};