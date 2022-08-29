import React from 'react'
import '../styles/components/payment.css'

const Payment = () => {
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resument del pedido:</h3>
        <div className="payment-button">
          Boton de pago con Paypal
        </div>
      </div>
    </div>
  )
}

export default Payment