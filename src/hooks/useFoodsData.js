import { useEffect, useState } from "react";


const useFoodsData = () => {
    const [foods,setFoods]=useState([])

    const data=[
        {
          key: 1,
          name: "Beef steak",
          img: " https://i.ibb.co/tKY7XNk/lunch1.png",
          deshType: "lunch",
          details: "How we dream about our future.",
          price: 15.99
        },
        {
          key: 2,
          name: "Honey-soy-glazed salmon with peppers",
          img: "https://i.ibb.co/XtCFBwb/lunch2.png",
          deshType: "lunch",
          details: "How we dream about our future.",
          price: 7.99
        },
        {
          key: 3,
          name: "Tarragon-Rubbed-Salmon",
          img: "https://i.ibb.co/jbcNBcZ/lunch3.png",
          deshType: "lunch",
          details: "How we dream about our future.",
          price: 6.99
        },
        {
          key: 4,
          name: "Indian-Lunch",
          img: "https://i.ibb.co/yX3w7Fw/lunch4.png",
          deshType: "lunch",
          details: "How we dream about our future.",
          price: 8.99
        },
        {
          key: 5,
          name: "Fried Chicken Bento",
          img: "https://i.ibb.co/qDBDJ69/lunch5.png",
          deshType: "lunch",
          details: "How we dream about our future.",
          price: 9.99
        },
        {
          key: 6,
          name: "Healthy Meal Plan",
          img: "https://i.ibb.co/tPc46ZL/lunch6.png",
          deshType: "lunch",
          details: "How we dream about our future.",
          price: 23.99
        },
        {
          key: 7,
          name: "Eggs Benedict",
          img: "https://i.ibb.co/DLqVXpZ/breakfast1.png",
          deshType: "breakfast",
          details: "How we dream about our future.",
          price: 8.99
        },
        {
          key: 8,
          name: "Breakfast sendwish",
          img: "https://i.ibb.co/pK0YN9t/breakfast2.png",
          deshType: "breakfast",
          details: "How we dream about our future.",
          price: 9.99
        },
        {
          key: 9,
          name: "baked Chiken",
          img: "https://i.ibb.co/h1vvWnq/breakfast3.png",
          deshType: "breakfast",
          details: "How we dream about our future.",
          price: 10.99
        },
        {
          key: 10,
          name: "Bagel and cream cheese",
          img: "https://i.ibb.co/mJ6Fnw0/breakfast4.png",
          deshType: "breakfast",
          details: "How we dream about our future.",
          price: 6.99
        },
        {
          key: 11,
          name: "Full Breakfast Fried Egg Toast Brunch",
          img: "https://i.ibb.co/ykb1Rxb/breakfast5.png",
          deshType: "breakfast",
          details: "How we dream about our future.",
          price: 3.99
        },
        {
          key: 12,
          name: "Toast Croissant fried Egg",
          img: "https://i.ibb.co/2hBvTdb/breakfast6.png",
          deshType: "breakfast",
          details: "How we dream about our future.",
          price: 19.99
        },
        {
          key: 13,
          name: "Baked Chiken",
          img: "https://i.ibb.co/mtBfYSW/dinner1.png",
          deshType: "dinner",
          details: "How we dream about our future.",
          price: 9.99
        },
        {
          key: 14,
          name: "Lemony Salmon Piccata",
          img: "https://i.ibb.co/H75T3sc/dinner2.png",
          deshType: "dinner",
          details: "How we dream about our future.",
          price: 10.99
        },
        {
          key: 15,
          name: "Garlic Butter Baked Salmon",
          img: "https://i.ibb.co/gRWT31p/dinner3.png",
          deshType: "dinner",
          details: "How we dream about our future.",
          price: 6.99
        },
        {
          key: 16,
          name: "French fries with Cheese",
          img: "https://i.ibb.co/ZhzxFwQ/dinner4.png",
          deshType: "dinner",
          details: "How we dream about our future.",
          price: 8.99
        },
        {
          key: 17,
          name: "Pork Tenderloin With quinoa Pilaf",
          img: "https://i.ibb.co/dfqtNMK/dinner5.png",
          deshType: "dinner",
          details: "How we dream about our future.",
          price: 12.99
        },
        {
          key: 18,
          name: "Salmon with Grapefruit Lentil Salad",
          img: "https://i.ibb.co/Wk5Fvxm/dinner6.png",
          deshType: "dinner",
          details: "How we dream about our future.",
          price: 9.99
        }
      ]
      

      useEffect(()=>{
        setFoods(data)
      },[])
    return {
        foods,
        setFoods
    }
};

export default useFoodsData;