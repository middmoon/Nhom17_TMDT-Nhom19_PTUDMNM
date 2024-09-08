// pages/CustomerPage.js
import React, { useEffect, useState } from "react";
import { getCustomerProfile } from "../../services/customerProfile";
import CustomerProfile from "../../component/customerProfile/customerProfile";

const CustomerPage = () => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerProfile = async () => {
      try {
        const data = await getCustomerProfile();
        setCustomer(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomerProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!customer) return <p>No customer data available.</p>;

  return (
    <div>
      <CustomerProfile customer={customer} />
    </div>
  );
};

export default CustomerPage;
