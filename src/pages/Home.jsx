import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // 👈 Hook from React Router for programmatic navigation

  return (
    <div className="text-center">
      <h1 className="mb-4">Welcome to Brewed Bliss</h1>
      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1400&q=80"
        alt="Coffee cup"
        className="img-fluid rounded mb-4"
        style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
        />
      <p className="lead">
        Discover the art of coffee-making at <strong>Brewed Bliss</strong> — your neighborhood café
        where every cup is crafted with love, precision, and the finest beans from around the world.
      </p>
      <p>
        Whether you’re catching up with friends, getting some work done, or simply enjoying a quiet
        moment alone, we’ve got the perfect brew for every mood.
      </p>

      {/* 👇 Button that navigates to /menu when clicked */}
      <button
        className="btn btn-outline-dark mt-3"
        onClick={() => navigate("/menu")}
      >
        View Our Menu
      </button>
    </div>
  );
}

export default Home;
