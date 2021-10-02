import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Cryptoverse awaits. Explore it while its new',
  bodyText: 'Dont go alone in the vast universe of crypto. Grap a coin, two, or bring your own value by adding liquidity to the pool',
  reverse: false,
  primaryButton: {
    to: '/',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: '/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'BeruMain', alt: 'BNB token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Enough men in the middle of our transactions',
  bodyText: 'BeruSwap makes sure that the transaction happens only between you and the trader. No gov, no banks',
  reverse: true,
  primaryButton: {
    to: '/',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: '/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'BeruBank', alt: 'Pie chart' },
    ],
  },
}

// export const cakeSectionData: SalesSectionProps = {
//   headingText: 'CAKE makes our world go round.',
//   bodyText:
//     'CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
//   reverse: false,
//   primaryButton: {
//     to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
//     text: 'Buy CAKE',
//     external: false,
//   },
//   secondaryButton: {
//     to: 'https://docs.pancakeswap.finance/tokenomics/cake',
//     text: 'Learn',
//     external: true,
//   },

//   images: {
//     path: '/images/home/cake/',
//     attributes: [
//       { src: 'bottom-right', alt: 'Small 3d pancake' },
//       { src: 'top-right', alt: 'Small 3d pancake' },
//       { src: 'coin', alt: 'CAKE token' },
//       { src: 'top-left', alt: 'Small 3d pancake' },
//     ],
//   },
// }
