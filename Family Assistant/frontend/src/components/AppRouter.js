import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../route';
import { Context } from '../index';
import Main from '../pages/Main';

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) =>
            user.user.role === 'ADMIN' ? (
              <Route key={path} path={path} element={<Component />} exact />
            ) : (
                null
            )
            )}
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={<Component/>} exact/>
            )}  
            <Route path="*" element={<Main/>} />          
        </Routes>
    );
};

export default AppRouter;