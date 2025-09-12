// pages/projects/ReversiPage.tsx
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
    SimpleGrid,
    Code,
} from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const ReversiPage: React.FC = () => {
    return (
        <Box minH="100vh" bg="brand.background">
            {/* Header */}
            <Box bg="linear-gradient(135deg, #A8D5BA 0%, #90C9A4 100%)" py={20}>
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
                            🎯 Reversi AI Game
                        </Heading>
                        <Text fontSize="xl" color="whiteAlpha.900">
                            Strategic Board Game with Advanced AI Opponents
                        </Text>
                        <HStack spacing={3} flexWrap="wrap">
                            <Tag bg="whiteAlpha.200" color="white" size="lg">Python</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">AI Algorithms</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">Game Theory</Tag>
                            <Tag bg="whiteAlpha.200" color="white" size="lg">Minimax</Tag>
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
                            href="https://github.com/katelintharp/reversi-ktharp"
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
                            A sophisticated implementation of the classic Reversi (Othello) board game featuring
                            advanced AI opponents powered by minimax and expectimax algorithms. This project
                            demonstrates deep understanding of game theory, artificial intelligence, and
                            algorithmic optimization techniques.
                        </Text>
                        <Text color="brand.textBody" fontSize="lg" lineHeight="1.8">
                            The game supports multiple play modes including human vs. human, human vs. AI,
                            and AI vs. AI, allowing players to test their strategies against increasingly
                            challenging computer opponents.
                        </Text>
                    </Box>

                    {/* AI Implementation */}
                    <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                        <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                            AI Algorithm Details
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <Box>
                                <Heading as="h3" size="md" mb={3} color="brand.primary">Minimax Algorithm</Heading>
                                <VStack align="start" spacing={2}>
                                    <Text color="brand.textBody">
                                        Implements the classic minimax algorithm with alpha-beta pruning for
                                        optimal move selection.
                                    </Text>
                                    <List spacing={2}>
                                        <ListItem fontSize="sm" color="brand.textBody">
                                            • Depth-limited search up to 6 levels
                                        </ListItem>
                                        <ListItem fontSize="sm" color="brand.textBody">
                                            • Alpha-beta pruning for performance
                                        </ListItem>
                                        <ListItem fontSize="sm" color="brand.textBody">
                                            • Heuristic evaluation function
                                        </ListItem>
                                    </List>
                                </VStack>
                            </Box>
                            <Box>
                                <Heading as="h3" size="md" mb={3} color="brand.primary">Expectimax Algorithm</Heading>
                                <VStack align="start" spacing={2}>
                                    <Text color="brand.textBody">
                                        Advanced expectimax implementation for handling uncertainty and
                                        probabilistic opponent modeling.
                                    </Text>
                                    <List spacing={2}>
                                        <ListItem fontSize="sm" color="brand.textBody">
                                            • Probabilistic move evaluation
                                        </ListItem>
                                        <ListItem fontSize="sm" color="brand.textBody">
                                            • Adaptive difficulty levels
                                        </ListItem>
                                        <ListItem fontSize="sm" color="brand.textBody">
                                            • Strategic position weighting
                                        </ListItem>
                                    </List>
                                </VStack>
                            </Box>
                        </SimpleGrid>
                    </Box>

                    {/* Game Features */}
                    <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                        <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                            Game Features
                        </Heading>
                        <List spacing={4}>
                            <ListItem>
                                <HStack align="start">
                                    <Text fontSize="2xl" mt={-1}>🎮</Text>
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Multiple Game Modes</Text>
                                        <Text color="brand.textBody">
                                            Three distinct game modes: Human vs. Human for local multiplayer,
                                            Human vs. AI for single-player challenges, and AI vs. AI for
                                            algorithm demonstration and testing.
                                        </Text>
                                    </Box>
                                </HStack>
                            </ListItem>
                            <ListItem>
                                <HStack align="start">
                                    <Text fontSize="2xl" mt={-1}>🧠</Text>
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Intelligent Move Validation</Text>
                                        <Text color="brand.textBody">
                                            Real-time validation of legal moves with visual feedback, ensuring
                                            smooth gameplay and helping players learn the rules.
                                        </Text>
                                    </Box>
                                </HStack>
                            </ListItem>
                            <ListItem>
                                <HStack align="start">
                                    <Text fontSize="2xl" mt={-1}>📊</Text>
                                    <Box>
                                        <Text fontWeight="500" color="brand.textDark">Performance Metrics</Text>
                                        <Text color="brand.textBody">
                                            Tracks game statistics including move count, thinking time, and
                                            position evaluation scores for analysis and improvement.
                                        </Text>
                                    </Box>
                                </HStack>
                            </ListItem>
                        </List>
                    </Box>

                    {/* Technical Implementation */}
                    <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                        <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                            Technical Highlights
                        </Heading>
                        <VStack align="start" spacing={4}>
                            <Box>
                                <Text fontWeight="500" color="brand.textDark" mb={2}>
                                    Evaluation Function
                                </Text>
                                <Text color="brand.textBody" mb={2}>
                                    The AI uses a sophisticated evaluation function that considers:
                                </Text>
                                <List spacing={2} ml={4}>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • Coin parity (piece count differential)
                                    </ListItem>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • Corner occupancy (strategic positions)
                                    </ListItem>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • Mobility (available moves)
                                    </ListItem>
                                    <ListItem color="brand.textBody" fontSize="sm">
                                        • Stability (unflippable pieces)
                                    </ListItem>
                                </List>
                            </Box>
                            <Box>
                                <Text fontWeight="500" color="brand.textDark" mb={2}>
                                    Optimization Techniques
                                </Text>
                                <Code p={3} borderRadius="md" fontSize="sm" w="full">
                                    {`# Alpha-beta pruning example
def minimax(board, depth, alpha, beta, maximizing):
    if depth == 0 or game_over(board):
        return evaluate(board)
    
    if maximizing:
        max_eval = -infinity
        for move in get_valid_moves(board):
            eval = minimax(move, depth-1, alpha, beta, False)
            max_eval = max(max_eval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha:
                break  # Beta cutoff
        return max_eval`}
                                </Code>
                            </Box>
                        </VStack>
                    </Box>

                    {/* CTA */}
                </VStack>
            </Container>
        </Box>
    );
};

export default ReversiPage;