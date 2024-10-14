import React from "react";
import MultiplePizzas from "../assets/vegan.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Slice Delight – where every slice is a celebration of flavor and craftsmanship!

At Slice Delight, we believe that pizza is more than just food – it’s an experience. Founded with a passion for bringing people together over great food, we have set out on a mission to craft the most delicious, authentic pizzas using the freshest ingredients and traditional techniques.

Our Story
Slice Delight was born out of a love for pizza and a desire to create a space where foodies and families alike could enjoy high-quality, 
handcrafted pizza in a cozy and welcoming environment. From our humble beginnings in India, we’ve grown into a local favorite, known for our unique flavor combinations, attention to detail, and dedication to serving only the best.

What Makes Us Different?
Fresh, Local Ingredients: We source our ingredients from trusted local suppliers, ensuring that every bite is bursting with flavor and freshness. Our dough is made fresh daily, and our toppings are carefully selected to guarantee quality and taste.

Authentic Recipes: Our pizzas are inspired by traditional Italian techniques but with a modern twist. Whether it’s a classic Margherita or one of our gourmet specialties, each pizza is prepared with love and expertise.

Community-Focused: Slice Delight is more than just a pizzeria; it’s a part of the community. We pride ourselves on being a gathering spot where friends, families, and pizza enthusiasts can share special moments together. We regularly support local events and charities, giving back to the neighborhood that’s given us so much.

Diverse Menu: Whether you’re a fan of classic flavors or looking to try something new, our menu has something for everyone. From vegetarian options to gluten-free crusts, we cater to all dietary needs without compromising on taste.

Our Mission
Our mission at Slice Delight is simple: to create unforgettable pizza experiences that delight every customer. We are committed to delivering not just a meal, but a memorable dining experience that keeps you coming back for more.

Thank you for choosing Slice Delight – where the perfect pizza is just a slice away!


        </p>
      </div>
    </div>
  );
}

export default About;
