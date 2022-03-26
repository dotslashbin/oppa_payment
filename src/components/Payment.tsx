import React, { ReactElement, useState } from 'react'

import { STORE_WALLET_ADDRESS } from '../config'
import { OPPAtoken, web3Provider } from '../contract'

function Payment(props: { account: any }): ReactElement  {

	const [ tnx, setTnx ] = useState('')

	const { account } = props

	const processPayment = async () => {
		const decimals = web3Provider.utils.toBN(9)
		const amount = web3Provider.utils.toBN(4)
		const value = amount.mul(web3Provider.utils.toBN(10).pow(decimals))
		OPPAtoken.methods.transfer(STORE_WALLET_ADDRESS, value).send({from: account})
			.on('transactionHash', function(hash: any){
				setTnx(`TRANSACTION HASH: ${ hash }`)
				console.log('TRRANSFER TRANSACTION HASH: ', hash)
			})
		
	}

	return (
		<div>
			<div>
				{ tnx }
			</div>
			<button onClick={() =>  processPayment()}>Pay 4 now</button>
		</div>
	)
}

export default Payment

function callback( err: Error ): void {
	throw new Error( 'Function not implemented.' )
}
