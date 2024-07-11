import React, { useEffect, useRef, useState } from 'react';
// import paneer from './imagereact/paneer-tikka.jpg';
import { useDispatchCart,useCart } from './Contextreducer';
export default function Card(props) {
let dispatch=useDispatchCart();
let data =useCart()
  let options=props.options//key value ,key is option half or full and value is price of the options
  let priceoptions=Object.keys(options);
  // let foodItem=props.foodItems
  // read the concept of context api and use reducer 

  const [qty,setQty]=useState(1);
  const [size,setSize]=useState("");
  const handleAddtoCart=async()=>{
    let food=[]
    for(const item of data){
      if(item.id===props.foodItem._id){
        food=item;
        
        break;
      }
    }
    if(food !== []){
      if(food.size===size){
        await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
        return
      }
      else if(food.size!==size){
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
      return 
      }
      return
    }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name, price:finalPrice, qty:qty, size:size})

  }
const priceref=useRef();

let finalPrice=qty*parseInt(options[size])
useEffect(()=>{//1st render
  setSize(priceref.current.value)
},[])
  return (
    <div>
      <div className="card m-4 mt-4 p" style={{ width: "20rem", maxHeight: "400px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"200px",objectFit:"fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded"onChange={(e)=>setQty(e.target.value)} >

              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceref}onChange={(e)=>setSize(e.target.value)} >
              {priceoptions.map((data)=>{
                return <option key={data} value={data}> {data}</option>
              })}
            </select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr>
          </hr>
          <button className={`btn bg-success justify-content-center text-black `} onClick={handleAddtoCart}>Add to Cart</button>
        </div>
      </div>
      
      
    </div>
  );
}
