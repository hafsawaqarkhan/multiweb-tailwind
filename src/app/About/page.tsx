import React from 'react'

function About() {
  return (
    <div>
      <section className=' h-screen flex items-center justify-start bg-cover bg-center text-black px-10' style={{backgroundImage:"url(/image/aboutbg.jpg)"}}>
        <div className=' -60 p-8 rounded-md max-w-lg'>
            <h2 className='text-4xl font-bold mb-4'>About Us </h2>
            <p>Flower shops are the home to many different types and variety of flowers. On top of that, flower shops are retailers that create unique
                 design and sell floral arrangements to individuals and arrange beautiful décor for large events.</p>
        
        </div>
      </section>
    </div>
  )
}

export default About
