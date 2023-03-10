import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';
import CartOrderForm from '../CartOrderForm/CartOrderForm.jsx';
import CartItems from '../CartItems/CartItems.jsx';


const CartContainer = () => {
  const {
    clearCart,
    getTotalPrice,
    cartList,
    orderId,
  } = useContext(CartContext);

  /**
   * If the cartList array has a length greater than 0, return true, otherwise return
   * false.
   * @returns The length of the cartList array.
   */
  const cartHasItems = () => {
    return cartList.length > 0;
  }

  return (
    <div className="container">
      {
        cartHasItems()
          ? <div className='mb-5'>
              <div className='d-flex justify-content-end mb-3'>
                <button type="button" className='btn btn-secondary' onClick={() => clearCart()}>Vaciar Carrito</button>
              </div>
              {
                cartList.map((item) => {
                  return (
                    <CartItems item={ item } key={item.id} />
                  )
                })
              }
              <div className='d-flex justify-content-end'>
                <h2>Precio total: <b>${ getTotalPrice() }</b></h2>
              </div>

              <CartOrderForm />
            </div>
          : orderId === '' 
            ? <div className="alert alert-danger" role="alert">
                No hay productos en su carrito de compras
              </div>
            : <div className="alert alert-success" role="alert">
                <p>Su orden fue generada exitosamente.</p>
                <p>Nº de pedido: <b>{orderId}</b></p>
              </div>
        }
    </div>
  )
}

export default CartContainer;