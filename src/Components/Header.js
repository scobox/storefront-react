import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Cart } from './img/cart.svg';

export default function Header({ currency, setCurrency }) {

	const [currencyMenuStatus, setCurrencyMenuStatus] = useState(false);
	const currenciesList = ['AUD', 'USD', 'EUR'];

	useEffect(() => {
		document.getElementById('currency').addEventListener('click', () => setCurrencyMenuStatus(state => !state));
	}, []);

	return (
		<HeaderContainer>
			<HeaderMenu />
			<Logo />
			<CurrencyAndCartContainer>
				<Currency menuStatus={currencyMenuStatus} id="currency">
					<span >{currency}</span>
				</Currency>
				{currencyMenuStatus &&
					<CurrencyMenu>
						{currenciesList.map(curr => <CurrencyMenuItem key={curr} onClick={() => { setCurrency(curr); setCurrencyMenuStatus(false) }}>{curr}</CurrencyMenuItem>)}
					</CurrencyMenu>
				}
				<Cart />
			</CurrencyAndCartContainer>
		</HeaderContainer>

	)
}

const HeaderContainer = styled.div`
	height: 80px;
	display: grid;
	grid-template-columns:1fr 32px 1fr ;
	align-items: center;
	padding:0 100px;
	@media (max-width: 768px) {
		padding:0 16px;

	}
`;
const HeaderMenuContainer = styled.div`
	display: flex;
	height: 100%;

`;
const HeaderMenuItem = styled.div`
	padding:0 16px;
	border-bottom: 2px solid #fff;
	line-height: 80px;
	cursor: pointer;
	&:hover{
		color:#5ECE7B;
		border-bottom: 2px solid #5ECE7B;
	}
`;
const CurrencyAndCartContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-left: 16px;
	position: relative;
`;
const Currency = styled.div`
	margin-right: 36px;
	font-size: 18px;
	position: relative;
	cursor: pointer;
	user-select: none;
	&:after{
		transition:transform 0.3s;
		position: absolute;
		content: "";
		width: 4px;
		height: 4px;
		border-bottom: 2px solid #000;
		border-left: 2px solid #000;
		left: 42px;
		bottom: 4px;
		transform:rotate(-45deg);
		${props => { return props.menuStatus ? "transform:rotate(135deg)" : "" }}
	}
`;
const CurrencyMenu = styled.div`
cursor: pointer;
position: absolute;
top: 20px;
right: 40px;
`;
const CurrencyMenuItem = styled.div`

`;

const HeaderMenu = () => {
	return (
		<HeaderMenuContainer>
			<HeaderMenuItem>Women</HeaderMenuItem>
			<HeaderMenuItem>Men</HeaderMenuItem>
			<HeaderMenuItem>Kids</HeaderMenuItem>
		</HeaderMenuContainer>
	)
}
