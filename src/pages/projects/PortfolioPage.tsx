// pages/projects/PortfolioPage.tsx
import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon, CheckCircleIcon } from '@chakra-ui/icons';
import Navbar from "../../components/Navbar.tsx";

const PortfolioPage: React.FC = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Box minH="100vh" bg="brand.background">
                {/* Header */}
                <Box bg="linear-gradient(135deg, #B8BEE8 0%, #9CA3DB 100%)" py={20} pt={32}>
                    <Container maxW="1200px">
                        <VStack align="start" spacing={4}>
                            <Heading as="h1" size="3xl" color="white" fontWeight="300">
                                💼 Portfolio Website
                            </Heading>
                            <Text fontSize="xl" color="whiteAlpha.900">
                                Modern, Responsive Web Design with React
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
                                href="https://github.com/katelintharp/portfolio"
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
                                View on GitHub
                            </Button>
                        </HStack>
                        {/* Overview */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={4} color="brand.textDark" fontWeight="400">
                                Project Overview
                            </Heading>
                            <Text color="brand.textBody" fontSize="lg" lineHeight="1.8" mb={4}>
                                You're looking at it! This portfolio website is a fully custom-built React application
                                showcasing modern web development practices, responsive design principles, and thoughtful
                                user experience. Built to highlight my journey from software engineering to education,
                                it serves as both a professional showcase and a technical demonstration.
                            </Text>
                        </Box>

                        {/* Technical Stack */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                Technical Implementation
                            </Heading>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Box>
                                    <Heading as="h3" size="md" mb={3} color="brand.primary">Frontend Technologies</Heading>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            React 18 with TypeScript
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            ChakraUI component library
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            React Router for navigation
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Emotion for styled components
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box>
                                    <Heading as="h3" size="md" mb={3} color="brand.primary">Build & Deployment</Heading>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Vite for fast development
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            GitHub Pages hosting
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Automated CI/CD pipeline
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            SEO optimization
                                        </ListItem>
                                    </List>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        {/* Design Features */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                Design Highlights
                            </Heading>
                            <List spacing={4}>
                                <ListItem>
                                    <HStack align="start">
                                        <Text fontSize="2xl" mt={-1}>📱</Text>
                                        <Box>
                                            <Text fontWeight="500" color="brand.textDark">Fully Responsive</Text>
                                            <Text color="brand.textBody">
                                                Seamlessly adapts from mobile phones to ultra-wide desktop displays,
                                                ensuring optimal viewing experience across all devices.
                                            </Text>
                                        </Box>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack align="start">
                                        <Text fontSize="2xl" mt={-1}>✨</Text>
                                        <Box>
                                            <Text fontWeight="500" color="brand.textDark">Smooth Interactions</Text>
                                            <Text color="brand.textBody">
                                                Subtle animations and transitions enhance user experience. Hover effects, scroll animations, and page transitions
                                                create a polished, professional feel.
                                            </Text>
                                        </Box>
                                    </HStack>
                                </ListItem>
                            </List>
                        </Box>

                        {/* Future Enhancements */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                Continuous Improvement
                            </Heading>
                            <Text color="brand.textBody" lineHeight="1.8" mb={4}>
                                This portfolio is a living project that evolves with my journey. Planned enhancements include:
                            </Text>
                            <List spacing={2}>
                                <ListItem color="brand.textBody">
                                    • Blog section for sharing educational insights and technical tutorials
                                </ListItem>
                                <ListItem color="brand.textBody">
                                    • Interactive demos of teaching methodologies
                                </ListItem>
                                <ListItem color="brand.textBody">
                                    • Dark mode support for improved accessibility
                                </ListItem>
                                <ListItem color="brand.textBody">
                                    • Integration with educational content management systems
                                </ListItem>
                            </List>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </>
    );
};

export default PortfolioPage;
