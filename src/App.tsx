import React, { useState } from 'react'
import { Flex, Box, Button, Container, FormControl, FormHelperText, Input, Heading, Text, Highlight, Stack } from '@chakra-ui/react'

type input = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

export function App () {
  const [input, setInput] = useState<input>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = () => {
    console.log('submit')
  }

  console.log(error)
  return (
    <Container maxW='container.m' h='100vh' bgImage="url('./images/bg-intro-desktop.png')" bgColor='hsl(0, 100%, 74%)'>
      <Flex pt={'20vh'} pl={20} pr={20} alignItems={'center'} columnGap={'42px'}>
        <Box color={'white'} w={'370px'}>
          <Heading as='h1'>Learn to code by watching others</Heading>
          <Text pt={'14px'} fontSize={'12px'}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.</Text>
        </Box>
        <Flex direction={'column'} justify={'center'} rowGap={5} w={'400px'}>
          <Text w='100%' bgColor='hsl(248, 32%, 49%)' color={'white'} pl={'70px'} py={4} fontSize={'12px'} borderRadius={10} boxShadow='lg'>
            <Highlight query='Try it free 7 days' styles={{ color: 'white', fontWeight: '700' }}>Try it free 7 days then $20/mo. thereafter</Highlight>
          </Text>
          <FormControl display={'flex'} flexDirection="column" alignContent="center" bgColor={'white'} p={10} borderRadius={10} boxShadow='lg' >
            <Stack spacing={3}>
              <Input className={ !error ? 'error' : ''} fontWeight={'500'} fontSize={14} placeholder='First Name' value={input.firstName || ''} onChange={(e) => setInput({ ...input, firstName: e.target.value })}/>
              <Text color={'hsl(0, 100%, 74%)'} >First Name cannot be empty</Text>
              <Input fontWeight={'500'} fontSize={14} placeholder='Last Name' value={input.lastName || ''} onChange={(e) => setInput({ ...input, lastName: e.target.value })}/>
              <Input type='email' fontWeight={'500'} fontSize={14} placeholder='Email Address' value={input.email || ''} onChange={(e) => setInput({ ...input, email: e.target.value })}/>
              <Input type='password' fontWeight={'500'} fontSize={14} placeholder='Password' value={input.password || ''} onChange={(e) => setInput({ ...input, password: e.target.value })}/>
              <Button onSubmit={handleSubmit} cursor={'pointer'} w={'100%'} color={'white'} bgColor={'hsl(154, 59%, 51%)'} boxShadow='Inner'>Claim your free trial </Button>
            </Stack>
            <FormHelperText fontSize={'8px'} pl={'24px'}>
              <Highlight query='Terms and Services' styles={{ color: 'hsl(0, 100%, 74%)', fontWeight: '700' }}>By clicking the button, you are agreeing to our Terms and Services</Highlight></FormHelperText>
          </FormControl>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
