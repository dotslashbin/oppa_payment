import React, { ReactElement } from 'react'

function Wallet(props: { wallet_address: string }): ReactElement {

	const { wallet_address } = props

	return (
		<div>
			Wallet details: 
			{ wallet_address }
		</div>
	)
}

export default Wallet