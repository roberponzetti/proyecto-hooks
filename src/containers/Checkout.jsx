import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../styles/components/checkout.css'

const Checkout = () => {

  const { state: { cart }, removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    cart.map(item => (

      console.log(item)
      ))
    return sum;
  }

  return (
    <div className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos</h3> } 
        {cart.map((item) => (
          <div className="checkout-item">
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type='button' onClick={() => handleRemove(item)}>
              <i className="fa-solid fa-trash" title="Eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout