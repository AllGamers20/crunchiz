const menuData = {
  Menudata: {
    categories: [
      {
        category: "Burgers",
        items: [
          {
            name: "Mushroom",
            price: "$4.7",
            description: "Meat, Sliced Onions, BBQ Sauce",
            image: "https://i.postimg.cc/JhTmkM5T/Mushroom.jpg",
          },
          {
            name: "Classic",
            price: "$4",
            description: "Meat, Sliced Onions, BBQ Sauce, Iceberg Lettuce, Tomatoes, Cocktail Sauce Pickles",
            image: "https://i.postimg.cc/Z5hV2042/Classic.jpg",
          },
          {
            name: "Lebanese",
            price: "$4",
            description: "Meat, Claslaw, Fries, Ketchup",
            image: "https://i.postimg.cc/VkpLzyZx/Lebanese.jpg",
          },
          {
            name: "Zinger",
            price: "$4.5",
            description: "Chicken, Pickles, Iceberg, Tomatoes, Cocktail Suace, Cheddar Slice",
            image: "https://i.postimg.cc/VsJsXrTX/Zinger.jpg",
          },
        ],
      },
      {
        category: "Hotdogs",
        items: [
          {
            name: "Hotdog",
            price: "$3.3",
            description: "Jalapeno, Cheddar Cheese, Mayonnaise, Ketchup, BBQ Sauce, Chips",
            image: "https://i.postimg.cc/x1399KJV/Hotdog1.jpg",
          },
          {
            name: "Hotdog",
            price: "$4.5",
            description: "Mushroom,Jalapeno, Cheddar Cheese, Mayonnaise, Ketchup, BBQ Sauce, Chips",
            image: "https://i.postimg.cc/MTvw0Nsz/Hotdog.jpg",
          },
        ],
      },
      {
        category: "Crispy Meals",
        items: [
          {
            name: "Crispy (5 Pieces)",
            price: "$7",
            description: "5 Pieces",
            image: "https://i.postimg.cc/GmCc0Mpj/Crispy.jpg",
          },
          {
            name: "Crispy (7 Pieces)",
            price: "$8.80",
            description: "7 Pieces",
            image: "https://i.postimg.cc/GmCc0Mpj/Crispy.jpg",
          },
          {
            name: "Crispy (9 Pieces)",
            price: "$11.10",
            description: "9 Pieces",
            image: "https://i.postimg.cc/GmCc0Mpj/Crispy.jpg",
          },
          {
            name: "Crispy (15 Pieces)",
            price: "$14.3",
            description: "15 Pieces",
            image: "https://i.postimg.cc/GmCc0Mpj/Crispy.jpg",
          },
        ],
      },
      {
        category: "Mexican Dishes",
        items: [
          {
            name: "Quesadilla",
            price: "$5.7",
            description: "Chicken, Cheddar Cheese, Avocado Sauce",
            image: "https://i.postimg.cc/hG4cvfTz/Quesadilla.jpg",
          },
          {
            name: "TacoChicken",
            price: "$2.9",
            description: "Chicken, Mozzarella, Garlic Sauce, Jalapenos",
            image: "https://i.postimg.cc/Nj1W1BB6/Tacochicken.jpg",
          },
          {
            name: "Fajita",
            price: "$4.5",
            description: "Onions, Mushrooms, Capsicums, Corn, Iceberg, Avocado Sauce",
            image: "https://i.postimg.cc/R0tCFPjN/Fajita.jpg",
          },
        ],
      },
      {
        category: "Wraps",
        items: [
          {
            name: "Twister",
            price: "$4.2",
            description: "Crispy Strips, Pepper Mayo, Iceberg Lettuce, Tomatoes",
            image: "https://i.postimg.cc/x86n7BbF/Twister.jpg",
          },
          {
            name: "Boneless",
            price: "$4.5",
            description: "Chicken, Ranch, Honey Mustard, BBQ Sauce, Chips",
            image: "https://i.postimg.cc/SN8yv0ms/Boneless.jpg",
          },
        ],
      },
      {
        category: "Appetisers",
        items: [
          {
            name: "Wings",
            price: "$3",
            description: "Crispy Strips, Pepper Mayo, Iceberg Lettuce, Tomatoes",
            image: "https://i.postimg.cc/m2Zzx26D/Wings.jpg",
          },
          {
            name: "Mozzarella Sticks",
            price: "$3.5",
            description: "5Pieces",
            image: "https://i.postimg.cc/Zn495Tbw/Mozarella-Sticks.jpg",
          },
        ],
      },
      {
        category: "Fries",
        items: [
          {
            name: "FriesPlate",
            price: "$1.8",
            description: "Fries, Cheese, Sour Cream",
            image: "https://i.postimg.cc/gkc0DH6T/Fries-Plate.jpg",
          },
          {
            name: "FriesPlate (Large)",
            price: "$3.3",
            description: "Fries, Cheese, Sour Cream (Large)",
            image: "https://i.postimg.cc/gkc0DH6T/Fries-Plate.jpg",
          },
          {
            name: "FriesSandwich",
            price: "$1.8",
            description: "Fries, Cheese, Sour Cream, Ketchup",
            image: "https://i.postimg.cc/MpvpkZ50/Friessandwich.jpg",
          },
        ],
      },
      {
        category: "Drinks",
        items: [
          {
            name: "IceTea",
            price: "$0.9",
            description: "Lemonade",
            image: "https://i.postimg.cc/brgwPs4g/IceTea.jpg",
          },
          {
            name: "Pepsi",
            price: "$0.9",
            description: "Pepsi",
            image: "https://i.postimg.cc/kXjghRQX/Pepsi.jpg",
          },
          {
            name: "7Up",
            price: "$0.9",
            description: "7 Up",
            image: "https://i.postimg.cc/1tc908RS/7Up.jpg",
          },
          {
            name: "Miranda",
            price: "$0.9",
            description: "Miranda",
            image: "https://i.postimg.cc/Y2z9YsjF/Miranda.jpg",
          },
        ],
      },
      {
        category: "Offers",
        items: [
          {
            name: "Offer1",
            price: "$10",
            description: "2 Boneless+Fries+Pepsi",
            image: "https://i.postimg.cc/VvSR4k8K/Offer1.jpg",
          },
          {
            name: "Offer2",
            price: "$9.5",
            description: "Boneless+Fries+Pepsi+Twister",
            image: "https://i.postimg.cc/QdWczyvd/Offer2.jpg",
          },
          {
            name: "Offer3",
            price: "$12",
            description: "2 Sandwishes+Fries+Pepsi+6 Wings+2 Mozzarella Stickes",
            image: "https://i.postimg.cc/QdWczyvd/Offer2.jpg",
          },
        ],
      },
      // Add more categories as needed
    ],
  },
};

export default menuData;
