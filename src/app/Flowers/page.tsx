import React from 'react'

const Flowers = () => {
const flowersData =[

{ id : 1 , name:"Rose" ,price: "1000" , description : "Sign of Love" , image:"/image/rose.jpg" },
{ id : 2 , name:"Tulips" ,price: "2000" , description : "Sign of Infactuation" , image:"/image/tulips.jpg" },
{ id : 3 , name:"Sunflower" ,price: "2000" , description : "Sign of Light" , image:"/image/sunflower2.jpg" },
{ id : 4 , name:"Lily" ,price: "3000" , description : "Sign of Peace" , image:"/image/lily1.jpg" },
{ id : 5 , name:"Baby breath" ,price: "1000" , description : "Sign of Enhancement" , image:"/image/babybreaths.jpg" },
{ id : 6 , name:"Chrysanthemum" ,price: "5000" , description : "Sign of Purity" , image:"/image/chrysanthemum.jpg" },
]

return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10"'>
        {flowersData.map((Flowers) => (
<div key={Flowers.id} className='flowers-card bg-white p-5 rounded-md shadow-md text-center"'>
<img src = {Flowers.image} alt={Flowers.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"></img>
<h3  className="mt-4 text-2xl font-bold">{Flowers.name}</h3>
<p>{Flowers.description}</p>
<div className=' text-black text-xl font-semibold mt-2'> RS: {Flowers.price}</div>
<button  className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md">Shop Now</button>
</div>

        ))}
      </div>
    </div>
  )
}

export default Flowers
