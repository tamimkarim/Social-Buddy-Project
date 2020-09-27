import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
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
            <NavBar></NavBar>
            {/* <h3>Users :{users.length} </h3> */}
            <br/>
            <br/>
            {
                users.map(user => <Users user={user}></Users>)
            }


        </div>
    );
};

export default Home;