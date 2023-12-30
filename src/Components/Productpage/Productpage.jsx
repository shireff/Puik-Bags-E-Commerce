import React  from 'react';
import style from "./../Productpage/Productpage.module.css"

// import { Link } from 'react-router-dom';

let apiUrl = "/shop.json"
export default function Productpage() {
  let data =[]; 
  (async function (){
    let req = await fetch (apiUrl)
    let res = await req.json()
    data = res.all
    let all = data
    let kid = data.kid
    let men = data.men
    let modern = data.modern
    let sprty = data.sprty
    let vintage = data.vintage
    // display(all)
    dis(all)
    // console.log(data);
    
  })();

  // function display(product) {
  //   let sum = "";
  //   for (let i = 0; i < product.length; i++) {
  //     sum += `
  //       <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
  //         <div onClick=${get(i)} class="card wow fadeInUp" data-wow-duration="1.5s">
  //           <div class="card-img">
  //           <img class="card-img-top" src="${product[i].img_url}" alt="Card image cap" />
  //           </div>
  //           <div class="card-body">
  //             <h5 class="card-title">${product[i].title}</h5>
  //             <p class="card-text">${product[i].price}</p>
  //           </div>
  //         </div>
  //       </div>
  //     `;
  //   }
  //   document.getElementById("row").innerHTML = sum;
  // }

  function dis(product) {
    let sum = "";
    product.map((item) => {
      sum += `
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div id="card-${item.id}" class="card wow fadeInUp" data-wow-duration="1.5s">
            <div class="card-img">
              <img class="card-img-top" src="${item.img_url}" alt="Card image cap" />
            </div>
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.price}</p>
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById("row").innerHTML = sum;
  
    // Add click event listener to each card
    product.map((item) => {
      const cardElement = document.getElementById(`card-${item.id}`);
      cardElement.addEventListener("click", () => {
        // Handle click event for the specific card with ID 'item.id'
        get(item.id);
      });
    });
  }
  function dis(product) {
    let sum = "";
    product.map((item) => {
      sum += `
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div id="card-${item.id}" class="card wow fadeInUp" data-wow-duration="1.5s">
            <div class="card-img">
              <img class="card-img-top" src="${item.img_url}" alt="Card image cap" />
            </div>
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.price}</p>
            </div>
          </div>
        </div>
      `;
    });
    document.getElementById("row").innerHTML = sum;
  
    // Add click event listener to each card
    product.map((item) => {
      const cardElement = document.getElementById(`card-${item.id}`);
      cardElement.addEventListener("click", () => {
        // Handle click event for the specific card with ID 'item.id'
        get(item.id);
      });
    });
  }
    

  function get(e){
    console.log(e);
    // alert("fffffffffff")
  }



  // function displayApi(start, end, array) {
  //   let num = "";
  //   for (let i = start; i < end; i++) {
  //     num += `
  //           <div class="col-lg-4 col-md-6 col-sm-6">
  //               <div class="card" style="width: 18rem">
  //                   <img src="${array[i].image_url}" class="card-img-top" alt="..." />
  //                   <div class="card-body">
  //                   <h5 class="card-title ">${array[i].title}</h5>
                    
  //                   <a href="#" class="btn btn-primary">Go somewhere</a>
  //                   </div>
  //               </div>
  //           </div>
  //           `;
  //   }
  //   return num;
  // }

  


  


 
  
  return (
    <>
    <div className={`productLand d-flex flex-column justify-content-center align-items-center ${style.productLand}`}>
      <div className="detales">
        <h1 className='text-bold'>Products</h1>
        <ul className={` ${style.ul}`}>
          <li className={`text-bold ${style.ul}`}>Home /</li>
          <li className={` ${style.ul}`}> Products</li>
        </ul>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3">
          <div className={`categorys ${style.categorys}`}>
            <h2 className={`text-uppercase text-nowrap ${style.categh2}`}>product category</h2>
            <ul className='pb-4'>
              <li>Kid leather bag</li>
              <li>Men's leather bag</li>
              <li>Modern leather bag</li>
              <li>Sporty backpack</li>
              <li>Vintage leather bag</li>
              <li>Accessory</li>
              <li>Bathroom</li>
              <li>Children's cosmetics</li>
              <li>Full body bath repair</li>
              <li>Decoration</li>
            </ul>
          </div>
          <div className={`filter ${style.categorys}`}>
            <h2 className={`text-uppercase text-nowrap ${style.categh2}`}>FILTER BY</h2>
            <button className={`btn ${style.btn}`}>
              <span className='p-1'><i className="fa-regular fa-trash-can"></i></span>
              remove all
            </button>
            <div className="available py-4 d-flex justify-content-between align-items-center">
              <h2 className={`text-uppercase text-nowrap p-0 m-0 ${style.categh2}`}><i class="fa-solid fa-minus"></i>
              Availability
              </h2>
              <span>RESET</span>
            </div>
            <div className="check">
              <div className='inStock d-flex align-items-center mb-2 text-capitalize'>
                <input className="form-check-input" type="checkbox" name="" id="inStock" />
                <label className="form-check-label px-2" htmlFor="inStock">in stock</label>
              </div>
              <div className='outOFStock d-flex align-items-center text-capitalize pb-4'>
                <input className="form-check-input" type="checkbox" name="" id="outOFStock" />
                <label className="form-check-label px-2" htmlFor="outOFStock">out of stock</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
          <div className='row' id="row">
          
          </div>
          {/*  */}
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li  class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li  class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}
