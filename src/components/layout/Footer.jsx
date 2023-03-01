import React from 'react';
import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import "../../styles/Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Burger Point</h2>
                <p>We are trying to give you the best taste possible</p>
                <br />
                <em>We give attention to genuine feedback</em>
                <strong>All right received @burgerpoint</strong>
            </div>
            <aside>
                <h4>Follow us</h4>
                <a href="https://twitter.com" alt="twitter"><AiFillTwitterSquare /></a>
                <a href="https://linkedin.com" alt="linkedin"><AiFillLinkedin /></a>
                <a href="https://github.com" alt="github"><AiFillGithub /></a>
            </aside>
        </footer>
    );
};

export default Footer;