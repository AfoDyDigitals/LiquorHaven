// StateDropdown.js
import React, { useState } from "react";

const StateDropdown = () => {
  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory (FCT)",
  ];

  const [selectedState, setSelectedState] = useState("");
  const [address, setAddress] = useState("");

  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const verifyAddress = () => {
    const isAddressValid = address
      .toLowerCase()
      .includes(selectedState.toLowerCase());
    return isAddressValid
      ? "Address is valid!"
      : "Address does not match the selected state!";
  };

  return (
    <div className="max-w-md mt-2 py-6   rounded-md">
      <label
        htmlFor="stateDropdown"
        className="block text-[16px] md:text-[20px] leading-[120%] font-medium text-black "
      >
        Choose your Location
      </label>
      <select
        id="stateDropdown"
        value={selectedState}
        onChange={handleStateSelect}
        className="mt-1 p-2 border rounded-md w-full"
      >
        <option value="">Select a state</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedState && (
        <div className="mt-4">
          <label
            htmlFor="addressInput"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your address:
          </label>
          <input
            type="text"
            id="addressInput"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
            className="mt-1 p-2 border rounded-md w-full"
          />

          <p className="mt-2 text-sm text-gray-500">{verifyAddress()}</p>
        </div>
      )}
    </div>
  );
};

export default StateDropdown;
