import { Link, Outlet } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu-section">
      <h1>Our Menu</h1>
      <p>Select a category to explore our delicious offerings.</p>

      {/* Category Navigation */}
      <div className="category-nav">
        <Link to="hot">Hot Drinks</Link>
        <Link to="cold">Cold Drinks</Link>
        <Link to="pastries">Pastries</Link>
      </div>

      {/* Nested content (Hot/Cold/Pastries) */}
      <Outlet />
    </div>
  );
}
