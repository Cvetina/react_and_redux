import React from 'react';
import style from './styles/SVG.scss';

const Home = () => {
        return(
            <svg className={style.menu} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                <path d="M0 0h8v8h-8zM12 2h20v4h-20zM0 12h8v8h-8zM12 14h20v4h-20zM0 24h8v8h-8zM12 26h20v4h-20z"></path>
            </svg>       
        )
}

export default Home