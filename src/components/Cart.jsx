import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { Container, Table, Row, Col, Form } from "react-bootstrap"
import { CartContext } from "../Context/CartContext"

export const Cart = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
	})

	const { isInCart, addToCart, removeFromCart, clearCart, cartOrder } = useContext(CartContext)
	console.log(cartOrder)

	const sendOrder = () => {
		const order = {
			Client: formValues,
			items: cartOrder,
			//total: total(),
		}
	
	}

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}

	 /*const total = () =>
		cartOrder.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity * valorActual.price,
			0
		) */

	return (
		<Container>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Cantidad</th>
					</tr>
				</thead>
				<tbody>
				{/*cart && cart.map(item => (
						<tr key={item.id}>
							<td>{item.title}</td>
							<td>
								<img src={item.pictureUrl} alt={item.description} />
							</td>
							<td>{item.price}</td>
							<td>{item.quantity}</td>
							<td>
								<button onClick={() => removeFromCart(item.id)}>Eliminar</button>
							</td>
						</tr>
					))*/}
				</tbody>
				<tfoot>
					<tr>
						<td>Total</td>
						<td></td>
						<td></td>
						<td>{/*total()*/}</td>
						<td></td>
					</tr>
				</tfoot>
			</Table>
			<Row>
				<Form.Label column="lg" lg={2}>
					Large Text
				</Form.Label>
				<Col>
					<Form.Control size="lg" type="text" placeholder="Large text" />
				</Col>
			</Row>
			<br />
			<Row>
				<Form.Label column lg={2}>
					Normal Text
				</Form.Label>
				<Col>
					<Form.Control type="text" placeholder="Normal text" />
				</Col>
			</Row>
			<br />
			<Row>
				<Form.Label column="sm" lg={2}>
					Small Text
				</Form.Label>
				<Col>
					<Form.Control size="sm" type="text" placeholder="Small text" />
				</Col>
			</Row>
		</Container>
	)
}

export default Cart;