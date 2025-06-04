import React from 'react';

function NotFoundPage() {
    return ( 
        <div className='container p-5 mt-5'>
           <div className='row text-center'>
              <div className='col'>
                <h1>404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exists</p>
              </div>
           </div>
        </div>
     );
}

export default NotFoundPage;