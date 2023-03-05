import React from 'react';
import "../../styles/Cart.scss";
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import CartItem from './CartItem';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';



const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems, subTotal, tax, shippingCharges, total } = useSelector((state) => state.cart);

    const cheeseBurger = cartItems?.cheeseBurger?.quantity || 0;
    const vegCheeseBurger = cartItems?.vegCheeseBurger?.quantity || 0;
    const burgerWithFries = cartItems?.burgerWithFries?.quantity || 0;
    const increment = (item) => {
        switch (item) {
            case 1:
                dispatch({ type: "cheeseBurgerIncrement" });
                dispatch({ type: "calculatePrice" });
                break;
            case 2:
                dispatch({ type: "vegCheeseBurgerIncrement" });
                dispatch({ type: "calculatePrice" });
                break;
            case 3:
                dispatch({ type: "burgerWithFriesIncrement" });
                dispatch({ type: "calculatePrice" });
                break;

            default:
                dispatch({ type: "cheeseBurgerIncrement" });
                dispatch({ type: "calculatePrice" });
                break;
        }
    };
    const decrement = (item) => {
        switch (item) {
            case 1:
                if (cheeseBurger === 0) break;
                dispatch({ type: "cheeseBurgerDecrement" });
                dispatch({ type: "calculatePrice" });
                break;
            case 2:
                if (vegCheeseBurger === 0) break;
                dispatch({ type: "vegCheeseBurgerDecrement" });
                dispatch({ type: "calculatePrice" });
                break;
            case 3:
                if (burgerWithFries === 0) break;
                dispatch({ type: "burgerWithFriesDecrement" });
                dispatch({ type: "calculatePrice" });
                break;

            default:
                if (cheeseBurger === 0) break;
                dispatch({ type: "cheeseBurgerDecrement" });
                dispatch({ type: "calculatePrice" });
                break;
        }
    }

    return (
        <section className='cart'>
            <main>
                <CartItem title={"Cheese Burger"}
                    img={burger1}
                    value={cheeseBurger}
                    increment={() => increment(1)}
                    decrement={() => decrement(1)} />
                <CartItem title={"Veg Cheese Burger"}
                    img={burger2}
                    value={vegCheeseBurger}
                    increment={() => increment(2)}
                    decrement={() => decrement(2)} />
                <CartItem title={"Cheese Burger with French Fries"}
                    img={burger3}
                    value={burgerWithFries}
                    increment={() => increment(3)}
                    decrement={() => decrement(3)} />
                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>${subTotal}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>${tax}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>${shippingCharges}</p>
                    </div>{" "}
                    <div>
                        <h4>Total</h4>
                        <p>${total}</p>
                    </div>
                    <Link to="/shipping">Checkout</Link>
                </article>

            </main>


        </section >
    )
}

export default Cart
