import React from 'react';
import "../../styles/Founder.scss";
import { motion } from 'framer-motion';
import founder from '../../assets/founder.png'
const Founder = () => {
    const options = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: "0",
            opacity: 1
        }
    }
    return (
        <section className='founder'>
            <motion.div {...options}>
                <img src={founder} alt="founder" height={200} width={200} />
                <h1>Shahriar Limon</h1>
                <p>Hey,I'm Shahriar Limon,the founder of Burger point <br />Our aim is to provide tasty burger to you</p>
            </motion.div>

        </section>
    );
};

export default Founder;