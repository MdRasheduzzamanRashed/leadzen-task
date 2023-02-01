import React, { useState } from "react";

const DataCard = ({ d }) => {
  const [visible, setVisible] = useState(false);
  const handleVisibility = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  return (
    <div className="w-full shadow-lg px-5 py-9 bg-white rounded-2xl">
      <div className="grid md:grid-cols-5 gap-3 items-center">
        <div>
          <p>{d.company.name}</p>
        </div>
        <div className="">
          <h4 className=" uppercase font-bold">Contact</h4>
          <p>{d.name}</p>
        </div>
        <div className="">
          <h4 className=" uppercase font-bold">city</h4>
          <p>{d.address.city}</p>
        </div>
        <div className="">
          <h4 className=" uppercase font-bold">Street</h4>
          <p>{d.address.street}</p>
        </div>
        <div className=" text-end">
          <button
            className="btn bg-red-500 btn-xs md:btn-sm rounded-3xl border-0"
            onClick={() => handleVisibility()}
          >
            View Details
          </button>
        </div>
      </div>

      {visible && (
        <div className="bg-base-100 shadow-lg p-3 rounded-lg mt-10">
          <h4 className="font-semibold">Description</h4>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae
            itaque temporibus distinctio excepturi aut. Ad sunt, ducimus
            architecto, magni quia corrupti deleniti sapiente unde aut,
            voluptates voluptatibus repellat vitae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quia vitae itaque temporibus
            distinctio excepturi aut. Ad sunt, ducimus architecto, magni quia
            corrupti deleniti sapiente unde aut, voluptates voluptatibus
            repellat vitae.
          </p>
          <div className="grid md:grid-cols-2 mt-3 gap-3">
            <div>
              <h4 className="font-semibold">Contact Person</h4>
              <p>{d.name}</p>
              <h4 className="font-semibold">Email</h4>
              <p>{d.email}</p>
              <h4 className="font-semibold">Phone</h4>
              <p>{d.phone}</p>
              <h4 className="font-semibold">Company Name</h4>
              <p>{d.company.name}</p>
            </div>
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>{d.address.suite}</p>
              <h4 className="font-semibold">City</h4>
              <p>{d.address.city}</p>
              <h4 className="font-semibold">Street</h4>
              <p>{d.address.street}</p>
              <h4 className="font-semibold">Country</h4>
              <p>{d.company.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataCard;
