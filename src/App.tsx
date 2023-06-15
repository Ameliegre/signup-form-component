import React, { SyntheticEvent, useState } from 'react'
import { Flex, Box, Button, Container, FormControl, FormHelperText, Input, Heading, Text, Highlight, Stack, InputGroup, InputRightElement, Image } from '@chakra-ui/react'
import ErrorIcon from './images/icon-error.svg'

type input = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const emailREGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export function App () {
  const [input, setInput] = useState<input>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [firstNameError, setFirstNameError] = useState<boolean>(false)
  const [lastNameError, setLastNameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setFirstNameError(false)
    setLastNameError(false)
    setEmailError(false)
    setPasswordError(false)
    const emailValid = emailREGEX.test(input.email)
    setIsEmailValid(false)
    if (input.firstName === '' || input.lastName === '' || input.email === '' || input.password === '') {
      setFirstNameError(true)
      setLastNameError(true)
      setEmailError(true)
      setPasswordError(true)
    } else if (!emailValid) {
      setIsEmailValid(true)
    }
  }

  console.log(isEmailValid, emailError)

  return (
    <Container maxW='container.m' h='100vh' bgImage="url('./images/bg-intro-desktop.png')" bgColor='hsl(0, 100%, 74%)'>
      <Flex pt={'20vh'} pl={20} pr={20} alignItems={'center'} columnGap={'42px'}>
        <Box color={'white'} w={'370px'}>
          <Heading as='h1'>Learn to code by watching others</Heading>
          <Text pt={'14px'} fontSize={'12px'}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
          but understanding how developers think is invaluable.</Text>
        </Box>
        <Flex direction={'column'} justify={'center'} rowGap={5} w={'400px'}>
          <Text w='100%' bgColor='hsl(248, 32%, 49%)' color={'white'} pl={'70px'} py={4} fontSize={'12px'} borderRadius={10} boxShadow='0px 5px rgba(0, 0, 0, 0.15)'>
            <Highlight query='Try it free 7 days' styles={{ color: 'white', fontWeight: '700' }}>Try it free 7 days then $20/mo. thereafter</Highlight>
          </Text>
          <FormControl as='form' onSubmit={handleSubmit} display={'flex'} flexDirection="column" alignContent="center" bgColor={'white'} p={10} borderRadius={10} boxShadow='0px 5px rgba(0, 0, 0, 0.15)' >
            <Stack spacing={3}>

              <InputGroup display={'flex'} flexDirection={'column'}>
                <InputRightElement>
                  {input.firstName === '' && firstNameError ? <Image height={4} src={ErrorIcon}/> : <></>}
                </InputRightElement>
                <Input id='firsName' borderColor={input.firstName === '' && firstNameError ? 'hsl(0, 100%, 74%)' : 'gray.200'} fontWeight={'500'} fontSize={14} placeholder='First Name' value={input.firstName || ''} onChange={(e) => setInput({ ...input, firstName: e.target.value })}/>
                {(firstNameError && input.firstName === '') && <Text as='i' pt={'4px'} alignSelf={'flex-end'} fontSize={10} color={'hsl(0, 100%, 74%)'} >First Name cannot be empty</Text>}
              </InputGroup>

              <InputGroup display={'flex'} flexDirection={'column'}>
                <InputRightElement >
                  {input.lastName === '' && lastNameError ? <Image height={4} src={ErrorIcon}/> : <></>}
                </InputRightElement>
                <Input id='lasName' borderColor={input.lastName === '' && lastNameError ? 'hsl(0, 100%, 74%)' : 'gray.200'} fontWeight={'500'} fontSize={14} placeholder='Last Name' value={input.lastName || ''} onChange={(e) => setInput({ ...input, lastName: e.target.value })}/>
                {(lastNameError && input.lastName === '') && <Text as='i' pt={'4px'} alignSelf={'flex-end'} fontSize={10} color={'hsl(0, 100%, 74%)'}>Last Name cannot be empty</Text>}
              </InputGroup>

              <InputGroup display={'flex'} flexDirection={'column'}>
                <InputRightElement >
                    {input.email === '' && emailError ? <Image height={4} src={ErrorIcon}/> : <></>}
                </InputRightElement>
                <Input id='email' borderColor={input.email === '' && emailError ? 'hsl(0, 100%, 74%)' : 'gray.200'} fontWeight={'500'} fontSize={14} placeholder='Email Address' value={input.email || ''} onChange={(e) => setInput({ ...input, email: e.target.value })}/>
                {(emailError && input.email === '') && (<Text as='i' pt={'4px'} alignSelf={'flex-end'} fontSize={10} color={'hsl(0, 100%, 74%)'}>Email cannot be empty</Text>)}
                {(isEmailValid) && (<Text as='i' pt={'4px'} alignSelf={'flex-end'} fontSize={10} color={'hsl(0, 100%, 74%)'}>Looks like this is not an email</Text>)}
              </InputGroup>

              <InputGroup display={'flex'} flexDirection={'column'}>
                <InputRightElement>
                      {input.password === '' && passwordError ? <Image height={4} src={ErrorIcon}/> : <></>}
                  </InputRightElement>
                  <Input id='password' type='password' borderColor={input.password === '' && passwordError ? 'hsl(0, 100%, 74%)' : 'gray.200'} fontWeight={'500'} fontSize={14} placeholder='Password' value={input.password || ''} onChange={(e) => setInput({ ...input, password: e.target.value })}/>
                  {(passwordError && input.password === '') && <Text as='i' pt={'4px'} alignSelf={'flex-end'} fontSize={10} color={'hsl(0, 100%, 74%)'}>Password cannot be empty</Text>}
              </InputGroup>

              <Button onClick={handleSubmit} cursor={'pointer'} w={'100%'} color={'white'} bgColor={'hsl(154, 59%, 51%)'}>CLAIM YOUR FREE TRIAL</Button>
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
