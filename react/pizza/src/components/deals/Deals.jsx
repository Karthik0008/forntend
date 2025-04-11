import React from 'react';

const deals = [
  {
    title: 'Buy 1 Get 1 Free',
    description: 'Order any large pizza and get another absolutely free!',
    image: 'https://cdn.uengage.io/uploads/5/image-894677-1715678908.png',
  },
  {
    title: 'Flat ₹100 Off',
    description: 'Get ₹100 off on orders above ₹499. Use code: HOT100',
    image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Family Combo ₹599',
    description: '2 medium pizzas + 1 garlic bread + 1 drink. Perfect for 4!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIQS3RHjIjRU5dyZD_q4r6CS18goZjHprLMA&s',
  },
];

const Deals = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Hot Deals 🔥</h2>
        <p className="text-gray-600 text-lg">Save more on your favorite pizzas with our latest offers!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-red-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold text-red-600">{deal.title}</h3>
              <p className="text-gray-700 mt-2">{deal.description}</p>
              <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl text-sm font-medium">
                Grab Deal
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;
