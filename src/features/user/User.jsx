import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from './userSlice';

function User() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchUsers())
    }, [])
    



    return (
        <div>
            {user.loading && <div>Loading...</div>}
            {user.users.map((element) => (
                <h1>{element}</h1>
            ))}
        </div>
    );
}

export default User;