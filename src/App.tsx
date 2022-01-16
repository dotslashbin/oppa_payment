import React, { useState, useEffect } from 'react'
import './App.css'

import Web3 from 'web3'
import Wallet from './components/Wallet'
import { TOKEN_ADDRESS } from './config'
import Payment from './components/Payment'

function App() {

	const [ account, setAccount ] = useState('')
	const [ balance, setBalance ] = useState('')

	const loadBlockchainData = async() => {
		const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')

		// Account 
		const accounts = await web3.eth.getAccounts()
		setAccount(accounts[0])

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

		const balanceInWei = await contract.methods.balanceOf(accounts[0]).call()
		setBalance(web3.utils.fromWei(balanceInWei.toString()).toString())
	}

	useEffect(() => {
		loadBlockchainData()
	}, [])

	return (
		<div className="App">
			<Wallet balance={ balance? balance:'0' } wallet_address={ account } />
			<Payment wallet_address={ account }/>
		</div>
	)
}

export default App
