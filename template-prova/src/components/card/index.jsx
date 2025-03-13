import { Plus, Minus, ShoppingCart } from "lucide-react";
import "./styles.css";
import { useState } from "react";


export function Card({ coffeeImg, tags, title, description }) {
  const [contador, setContador] = useState(0);
  return (
    <div id="card">
      <img src={coffeeImg} alt={title} id="coffeeImg" />
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            <span>{tag}</span>
          </div>
        ))}
      </div>

      <h1>{title}</h1>
      <p className="description">{description} </p>

      <div id="details">
        <div className="price">
          <p>
            R$ <strong>9,90</strong>
          </p>
        </div>

        <div id="contador">
          <button onClick={() => setContador(contador - 1)}>
            <Minus className = "minus"size={10}color="#8047F8"/> 
          </button>
          <p>{contador}</p>
          <button onClick={()=> setContador(contador + 1)}>
            <Plus className = "plus" size = {10} color ="#8047f8"/>
          </button>
        </div>

        <button type="button" className="shoppingBtn">
          <ShoppingCart color="#F3F2F2" fill="#F3F2F2" size={20} />
        </button>
      </div>
    </div>
  );
}
