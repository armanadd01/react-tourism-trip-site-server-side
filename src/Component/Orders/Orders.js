import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const Orders = () => {
    const [order, setOrder] = useState([]);

  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
    console.log(id);
  };
    return (
        <div>
            <Container>
                <h1>Orders{}</h1>
                <Row>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Order Id</th>
                        <th>Order Country</th>
                        <th>User Name</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    {order?.map((pd, index) => (
                    <tbody>
                        <tr>
                        <td>{index}</td>
                        <td>{pd.id}</td>
                        <td>{pd.name}</td>
                        <td>{pd.email}</td>
                        <td>{pd.date}</td>
                        <button
                            onClick={() => handleDelete(pd._id)}
                            className="btn bg-danger p-2"
                        >
                            Delete
                        </button>
                        </tr>
                    </tbody>
                    ))}
                </Table>
                </Row>
            </Container>
        </div>
    );
};

export default Orders;