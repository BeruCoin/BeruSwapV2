import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BeruSwap',
  description:
    'The Fastest AMM on BSC ',
  image: 'https://BeruSwap.website/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BeruSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BeruSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BeruSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BeruSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BeruSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BeruSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BeruSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BeruSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BeruSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BeruSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BeruSwap Info & Analytics')}`,
        description: 'View statistics for BeruSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BeruSwap Info & Analytics')}`,
        description: 'View statistics for BeruSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('BeruSwap Info & Analytics')}`,
        description: 'View statistics for BeruSwap exchanges.',
      }
    default:
      return null
  }
}
