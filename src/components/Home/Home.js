import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <h3>Users :{users.length} </h3>
            {
                users.map(user => <Users user={user}></Users>)
            }


        </div>
    );
};

export default Home;