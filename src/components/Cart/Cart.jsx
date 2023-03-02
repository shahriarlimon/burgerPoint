import React from 'react';
import "../../styles/Cart.scss";
import burger from '../../assets/burger1.png'
import CartItem from './CartItem';
import { Link } from 'react-router-dom'



const Cart = () => {
    const increment = (item) => { };
    const decrement = (item) => { }

    return (
        <section className='cart'>
            <main>
                {
                    Array.from([0, 1, 2]).map((item, idx) => (<CartItem title={"Cheese Burger"} img={burger} value={1} increment={() => increment(1)} decrement={() => decrement(1)} />))
                }
                <article>
                    <div>
                        <h4>Sub Total</h4>
                        <p>${2000}</p>
                    </div>
                    <div>
                        <h4>Tax</h4>
                        <p>${2000 * 0.18}</p>
                    </div>
                    <div>
                        <h4>Shipping Charges</h4>
                        <p>${200}</p>
                    </div>{" "}
                    <div>
                        <h4>Total</h4>
                        <p>${2000 + 2000 * 0.18 + 200}</p>
                    </div>
                    <Link to="/shipping">Checkout</Link>
                </article>

            </main>

        </section>
    )
}

export default Cart
