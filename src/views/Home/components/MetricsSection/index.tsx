import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from 'beruswapui-toolkit/packages/pancake-uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data 
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)


  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="32px" height="32px"/>,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      
      <Heading textAlign="center" scale="xl">
        {t('What we bring')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('To the table')}
      </Heading>
      <Text textAlign="center" color="textSubtle">
        {t('Exchanging crypto is evolving. ')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
        {t('The current restaurant DeFi crypto swap meta needs some crunch.')}
        
        </Text>
      </Flex>

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Wanna have a taste?')}
      </Text>

      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Have a safe bite')}
            bodyText={t('The Beru Swap defi for exchanging crypto is the safest one in the kitchen.')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Digest trade fast')}
            bodyText={t('You can swap any coin on the binance chain at the highest speed.')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <StatCardContent
            headingText={t('Safe your money')}
            bodyText={t('With the help of Beru Swap your exchange will suffer little to zero fees.')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
