import React, { useState } from "react";

export const DescriptionReview = ({ selectedProduct }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto max-w-[85%] mb-[100px]">
      <div className="flex gap-8 md:gap-14 my-10">
        <button
          className={`border px-4 py-6 font-inter text-black text-[20px] md:text-[24px] leading-none ${
            activeTab === "description" && "bg-gray-300"
          }`}
          onClick={() => handleTabClick("description")}
        >
          Description
        </button>
        <button
          className={`border px-4 py-6 font-inter text-black text-[20px] md:text-[24px] leading-none ${
            activeTab === "reviews" && "bg-gray-300"
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Review
        </button>
      </div>
      <div
        className={activeTab === "description" ? "" : "hidden"}
        id="description"
      >
        <h3 className="font-[600] font-rubik text-[16px] md:text-[20px] leading-[120%] mb-6">
          {selectedProduct?.name || "Product Name"}
        </h3>
        <ul className="list-disc">
          <li className="font-[400] font-rubik text-[16px] md:text-[20px] leading-[120%] mb-1">
            Tasting Profile:
            <p className="block">
              Indulge in a sensation of fullness and generosity as Martell Blue
              Swift takes you on a journey of exquisite flavors. This unique
              spirit drink opens with enticing notes of ginger and candied
              fruit, weaving a tapestry of warmth and complexity.
            </p>
          </li>
          <li className="font-[400] font-rubik text-[20px] leading-[120%] mb-1">
            Volume:
            <p className="block">
              Experience this extraordinary blend in a 75cl bottle, perfectly
              crafted to deliver a moment of unparalleled enjoyment.
            </p>
          </li>
          <li className="font-[400] font-rubik text-[20px] leading-[120%] mb-1">
            Craftsmanship:
            <p>
              Martell Blue Swift is a masterful creation, starting with a
              foundation of Cognac VSOP—a testament to Martell's commitment to
              quality and tradition. What sets it apart is the meticulous
              finishing process, where it rests in carefully selected Kentucky
              Bourbon casks. This dual aging process imparts a harmonious
              marriage of French and American craftsmanship.
            </p>
          </li>
          <li className="font-[400] font-rubik text-[20px] leading-[120%] mb-1">
            Alcohol Content:
            <p>
              Indulge responsibly with a 40% alcohol volume, ensuring a perfect
              balance of strength and sophistication in every sip. Tasting
              Notes: Ginger and Candied Fruit: The initial palate delights with
              a burst of ginger, complemented by the luscious sweetness of
              candied fruit. Toasted Oak: As the journey continues, distinctive
              hints of toasted oak from the Kentucky bourbon casks unfold,
              adding a layer of complexity and a subtle smokiness.
            </p>
          </li>
          <li className="font-[400] font-rubik text-[20px] leading-[120%] mb-1">
            Pairing Recommendations:
            <p>
              Martell Blue Swift is a versatile companion, perfect for sipping
              neat or elevating classic cocktails. Pair it with dark chocolate
              or enjoy it alongside a fine cigar for an indulgent experience.
            </p>
          </li>
          <li className="font-[400] font-rubik text-[20px] leading-[120%] mb-1">
            Packaging:
            <p>
              Martell Blue Swift is presented in an elegant bottle that echoes
              the spirit's sophistication. The label is adorned with subtle
              detailing, reflecting the craftsmanship within. The bottle is
              housed in a bespoke packaging, ensuring that every encounter with
              Martell Blue Swift is a moment of luxury.
            </p>
          </li>
        </ul>
      </div>
      <div className={activeTab === "reviews" ? "" : "hidden"} id="reviews">
        <p className="w-full px-4 border border-gray-400 font-inter text-black text-[20px] md:text-[24px] leading-none rounded-md py-20 flex items-center justify-center">
          No Reviews Yet.
        </p>
      </div>
    </div>
  );
};
