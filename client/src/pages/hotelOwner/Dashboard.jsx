import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div>
      <Title title='Dashboard' subTtitle='Monitor your room listings, track booking and analyze revenue-all in one place. Stay update with real-time insights 
      to ensure smooth operations.' align='left' font='outfit' />
      <div className='flex gap-4 my-8'>
        {/* total bookings */}
        <div className='flex bg-primary/3 border border-primary/10 rounded p-4 pr-8'>
          <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>
        {/* total revenue */}
        <div className='flex bg-primary/3 border border-primary/10 rounded p-4 pr-8'>
          <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>
      {/* recent bookings */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-full'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
            </tr>
          </thead>

          <tbody>
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  {item.user.username}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                  {item.room.roomType}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  $ {item.totalPrice}
                </td>
                <td className='flex py-3 px-4 border-t border-gray-300 '>
                  <button className={`py-3 px-4 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
