"use client";

import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [locationImage, setLocationImage] = useState("");
  const [weather, setWeather] = useState({});

  const fetchImageLocation = async () => {
    try {
      const res = await axios.get(`/api/unsplash`);
      console.log(res.data);
      setLocationImage(res.data.results[0].urls.regular);
    } catch (error) {
      console.log("Error fetching unsplash image ");
    }
  };

  const fetchWeatherData = async () => {
    try {
      const res = await axios.get("/api/weather");
      setWeather(res.data);
    } catch (error) {
      console.log("Error fetching weather data");
    }
  };

  useEffect(() => {
    fetchImageLocation();
    fetchWeatherData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        locationImage,
        weather,
      }}
    >
      <GlobalContextUpdate.Provider
        value={{
          setLocationImage,
          setWeather,
        }}
      >
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalContextUpdate);
