import styles from '../styles/gotube.module.css'
const { Box, Flex, Center, Link, } = require('@chakra-ui/react');



const Gotube = () => {
    return (
        <Box h='100vh'>
            <Center mt='1em' className={styles.gotubeRouting}><Link href='/'><a><Box boxSize='6em' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>Home</Center></Box></a></Link></Center>
            <Center>
                <Flex direction='row' mt='20vh'>
                    <Box fontSize='2.5em' boxSize='xs' mr='5vw' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>Video 1</Center></Box>
                    <Box fontSize='2.5em' boxSize='xs' mr='5vw' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>Video 2</Center></Box>
                    <Box fontSize='2.5em' boxSize='xs' mr='5vw' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>Video 3</Center></Box>
                    <Box fontSize='2.5em' boxSize='xs' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center alignContent='center'>Video 4</Center></Box>
                </Flex>
            </Center>
        </Box>
    )
}

export default Gotube;
