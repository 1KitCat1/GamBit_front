import React from 'react';
import projectLocalData from '../components/Data';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";
import { MDBIcon } from 'mdb-react-ui-kit';
import { FormattedMessage } from 'react-intl';


function Wallets() {
return (
  <div>
    <div class="text-white" style={{margin:"40px", backgroundColor:"white"}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Address</th>
            <th>Balance</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {projectLocalData.wallets.map((wallet) => {
              return (
                <tr>
                  <td>{wallet.id}</td>
                  <td>{wallet.address}</td>
                  <td>{wallet.balance}</td>
                  <MDBIcon icon="trash" />
                  <MDBIcon icon="cog" />
                </tr>
              );
          })}
        </tbody>
      </Table>
      
    </div>
    <button className="btn btn-warning">
    <FormattedMessage id="addwallet" />
    </button>
  </div>
  );
}
  
  export default Wallets;
  
