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

  const isSaveButtonDisabled = !selectedState || !address;

  const handleSaveAddress = () => {
    if (isSaveButtonDisabled) {
      alert("Please select a state and enter an address before saving.");
      return;
    }

    // Save to local storage
    localStorage.setItem("savedAddress", address);

    alert("Delivery address saved successfully!");
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
        <div className="mt-4 w-full">
          <label
            htmlFor="addressInput"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your address:
          </label>
          <input
            type=""
            id="addressInput"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
            required
            className="mt-1 p-2 border w-full  md:max-w-[28rem]"
          />

          <p className="mt-2 text-sm text-gray-500">{verifyAddress()}</p>
        </div>
      )}
      <button
        className={`mt-3 text-[#B85652] py-1 px-2 hover:border-[2px] hover:border-[#B85652] hover:rounded-sm ${
          isSaveButtonDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={handleSaveAddress}
        disabled={isSaveButtonDisabled}
      >
        Save Address
      </button>
    </div>
  );
};

export default StateDropdown;
