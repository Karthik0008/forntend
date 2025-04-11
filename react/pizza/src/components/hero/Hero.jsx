import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Fresh, Hot & Delicious <span className="text-red-600">Pizza</span> Delivered to You 🍕
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Craving something cheesy and crispy? We’ve got the best pizzas in town with fast delivery and unbeatable flavors.
          </p>
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-md transition duration-300"
          >
            Order Now
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1601925261954-6ec2e6bfeb9a?auto=format&fit=crop&w=800&q=80"
            alt="Pizza"
            className="w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
