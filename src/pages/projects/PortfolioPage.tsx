// pages/projects/PortfolioPage.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Tag,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
    Code,
} from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
    return (
        <Box minH="100vh" bg="brand.background">
            {/* Header */}
            <Box bg="linear-gradient(135deg, #B8BEE8 0%, #9CA3DB 100%)" py={20}>
                <Container maxW="1200px">
                    <HStack mb={6}>
                        <Button
                            as={Link}
                            to="/"
                            leftIcon={<ArrowBackIcon />}
                            variant="ghost"
                            color="white"
                            _hover={{ bg: 'whiteAlpha.200' }}
                        >
                            Back to Home
                        </Button>
                    </HStack>
                    <VStack align="start" spacing={4}>
                        <Heading as="h1" size="3xl" color="white" fontWeight="300">
                            💼 Portfolio Website
                        </Heading>
                        <Text fontSize="xl" color="whiteAlpha.900">
                            Modern, Responsive Web Design with React
                        </Text>
                        <HStack spacing={3} flexWrap="wrap">
                            <Tag bg="whiteAlpha.200" color="white" size="lg">React</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">TypeScript</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">ChakraUI</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">Web Design</Tag>
                        </HStack>
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

                    {/* Code Quality */}
                    <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                        <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                            Code Architecture
                        </Heading>
                        <VStack align="start" spacing={4}>
                            <Box>
                                <Text fontWeight="500" color="brand.textDark" mb={2}>
                                    Component Structure
                                </Text>
                                <Code p={3} borderRadius="md" fontSize="sm" w="full">
                                    {`// Example: Reusable project card component
interface ProjectCardProps {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    icon, title, description, tags, gradient, link 
}) => (
    <Box as={Link} to={link}>
        {/* Modular, type-safe components */}
    </Box>
);`}
                                </Code>
                            </Box>
                            <Box>
                                <Text fontWeight="500" color="brand.textDark" mb={2}>
                                    Best Practices
                                </Text>
                                <List spacing={2} ml={4}>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • TypeScript for type safety and better developer experience
                                    </ListItem>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • Component-based architecture for maintainability
                                    </ListItem>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • Custom hooks for reusable logic
                                    </ListItem>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • Optimized bundle size and lazy loading
                                    </ListItem>
                                </List>
                            </Box>
                        </VStack>
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

                    {/* CTA */}
                </VStack>
            </Container>
        </Box>
    );
};

export default PortfolioPage;