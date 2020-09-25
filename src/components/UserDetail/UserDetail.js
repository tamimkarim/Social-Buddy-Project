import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {userId} = useParams();
    return (
        <div>
            <h4>This is user details component of {userId} </h4>
        </div>
    );
};

export default UserDetail;