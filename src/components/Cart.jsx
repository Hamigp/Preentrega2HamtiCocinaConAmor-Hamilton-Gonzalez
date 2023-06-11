import { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Container, Table, Row, Col, Form, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const db = getFirestore();

  const { removeFromCart, clearCart, cartOrder } = useContext(CartContext);

  const sendOrder = () => {
    const order = {
      Client: formValues,
      items: cartOrder,
      total: total(),
    };

    addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        const orderId = docRef.id;
        alert("Compra realizada con éxito. Número de compra: " + orderId);
      })
      .catch((error) => {
        console.error("Error al guardar la orden: ", error);
      });
  };

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const total = () =>
    cartOrder.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    );

  const isFormComplete =
    formValues.name !== "" && formValues.phone !== "" && formValues.email !== "";
  const isCartEmpty = cartOrder.length === 0;

  return (
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cartOrder &&
            cartOrder.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{total()}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button variant="dark" onClick={clearCart}>
                Vaciar el carrito
              </Button>
            </td>
          </tr>
        </tfoot>
      </Table>
      <Row>
        <Form.Label column="lg" lg={2}>
          Nombre
        </Form.Label>
        <Col>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Ingrese su nombre"
            onChange={handleChange}
            value={formValues.name}
            name="name"
            pattern="[A-Za-z\s]+"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          Email
        </Form.Label>
        <Col>
          <Form.Control
            size="lg"
            type="email"
            placeholder="Ingrese su email"
            onChange={handleChange}
            value={formValues.email}
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor, ingrese un correo electrónico válido.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column="sm" lg={2}>
          Numero de telefono
        </Form.Label>
        <Col>
          <Form.Control
            size="lg"
            type="number"
            placeholder="Ingrese un telefono"
            onChange={handleChange}
            value={formValues.phone}
            name="phone"
            pattern="[0-9]+"
          />
        </Col>
      </Row>
      <br />
      <Button
        variant="dark"
        onClick={sendOrder}
        disabled={!isFormComplete || isCartEmpty}
      >
        Finalizar compra
      </Button>
    </Container>
  );
};

export default Cart;