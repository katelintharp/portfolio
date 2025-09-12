// pages/projects/WordlePage.tsx
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
} from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const WordlePage: React.FC = () => {
    return (
        <Box minH="100vh" bg="brand.background">
            {/* Header */}
            <Box bg="linear-gradient(135deg, #F4B8C5 0%, #FFB5C5 100%)" py={20}>
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
                            🎮 Covey.Town Wordle
                        </Heading>
                        <Text fontSize="xl" color="whiteAlpha.900">
                            Collaborative Word-Guessing in Virtual Meeting Spaces
                        </Text>
                        <HStack spacing={3} flexWrap="wrap">
                            <Tag bg="whiteAlpha.200" color="white" size="lg">React</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">TypeScript</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">Game Development</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">WebSockets</Tag>
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
                            href="https://github.com/neu-cs4530/fall-22-team-project-group-307"
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
                            A full-stack implementation of the popular NYT Wordle game integrated into Covey.Town,
                            an open-source virtual meeting platform. This project enables multiple users to play
                            Wordle together in real-time within virtual meeting rooms, fostering collaboration
                            and social interaction through gaming.
                        </Text>
                        <Text color="brand.textBody" fontSize="lg" lineHeight="1.8">
                            Built as part of CS4530 Software Engineering, this project demonstrates proficiency
                            in modern web development, real-time communication protocols, and collaborative
                            software development practices.
                        </Text>
                    </Box>

                    {/* Technical Details */}
                    <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                        <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                            Technical Implementation
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <Box>
                                <Heading as="h3" size="md" mb={3} color="brand.primary">Frontend</Heading>
                                <List spacing={2}>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        React with TypeScript for type-safe development
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        Phaser.js for game rendering and animations
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        ChakraUI for responsive modal interfaces
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        Real-time state synchronization
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Heading as="h3" size="md" mb={3} color="brand.primary">Backend</Heading>
                                <List spacing={2}>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        Node.js with Express server
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        WebSocket connections for real-time play
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        Game state management and validation
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                        Multi-player session handling
                                    </ListItem>
                                </List>
                            </Box>
                        </SimpleGrid>
                    </Box>

                    {/* Key Features */}
                    <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                        <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                            Key Features
                        </Heading>
                        <List spacing={4}>
                            <ListItem>
                                <HStack align="start">
                                    <Text fontSize="2xl" mt={-1}>🎯</Text>
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Real-Time Multiplayer</Text>
                                        <Text color="brand.textBody">
                                            Multiple users can play and spectate Wordle games simultaneously,
                                            with live updates across all connected clients.
                                        </Text>
                                    </Box>
                                </HStack>
                            </ListItem>
                            <ListItem>
                                <HStack align="start">
                                    <Text fontSize="2xl" mt={-1}>💬</Text>
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Interactive Game Area</Text>
                                        <Text color="brand.textBody">
                                            Dynamically rendered game board using Phaser.js with smooth animations
                                            and responsive design for various screen sizes.
                                        </Text>
                                    </Box>
                                </HStack>
                            </ListItem>
                            <ListItem>
                                <HStack align="start">
                                    <Text fontSize="2xl" mt={-1}>🔄</Text>
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">State Synchronization</Text>
                                        <Text color="brand.textBody">
                                            Seamless synchronization of game state across all players using
                                            WebSocket connections and efficient state management.
                                        </Text>
                                    </Box>
                                </HStack>
                            </ListItem>
                        </List>
                    </Box>

                    {/* Development Process */}
                    <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                        <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                            Development Highlights
                        </Heading>
                        <VStack align="start" spacing={4}>
                            <Text color="brand.textBody" lineHeight="1.8">
                                This project was developed following agile methodologies with a team of four developers.
                                Key accomplishments include:
                            </Text>
                            <List spacing={3}>
                                <ListItem color="brand.textBody">
                                    • Implemented comprehensive test coverage with Jest and React Testing Library
                                </ListItem>
                                <ListItem color="brand.textBody">
                                    • Deployed live using Heroku (backend) and Netlify (frontend)
                                </ListItem>
                                <ListItem color="brand.textBody">
                                    • Maintained clean code architecture with proper separation of concerns
                                </ListItem>
                                <ListItem color="brand.textBody">
                                    • Created detailed documentation for future contributors
                                </ListItem>
                            </List>
                        </VStack>
                    </Box>

                    {/* CTA */}
                </VStack>
            </Container>
        </Box>
    );
};

export default WordlePage;