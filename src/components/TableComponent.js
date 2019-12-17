import React from "react";
import { Table } from "semantic-ui-react";

const data = [
  {
    "s.no": 1,
    product: "Dress",
    quantity: "25"
  },
  {
    "s.no": 2,
    product: "Shoes",
    quantity: "25"
  },
  {
    "s.no": 3,
    product: "Watches",
    quantity: "25"
  },
  {
    "s.no": 4,
    product: "Dress",
    quantity: "25"
  }
];

function TableComponent() {
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.HeaderCell>S.NO</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Dress</Table.Cell>
            <Table.Cell>25</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Shoes</Table.Cell>
            <Table.Cell>35</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Watches</Table.Cell>
            <Table.Cell>45</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Bands</Table.Cell>
            <Table.Cell>60</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default TableComponent;
