import { useEffect, useState } from "react";
import styledComponents from "styled-components";
import Header from "./Components/Header";
import Products from "./Components/products/Products";


const Container = styledComponents.div`
	max-width: 1440px;
	margin: 0 auto;
`;

function App() {

	const [currency, setCurrency] = useState('USD');


	return (
		<Container >
			<Header currency={currency} setCurrency={setCurrency} />
			<Products currency={currency} />
		</Container>
	);
}

export default App;

