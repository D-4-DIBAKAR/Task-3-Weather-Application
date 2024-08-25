import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id:1,
            title:'Delhi'
        },
        {
            id:2,
            title:'Maharashtra'
        },
        {
            id:3,
            title:'Mumbai'
        },
        {
            id:4,
            title:'Chennai'
        },
        {
            id:5,
            title:'Pune'
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>
  {cities.map((city) => (
    <button
      key={city.id}
      className='text-white text-lg font-medium rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition ease-in-out duration-300 hover:bg-[#5570e667]'
      onClick={() => setQuery({ q: city.title })}
    >
      {city.title}
    </button>
  ))}
</div>

  )
}

export default TopButtons