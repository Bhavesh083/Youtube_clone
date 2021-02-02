import React,{useState} from 'react'
import  '../styling/navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    
    return (
        <div className={'navbar'}>

            <div className='nav-left'>
                <button><i class="fab fa-youtube"></i></button>
                <h2>You<span>Tube</span></h2>
            </div>

            <div className='nav-search'>
                <input placeholder='Search'type='text'/>
                <button><i class="fas fa-search"></i></button>
            </div>

            <div className='nav-right'>
                <button><i class="fas fa-search"></i></button>
                <button><i class="fas fa-bell"></i></button>
                <button><i class="fas fa-video"></i></button>
                <button><i class="fas fa-ellipsis-v"></i></button>
                <button><i class="fas fa-user-circle"></i></button>
            </div>

        </div>
    )
}

export default Navbar
