import React from 'react';

export default function Home() {
  return (
    <main>
      <header>
        <h1>Agrorgin</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Cart</a>
        </nav>
      </header>
      <section>
        <img src="/banner.jpg" alt="Fresh organic vegetables" />
        <h2>Pure Organic Produce, Exported Worldwide</h2>
        <p>
          Agrorgin exports certified organic vegetables from India to international markets like Japan.
        </p>
        <a href="/products">View Products</a>
      </section>
      <footer>
        <p>© 2025 Agrorgin | India | info@agrorgin.com</p>
      </footer>
    </main>
  );
}