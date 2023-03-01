import React from 'react';
import "../../styles/Menu.scss"
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png'

const Menu = () => {
    const adddToCartHandler = (itemNo)=>{

    }
    return (
        <section id='menu'>
            <h1>Menu</h1>
            <div>
                <MenuCard
                itemNo={1}
                name={"chesse Burger"}
                price={200}
                image={burger1}
                handler={adddToCartHandler}
                 />
                <MenuCard
                itemNo={1}
                name={"chesse Burger"}
                price={200}
                image={burger1}
                handler={adddToCartHandler}
                 />
                <MenuCard
                itemNo={1}
                name={"chesse Burger"}
                price={200}
                image={burger1}
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