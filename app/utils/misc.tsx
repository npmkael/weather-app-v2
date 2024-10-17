import moment from "moment";

export const kelvinToCelcius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

export const unixToDay = (unix: number) => {
  return moment.unix(unix).format("dddd, MMMM D, YYYY");
};
