import React, { Component, useState } from "react";
import { Table } from "semantic-ui-react";
import Data from "../Data.json";

export default () => {
  //const data = Data;

  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>S.No</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {Data.map((row, index) => {
            return (
              <Table.Row>
                <Table.Cell key={index}>{row.id}</Table.Cell>
                <Table.Cell key={index}>{row.name}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {console.log()}
    </div>
  );

  //   return (
  //     <div>
  //       <Table>
  //         <Table.Header>
  //           <Table.HeaderCell>S.NO</Table.HeaderCell>
  //           <Table.HeaderCell>Name</Table.HeaderCell>
  //         </Table.Header>
  //         <Table.Body>
  //           <Table.Cell>1</Table.Cell>
  //           <Table.Cell>Tesla</Table.Cell>
  //         </Table.Body>
  //       </Table>
  //     </div>
  //   );
};
