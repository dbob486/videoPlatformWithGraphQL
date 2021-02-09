import styles from '../styles/upload.module.css'
import { Box, Flex, Center, Link, Input, } from '@chakra-ui/react';
import { useMutation, gql } from '@apollo/client';

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`

const Upload = () => {
    // destructured array of the uploaded file
    const [uploadFile] = useMutation(UPLOAD_FILE, {
        onCompleted: data => console.log(data)
    })

    // The parameter is the event
    function handleFile({
        target: {
            validity,
            files: [file],
        },
    }) {
        if (validity.valid) uploadFile({ variables: { file } });
    }

    return (
        <Box h='100vh'>
            <Center mt='1em' className={styles.uploadRouting}><Link href='/'><a><Box boxSize='6em' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white'><Center>Home</Center></Box></a></Link></Center>
            <Center>
                <Input type='file' onChange={handleFile} mt='5em' pt='1em' h='6vh' w='20vw' color='cyan.400' border='1px' boxShadow='md' rounded='md' bg='white' />
            </Center>
        </Box>
    )
}

export default Upload;
