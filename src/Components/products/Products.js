import React, { useState } from 'react';
import styled from 'styled-components';
import productListJSON from "../../product-list.json";

export default function Products({ currency }) {
	const [productList, setProductList] = useState(productListJSON.products);

	return (
		<ProductsContainer>
			<h1>Category name</h1>
			<GridContainer>
				{
					productList.map((product, idx) => <ProductCard key={idx} name={product.name} price={product.price[currency] + " " + currency} />)
				}
			</GridContainer>
		</ProductsContainer>
	)
}

const ProductCard = ({ name, price }) => {
	// console.log(name);
	return (
		<ProductCardContainer>
			<div className="img-container">

				<img src="https://picsum.photos/354/330" alt="product" />
			</div>
			<p>{name}</p>
			<p>{price}</p>
		</ProductCardContainer>
	)
}

const ProductsContainer = styled.div`
	padding:0px 100px ;
	`;
const GridContainer = styled.div`
display: grid;
grid-template-columns:1fr 1fr 1fr ;
@media (max-width:1360px){
	grid-template-columns:1fr 1fr;
}
@media (max-width:880px){
	grid-template-columns:1fr;
}
;

`;
const ProductCardContainer = styled.div`
justify-self:center ;
	width: 386px;
	height: 444px;
	padding:0 16px;
	& .img-container{
		display: block;
		width: 354px;
		height: 330px;
		& img{
			width:100% ;
			height: 100%;
		}
	}
`;
