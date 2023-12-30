import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./../CardStyle.css";


export default function Sporty() {
    let [product, setProduct] = useState([]);

    async function getApi(){
      let api = await axios.get("shop.json");
      let {data} = api
      setProduct(data.sprty);
    }
  useEffect( ()=>{
    getApi();
  }, [])
  return (
    <>
    {product.map( (sProduct,index)=> 
            <div key={index} className="col-xl-4">

            <div className="cardimg">
              <div className="overlay">
                <img src={sProduct.img_url2} alt="" />
                <div className="icon">
                  <button className="btn">
                  <i className="fa-regular fa-heart"></i>
                  </button>
                  <button className="btn">
                  <i className="fa-solid fa-layer-group"></i>
                  </button>
                  <button className="btn">
                  <i className="fa-solid fa-eye"></i>
                  </button>
                </div>
                <div className="icon2">
                  <button className="btn">
                    add to card
                  </button>
                </div>
              </div>
              <img src={sProduct.img_url} alt=".." />
            </div>
              <div className="card-body">
                <h3>{sProduct.title}</h3>
                <p className="star"><i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            (No reviews)
            </p>
            <p className="sale">${sProduct.price}.00</p>
            <p className="true"><i className="fa-solid fa-check"></i> in stock</p>
              </div>
                        </div>
            )}
    </>
  )
}
