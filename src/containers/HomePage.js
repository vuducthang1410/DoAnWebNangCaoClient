import React from 'react';
import { Navigate, useOutletContext } from 'react-router-dom';

const HomePage = () => {
    const context=useOutletContext();
    if(true){
       return <Navigate to={"/login"} replace/>
    }
    return (
        <div>
            
        </div>
    );
};

export default HomePage;