import React, { useState, useEffect } from 'react'
import './App.css'

import Web3 from 'web3'
import Wallet from './components/Wallet'
import Payment from './components/Payment'
import { OPPAtoken, web3Provider } from './contract'


declare global {
	interface Window {
			ethereum: any
	}
}

function isMetaMaskInstalled() {
	return Boolean(window.ethereum && window.ethereum.isMetaMask)
}

function isMetaMaskConnected() {
	const {ethereum} = window
	const accounts = ethereum.request({method: 'eth_accounts'})
	return accounts && accounts.length > 0
}

function App() {

	const [ account, setAccount ] = useState('')
	const [ balance, setBalance ] = useState('')
	const [ connected, setConnected ] = useState(false)


	const loadBlockchainData = async() => {
		// Account 
		const accounts = await web3Provider.eth.getAccounts()
		setAccount(accounts[0])
		setConnected(true)

		const balanceInWei = await OPPAtoken.methods.balanceOf(accounts[0]).call()
		setBalance(web3Provider.utils.fromWei(balanceInWei, 'gwei').toString())
	}

	return (
		<div className="App">
			{ !connected && !isMetaMaskConnected()? (<button onClick={() => {
				const { ethereum } = window
				ethereum.request({ method: 'eth_requestAccounts' })
				loadBlockchainData()

			}}>Connect Metamask</button>) : (
				<>
					<Wallet balance={ balance? balance:'0' } wallet_address={ account } />
					<Payment account={ account } /></>
			)}
		</div>
	)
}

export default App
