import React from 'react';
import "../../styles/Menu.scss"
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'

const Menu = () => {
    const adddToCartHandler = (itemNo) => {

    }
    return (
        <section id='menu'>
            <h1>Menu</h1>
            <div>
                <MenuCard
                    itemNo={1}
                    title={"chesse Burger"}
                    price={200}
                    image={burger1}
                    handler={adddToCartHandler}
                />
                <MenuCard
                    itemNo={2}
                    title={"Veg Cheese Burger"}
                    price={400}
                    image={burger2}
                    handler={adddToCartHandler}
                />
                <MenuCard
                    itemNo={3}
                    title={"Cheese Burger with French Fries"}
                    price={500}
                    image={burger3}
                    handler={adddToCartHandler}
                />
                {/*  <MenuCard
                itemNo={1}
                name={"chesse Burger"}
                price={200}
                image={burger1}
                handler={adddToCartHandler}
                 /> */}
                {/*  <MenuCard
                itemNo={1}
                name={"chesse Burger"}
                price={200}
                image={burger1}
                handler={adddToCartHandler}
                 /> */}
            </div>
        </section>
    );
};

export default Menu;