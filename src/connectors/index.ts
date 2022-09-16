// import { ConnectorNames } from 'uikit'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { NetworkConnector } from './NetworkConnector'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '8989')

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary (): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
  supportedChainIds: [8989],
})

export const bscConnector = new BscConnector({ supportedChainIds: [8989] })

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: { [NETWORK_CHAIN_ID]: NETWORK_URL },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: 15000,
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URL,
  appName: 'Uniswap',
  appLogoUrl:
    'https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg',
})

const ConnectorNames = {
  Injected: "injected",
  WalletConnect: "walletconnect",
  BSC: "bsc"
}

export const connectorsByName: { [connectorName: string]: any } = {
  [ConnectorNames?.Injected]: injected,
  [ConnectorNames?.WalletConnect]: walletconnect,
  [ConnectorNames?.BSC]: bscConnector
}

// TODO  chainId 没连接钱包获取不到
export const ConnectToChain = async (chainId: number, isFirst = false) => {
  const {ethereum} = window as any;

  if (typeof ethereum === "undefined") {
    console.log("MetaMask is not installed!")
  }
  if (isFirst === false && (chainId === 8989 || chainId === 8989)) {
    return
  }

  const ChainInfo = [
    {
      chainId: `0x${NETWORK_CHAIN_ID.toString(16)}`,
      chainName: 'TX Chain Mainnet',
      nativeCurrency: {
        name: "TX",
        symbol: "TX",
        decimals: 18,
      },
      rpcUrls: 'https://tx.telegramx.space',
      blockExplorerUrls: 'https://www.telegramx.link/',
    },
  ]

  console.log(ChainInfo)
  const result = await ethereum?.request({ method: 'wallet_addEthereumChain', params: ChainInfo })
  // window.location.reload()

  if (result) {
    console.log(result)
  }
}
