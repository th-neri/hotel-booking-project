import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  })
  return (
    <form className=''>
      <Title title='Add Room' subTtitle='Fill in the details carefully and accurate room details, pricing and amenities, to enhance the user booking experience.'
        align='left' font='outfit' />
      {/* upload area for images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 flex-wrap sm:flex my-2 gap-4 '>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img className='max-h-13 cursor-pointer opacity-80' src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
            <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e => setImages({ ...images, [key]: e.target.files[0] })} />
          </label>
        ))}
      </div>
      <div className='flex max-sm:flex-col w-full mt-4 sm:gap-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select value={inputs.roomType} onChange={e => setInputs({ ...inputs, roomType: e.target.value })} className='border border-gray-300 opacity-70 p-2 mt-1 rounded w-full'>
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div className=''>
          <p className='text-gray-800 mt-4'>Price <span className='text-xs'>/night</span></p>
          <input type="number" placeholder='0' className='border border-gray-300 w-24 p-2 mt-1 rounded' value={inputs.pricePerNight}
            onChange={e => setInputs({ ...inputs, pricePerNight: e.target.value })} />
        </div>
      </div>
      <p className='text-gray-800 mt-4'></p>
      <div className='flex flex-col flex-wrap mt-1 test-gray-400 max-w-sm'>
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index}>
            <input type="checkbox" id={`amenity${index + 1}`} checked={inputs.amenities[amenity]} onChange={() => setInputs({
              ...inputs, amenities: {
                ...inputs.amenities,
                [amenity]: !inputs.amenities[amenity]
              }
            })} />
            <label htmlFor={`amenity${index + 1}`}> {amenity}</label>
          </div>
        ))}
      </div>
      <button className='bg-primary text-white py-2 px-8 mt-8 rounded cursor-pointer'>Add Room</button>
    </form>
  )
}

export default AddRoom
