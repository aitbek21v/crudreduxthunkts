import React from 'react';
import { IRoutes } from '../types';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import {Route, Routes} from 'react-router-dom'
import Edit from '../pages/Edit';
const MainRoutes:React.FC = () => {
    const PUBLIC:IRoutes[] = [
        {link:'/',element:<Home/>,id:1},
        {link:'/admin',element:<Admin/>,id:2},
        {link:'/edit/:id',element:<Edit/>,id:3},


    ]
    return (
        <Routes>
            {
                PUBLIC.map((el:IRoutes) => (
                    <Route path={el.link} element={el.element} key={el.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;