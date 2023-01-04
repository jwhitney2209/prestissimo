import React, { useState } from 'react'
import UniformForm from '../components/UniformForm';
import AssetForm from '../components/AssetForm';
import LibraryForm from '../components/LibraryForm';

const AddInventory = () => {
  const itemOptions = ["Uniform", "Asset", "Music Library"]
  const [newItem, setNewItem] = useState('');


  return (
    <div className="max-w-[1240px] w-full mx-auto px-8 flex flex-col m-6">
      <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5 sm:pb-5 pb-5">
        <label
          htmlFor="person-type"
          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
        >
          Person Type
        </label>
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          <select
            id="person-type"
            name="person-type"
            onChange={(e) => setNewItem(e.target.value)}
            defaultValue="Select One"
            className="block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
          >
            <option disabled>Select One</option>
            {itemOptions.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      {(function() {
        switch(newItem) {
          case 'Uniform':
            return <UniformForm />;
          case 'Asset':
            return <AssetForm />;
          case 'Music Library':
            return <LibraryForm />;
          default:
            return null; 
        }
      })()}
      

    </div>
  )
}

export default AddInventory