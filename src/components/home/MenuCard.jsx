import React from 'react';
import { motion } from 'framer-motion'

const MenuCard = ({ title, image, price, handler, itemNo }) => {
    return (
        <motion.div className='menuCard'
            initial={{
                x: "-100%",
                opacity: 0
            }}
            whileInView={{
                x: "0",
                opacity: 1
            }}
            transition={{
                delay:0.1
            }}

        >
            <div>Item {itemNo}</div>
            <main>
                <img src={image} alt='name' />
                <h5>${price}</h5>
                <p>{title}</p> 
                <button onClick={() => handler()}>Buy Now</button>
            </main>

        </motion.div>
    );
};

export default MenuCard;