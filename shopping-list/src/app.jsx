import { useState } from "react";
import { Header } from "./components/header";
import { Form } from "./components/form";
import { Product } from "./components/product";

/* import shoopingList from "../data.json"; */

export function App() {
 /*  const [productList, setProductList] = useState(shoopingList.lista_de_compras); */
  const[productList, setProductList] = useState([]);
  function handleAddProcut(newProduct) {
    setProductList((prevList) => [...prevList, newProduct]);
  }

  
  return (
    <>
      <Header />
      <div className="container">
        {/*   <Form onSearch={setSearch} /> */}
        <Form onAddProduct={handleAddProcut} />

        <div className="product-list">

          {productList.map(({ nome, quantidade, tipo, categoria }, index) => (
            <Product
              key={index}
              productName={nome}
              quantity={quantidade}
              type={tipo}
              category={categoria}
            />
          ))}
        </div>
      </div>
    </>
  );
}
