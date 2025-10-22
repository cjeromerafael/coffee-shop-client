import { Link } from "react-router-dom";

export default function HotDrinks() {
  const items = [
    {
      name: "Espresso",
      img: "https://images.unsplash.com/photo-1508088405209-fbd63b6a4f50?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Latte",
      img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Cappuccino",
      img: "https://images.unsplash.com/photo-1594261956806-3ad03785c9b4?auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  return (
    <div className="menu-section">
      <h2>Hot Drinks</h2>
      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.img} alt={item.name} />
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <Link to={`/menu/${item.name.toLowerCase()}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
