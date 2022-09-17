import { ChainId } from '@mangoswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xB186cb31203302631b37cc38f9961A1129d43DB5'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
