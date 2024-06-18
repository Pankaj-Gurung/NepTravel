import React from "react";
import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
        Most Popular Destinations
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img1}
          title="Kathmandu, Capital City"
          para="Kathmandu, Capital City of Nepal holds one of the most developed places in Nepal."
        />
        <DestinationCard
          img={img2}
          title="Ilam"
          para="Ilam, widely famous for the tea garden is one of the most beautiful place to visit in Nepal."
        />
        <DestinationCard
          img={img3}
          title="Pokhara"
          para="Explore the lake side view, the Stupa and the wide corners of Pokhara."
        />
      </div>
    </div>
  );
};

export default Destination;
