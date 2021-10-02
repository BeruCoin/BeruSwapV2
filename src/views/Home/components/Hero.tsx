import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Link, Button } from 'beruswapui-toolkit/packages/pancake-uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'

const BeruWrapper = styled.div`
  width: 100%;
`

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'BeruHands'


const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>

      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="secondary" mb="24px">
            {t('When it comes to the crunch, prepare for the feast')}
          </Heading>
          <Heading scale="md" mb="24px">
            {t('Swap crypto assets instantly, everywhere on the hottest decentralized platform')}
          </Heading>
          <Flex>
            {!account && <ConnectWalletButton mr="8px" />}
            {/* <Link mr="16px" href="/">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </Link> */}
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BeruWrapper>
            <img src={`${imagePath}${imageSrc}.gif`} srcSet='/images/home/lunar-bunny/BeruHands.gif' alt={t('Lunar bunny')} />
          </BeruWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
