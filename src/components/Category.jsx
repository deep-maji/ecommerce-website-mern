import React from 'react';
import '../styles/category.css';
import Phone from '../assets/images/Phones.svg'
import CC0 from '../assets/images/CC0.svg'
import CC1 from '../assets/images/CC1.svg'
import CC2 from '../assets/images/CC2.svg'
import CC3 from '../assets/images/CC3.svg'
import CC4 from '../assets/images/CC4.svg'
import CC5 from '../assets/images/CC5.svg'
import { NavLink } from "react-router-dom";


const Category = () => {
    return (
        <div className="category-container">
            <h2 className="category-title">Browse By Category</h2>
            <div className="category-items">
                <NavLink to={'/category/phone'}><img className='ccimgs' src={CC0}></img></NavLink>
                <NavLink to={'/category/headphone'}><img className='ccimgs' src={CC1}></img></NavLink>
                <NavLink to={'/category/gaming'}><img className='ccimgs' src={CC2}></img></NavLink>
                <NavLink to={'/category/camera'}><img className='ccimgs' src={CC3}></img></NavLink>
                <NavLink to={'/category/computer'}><img className='ccimgs' src={CC4}></img></NavLink>
                <NavLink to={'/category/watch'}><img className='ccimgs' src={CC5}></img></NavLink>
            </div>

        </div>
    );
};

export default Category;
