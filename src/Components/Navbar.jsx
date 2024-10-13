import React from 'react'
import { useSelector } from 'react-redux'
import{selectedItem,selectedtotal} from '../Redux/CartSlice/CartRe'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const cartItem = useSelector(selectedItem)
  const totalPrice= useSelector(selectedtotal)
  return (
    <>
      <div className='nav-bar sticky-top'>
        <Link to={"/"} className='left'style={{ textDecoration:"none",color:"white"}} ><h3>CS-SHOP</h3></Link>
        <div className='middle'>
        <button className='btn btn-warning'><h5>Cart Itemd TotalPrice={totalPrice} ₹ </h5></button>
        </div>
        <Link to={"/cart"} className='right'>
        <button type="button" className="btn btn-primary position-relative">
        <i className="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cartItem.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
      </div>
    </>
  )
}

export default Navbar
