import React from 'react';
import SearchBar from '../Component/SearchBar/SearchBar';
import NewArrivals from '../Component/NewArrivals/NewArrivals';
import Trending from '../Component/Trending/Trending';
// import User1 from './components/User/User1'
import './css/style.css';

function FirstPage() {
    return (
        <div className="App">
            <SearchBar />
            <div className="content">
                <NewArrivals />
                <Trending />
            </div>
            {/* <User1 /> */}
        </div>
    );
}

export default FirstPage;