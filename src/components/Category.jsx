import React from 'react';
import '../styles/category.css';
import Phone from '../assets/images/Phones.svg'
import CC0 from '../assets/images/CC0.svg'
import CC1 from '../assets/images/CC1.svg'
import CC2 from '../assets/images/CC2.svg'
import CC3 from '../assets/images/CC3.svg'
import CC4 from '../assets/images/CC4.svg'
import CC5 from '../assets/images/CC5.svg'


const Category = () => {
    return (
        <div className="category-container">
            <h2 className="category-title">Browse By Category</h2>
            <div className="category-items">
                <img className='ccimgs' src={CC0}></img>
                <img className='ccimgs' src={CC1}></img>
                <img className='ccimgs' src={CC2}></img>
                <img className='ccimgs' src={CC3}></img>
                <img className='ccimgs' src={CC4}></img>
                <img className='ccimgs' src={CC5}></img>
            </div>

        </div>
    );
};

export default Category;
