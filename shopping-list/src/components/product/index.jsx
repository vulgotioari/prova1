import {
  Apple,
  Sandwich,
  Carrot,
  Milk,
  Beef,
  EllipsisVertical,
} from "lucide-react";

import "./styles.css";

export function Product({ productName, quantity, type, category }) {
  const Icon  = category?.icon
  console.log(type);
  return (
    <div className="card-product">
      <div className="details">
        <p>{productName}</p>
        <span>{quantity}  {type}</span>
      </div>

      <div className="category">
        <p className={`tag ${category?.name.toLowerCase()}`}>
          { Icon && <Icon size={16} color = {category.color}/>}
          {category?.name}
        </p>
        <EllipsisVertical size={20} color="#A881E6" />
      </div>
    </div>
  );
}
