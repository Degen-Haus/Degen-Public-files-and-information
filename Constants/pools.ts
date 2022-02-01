import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      4002: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      250: '0x72A7A3770B4BC999026F3663F1534581E0c59f2a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.025',
    sortOrder: 1,

    isFinished: false,
  },
  // {
  //   sousId: 1,
  //   stakingToken: serializedTokens.dope,
  //   earningToken: serializedTokens.cake,
  //   contractAddress: {
  //     4002: '',
  //     250: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0125',
  //   sortOrder: 2,
  //
  //   isFinished: false,
  // },
  // {
  //   sousId: 0,
  //   stakingToken: serializedTokens.kek,
  //   earningToken: serializedTokens.kek,
  //   contractAddress: {
  //     4002: '',
  //     250: '',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: false,
  //   tokenPerBlock: '0.05',
  //   sortOrder: 3,
  //
  //   isFinished: false,
  // },
]

export default pools
