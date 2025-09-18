// components/Hero.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    HStack,
    VStack,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import {Link} from "react-router-dom";

const float = keyframes`
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.05); }
    66% { transform: translate(-20px, 20px) scale(0.95); }
`;

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const FloatingShape: React.FC<{
    size: string;
    color: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    animationDuration?: string;
}> = ({ size, color, top, bottom, left, right, animationDuration = '25s' }) => (
    <Box
        position="absolute"
        width={size}
        height={size}
        bg={color}
        borderRadius="50%"
        opacity={0.3}
        filter="blur(40px)"
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        animation={`${float} ${animationDuration} ease-in-out infinite`}
    />
);

const Hero: React.FC = () => {
    return (
        <Box
            id="home"
            minH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            bg="linear-gradient(180deg, #F3E8FF 0%, rgba(255, 255, 255, 0) 100%)"
            overflow="hidden"
            pt="80px"
        >
            <FloatingShape
                size="400px"
                color="brand.primaryLight"
                top="-200px"
                left="-100px"
            />
            <FloatingShape
                size="350px"
                color="brand.secondary"
                bottom="-150px"
                right="-100px"
                animationDuration="30s"
            />
            <FloatingShape
                size="300px"
                color="brand.accent"
                top="50%"
                left="50%"
                animationDuration="35s"
            />

            <Container maxW="800px" textAlign="center" zIndex={1}>
                <VStack spacing={6} animation={`${fadeInUp} 1s ease`}>
                    <Heading
                        as="h1"
                        size="3xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-1px"
                        mb={2}
                    >
                        Katelin Tharp
                    </Heading>

                    <Text
                        fontSize="1.3rem"
                        color="brand.textBody"
                        fontStyle="italic"
                        fontFamily="Georgia, serif"
                    >
                        Educator • Software Engineer
                    </Text>

                    <Text
                        fontSize="1.1rem"
                        color="brand.textBody"
                        maxW="600px"
                        lineHeight="1.8"
                        px={4}
                    >
                        Bridging the gap between technology and education to create meaningful learning experiences.
                        Currently pursuing my teaching credential at UC Berkeley while bringing software engineering expertise
                        to the classroom.
                    </Text>

                    <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
                        <Button
                            as="a"
                            href="#contact"
                            size="lg"
                            bg="brand.primary"
                            color="white"
                            px={10}
                            py={6}
                            borderRadius="30px"
                            fontWeight="500"
                            letterSpacing="0.5px"
                            _hover={{
                                bg: 'brand.primaryLight',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(156, 163, 219, 0.4)',
                            }}
                            transition="all 0.3s ease"
                        >
                            Connect With Me
                        </Button>
                        <Button
                            as="a"
                            href="#experience"
                            size="lg"
                            bg="brand.secondary"
                            color="white"
                            px={10}
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
                            View Experience
                        </Button>
                    </HStack>

                    {/* New ELA Journey Button */}
                    <Button
                        as={Link}
                        to="/ela-journey"
                        size="md"
                        variant="outline"
                        borderColor="brand.accent"
                        bg="brand.accent"
                        color="white"
                        px={8}
                        py={5}
                        borderRadius="25px"
                        fontWeight="400"
                        letterSpacing="0.3px"
                        fontSize="0.95rem"
                        mt={2}
                        _hover={{
                            bg: 'brand.accent',
                            color: 'white',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 15px rgba(168, 213, 186, 0.4)',
                            borderColor: 'brand.accent',
                        }}
                        transition="all 0.3s ease"
                    >
                        📚 Paul - Click here!
                    </Button>
                </VStack>
            </Container>
        </Box>
    );
};

export default Hero;