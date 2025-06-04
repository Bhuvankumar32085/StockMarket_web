import React from 'react';

function Hero() {
    return ( 
        <div className='container p-4 p-md-5 mb-5 mt-5'>
            <div className='row text-center'>
               <img 
                 src='media/images/homeHero.png' 
                 alt='Hero Image' 
                 className='mb-4 mx-auto img-fluid' 
                 style={{ maxHeight: "500px", width: "auto" }}
               />
               <h1 className='mt-3 mt-md-5'>Invest in everything</h1>
               <p className='px-3 px-md-5'>
                 Online platform to invest in stock, derivatives, mutual funds, and more
               </p>
               <button 
                 className='p-2 btn btn-primary fs-5 mx-auto d-block' 
                 style={{ maxWidth: "300px", width:"80%" }}
               >
                 Signup Now
               </button>
            </div>
        </div>
     );
}

export default Hero;
