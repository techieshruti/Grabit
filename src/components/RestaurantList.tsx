import React from 'react'

const RestaurantList = () => {
  return (
    <section className='flex justify-center'>
        <div className='w-3/4 bg-amber-700'>
            <div className='w-60 h-70 bg-blue-300 rounded-2xl'>
                <img className='bg-amber-300 w-full h-1/2 rounded-2xl' src="image" alt="img" />
                <h1 className='bg-gray-500'>title</h1>
                <p>rating</p>
                <p>cusines</p>
                <p>places</p>
            </div>
        </div>
    </section>
  )
}

export default RestaurantList