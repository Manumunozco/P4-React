import React from 'react';
import "./Menu.css"
import { AnimatedText } from '../components/AnimatedText';
import croissantImage from "../assets/croissant.jpg"
import muffinImage from "../assets/muffin.jpg"
import baguetteImage from "../assets/Baguette.jpg"
import paniniImage from "../assets/panini.jpg"
import ciabattaImage from "../assets/ciabatta.jpg"
import lemonImage from "../assets/lemon.jpg"
import donutsImage from "../assets/donuts.jpg"
import cakeImage from "../assets/cake.jpg"

export const MenuItem = ({ name, price, imageSrc }) => {
  return (
<div className="menu-item">
      <div className="item-container">
        <img src={imageSrc} alt={name} className="item-image" />
        <div className="item-details">
          <span className="item-name">{name}</span>
          <span className="item-price">${price}</span>
        </div>
      </div>
    </div>
  );
};

export const Menu = () => {
  const menuItems = [
    { name: 'Croissant', price: 10, imageSrc: croissantImage },
    { name: 'Muffins', price: 12, imageSrc: muffinImage },
    { name: 'Baguettes', price: 8, imageSrc: baguetteImage },
    { name: 'Panini', price: 8, imageSrc: paniniImage },
    { name: 'Ciabatta', price: 8, imageSrc: ciabattaImage},
    { name: 'Lemon pie', price: 8, imageSrc: lemonImage },
    { name: 'Donuts', price: 8, imageSrc: donutsImage },
    { name: 'BDY Cake', price: 25, imageSrc: cakeImage},
  ];

  return (
    <div className="menu">
        <div className="animated">
  <AnimatedText text="Our Products" className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
</div>
<div className="menu-grid">
      {menuItems.map((item, index) => (
        <div className="manuItemDos">
        <MenuItem key={index} name={item.name} price={item.price} imageSrc={item.imageSrc}
        />
        </div>
        
      ))}
    </div>
    </div>
  );
};
