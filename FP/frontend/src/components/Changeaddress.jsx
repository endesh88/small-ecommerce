import React, { useState } from 'react'

const Changeaddress = ({ setAddress, setIsmodalopen }) => {
  const [newAddress, setnewAddress] = useState("")
  const onClose = () => {
    setAddress(newAddress)
    setIsmodalopen(false)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter address"
        className="border p-2 w-full mb-4"
        value={newAddress}
        onChange={(e) => setnewAddress(e.target.value)}
      />
      <div className='flex justify-end'>
        <button className="bg-gray-600 text-white py-2 px-4 rounded mr-2" onClick={onClose}>Save Address</button>
        <button className='bg-blue-600 text-white py-2 px-4 rounded' onClick={()=>setIsmodalopen(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default Changeaddress