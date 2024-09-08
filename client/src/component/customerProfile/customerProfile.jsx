// components/CustomerProfile.js
import React from "react";
import "./customerProfile.css";

const CustomerProfile = ({ customer }) => {
  return (
    <div>
      <h2>Customer Profile</h2>
      <p>
        <strong>First Name:</strong> {customer.first_name}
      </p>
      <p>
        <strong>Last Name:</strong> {customer.last_name}
      </p>
      <p>
        <strong>Email:</strong> {customer.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {customer.phone_number}
      </p>
      <img src={customer.image_url} alt="Profile" style={{ width: "150px", height: "150px" }} />
    </div>
  );
};

export default CustomerProfile;
