import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'TRIP',
    lpAddresses: {
      4002: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      250: '0xD948EfcC99be419cA9bDACE89b2beC31EDF13adB',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 1,
    lpSymbol: 'TRIP-FTM LP',
    lpAddresses: {
      4002: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      250: '0x1758D21f2915583f49Cc2b3e583dF3E55F0dD2C0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 2,
    lpSymbol: 'USDC-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xC70E685774C4086650Cd24F81F8Cb562b909896C',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 3,
    lpSymbol: 'DOPE-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x0D237282F4128981D90fddb8e711f523D7d2BA37',
    },
    token: serializedTokens.dope,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 4,
    lpSymbol: 'TRIP-USDC LP',
    lpAddresses: {
      4002: '',
      250: '0xf2e4b42aB6adaf7E0cCBce1F150EC61061477dAB',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 7,
    lpSymbol: 'KEK-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x07624B344C7558495f2c3833854F6be3626AC860',
    },
    token: serializedTokens.kek,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 14,
    lpSymbol: 'RNDM-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xee908631341b4b609f0991e5664f9edb4ec56017',
    },
    token: serializedTokens.rndm,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 5,
    lpSymbol: 'JUST-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xA862527505C072Acd513af86fa7bF864b821A301',
    },
    token: serializedTokens.just,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 6,
    lpSymbol: 'TOMB-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x80148508E7A9fb2Aac66fE1323b709Aa7dF064a9',
    },
    token: serializedTokens.tomb,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 8,
    lpSymbol: 'AVAX-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xE18526dA10c54224F50ef5B510a10Ea6E0D4bC1D',
    },
    token: serializedTokens.avax,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 9,
    lpSymbol: 'REAPER-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xb0472161FaE471395D48C44268b0CB4108E8a3ba',
    },
    token: serializedTokens.reaper,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 10,
    lpSymbol: 'DAI-USDC LP',
    lpAddresses: {
      4002: '',
      250: '0x00cec207ea509135476d944f255584ae46e43f3b',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 11,
    lpSymbol: 'BNB-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0xfc8cfd93e5a7f034b4158dcb62379dd3bf6ad89e',
    },
    token: serializedTokens.bnb,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 12,
    lpSymbol: 'KEK-DOPE LP',
    lpAddresses: {
      4002: '',
      250: '0x862bb01fc832bf3170ca23978cdd70b2cbdeab3b',
    },
    token: serializedTokens.kek,
    quoteToken: serializedTokens.dope,
  },
  {
    pid: 13,
    lpSymbol: 'KAE-FTM LP',
    lpAddresses: {
      4002: '',
      250: '0x8991b637623e3b80b7bbe9f3bf9837da3b56a19b',
    },
    token: serializedTokens.kae,
    quoteToken: serializedTokens.wftm,
  },
  {
    pid: 15,
    lpSymbol: 'DOPE-TRIP LP',
    lpAddresses: {
      4002: '',
      250: '0x6ad4c806ccc41467ac44a505aac8a18d104dc10f',
    },
    token: serializedTokens.dope,
    quoteToken: serializedTokens.cake,
  },
]

export default farms
