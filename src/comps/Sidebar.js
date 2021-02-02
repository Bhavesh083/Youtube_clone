import React from 'react';
import  '../styling/sidebar.css';
import { Link} from 'react-router-dom';

function Sidebar() { 
    return (
        <div className='side-bar'>
            <Link className='lnk' to='/'  ><i class="fas fa-home"></i><h3> Home</h3></Link>
            <Link className='lnk' to='/'  ><i class="fas fa-fire"></i><h3>Trending</h3></Link>
            <Link className='lnk' to='/'  ><i class="fab fa-youtube-square"></i><h3>Subscription</h3></Link>
            <Link className='lnk' to='/'  ><i class="fas fa-play-circle"></i><h3>Library</h3></Link>
            <Link className='lnk' to='/'  ><i class="fas fa-history"></i><h3>History</h3></Link>
            <Link className='lnk' to='/'  ><i class="fas fa-photo-video"></i><h3>Your videos</h3></Link>
            <Link className='lnk' to='/'  ><i class="fas fa-clock"></i><h3>Watch Later</h3></Link>
            <Link className='lnk' to='/'  ><i class="fas fa-thumbs-up"></i><h3>Liked videos</h3></Link>
            <Link className='lnk' to='/'  ><i class="fas fa-caret-down"></i><h3>Show more</h3></Link>
        </div>
    )
}

export default Sidebar;
