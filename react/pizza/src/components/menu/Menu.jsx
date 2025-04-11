import React from 'react';

const menuItems = [
  {
    name: 'Margherita Pizza',
    price: '₹199',
    image: 'https://ortensiablutraveladventures.com/wp-content/uploads/2021/06/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash-1.jpg',
  },
  {
    name: 'Pepperoni Feast',
    price: '₹299',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg',
  },
  {
    name: 'BBQ Chicken Pizza',
    price: '₹349',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iAOZL2jApMGaIX04s7_Ojb9KFDaNuhoPKQ&s',
  },
  {
    name: 'Veggie Supreme',
    price: '₹249',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLabHCgyK_q1WcBUU_vGfEIZnPj_6lJ9-Ig&s',
  },
];

const Menu = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Menu</h2>
        <p className="text-gray-600 text-lg">Delicious pizzas made with fresh ingredients 🍕</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-red-600 font-bold mt-2">{item.price}</p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl text-sm font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
