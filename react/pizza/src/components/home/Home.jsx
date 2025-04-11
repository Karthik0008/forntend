import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1601925261954-6ec2e6bfeb9a?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center min-h-[80vh] flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"></div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to <span className="text-red-500">PizzaHub</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Your one-stop destination for the cheesiest, freshest, and most delicious pizzas in town.
          </p>
       <Link to="/menu" ><a
  
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Explore Menu
          </a></Link>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section id="menu" className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Pizzas</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Pizza Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://ortensiablutraveladventures.com/wp-content/uploads/2021/06/aurelien-lemasson-theobald-x00CzBt4Dfk-unsplash-1.jpg"
                alt="Margherita Pizza"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Margherita Pizza</h3>
                <p className="text-gray-600 mt-2">
                  Classic delight with 100% real mozzarella cheese and fresh basil.
                </p>
                <div className="mt-4">
                  <span className="text-red-500 font-bold text-lg">₹199</span>
                </div>
              </div>
            </div>

            {/* Pizza Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://www.cookingclassy.com/wp-content/uploads/2014/07/pepperoni-pizza6+srgb..jpg"
                alt="Pepperoni Pizza"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Pepperoni Pizza</h3>
                <p className="text-gray-600 mt-2">
                  Loaded with pepperoni slices and extra cheese for a meaty delight.
                </p>
                <div className="mt-4">
                  <span className="text-red-500 font-bold text-lg">₹250</span>
                </div>
              </div>
            </div>

            {/* Pizza Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaLabHCgyK_q1WcBUU_vGfEIZnPj_6lJ9-Ig&s"
                alt="Veggie Supreme Pizza"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Veggie Supreme Pizza</h3>
                <p className="text-gray-600 mt-2">
                  A colorful mix of bell peppers, olives, onions, and tomatoes.
                </p>
                <div className="mt-4">
                  <span className="text-red-500 font-bold text-lg"></span>
                </div>
              </div>
            </div>

            {/* Add more pizza cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
