import { useContext } from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'


const useTheme = () => {

  const theme = useContext(StyledThemeContext)
  return {  theme }
}

export default useTheme
