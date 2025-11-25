import React from 'react'

const RestaurantList = () => {
  return (
    <section className='flex justify-center'>
        <div className='w-3/4 bg-amber-700'>
            <div className='w-60 h-70 bg-blue-300 rounded-2xl'>
              {/* image */}
              <div className='bg-amber-300 w-full h-1/2'>
                <img src="image" alt="img" />
              </div>
              {/* details */}
                <div>
                  <h1 className='bg-gray-500 text-xl font-bold py-2'>title</h1>
                <p>rating</p>
                <p>cusines</p>
                <p>places</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RestaurantList