import Link from 'next/link';
import styles from '../styles/index.module.css'

const { Box, Flex, Center, Spacer, } = require('@chakra-ui/react');



const Index = () => {
  return (
    <Box h='100vh'>
      <Center>
        <Flex className={styles.indexRouting} direction='row' mt='35vh'>
          <Link href='/gotube'><a><Box fontSize='2.5em' boxSize='xs' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>Gotube</Center></Box></a></Link>
          <Spacer mr='5vw'/>
          <Link href='/upload'><a><Box fontSize='2.5em' boxSize='xs' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>Upload</Center></Box></a></Link>
          <Spacer mr='5vw'/>
          <Link href='/livestream'><a><Box fontSize='2.5em' boxSize='xs' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>LiveStreaming</Center></Box></a></Link>
          <Spacer mr='5vw'/>
          <Link href='/signup'><a><Box fontSize='2.5em' boxSize='xs' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center >SignUp</Center></Box></a></Link>
        </Flex>
      </Center>
    </Box>
  )
}

export default Index;
