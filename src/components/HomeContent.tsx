

import React from 'react';

const HomeContent = () => {
  
  return (
    <section className="hero h-screen flex items-center bg-cover bg-center"
     style={{ backgroundImage: "url('/image/bgimage.jpg')" }}>
      <div className="pl-0 md:pl-16 text-black text-center">
        <h1 className="text-4xl font-bold drop-shadow-md" > Welcome to Floral Fusion</h1>
        <p className="text-2xl mt-4">"The flower that blooms in adversity is the rarest and most beautiful of all".</p>
        <button className="mt-6 px-6 py-3 bg-pink-400 hover:bg-pink-500 rounded-md font-bold">Explore Now</button>
      </div>
    </section>
  );
};

export default HomeContent;