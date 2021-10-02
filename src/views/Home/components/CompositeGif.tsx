import React from 'react'
import styled from 'styled-components'
import { Box } from 'beruswapui-toolkit/packages/pancake-uikit'



const Wrapper = styled(Box)<{ maxHeight: string }>`
  position: relative;
  max-height: ${({ maxHeight }) => maxHeight};

`

const DummyImg = styled.img<{ maxHeight: string }>`
  max-height: ${({ maxHeight }) => maxHeight};
  visibility: hidden;
`

const ImageWrapper = styled(Box)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    max-height: 100%;
    width: auto;
    border-radius:15px;
  }
`

enum Resolution {
  MD = '1.5x',
  LG = '2x',
}
interface ImageAttributes {
  src: string
  alt: string
}

export interface CompositeGifProps {
  path: string
  attributes: ImageAttributes[]
}

interface ComponentProps extends CompositeGifProps {
  maxHeight?: string
}

export const getImageUrl = (base: string, imageSrc: string, resolution?: Resolution): string =>
  `${base}${imageSrc}${resolution ? `@${resolution}.gif` : '.gif'}`

export const getSrcSet = (base: string, imageSrc: string) => {
  return `${getImageUrl(base, imageSrc)} 512w, 
  ${getImageUrl(base, imageSrc, Resolution.MD)} 768w, 
  ${getImageUrl(base, imageSrc, Resolution.LG)} 1024w,`
}

const CompositeGif: React.FC<ComponentProps> = ({ path, attributes, maxHeight = '512px' }) => {
  return (
    <Wrapper maxHeight={maxHeight}>
      <DummyImg
        src={getImageUrl(path, attributes[0].src)}
        maxHeight={maxHeight}
        srcSet={getSrcSet(path, attributes[0].src)}
      />
      {attributes.map((image) => (
        <ImageWrapper key={image.src}>
          <img src={getImageUrl(path, image.src)} srcSet={getSrcSet(path, image.src)} alt={image.alt} />
        </ImageWrapper>
      ))}
    </Wrapper>
  )
}

export default CompositeGif
