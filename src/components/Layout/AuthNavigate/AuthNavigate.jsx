//import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectToken } from '../../../Redux/selectors';
import { logOut } from '../../../Redux/auth/authOperations';
import { Button } from '../../Button/Button';

const getActiveClassName = ({ isActive }) => {
  return isActive ? 'btn nav-btn btn-light active' : 'btn nav-btn btn-light';
};

export const Navigation = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);


  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        {!token && <h2 className="h3 mb-4">Please log in!</h2>}
        <div>{token?.user.email}</div>
        <div>{token?.user.name}</div>

    

        {token ? (
          <>
         
            <NavLink to="contacts" end className={getActiveClassName}>
              Contacts
            </NavLink>

            <Button className="btn-danger mt-5" onClick={() => dispatch(logOut())}>Log Out</Button>
          </>
        ) : (
          <>
            <NavLink to="login" className={getActiveClassName}>
              Login
            </NavLink>

            <NavLink to="join" className={getActiveClassName}>
              Join
              </NavLink>
            <NavLink to="account" className={getActiveClassName}>
              My account
            </NavLink>

            <NavLink to="calendar" className={getActiveClassName}>
              Calendar
            </NavLink>
            <NavLink to="users" end className={getActiveClassName}>
              Users
            </NavLink> 
              
          </>
        )}
      </div>
    </div>
  );
};
