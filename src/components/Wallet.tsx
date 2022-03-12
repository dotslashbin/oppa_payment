import React, { ReactElement } from 'react'

function Wallet(props: { wallet_address: string, balance: string }): ReactElement {

	const { balance, wallet_address } = props

	return (
		<div>
			Your Wallet details: 
			{ wallet_address }
			<div>
				FOOB: { balance }
			</div>
		</div>
	)
}

export default Wallet