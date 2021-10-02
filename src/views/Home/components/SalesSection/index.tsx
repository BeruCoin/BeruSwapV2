import React from 'react'
import { Flex, Text, Button, Link } from 'beruswapui-toolkit/packages/pancake-uikit'
import { useTranslation } from 'contexts/Localization'
import PurpleWordHeading from '../PurpleWordHeading'
import CompositeGif, { CompositeGifProps } from '../CompositeGif'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeGifProps
}

const SalesSection: React.FC<SalesSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <PurpleWordHeading text={ headingTranslatedText } />
          <Text color="textSubtle" mb="24px">
            {bodyTranslatedText}
          </Text>
          <Flex>
            <Link mr="16px" external={primaryButton.external} href={primaryButton.to}>
              <Button>
                <Text color="card" bold fontSize="16px">
                  {t(primaryButton.text)}
                </Text>
              </Button>
            </Link>
            <Link external={secondaryButton.external} href={secondaryButton.to}>
              {t(secondaryButton.text)}
            </Link>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <CompositeGif {...images} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
