import Web3 from 'web3'
import { TOKEN_ADDRESS } from '../config'

export const web3Provider = new Web3(
	Web3.givenProvider || 'http://localhost:8545'
)

export const OPPAtoken = new web3Provider.eth.Contract(
	[
		{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_sender',
					type: 'address',
				},
			],
			name: 'Testpay',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_sender',
					type: 'address',
				},
			],
			name: 'Testtran',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{ internalType: 'address', name: '', type: 'address' },
				{ internalType: 'address', name: '', type: 'address' },
			],
			name: 'allowance',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: '_spender', type: 'address' },
				{ internalType: 'uint256', name: '_value', type: 'uint256' },
			],
			name: 'approve',
			outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: '', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'decimals',
			outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'testpay',
			outputs: [
				{
					components: [
						{ internalType: 'address', name: 'payer', type: 'address' },
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					],
					internalType: 'struct FOOBToken.Something',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'testsay',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: '_value', type: 'uint256' }],
			name: 'testtran',
			outputs: [{ internalType: 'bool', name: 'succeess', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: '_to', type: 'address' },
				{ internalType: 'uint256', name: '_value', type: 'uint256' },
			],
			name: 'transfer',
			outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: '_from', type: 'address' },
				{ internalType: 'address', name: '_to', type: 'address' },
				{ internalType: 'uint256', name: '_value', type: 'uint256' },
			],
			name: 'transferFrom',
			outputs: [{ internalType: 'bool', name: 'success', type: 'bool' }],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'version',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
	],
	TOKEN_ADDRESS
)
