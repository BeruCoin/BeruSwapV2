import { MenuItemsType } from 'beruswapui-toolkit/packages/pancake-uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/',
    showItemsOnMobile: false,
  },

  {
    label: t('Liquidity '),
    icon: 'Swap',
    href: '/',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Coming soon'),
        href: '/'
      }
    ]
  },

  // {
  //   label: t('Earn'),
  //   href: '/farms',
  //   icon: 'Earn',
  //   items: [
  //     {
  //       label: t('Farms'),
  //       href: '/farms',
  //     },
  //     {
  //       label: t('Pools'),
  //       href: '/pools',
  //     },
  //   ],
  // },

  // {
  //   label: t('Info'),
  //   href: '/info',
  //   icon: 'More',
  //   items: [
  //     {
  //       label: t('Info'),
  //       href: '/info',
  //     },

  //   ],
  // },
]

export default config
