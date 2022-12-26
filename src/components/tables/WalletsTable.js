import React from "react";
import Table from "react-bootstrap/Table";
import { FormattedMessage } from "react-intl";

const WalletsTable = ({ wallets }) => {
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="street" />
            </th>
            <th>
              <FormattedMessage id="number" />
            </th>
          </tr>
        </thead>
        <tbody>
          <>
            {wallets.map((wallet) => {
              return (
                <tr>
                  <td>{wallet.id}</td>
                  <td>{wallet.address}</td>
                  <td>{wallet.user.username}</td>
                </tr>
              );
            })}
          </>
        </tbody>
      </Table>
    </>
  );
};

export default StopsTable;
