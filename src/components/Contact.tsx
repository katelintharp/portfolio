// components/Contact.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, ExternalLinkIcon } from '@chakra-ui/icons';

const Contact: React.FC = () => {
    return (
        <Box id="contact" py={20}>
            <Container maxW="800px">
                <Box
                    bg="white"
                    borderRadius="20px"
                    p={12}
                    boxShadow="0 5px 30px rgba(156, 163, 219, 0.15)"
                    textAlign="center"
                >
                    <VStack spacing={6}>
                        <Heading
                            as="h2"
                            size="2xl"
                            fontWeight="300"
                            color="brand.textDark"
                            letterSpacing="-0.5px"
                        >
                            Let's Connect!
                        </Heading>
                        <Text
                            color="brand.textBody"
                            fontSize="1.1rem"
                            fontStyle="italic"
                            fontFamily="Georgia, serif"
                            maxW="600px"
                        >
                            I'm passionate about opportunities that combine education and technology.
                        </Text>

                        <HStack spacing={4} wrap="wrap" justify="center" pt={4}>
                            <Button
                                as="a"
                                href="mailto:katelin.c.tharp@gmail.com"
                                leftIcon={<EmailIcon />}
                                bg="brand.border"
                                color="brand.textDark"
                                px={6}
                                py={6}
                                borderRadius="25px"
                                fontWeight="400"
                                _hover={{
                                    bg: 'brand.primaryLight',
                                    color: 'white',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 5px 15px rgba(156, 163, 219, 0.3)',
                                }}
                                transition="all 0.3s ease"
                            >
                                Email Me
                            </Button>

                            <Button
                                as="a"
                                href="tel:+14087040993"
                                leftIcon={<PhoneIcon />}
                                bg="brand.border"
                                color="brand.textDark"
                                px={6}
                                py={6}
                                borderRadius="25px"
                                fontWeight="400"
                                _hover={{
                                    bg: 'brand.secondary',
                                    color: 'white',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 5px 15px rgba(244, 184, 197, 0.3)',
                                }}
                                transition="all 0.3s ease"
                            >
                                (408) 704-0993
                            </Button>

                            <Button
                                as="a"
                                href="https://linkedin.com/in/katelin-tharp/"
                                target="_blank"
                                leftIcon={<ExternalLinkIcon />}
                                bg="brand.border"
                                color="brand.textDark"
                                px={6}
                                py={6}
                                borderRadius="25px"
                                fontWeight="400"
                                _hover={{
                                    bg: 'brand.accent',
                                    color: 'white',
                                    transform: 'translateY(-3px)',
                                    boxShadow: '0 5px 15px rgba(168, 213, 186, 0.3)',
                                }}
                                transition="all 0.3s ease"
                            >
                                LinkedIn
                            </Button>
                        </HStack>

                        <Box pt={8} borderTop="1px solid" borderColor="brand.border" w="full">
                            <VStack spacing={2}>
                                <Text color="brand.textLight" fontSize="0.95rem">
                                    📧 katelin.c.tharp@gmail.com
                                </Text>
                                <Text color="brand.textLight" fontSize="0.95rem">
                                    📍 Berkeley, California
                                </Text>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;