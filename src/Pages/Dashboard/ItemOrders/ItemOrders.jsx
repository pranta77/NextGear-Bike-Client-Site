import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

export default function ItemOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  // console.log(user);
  useEffect(() => {
    const url = `https://next-gear-bike-server.vercel.app/orders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  // console.log(orders);

  const handleCancel = (id) => {
    const url = `https://next-gear-bike-server.vercel.app/orders${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
          alert("Are You Sure Cancel Your Order");
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-red-600 text-center my-8">
        YOU HAVE ORDERS {orders.length} ITEMS
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-red-100">
              <th>Name</th>
              <th>Bike Name</th>
              <th>Price</th>
              <th>Email</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody className="text-amber-600">
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.productname}</td>
                <td>{order.productprice}</td>
                <td>{order.email}</td>
                <td>
                  <button
                    onClick={() => handleCancel(order._id)}
                    className="btn btn-outline btn-primary"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
