import { ChainId } from '@mangoswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x4cC2F9126c738E84983C1316c0BE30BaBd0fC924'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
