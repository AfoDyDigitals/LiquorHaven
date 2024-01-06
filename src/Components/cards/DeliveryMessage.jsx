import React, { useEffect, useState } from "react";

const DeliveryMessage = () => {
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    const calculateDeliveryDate = () => {
      const currentDate = new Date();
      const deliveryDate = new Date(currentDate);

      // Add 3 days
      deliveryDate.setDate(currentDate.getDate() + 3);

      // Check if the delivery date is a weekend (Saturday or Sunday)
      if (deliveryDate.getDay() === 0) {
        // If Sunday, add 1 more day to move to Monday
        deliveryDate.setDate(deliveryDate.getDate() + 1);
      } else if (deliveryDate.getDay() === 6) {
        // If Saturday, add 2 more days to move to Monday
        deliveryDate.setDate(deliveryDate.getDate() + 2);
      }

      // Format the date as "ddth Month yyyy"
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formattedDate = deliveryDate.toLocaleDateString("en-US", options);

      setDeliveryDate(formattedDate);
    };

    calculateDeliveryDate();
  }, []);

  return (
    <p className="mt-[20px] text-[13px] font-[400] leading-[120%] font-rubik">
      Arriving at your address on {deliveryDate} when you order within the next
      24 hours
    </p>
  );
};

export default DeliveryMessage;
