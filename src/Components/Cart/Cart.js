import classes from "../Cart/Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItem = (
    <ul>{[{ id: "m1", name: "Sushi", amount: 2, price: 22.99 }].map(item=>(<li>{item.name}</li>))}</ul>
  );
  return (<Modal>
      {cartItem}
      <div>
          <span>Total Amount</span>
          <span>29.00</span>
      </div>
      <div className={classes.action}>
          <button className={classes['button--alt']} >Close</button>
          <button className={classes.button}>Order</button>
      </div>
  </Modal>);
};
export default Cart;
