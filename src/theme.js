import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif"
  },
  styles: {
    global: {
      body: {
        margin: 0,
        height: '100vh'
      },
      '.error': {
        borderColor: 'hsl(0, 100%, 74%)'
      }
    }
  }
})

export default theme
