import { Link } from "react-router-dom";

export default function ColdDrinks() {
  const items = [
    {
      name: "Iced Latte",
      img: "https://images.unsplash.com/photo-1566656117208-c23e67f4ce8c?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Cold Brew",
      img: "https://images.unsplash.com/photo-1561641377-f7456d23aa9b?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Iced Mocha",
      img: "https://images.unsplash.com/photo-1649023384041-555d35454897?auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  return (
    <div className="menu-section">
      <h2>Cold Drinks</h2>
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
