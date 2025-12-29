// pages/projects/KhouryAwardPage.tsx
import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Divider,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { ExternalLinkIcon, StarIcon } from '@chakra-ui/icons';
import Navbar from "../../components/Navbar.tsx";

const KhouryAwardPage: React.FC = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Box minH="100vh" bg="brand.background">
                {/* Header */}
                <Box bg="linear-gradient(135deg, #FFA500 0%, #FFA500 100%)" py={20} pt={32}>
                    <Container maxW="1200px">
                        <VStack align="start" spacing={4}>
                            <Heading as="h1" size="3xl" color="white" fontWeight="300">
                                🏆 2025 Khoury College Teaching Award
                            </Heading>
                            <Text fontSize="xl" color="whiteAlpha.900">
                                Recognition for Excellence in Computer Science Education
                            </Text>
                        </VStack>
                    </Container>
                </Box>

                {/* Content */}
                <Container maxW="1200px" py={12}>
                    <VStack spacing={12} align="start">
                        <HStack spacing={4}>
                            <Button
                                as="a"
                                href="https://www.khoury.northeastern.edu/meet-the-2025-khoury-college-award-winners/"
                                target="_blank"
                                rel="noopener noreferrer"
                                size="lg"
                                bg="brand.primary"
                                color="white"
                                rightIcon={<ExternalLinkIcon />}
                                _hover={{
                                    bg: 'brand.primaryLight',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(156, 163, 219, 0.4)',
                                }}
                            >
                                View Official Announcement
                            </Button>
                        </HStack>
                        {/* Overview */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={4} color="brand.textDark" fontWeight="400">
                                Award Overview
                            </Heading>
                            <Text color="brand.textBody" fontSize="lg" lineHeight="1.8">
                                The Khoury College Undergraduate Teaching Award recognizes exceptional contributions to computer
                                science education. This prestigious award highlights dedication to student success, innovative
                                teaching methods, and the ability to make complex concepts accessible to learners at all levels.
                            </Text>
                        </Box>

                        {/* Key Achievements */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                Key Achievements
                            </Heading>
                            <List spacing={4}>
                                <ListItem display="flex" alignItems="start">
                                    <ListIcon as={StarIcon} color="gold" mt={1} />
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Lead TA for Global Scholars Program</Text>
                                        <Text color="brand.textBody">
                                            Pioneered cross-continental education initiatives, leading the London campus TA team
                                            while coordinating with Boston headquarters to ensure consistent, high-quality instruction.
                                        </Text>
                                    </Box>
                                </ListItem>
                                <ListItem display="flex" alignItems="start">
                                    <ListIcon as={StarIcon} color="gold" mt={1} />
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Three Years of Outstanding Service</Text>
                                        <Text color="brand.textBody">
                                            Consistently delivered exceptional support to over 1,000 students across multiple
                                            semesters, earning recognition for patient and effective teaching methods.
                                        </Text>
                                    </Box>
                                </ListItem>
                                <ListItem display="flex" alignItems="start">
                                    <ListIcon as={StarIcon} color="gold" mt={1} />
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Inclusive Teaching Approach</Text>
                                        <Text color="brand.textBody">
                                            Developed innovative methods to help students without prior CS experience succeed,
                                            making functional programming and complex concepts accessible to diverse learners.
                                        </Text>
                                    </Box>
                                </ListItem>
                            </List>
                        </Box>

                        {/* Impact */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                Impact & Recognition
                            </Heading>
                            <VStack align="start" spacing={4}>
                                <HStack spacing={8} flexWrap="wrap">
                                    <Box>
                                        <Text fontSize="3xl" fontWeight="bold" color="brand.primary">1,000+</Text>
                                        <Text color="brand.textBody">Students Mentored</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize="3xl" fontWeight="bold" color="brand.secondary">3</Text>
                                        <Text color="brand.textBody">Years of Service</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize="3xl" fontWeight="bold" color="brand.accent">2</Text>
                                        <Text color="brand.textBody">Continents Connected</Text>
                                    </Box>
                                </HStack>
                                <Divider />
                                <Text color="brand.textBody" lineHeight="1.8">
                                    This award represents not just personal achievement, but a commitment to transforming
                                    computer science education. By bridging the gap between complex theoretical concepts
                                    and practical understanding, I've helped countless students discover their potential
                                    in technology.
                                </Text>
                            </VStack>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </>
    );
};

export default KhouryAwardPage;
