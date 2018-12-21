let data = {
    gallery: [
      
      {
        img: "./img/cheese.jpg",
        name: 'Cheese Pizza',
        calories: '250 cal',
        price: 18.99 
      },
      {
        img: "./img/pepperoni.jpg",
        name: 'Pepperoni Pizza',
        calories: '340 cal',
        price: 23.99 
      },
      {
        img: "./img/veggie.jpg",
        name: 'Grilled Veggie Pizza',
        calories: '280 cal',
        price: 30.99 
      },
      {
        img: "./img/hawaiian.jpg",
        name: 'Hawaiian Pizza',
        calories: '360 cal',
        price: 27.99 
      },
      {
        img: "./img/mushroom.jpg",
        name: 'Double-Mushroom Pizza',
        calories: '320 cal',
        price: 25.99 
      }


    ]
  };

data.getGallery = function() {
  return this.gallery
};

data.getData = function() {
  return this;
}

export default data;


