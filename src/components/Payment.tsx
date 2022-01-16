import React, { ReactElement } from 'react'

import Web3 from 'web3'
import { TOKEN_ADDRESS } from '../config'

function Payment(props: { wallet_address: string }): ReactElement  {

	const { wallet_address } = props

	const processPayment = async () => {
		const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')


		// Balance
		const contract = new web3.eth.Contract([
			// balanceOf
			{
				'constant':true,
				'inputs':[{'name':'_owner','type':'address'}],
				'name':'balanceOf',
				'outputs':[{'name':'balance','type':'uint256'}],
				'type':'function'
			},
			// decimals
			{
				'constant':true,
				'inputs':[],
				'name':'decimals',
				'outputs':[{'name':'','type':'uint8'}],
				'type':'function'
			}
		],TOKEN_ADDRESS)

		// contract.methods.myMethod(123).send({ from:'wallet add', to: 'ewaalet add', value:'121232313'})

		web3.eth.sendTransaction({
			to: '0x818C4893713265Aa5b039Ddf9f6e8a05f19489a3',
			from: wallet_address, 
			value: 1000000000000000
		})


	}

	return (
		<div>
			<button onClick={() =>  processPayment()}>Pay 10 now</button>
		</div>
	)
}

export default Payment