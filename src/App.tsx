import React, { useState, useEffect } from 'react'
import './App.css'

import Web3 from 'web3'
import Wallet from './components/Wallet'

function App() {

	const [ account, setAccount ] = useState('')

	const loadBlockchainData = async() => {
		const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
		const accounts = await web3.eth.getAccounts()
		setAccount(accounts[0])
	}

	useEffect(() => {
		loadBlockchainData()
	}, [])

	return (
		<div className="App">
			<Wallet wallet_address={account} />
		</div>
	)
}

export default App
