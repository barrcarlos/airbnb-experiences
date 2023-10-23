import React from "react";
import Photo from "../assets/images/airbnb-collage.jpg"

export default function Section() {
  return (
    <section className="flex flex-col p-5">
      <img src={Photo} 
      className="w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w  self-center" alt="Grid Houses" />
      <h1 className="text-4xl font-semibold mb-4 pt-4"> Online Experiences</h1>
      <p className="text-justify mt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi! Quidem amet repellendus sapiente sit obcaecati necessitatibus eum nihil quo unde facilis natus dolore, dolores libero atque veritatis sunt dolorem?</p>
    </section>
  );
}
