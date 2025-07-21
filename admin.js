import React from 'react';

export default function AdminDashboard() {
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <section>
        <h2>Quick Stats</h2>
        <ul>
          <li>Total Orders: 120</li>
          <li>Products in Stock: 35</li>
          <li>Revenue: ₹5,00,000</li>
        </ul>
      </section>
      <nav>
        <a href="/admin/products">Manage Products</a>
        <a href="/admin/orders">Manage Orders</a>
        <a href="/admin/customers">Manage Customers</a>
      </nav>
    </main>
  );
}