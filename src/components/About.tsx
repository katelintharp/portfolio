//components/About.tsx
import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    VStack,
    Image,
    Link, HStack, Button,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {Link as RouterLink} from "react-router-dom";
import React from "react";
const About: React.FC = () => {
    return (
        <Box id="about" py={20}>
            <Container maxW="1200px">
                <VStack spacing={3} mb={12}>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-0.5px"
                    >
                        About Me
                    </Heading>
                    <Text
                        color="brand.textBody"
                        fontSize="1.1rem"
                        fontStyle="italic"
                        fontFamily="Georgia, serif"
                    >
                        Hi! I'm Katelin :)
                    </Text>
                </VStack>

                <Box
                    bg="white"
                    borderRadius="20px"
                    p={12}
                    boxShadow="0 5px 30px rgba(156, 163, 219, 0.15)"
                    mb={12}
                >
                    <Grid templateColumns={{ base: '1fr', md: '1fr 2fr' }} gap={12} alignItems="center">
                        <Box position="relative">
                            <Image
                                src={`${import.meta.env.BASE_URL}images/Headshot.png`}
                                alt="Katelin Tharp"
                                w="full"
                                borderRadius="20px"
                                boxShadow="0 10px 30px rgba(156, 163, 219, 0.3)"
                            />
                        </Box>
                        <VStack align="start" spacing={5}>
                            <Text color="brand.textBody" lineHeight="1.9">
                                As an aspiring educator at{' '}
                                <Link
                                    href="https://bse.berkeley.edu/katelin-tharp"
                                    isExternal
                                    color="brand.primary"
                                    fontWeight="500"
                                    _hover={{
                                        color: 'brand.primaryLight',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Berkeley's Teacher Education Program (BTEP)
                                    <ExternalLinkIcon mx="4px" boxSize={3} />
                                </Link>{' '}
                                with experience
                                in software engineering, I bring a unique perspective to the classroom. 
                                My journey combines rigorous technical training with a passion for education.
                            </Text>
                            <Text color="brand.textBody" lineHeight="1.9">
                                I've had the privilege of supporting thousands of student across continents, from Northeastern
                                University's home campus in Boston to its London's Global Scholars program. 
                                My approach focuses on making learning accessible, engaging, and relevant—whether 
                                I'm teaching functional programming or English classics.
                            </Text>
                            <Text color="brand.textBody" lineHeight="1.9">
                                Recognized with the{' '}
                                <Link
                                    href="https://www.khoury.northeastern.edu/meet-the-2025-khoury-college-award-winners/"
                                    isExternal
                                    color="brand.primary"
                                    fontWeight="500"
                                    _hover={{
                                        color: 'brand.primaryLight',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    2025 Khoury College Undergraduate Teaching Award
                                    <ExternalLinkIcon mx="4px" boxSize={3} />
                                </Link>{' '}, I'm committed to creating
                                inclusive learning environments where every student can thrive.
                            </Text>

                            {/* View Resume Button */}
                            <HStack justify="center" mt={8} spacing={4} flexWrap="wrap">
                                <Button
                                    as={RouterLink}
                                    to="/resume"
                                    size="lg"
                                    bg="brand.primary"
                                    color="white"
                                    px={8}
                                    py={6}
                                    borderRadius="30px"
                                    fontWeight="500"
                                    letterSpacing="0.5px"
                                    _hover={{
                                        bg: '#F7C8D3',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 20px rgba(244, 184, 197, 0.4)',
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    View Resume
                                </Button>
                            </HStack>
                        </VStack>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
