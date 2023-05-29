import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail";
import { Container } from "react-bootstrap";



 const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const db = getFirestore()

		const refDoc = doc(db, "items", id)

		getDoc(refDoc).then(snapshot =>
			setProduct({ id: snapshot.id, ...snapshot.data() })
		)
	}, [id])

	return (
		<Container>
			<ItemDetail product={product} />
		</Container>
	)
}

export default ItemDetailContainer
