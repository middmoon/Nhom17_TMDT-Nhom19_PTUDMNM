// components/ShippingAddressList.js
import React from "react";
import "./customerShippingAddresses.css";

const CustomerShippingAddressList = ({ addresses }) => {
  return (
    <div>
      <h2>Shipping Addresses</h2>
      {addresses.length > 0 ? (
        <ul>
          {addresses.map((address) => (
            <li key={address._id}>
              <p>
                <strong>Address:</strong> {address.address}
              </p>
              <p>
                <strong>Ward Code:</strong> {address.ward_code}
              </p>
              <p>
                <strong>Phone Number:</strong> {address.phone_number}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No shipping addresses available.</p>
      )}
    </div>
  );
};

export default CustomerShippingAddressList;
