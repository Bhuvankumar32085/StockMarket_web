import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-3 p-md-5 mb-5'>
            <div className='row text-center'>
               <h1 className='mt-4 mt-md-5 fs-3 fs-md-1'>Open a Zerodha account</h1>
               <p className='mb-4 mb-md-5 fs-6 fs-md-5'>
                 Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.
               </p>
               <button 
                 className='p-2 btn btn-primary fs-6 fs-md-5' 
                 style={{width:"60%", maxWidth:"300px", margin:'0 auto'}}>
                 Sign up Now
               </button>
            </div>
        </div>
     );
}

export default OpenAccount;
