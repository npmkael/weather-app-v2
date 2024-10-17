"use client";

import React from "react";
import {
  cloud,
  cloudy,
  crosshair,
  drizzle,
  fog,
  mapPin,
  rain,
  search,
  snow,
  sun,
} from "../utils/icons";
import { useGlobalContext } from "../context/globalContext";
import { kelvinToCelcius, unixToDay } from "../utils/misc";
import SunIcon from "./Icons/SunIcon";
import RainIcon from "./Icons/RainIcon";

const Sidebar = () => {
  const { locationImage, weather } = useGlobalContext();
  console.log(useGlobalContext());

  const { main, name, dt } = weather;

  if (!weather || !main) {
    return <h1>Loading...</h1>;
  }

  const { main: weatherStatus, description } = weather.weather[0];

  const { temp } = main;

  function checkWeatherStatus(weatherStatus: string) {
    switch (weatherStatus) {
      case "Clear":
        return sun;
      case "Clouds":
        return cloud;
      case "Thunderstorm":
        return cloudy;
      case "Drizzle":
        return drizzle;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Atmosphere":
        return fog;
    }
  }

  return (
    <div className="bg-[#1089FF] w-[25%] absolute top-0 bottom-0 shadow-sm px-12 py-12 flex flex-col backdrop-blur-sm gap-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-center flex-1">
          {search}{" "}
          <input
            type="text"
            placeholder="Search cities here..."
            className="flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 outline-0"
          />
        </div>
        <div className="flex items-center">
          <button className="px-2 py-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors">
            {crosshair}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-8 border-b">
        <div className="flex items-center justify-center gap-3">
          {mapPin}
          <h2 className="text-xl text-white">{name}</h2>
        </div>
        <RainIcon width="160px" height="160px" />
        <h2 className="font-semibold text-[5.5rem] lg:text-[7rem] text-white">
          {kelvinToCelcius(temp)}&deg;
        </h2>
        <p className="text-[2rem] text-white">{weatherStatus}</p>
        <p className="text-white text-[1rem]">{unixToDay(dt)}</p>
      </div>
      <div>
        <div className="w-full bg-black h-[10rem] rounded-3xl relative shadow-md mt-5">
          <h2 className="absolute text-white z-10 text-xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {name}
          </h2>
          {locationImage && (
            <img
              src={locationImage}
              alt="Location"
              className="h-full w-full bg-opacity-5 rounded-3xl opacity-50 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
