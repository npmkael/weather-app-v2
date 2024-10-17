import Image from "next/image";
import rainy from "../../public/rainy.png";
import heavyRain from "../../public/heavy-rain.svg";

export const rainyImage = (
  <Image src={rainy} alt="rainy" className="drop-shadow-lg" />
);

export const heavyRainImage = (
  <Image src={heavyRain} alt="heavy rain" width={150} height={150} />
);
