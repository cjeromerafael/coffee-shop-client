import { Link } from "react-router-dom";

export default function Pastries() {
  const items = [
    {
      name: "Croissant",
      img: "https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Chocolate Muffin",
      img: "https://images.unsplash.com/photo-1655479481083-a72ae6fddf4c?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Cheesecake Slice",
      img: "https://images.unsplash.com/photo-1710362778452-07fabf048bb1?auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  return (
    <div className="menu-section">
      <h2>Pastries</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.img} alt={item.name} />
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <Link to={`/menu/${item.name.toLowerCase().replace(" ", "-")}`}>
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
