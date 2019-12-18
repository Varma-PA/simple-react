import React, { useState } from "react";
import { Table, Button } from "semantic-ui-react";

const mydataa = [
  {
    sno: 1,
    product: "Dress",
    quantity: "25"
  },
  {
    sno: 2,
    product: "Shoes",
    quantity: "25"
  },
  {
    sno: 3,
    product: "Watches",
    quantity: "25"
  },
  {
    sno: 4,
    product: "Caps",
    quantity: "30"
  }
];

function TableComponent() {
  const [data, setData] = useState(mydataa);
  

  const [edit, setEdit] = useState({ editMode: false });

  const handleChange = (event, index) => {
    // let newData = Json.parse(JSON.stringify(data.mydata));

    console.log(index);

    console.log(event.target.name);

    console.log(event.target.value);

    console.log(data[index]);

    setData();
  };

  return (
    <div>
      <Button
        onClick={() => {
          setEdit(state => ({
            editMode: !state.editMode
          }));
        }}
      >
        Edit Button
      </Button>
      <Table>
        <Table.Header>
          <Table.HeaderCell>S.NO</Table.HeaderCell>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Quantity</Table.HeaderCell>
        </Table.Header>

        <Table.Body>
          {edit.editMode ? (
            //   True Case
            <>
              {data.map((item, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <input
                        placeholder={item.sno}
                        name="sno"
                        onChange={e => handleChange(e, index)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      <input
                        placeholder={item.product}
                        name="product"
                        onChange={e => handleChange(e, index)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      <input
                        placeholder={item.quantity}
                        name="quantity"
                        onChange={e => handleChange(e, index)}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </>
          ) : (
            //   False Case
            <>
              {data.map((item, index) => {
                return (
                  <Table.Row>
                    <Table.Cell>{item.sno}</Table.Cell>
                    <Table.Cell>{item.product}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                  </Table.Row>
                );
              })}
            </>
          )}
        </Table.Body>
      </Table>

      <h1>Edit Mode: {edit.editMode ? "true" : "false"}</h1>
    </div>
  );
}

export default TableComponent;
