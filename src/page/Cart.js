import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import useTitle from "../hooks/useTitle";
import { CartCard } from "../component/CartCard";
// import { useCart } from "../context/CartContext";
export function Cart({ title }) {
  const {total, cartList} = useContext(CartContext)
  // const { total, cartList } = useCart();
  console.log(cartList)
  // const products = [
  //   {
  //     id: 1,
  //     name: "Nike revolution",
  //     price: 129,
  //     image: "../assets/img/1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Nike Slim fit",
  //     price: 409,
  //     image: "../assets/img/2.png",
  //   },
  // ];
  useTitle(title);

  return (
    <div>
      <h3>
        {" "}
        Cart Items: {cartList.length} / Total : ${total}
      </h3>
      {cartList.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
}
