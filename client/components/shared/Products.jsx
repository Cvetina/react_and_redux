import React from 'react';
import style from './styles/SVG.scss';

const Home = () => {
        return(
            <svg className={style.products} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
                <path d="M28 16h-5l-7 7-7-7h-5l-4 8v2h32v-2l-4-8zM0 28h32v2h-32v-2zM18 10v-8h-4v8h-7l9 9 9-9h-7z"></path>
            </svg>       
        )
}

export default Home