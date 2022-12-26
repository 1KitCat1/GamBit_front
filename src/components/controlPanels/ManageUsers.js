import React from 'react';
import projectLocalData from '../Data';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";
import { MDBIcon } from 'mdb-react-ui-kit';
import { FormattedMessage } from 'react-intl';
import NavDropdown from "react-bootstrap/NavDropdown";

function ManageUsers() {
return (
  <div>
    <div class="text-white" style={{margin:"40px", backgroundColor:"white"}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Roles</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {projectLocalData.users.map((user) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <NavDropdown
                    title={<FormattedMessage id="roles" />}>
                      {
                        user.roles.map((role) => {
                            return (<NavDropdown.Item>
                              {role}
                            </NavDropdown.Item>);
                          }
                        )
                      }
                    </NavDropdown>
                  </td>
                  
                    <MDBIcon icon="trash" />
                    
                    <MDBIcon icon="cog" />
                  
                </tr>
              );
          })}
        </tbody>
      </Table>
      
    </div>
    <button className="btn btn-warning">
      <FormattedMessage id="adduser" />
    </button>
  </div>
  );
}
  
  export default ManageUsers;
  
