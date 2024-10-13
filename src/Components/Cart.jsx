import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import{clearCart,selectedItem} from '../Redux/CartSlice/CartRe'
import { ToastContainer, toast,Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
const Cart = () => {
  const dispatch= useDispatch()
  const cartItem = useSelector(selectedItem)
  console.log("Cart Item =",cartItem);
  return (
    <>
        <ToastContainer/>
      <div className='container text-center my-5' style={{width:"700px"}}>
      {cartItem.length==0 &&(
        <>
        <h1>Your Cart is Empty</h1>

        <Link to={"/"} className='btn btn-warning fw-bold'>Continue Shopping...</Link>
        </>
      )}
        
             {
              cartItem.map((item)=>(
                <div key={item} className='container my-5'>
                  <div className="card mb-3 bg-dark text-light text-center " style={{width: "650px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
       <button className='btn  mx-3' style={{backgroundColor:"rgb(0, 0, 175)",color:" white"}} >{item.price} ₹</button>
       <button className='btn btn-warning fw-bold'>Buy Now</button>
      </div>
    </div>
  </div>
</div>
                </div>
              )

              )
             }
             {cartItem.length !=0 &&(
              <button onClick={()=>{dispatch(clearCart())
                toast.warning(' Item Removed from the Cart!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
              } }className='btn btn-warning fw-bold'>Clear Cart</button>
             )}
             
      </div>
    </>
  )
}

export default Cart
