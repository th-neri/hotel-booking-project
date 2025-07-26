import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData)

    return (
        <div className='py-28 md:pt-32 md:pb-35 px-4 md:px-16 lg:px-24 xl:px-32'>

            <Title title='My Bookings' subTtitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan
      your trips seamlessly with just a few clicks.' align='left' />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>Date & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>
                {bookings.map((booking) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                        {/* hotel details */}
                        <div className='flex flex-col md:flex-row'>
                            <img src={booking.room.images[0]} alt="hotel-img" className='min-md:w-44 rounded shadow object-cover' />
                            <div className='flex flex-col max-md:mt-3 min-md:ml-4 gap-1.5'>
                                <p className='font-inter text-2xl'>{booking.hotel.name}
                                    <span className='font-inter text-sm'> ({booking.room.roomType})</span>
                                </p>
                                <div className='flex items-center text-sm text-gray-500 gap-1'>
                                    <img src={assets.locationIcon} alt="location-icon" />
                                    <span className=''>{booking.hotel.address}</span>
                                </div>
                                <div className='flex items-center text-sm text-gray-500 gap-1'>
                                    <img src={assets.guestsIcon} alt="guests-icon" />
                                    <span className=''>Guests: {booking.guests}</span>
                                </div>
                                <p className='text-base'>Total: ${booking.totalPrice}</p>
                            </div>
                        </div>
                        {/* date & timings */}
                        <div></div>
                        {/* payment status */}
                        <div></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings
