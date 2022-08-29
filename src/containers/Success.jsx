import React from 'react'
import '../styles/components/success.css'

const Success = () => {
  return (
    <div className="success">
      <div className="success-content">
        <h2>Oscar, Gracias por tu compra</h2>
        <span>Tu pedido lelgara en 3 dias a tu direccion:</span>
        <div className="success-map">
          Google Maps
        </div>
      </div>
    </div>
  )
}

export default Success