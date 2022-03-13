import React, { useState, useEffect } from 'react'
import './App.css'

import Web3 from 'web3'
import Wallet from './components/Wallet'
import Payment from './components/Payment'
import { OPPAtoken, web3Provider } from './contract'

function App() {

	const [ account, setAccount ] = useState('')
	const [ balance, setBalance ] = useState('')

	const loadBlockchainData = async() => {

		// Account 
		const accounts = await web3Provider.eth.getAccounts()
		setAccount(accounts[0])

		const balanceInWei = await OPPAtoken.methods.balanceOf(accounts[0]).call()
		setBalance(web3Provider.utils.fromWei(balanceInWei, 'gwei').toString())
	}

	useEffect(() => {
		loadBlockchainData()
	}, [])

	return (
		<div className="App">
			<Wallet balance={ balance? balance:'0' } wallet_address={ account } />
			<Payment account={ account } />
		</div>
	)
}

export default App
