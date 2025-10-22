import { useParams } from "react-router-dom";

export default function MenuItem() {
  const { itemName } = useParams();

  return (
    <div>
      <h2>Item Details</h2>
      <p>You selected: <strong>{itemName.replace("-", " ")}</strong></p>
      <p>This is a delicious choice from our menu! ☕</p>
    </div>
  );
}
