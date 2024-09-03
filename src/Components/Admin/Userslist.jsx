import React ,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../action/userAction";
import { Table,Container } from "react-bootstrap";
import Loader from "../Loader";
import Error from "../Error";
import {AiFillDelete} from 'react-icons/ai' 

const Userslist = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { users, loading, error } = userState;
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
  <Container>
      <h1>Users</h1>
      {loading && <Loader/>}
      {error && <Error error="Something Went Wrong"/>}
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       {
        users && 
       users.map((user)=>(
        <tr>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td><AiFillDelete style={{color:'red',cursor:'pointer'}}
          onClick={() => {
            dispatch(deleteUser(user._id))
          }}/></td>
        </tr>
       ))
       }
      </tbody>
    </Table>
    </Container>
    </>
  );
};

export default Userslist;
