import React from "react";
import { Link } from "react-router-dom";
import Style from "./Cart.module.css";

export default function Cart() {
  let toCart = JSON.parse(localStorage.getItem("car")) || [];

  function deleteRow(index) {
    toCart[index].count = toCart[index].count - 1;
    if (toCart[index].count < 1) {
      toCart.splice(index, 1);
    }
    localStorage.setItem("car", JSON.stringify(toCart));
    window.location.reload();
  }

  return (
    <>
      <section className={`d-flex align-items-center py-5 ${Style.pro}`}>
        <div className="container">
          <div className={`text-center ${Style.proText}`}>
            <h1>Shopping Cart</h1>
            <div className={Style.link2}>
              <Link className={Style.link} to="/">
                Home /
              </Link>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </section>
      <section className="tab py-5">
        <div className="container">
          <table className="table text-center">
            <thead>
              <th>Image</th>
              <th>Title</th>
              <th>Count</th>
              <th>Price</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {toCart.map((item, index) => (
                <tr key={index} index={index}>
                  <td>
                    <img src={item.img_url} className={Style.imgItem} alt="" />
                  </td>
                  <td className={Style.title}>{item.title}</td>
                  <td>{item.count}</td>
                  <td>${item.price}.00</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteRow(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
