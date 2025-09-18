// ela-journey/ELAJourney.tsx
import React, { useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Fade,
    ScaleFade,
    SlideFade,
    IconButton,
    Progress,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
} from '@chakra-ui/react';
import { ArrowBackIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
    0% { opacity: 0.3; }
    50% { opacity: 0.8; }
    100% { opacity: 0.3; }
`;

const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
`;

const growPlant = keyframes`
    0% { transform: scale(0) rotate(-5deg); opacity: 0; }
    50% { transform: scale(1.1) rotate(3deg); opacity: 0.8; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
`;

const collapse = keyframes`
    0% { transform: translateY(0) rotateZ(0); opacity: 1; }
    25% { transform: translateY(10px) rotateZ(-2deg); opacity: 0.9; }
    50% { transform: translateY(50px) rotateZ(5deg); opacity: 0.7; }
    75% { transform: translateY(150px) rotateZ(-8deg); opacity: 0.4; }
    100% { transform: translateY(500px) rotateZ(15deg); opacity: 0; }
`;

const rumble = keyframes`
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-1px, -1px); }
    20% { transform: translate(1px, -1px); }
    30% { transform: translate(-1px, 1px); }
    40% { transform: translate(1px, 1px); }
    50% { transform: translate(-1px, -1px); }
    60% { transform: translate(1px, -1px); }
    70% { transform: translate(-1px, 1px); }
    80% { transform: translate(-1px, -1px); }
    90% { transform: translate(1px, 1px); }
`;

const fadeInOut = keyframes`
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
`;

interface SceneProps {
    onNext: () => void;
    onPrev?: () => void;
}

const Scene1YCIS: React.FC<SceneProps> = ({ onNext }) => {
    const [found, setFound] = useState(false);
    const [hoveredLang, setHoveredLang] = useState<string | null>(null);

    const languages = [
        { code: '英', name: 'English', position: { left: '20%', top: '30%' }, isTarget: true },
        { code: '中', name: 'Chinese', position: { right: '25%', top: '20%' } },
        { code: 'ES', name: 'Spanish', position: { left: '35%', bottom: '35%' } },
        { code: 'FR', name: 'French', position: { right: '40%', bottom: '40%' } },
        { code: '한', name: 'Korean', position: { left: '60%', top: '45%' } },
        { code: '日', name: 'Japanese', position: { right: '15%', top: '50%' } },
    ];

    return (
        <Box minH="100vh" position="relative" bg="linear-gradient(135deg, #FFE4E1 0%, #FFF5EE 100%)" overflow="hidden">
            <Container maxW="1200px" pt={20}>
                <VStack spacing={8} align="center">
                    <ScaleFade initialScale={0.9} in={true}>
                        <Heading size="2xl" color="brand.textDark" textAlign="center" fontWeight="300">
                            Where It All Began
                        </Heading>
                    </ScaleFade>

                    <SlideFade in={true} offsetY="20px" delay={0.3}>
                        <Text fontSize="xl" color="brand.textBody" textAlign="center" maxW="600px">
                            YCIS: An international school where languages danced together...
                        </Text>
                    </SlideFade>

                    <Box position="relative" w="full" h="400px">
                        {languages.map((lang) => (
                            <Box key={lang.code} position="absolute" {...lang.position}>
                                <VStack spacing={1}>
                                    <Text
                                        fontSize="5xl"
                                        color={lang.isTarget ? "rgba(156, 163, 219, 0.3)" : "rgba(200, 200, 200, 0.2)"}
                                        cursor="pointer"
                                        onClick={() => lang.isTarget && setFound(true)}
                                        onMouseEnter={() => setHoveredLang(lang.name)}
                                        onMouseLeave={() => setHoveredLang(null)}
                                        animation={lang.isTarget ? `${shimmer} 3s ease-in-out infinite` : 'none'}
                                        _hover={{
                                            color: lang.isTarget ? 'brand.primary' : 'brand.textLight',
                                            transform: 'scale(1.1)'
                                        }}
                                        transition="all 0.3s"
                                    >
                                        {lang.code}
                                    </Text>
                                    {hoveredLang === lang.name && (
                                        <Fade in={true}>
                                            <Text fontSize="sm" color="brand.textLight">{lang.name}</Text>
                                        </Fade>
                                    )}
                                </VStack>
                            </Box>
                        ))}

                        <Text
                            position="absolute"
                            fontSize="lg"
                            color="brand.textLight"
                            bottom="-5%"
                            left="50%"
                            transform="translateX(-50%)"
                            fontStyle="italic"
                        >
                            "ELA was never at the forefront of my mind until I left international school. When I transferred,
                            I was bombarded with standardized tests. I wanted to do well. I saw English as a reflection of
                            my worth and ability."
                        </Text>

                        {found && (
                            <Fade in={found}>
                                <Button
                                    position="absolute"
                                    bottom="30%"
                                    left="50%"
                                    transform="translateX(-50%)"
                                    onClick={onNext}
                                    size="lg"
                                    bg="brand.accent"
                                    color="white"
                                    _hover={{ bg: 'brand.warm' }}
                                    animation={`${float} 2s ease-in-out infinite`}
                                >
                                    I was the English kid →
                                </Button>
                            </Fade>
                        )}
                    </Box>

                    {!found && (
                        <Text fontSize="sm" color="brand.textLight" fontStyle="italic">
                            (Hint: Find the character for "English" among the languages...)
                        </Text>
                    )}
                </VStack>
            </Container>
        </Box>
    );
};

const Scene2Elementary: React.FC<SceneProps> = ({ onNext, onPrev }) => {
    const [scores, setScores] = useState<string[]>([]);
    const [books, setBooks] = useState<string[]>([]);
    const { isOpen: isMapOpen, onOpen: onMapOpen, onClose: onMapClose } = useDisclosure();
    const [currentSlide, setCurrentSlide] = useState(0);

    // MAP test images - you'll need to save these in public/images/map/
    const mapImages = [
        {
            src: `${import.meta.env.BASE_URL}images/map/reading.png`,
            title: 'Reading',
            score: '242',
            date: 'August 31, 2015',
            color: '#4A90E2'
        },
        {
            src: `${import.meta.env.BASE_URL}images/map/math.png`,
            title: 'Mathematics',
            score: '248',
            date: 'August 31, 2015',
            color: '#E94B3C'
        },
        {
            src: `${import.meta.env.BASE_URL}images/map/language.png`,
            title: 'Language Usage',
            score: '235',
            date: 'August 31, 2015',
            color: '#50B83C'
        },
        {
            src: `${import.meta.env.BASE_URL}images/map/science.png`,
            title: 'Science - General Science',
            score: '225',
            date: 'September 1, 2015',
            color: '#9B59B6'
        }
    ];

    const testScores = [
        { id: 'star1', label: 'STAR Reading', score: '99th percentile', icon: '⭐' },
        { id: 'star2', label: 'STAR Math', score: '95th percentile', icon: '🌟' },
        { id: 'lexile', label: 'Lexile Score', score: 'College Level', icon: '📊' },
        { id: 'map', label: 'MAP Test', score: 'Above Grade', icon: '📈' },
        { id: 'ar', label: 'AR Points', score: '500+', icon: '🎯' },
        { id: 'writing', label: 'Writing Assessment', score: 'Advanced', icon: '✍️' },
    ];

    const bookCollection = [
        { id: 'hp', title: 'Harry Potter', icon: '📚', color: '#9B5DE5' },
        { id: 'narnia', title: 'Narnia', icon: '📖', color: '#F15BB5' },
        { id: 'percy', title: 'Percy Jackson', icon: '📕', color: '#00BBF9' },
        { id: 'hunger', title: 'Hunger Games', icon: '📗', color: '#00F5FF' },
        { id: 'lotr', title: 'Lord of the Rings', icon: '📘', color: '#FEE77A' },
        { id: 'div', title: 'Divergent', icon: '📙', color: '#FF6B6B' },
    ];

    const collectScore = (id: string) => {
        if (!scores.includes(id)) {
            setScores([...scores, id]);
        }
        // Special case for MAP Test - open slideshow
        if (id === 'map') {
            onMapOpen();
            setCurrentSlide(0);
        }
    };

    const collectBook = (id: string) => {
        if (!books.includes(id)) {
            setBooks([...books, id]);
        }
    };

    const totalProgress = scores.length + books.length;
    const totalItems = testScores.length + bookCollection.length;
    const canProgress = scores.length >= 4 && books.length >= 3;

    // Randomized position calculation for scattered effect
    const getRandomTestPosition = (index: number) => {
        const seed = index * 126;
        const random1 = (Math.sin(seed) * 10000) % 1;
        const random2 = (Math.sin(seed + 1) * 10000) % 1;
        return {
            left: `${10 + Math.abs(random1) * 30}%`,
            top: `${20 + Math.abs(random2) * 60}%`,
        };
    };

    const getRandomBookPosition = (index: number) => {
        const seed = (index + 10) * 132;
        const random1 = (Math.sin(seed) * 10000) % 1;
        const random2 = (Math.sin(seed + 1) * 10000) % 1;
        return {
            left: `${60 + Math.abs(random1) * 30}%`,
            top: `${20 + Math.abs(random2) * 60}%`,
        };
    };

    return (
        <Box minH="100vh" position="relative" bg="linear-gradient(135deg, #E6F3FF 0%, #F0E6FF 100%)">
            <Container maxW="1400px" pt={16}>
                <VStack spacing={6}>
                    <Heading size="2xl" color="brand.textDark" fontWeight="300">
                        The English Kid
                    </Heading>

                    <Text fontSize="xl" color="brand.textBody" textAlign="center" maxW="700px">
                        "Always told I was reading at a college level..."
                    </Text>

                    {/* Progress Bars */}
                    <HStack spacing={8} w="full" maxW="600px">
                        <VStack flex={1}>
                            <Text fontSize="sm" fontWeight="500" color="brand.textDark">
                                Test Scores: {scores.length}/{testScores.length}
                            </Text>
                            <Progress value={(scores.length / testScores.length) * 100} w="full" colorScheme="purple" />
                        </VStack>
                        <VStack flex={1}>
                            <Text fontSize="sm" fontWeight="500" color="brand.textDark">
                                Books Read: {books.length}/{bookCollection.length}
                            </Text>
                            <Progress value={(books.length / bookCollection.length) * 100} w="full" colorScheme="pink" />
                        </VStack>
                    </HStack>

                    <Box position="relative" w="full" h="550px">
                        {/* Labels */}
                        <Text
                            position="absolute"
                            left="25%"
                            top="5%"
                            transform="translateX(-50%)"
                            fontSize="lg"
                            fontWeight="600"
                            color="brand.primary"
                            opacity={0.7}
                        >
                            Test Scores
                        </Text>

                        <Text
                            position="absolute"
                            left="75%"
                            top="5%"
                            transform="translateX(-50%)"
                            fontSize="lg"
                            fontWeight="600"
                            color="brand.secondary"
                            opacity={0.7}
                        >
                            Books Read
                        </Text>

                        {/* Test Scores */}
                        {testScores.map((test, index) => {
                            const position = getRandomTestPosition(index);
                            const isCollected = scores.includes(test.id);

                            return (
                                <Box
                                    key={test.id}
                                    position="absolute"
                                    {...position}
                                    transform="translate(-50%, -50%)"
                                    cursor="pointer"
                                    onClick={() => collectScore(test.id)}
                                    opacity={isCollected ? 1 : 0.6}
                                    animation={!isCollected ? `${float} ${3 + index * 0.2}s ease-in-out infinite` : `${pulse} 1s ease-out`}
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: 'translate(-50%, -50%) scale(1.1)',
                                        opacity: 1,
                                    }}
                                >
                                    <VStack spacing={1}>
                                        <Text fontSize="3xl">{test.icon}</Text>
                                        <Text fontSize="xs" fontWeight="500" textAlign="center">
                                            {test.label}
                                        </Text>
                                        {isCollected && (
                                            <Fade in={true}>
                                                <Text fontSize="xs" color="brand.primary" fontWeight="600">
                                                    {test.score}
                                                </Text>
                                            </Fade>
                                        )}
                                    </VStack>
                                </Box>
                            );
                        })}

                        {/* Books */}
                        {bookCollection.map((book, index) => {
                            const position = getRandomBookPosition(index);
                            const isCollected = books.includes(book.id);

                            return (
                                <Box
                                    key={book.id}
                                    position="absolute"
                                    {...position}
                                    transform="translate(-50%, -50%)"
                                    cursor="pointer"
                                    onClick={() => collectBook(book.id)}
                                    opacity={isCollected ? 1 : 0.6}
                                    animation={!isCollected ? `${float} ${3.5 + index * 0.2}s ease-in-out infinite` : `${pulse} 1s ease-out`}
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: 'translate(-50%, -50%) scale(1.1)',
                                        opacity: 1,
                                    }}
                                >
                                    <VStack spacing={1}>
                                        <Text fontSize="3xl" style={{ color: isCollected ? book.color : undefined }}>
                                            {book.icon}
                                        </Text>
                                        <Text fontSize="xs" fontWeight="500" textAlign="center" maxW="80px">
                                            {book.title}
                                        </Text>
                                    </VStack>
                                </Box>
                            );
                        })}

                        <Box
                            position="absolute"
                            left="50%"
                            top="15%"
                            bottom="15%"
                            w="2px"
                            bg="whiteAlpha.500"
                            transform="translateX(-50%)"
                        />

                        {/* Bottom message */}
                        <Box position="absolute" bottom="-15%" left="50%" transform="translateX(-50%)" w="full">
                            <VStack spacing={4}>
                                <Text color="brand.textBody" fontSize="sm" textAlign="center">
                                    Total collected: {totalProgress}/{totalItems}
                                </Text>

                                {canProgress && (
                                    <Fade in={true}>
                                        <VStack spacing={3}>
                                            <Text color="brand.primary" fontWeight="500" textAlign="center" maxW="500px">
                                                "I sat diligently through standardized tests and felt disappointed
                                                when I tested at grade level. Positive reinforcement told me I was
                                                supposed to be good at this, and that all expectations said it
                                                should stay that way."
                                            </Text>
                                            <Button
                                                onClick={onNext}
                                                bg="brand.primary"
                                                color="white"
                                                size="lg"
                                                _hover={{ bg: 'brand.primaryLight' }}
                                            >
                                                Enter High School →
                                            </Button>
                                        </VStack>
                                    </Fade>
                                )}

                                {!canProgress && (
                                    <Text fontSize="sm" color="brand.textLight" fontStyle="italic">
                                        Collect at least 4 test scores and 3 books to continue...
                                    </Text>
                                )}
                            </VStack>
                        </Box>
                    </Box>

                    <IconButton
                        aria-label="Previous"
                        icon={<ArrowBackIcon />}
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        onClick={onPrev}
                        variant="ghost"
                    />
                </VStack>
            </Container>

            {/* MAP Test Modal */}
            <Modal isOpen={isMapOpen} onClose={onMapClose} size="6xl">
                <ModalOverlay />
                <ModalContent maxW="90vw" maxH="90vh">
                    <ModalHeader bg={mapImages[currentSlide].color} color="white">
                        <Text fontSize="xl">MAP Test Results - 6th Grade</Text>
                        <Text fontSize="sm" fontWeight="normal">
                            {mapImages[currentSlide].title} | Score: {mapImages[currentSlide].score}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton color="white" />
                    <ModalBody p={0} bg="gray.100">
                        <Box position="relative" w="full" h="70vh">
                            <Image
                                src={mapImages[currentSlide].src}
                                alt={`MAP ${mapImages[currentSlide].title} Test Results`}
                                w="full"
                                h="full"
                                objectFit="contain"
                                bg="white"
                            />

                            {/* Navigation Arrows */}
                            <IconButton
                                aria-label="Previous slide"
                                icon={<ChevronLeftIcon />}
                                position="absolute"
                                left="4"
                                top="50%"
                                transform="translateY(-50%)"
                                onClick={() => setCurrentSlide(prev => prev > 0 ? prev - 1 : mapImages.length - 1)}
                                size="lg"
                                bg="whiteAlpha.800"
                                _hover={{ bg: 'white' }}
                            />

                            <IconButton
                                aria-label="Next slide"
                                icon={<ChevronRightIcon />}
                                position="absolute"
                                right="4"
                                top="50%"
                                transform="translateY(-50%)"
                                onClick={() => setCurrentSlide(prev => prev < mapImages.length - 1 ? prev + 1 : 0)}
                                size="lg"
                                bg="whiteAlpha.800"
                                _hover={{ bg: 'white' }}
                            />
                        </Box>

                        {/* Slide Indicators */}
                        <HStack justify="center" py={4} spacing={2}>
                            {mapImages.map((_, idx) => (
                                <Box
                                    key={idx}
                                    w="10px"
                                    h="10px"
                                    borderRadius="full"
                                    bg={idx === currentSlide ? mapImages[currentSlide].color : 'gray.400'}
                                    cursor="pointer"
                                    onClick={() => setCurrentSlide(idx)}
                                    transition="all 0.3s"
                                />
                            ))}
                        </HStack>

                        <Text fontSize="xs" color="gray.600" textAlign="center" pb={4}>
                            {mapImages[currentSlide].date} | Katelin's actual 6th grade MAP scores
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

const Scene3HighSchool: React.FC<SceneProps> = ({ onNext, onPrev }) => {
    const [currentStep, setCurrentStep] = useState(-1);
    const [isCollapsing, setIsCollapsing] = useState(false);
    const [rumbling, setRumbling] = useState(false);

    const steps = [
        { year: '2016', label: 'English 9 Honors', plant: '🌱', color: '#FFE4B5' },
        { year: '2017', label: 'English 10 Honors', plant: '🌿', color: '#FFD4A5' },
        { year: '2018', label: 'AP Language', plant: '🍃', color: '#FFC495' },
        { year: '2019', label: 'AP Literature', plant: '🌳', color: '#FFB385' },
        { year: '2020', label: 'COVID-19', plant: '💻', color: '#808080', isPandemic: true },
    ];

    const handleStepClick = (index: number) => {
        if (index <= currentStep + 1 && index < steps.length && !isCollapsing) {
            setCurrentStep(index);

            if (steps[index].isPandemic) {
                setRumbling(true);
                setTimeout(() => {
                    setRumbling(false);
                    setIsCollapsing(true);
                    setTimeout(() => {
                        onNext();
                    }, 2500);
                }, 1500);
            }
        }
    };

    const getStepStyle = (index: number) => {
        const baseLeft = 10;
        const leftIncrement = 15;
        const baseBottom = 25;
        const bottomIncrement = 12;

        return {
            left: `${baseLeft + (index * leftIncrement)}%`,
            bottom: `${baseBottom + (index * bottomIncrement)}%`,
            zIndex: index + 1,
        };
    };

    return (
        <Box
            minH="100vh"
            bg="linear-gradient(135deg, #FFE4B5 0%, #FFB6C1 100%)"
            position="relative"
            filter={isCollapsing ? 'grayscale(100%)' : 'none'}
            animation={rumbling ? `${rumble} 0.2s linear infinite` : 'none'}
            transition="filter 1s"
        >
            <Container maxW="1400px" pt={16}>
                <VStack spacing={8}>
                    <Heading
                        size="2xl"
                        color="brand.textDark"
                        fontWeight="300"
                        opacity={isCollapsing ? 0.3 : 1}
                        transition="opacity 1s"
                    >
                        The Golden Years
                    </Heading>
                    <Text fontSize="xl" color="brand.textBody" textAlign="center">
                        I started and remained on the English honors track. My positive performance led teachers to
                        encourage me to participate in the literary magazine. I keep climbing. In my junior and senior year, I'm
                        Editor-In-Chief.
                    </Text>
                    <Box position="relative" w="full" h="600px">
                        <Text
                            position="absolute"
                            top="5%"
                            right="10%"
                            fontSize="10xl"
                            opacity={0.15}
                            filter={isCollapsing ? 'grayscale(100%) blur(5px)' : 'none'}
                            transition="all 1s"
                            animation={isCollapsing ? `${collapse} 2s ease-out forwards` : 'none'}
                        >
                            🏫
                        </Text>

                        {currentStep >= 2 && !isCollapsing && (
                            <Fade in={true}>
                                <Text
                                    position="absolute"
                                    top="15%"
                                    left="15%"
                                    fontSize="4xl"
                                    opacity={0.2}
                                    animation={`${float} 3s ease-in-out infinite`}
                                >
                                    ✨
                                </Text>
                            </Fade>
                        )}

                        {steps.map((step, index) => {
                            const stepStyle = getStepStyle(index);
                            const isActive = index <= currentStep;
                            const isClickable = index <= currentStep + 1 && !isCollapsing;

                            return (
                                <Box
                                    key={index}
                                    position="absolute"
                                    {...stepStyle}
                                    cursor={isClickable ? 'pointer' : 'not-allowed'}
                                    onClick={() => handleStepClick(index)}
                                    animation={
                                        isCollapsing && !step.isPandemic
                                            ? `${collapse} 1.5s ease-out forwards`
                                            : isActive && !step.isPandemic
                                                ? `${growPlant} 0.6s ease-out`
                                                : 'none'
                                    }
                                    style={{
                                        animationDelay: isCollapsing ? `${index * 0.2}s` : '0s',
                                    }}
                                >
                                    <Box
                                        bg={isActive ? (step.isPandemic ? 'gray.700' : 'white') : 'whiteAlpha.400'}
                                        borderRadius="lg"
                                        p={4}
                                        w="180px"
                                        position="relative"
                                        boxShadow={isActive ? '0 10px 30px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.1)'}
                                        transition="all 0.4s"
                                        _hover={isClickable ? {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
                                        } : {}}
                                        _before={isActive && !step.isPandemic ? {
                                            content: '""',
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: 'lg',
                                            background: `linear-gradient(135deg, ${step.color} 0%, transparent 100%)`,
                                            opacity: 0.2,
                                        } : {}}
                                    >
                                        <HStack spacing={3}>
                                            <Text
                                                fontSize="3xl"
                                                filter={isActive ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' : 'none'}
                                            >
                                                {step.plant}
                                            </Text>
                                            <VStack align="start" spacing={0}>
                                                <Text
                                                    fontSize="xs"
                                                    color={step.isPandemic && isActive ? 'white' : 'brand.textDark'}
                                                    fontWeight="600"
                                                >
                                                    {step.year}
                                                </Text>
                                                <Text
                                                    fontSize="sm"
                                                    fontWeight="500"
                                                    color={step.isPandemic && isActive ? 'white' : 'brand.textDark'}
                                                >
                                                    {step.label}
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </Box>

                                    {index < steps.length - 1 && isActive && !isCollapsing && (
                                        <Box
                                            position="absolute"
                                            top="50%"
                                            left="100%"
                                            w="60px"
                                            h="2px"
                                            bg="linear-gradient(90deg, rgba(156,163,219,0.4) 0%, transparent 100%)"
                                            transform="translateY(-50%)"
                                        />
                                    )}
                                </Box>
                            );
                        })}

                        {currentStep >= 3 && !isCollapsing && !rumbling && (
                            <Fade in={true}>
                                <Text
                                    position="absolute"
                                    bottom="10%"
                                    left="50%"
                                    transform="translateX(-50%)"
                                    fontSize="sm"
                                    color="brand.textLight"
                                    fontStyle="italic"
                                    animation={`${float} 2s ease-in-out infinite`}
                                >
                                    Click 2020 to continue...
                                </Text>
                            </Fade>
                        )}

                        {currentStep === -1 && (
                            <Text
                                position="absolute"
                                bottom="15%"
                                left="15%"
                                fontSize="sm"
                                color="brand.textLight"
                                fontStyle="italic"
                            >
                                Click 2016 to begin climbing...
                            </Text>
                        )}
                    </Box>

                    <IconButton
                        aria-label="Previous"
                        icon={<ArrowBackIcon />}
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        onClick={onPrev}
                        variant="ghost"
                    />
                </VStack>
            </Container>
        </Box>
    );
};

const Scene4PragmaticChoice: React.FC<SceneProps> = ({ onNext, onPrev }) => {
    const [stage, setStage] = useState(0);
    const [hoveredChoice, setHoveredChoice] = useState<string | null>(null);

    return (
        <Box minH="100vh" bg="linear-gradient(135deg, #D3D3D3 0%, #A9A9A9 100%)" position="relative">
            <Container maxW="1200px" pt={20}>
                <VStack spacing={12} align="center">
                    <Heading size="2xl" color="brand.textDark" fontWeight="300">
                        2020: The Crossroads
                    </Heading>

                    {stage === 0 && (
                        <Fade in={true}>
                            <VStack spacing={8} maxW="800px">
                                <Text fontSize="xl" color="brand.textBody" textAlign="center">
                                    During the pandemic, the world and my immediate future felt uncertain, unstable.
                                </Text>
                                <Text fontSize="lg" color="brand.textBody" textAlign="center">
                                    My mom with her harsh pragmatism and my dad with his passion for engineering
                                    pushed me to abandon English in favor of STEM.
                                </Text>
                                <Text fontSize="md" color="brand.textLight" textAlign="center" fontStyle="italic">
                                    "You need something practical. Something stable. Something that will always have jobs."
                                </Text>
                                <Button
                                    onClick={() => setStage(1)}
                                    bg="brand.textDark"
                                    color="white"
                                    _hover={{ bg: 'brand.textBody' }}
                                >
                                    Continue →
                                </Button>
                            </VStack>
                        </Fade>
                    )}

                    {stage === 1 && (
                        <Fade in={true}>
                            <VStack spacing={8}>
                                <Text fontSize="lg" color="brand.textBody" textAlign="center" maxW="700px">
                                    I stood at the fork in the road, holding acceptance letters to university programs.
                                </Text>

                                <HStack spacing={12} align="stretch">
                                    <Box
                                        p={8}
                                        bg="white"
                                        borderRadius="lg"
                                        boxShadow="xl"
                                        w="300px"
                                        cursor="pointer"
                                        onMouseEnter={() => setHoveredChoice('english')}
                                        onMouseLeave={() => setHoveredChoice(null)}
                                        opacity={hoveredChoice === 'cs' ? 0.4 : 1}
                                        transform={hoveredChoice === 'english' ? 'scale(1.05)' : 'scale(1)'}
                                        transition="all 0.3s"
                                    >
                                        <VStack spacing={4}>
                                            <Text fontSize="4xl">📝</Text>
                                            <Heading size="md" color="brand.primary">English Literature</Heading>
                                            <Text fontSize="sm" color="brand.textBody" textAlign="center">
                                                My first love. The path of passion, creativity, and stories.
                                            </Text>
                                            <Text fontSize="xs" color="brand.textLight" fontStyle="italic">
                                                "But will it pay the bills?"
                                            </Text>
                                        </VStack>
                                    </Box>

                                    <Box
                                        p={8}
                                        bg="white"
                                        borderRadius="lg"
                                        boxShadow="xl"
                                        w="300px"
                                        cursor="pointer"
                                        onMouseEnter={() => setHoveredChoice('cs')}
                                        onMouseLeave={() => setHoveredChoice(null)}
                                        opacity={hoveredChoice === 'english' ? 0.4 : 1}
                                        transform={hoveredChoice === 'cs' ? 'scale(1.05)' : 'scale(1)'}
                                        transition="all 0.3s"
                                        border="2px solid"
                                        borderColor={hoveredChoice === 'cs' ? 'brand.accent' : 'transparent'}
                                    >
                                        <VStack spacing={4}>
                                            <Text fontSize="4xl">💻</Text>
                                            <Heading size="md" color="brand.secondary">Computer Science</Heading>
                                            <Text fontSize="sm" color="brand.textBody" textAlign="center">
                                                The pragmatic choice. Job security, good salary, endless opportunities.
                                            </Text>
                                            <Text fontSize="xs" color="brand.accent" fontWeight="bold">
                                                "This is the smart choice."
                                            </Text>
                                        </VStack>
                                    </Box>
                                </HStack>

                                <Button
                                    onClick={() => setStage(2)}
                                    bg="brand.accent"
                                    color="white"
                                    size="lg"
                                    _hover={{ bg: '#A0D8B3' }}
                                    animation={`${fadeInOut} 2s ease-in-out infinite`}
                                >
                                    I chose...
                                </Button>
                            </VStack>
                        </Fade>
                    )}

                    {stage === 2 && (
                        <Fade in={true}>
                            <VStack spacing={8} maxW="800px">
                                <Text fontSize="xl" color="brand.textDark" textAlign="center">
                                    Computer Science. With Psychology. The practical path.
                                </Text>
                                <Text fontSize="lg" color="brand.textBody" textAlign="center">
                                    But I couldn't let English go completely. Like a secret I kept close to my heart,
                                    I added it as a minor. My mother on many occasions would comment on how I could use
                                    my minor more effectively, make it something more practical. This reminded me of
                                    when she convinced me to major in CS back in high school. Adding the minor helped
                                    me feel closer to ELA.
                                </Text>
                                <Box bg="whiteAlpha.800" p={6} borderRadius="lg">
                                    <Text fontSize="md" color="brand.textDark" fontStyle="italic" textAlign="center">
                                        "A minor in English—my small rebellion, my quiet insistence that passion
                                        still had a place in a practical world."
                                    </Text>
                                </Box>
                                <Text fontSize="lg" color="brand.textBody" textAlign="center">
                                    I take a wide variety of English classes in undergrad: Style & Editing,
                                    Writing to Heal, Advanced Writing in the Technical Professions. I keep writing.
                                </Text>
                                <Button
                                    onClick={onNext}
                                    bg="brand.primary"
                                    color="white"
                                    size="lg"
                                    _hover={{ bg: 'brand.primaryLight' }}
                                >
                                    To College →
                                </Button>
                            </VStack>
                        </Fade>
                    )}

                    <IconButton
                        aria-label="Previous"
                        icon={<ArrowBackIcon />}
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        onClick={onPrev}
                        variant="ghost"
                    />
                </VStack>
            </Container>
        </Box>
    );
};

const Scene5College: React.FC<SceneProps> = ({ onNext, onPrev }) => {
    const [terminalInput, setTerminalInput] = useState('');
    const [output, setOutput] = useState<string[]>(['> Welcome to the Convergence Terminal', '> Type "help" for commands']);
    const [unlocked, setUnlocked] = useState(false);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const newOutput = [...output, `> ${terminalInput}`];

            if (terminalInput.toLowerCase() === 'help') {
                newOutput.push('Available commands:', '- merge cs psych english', '- run teaching.exe', '- compile future');
            } else if (terminalInput.toLowerCase() === 'merge cs psych english') {
                newOutput.push('Merging disciplines...', '✓ CS: Logic and problem-solving integrated', '✓ Psychology: Understanding how minds learn', '✓ English: The art of communication', '🎓 Convergence complete!');
                setUnlocked(true);
            } else if (terminalInput.toLowerCase() === 'run teaching.exe') {
                newOutput.push('Error: Prerequisites not met. Try merging your disciplines first.');
            } else if (terminalInput.toLowerCase() === 'compile future') {
                newOutput.push('Compiling... Missing dependencies. Merge required.');
            } else {
                newOutput.push(`Command not found: ${terminalInput}`);
            }

            setOutput(newOutput);
            setTerminalInput('');
        }
    };

    return (
        <Box minH="100vh" bg="linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" position="relative">
            <Container maxW="1200px" pt={20}>
                <VStack spacing={8}>
                    <Heading size="2xl" color="white" fontWeight="300" fontFamily="monospace">
                        The Convergence
                    </Heading>

                    <Text fontSize="xl" color="whiteAlpha.900" textAlign="center" maxW="700px">
                        "My success in high school pushed me to get an English minor..."
                    </Text>

                    <Box
                        bg="black"
                        color="green.400"
                        p={6}
                        borderRadius="lg"
                        w="full"
                        maxW="800px"
                        h="400px"
                        fontFamily="monospace"
                        fontSize="sm"
                        overflow="auto"
                    >
                        <VStack align="start" spacing={2}>
                            {output.map((line, index) => (
                                <Text key={index}>{line}</Text>
                            ))}
                            <HStack>
                                <Text>{'>'}</Text>
                                <Input
                                    value={terminalInput}
                                    onChange={(e) => setTerminalInput(e.target.value)}
                                    onKeyPress={handleCommand}
                                    variant="unstyled"
                                    color="green.400"
                                    _focus={{ outline: 'none' }}
                                    placeholder="Type command..."
                                />
                            </HStack>
                        </VStack>
                    </Box>

                    {unlocked && (
                        <Fade in={true}>
                            <VStack spacing={4}>
                                <Text fontSize="lg" color="white" fontStyle="italic" textAlign="center">
                                    "Which would later turn my CS + Psych degree into something I could turn into an English teaching credential."
                                </Text>
                                <Button
                                    onClick={onNext}
                                    bg="brand.primary"
                                    color="white"
                                    size="lg"
                                    _hover={{ bg: 'brand.primaryLight' }}
                                >
                                    Execute: The Present →
                                </Button>
                            </VStack>
                        </Fade>
                    )}

                    {!unlocked && (
                        <Text fontSize="sm" color="whiteAlpha.600" fontStyle="italic">
                            Hint: Try merging your three disciplines...
                        </Text>
                    )}

                    <IconButton
                        aria-label="Previous"
                        icon={<ArrowBackIcon />}
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        onClick={onPrev}
                        variant="ghost"
                        color="white"
                    />
                </VStack>
            </Container>
        </Box>
    );
};

const Scene6Present: React.FC<SceneProps> = ({ onNext, onPrev }) => {
    return (
        <Box minH="100vh" bg="linear-gradient(135deg, #FFF3E0 0%, #FCE4EC 100%)" position="relative">
            <Container maxW="1200px" pt={20}>
                <VStack spacing={8}>
                    <Heading size="2xl" color="brand.textDark" fontWeight="300">
                        Full Circle
                    </Heading>

                    <Text fontSize="xl" color="brand.textBody" textAlign="center" maxW="700px">
                        "I think my early reinforcement of my English skills are a major contributing factor to why I'm an aspiring English teacher today."
                    </Text>

                    <VStack spacing={6} mt={8}>
                        <HStack spacing={8} flexWrap="wrap" justify="center">
                            <VStack>
                                <Text fontSize="4xl">🏫</Text>
                                <Text fontWeight="500">Student Teaching</Text>
                                <Text fontSize="sm" color="brand.textLight">Pinole Valley HS</Text>
                            </VStack>
                            <VStack>
                                <Text fontSize="4xl">🎓</Text>
                                <Text fontWeight="500">BTEP</Text>
                                <Text fontSize="sm" color="brand.textLight">UC Berkeley</Text>
                            </VStack>
                        </HStack>

                        <Box mt={12} p={8} bg="whiteAlpha.800" borderRadius="lg" maxW="600px">
                            <Text fontSize="lg" color="brand.textDark" fontStyle="italic" textAlign="center">
                                "I loved teaching CS. Now I'm bringing that same passion to English, creating a bridge between technology and literature."
                            </Text>
                        </Box>

                        <Button
                            onClick={onNext}
                            bg="brand.warm"
                            color="white"
                            size="lg"
                            _hover={{ bg: '#FFB88C' }}
                            mt={8}
                        >
                            A Letter to Ms. Su →
                        </Button>
                    </VStack>

                    <IconButton
                        aria-label="Previous"
                        icon={<ArrowBackIcon />}
                        position="absolute"
                        bottom="20px"
                        left="20px"
                        onClick={onPrev}
                        variant="ghost"
                    />
                </VStack>
            </Container>
        </Box>
    );
};

const Scene7Letter: React.FC<SceneProps> = ({ onPrev }) => {
    return (
        <Box minH="100vh" bg="linear-gradient(135deg, #F5F5DC 0%, #FFF8E1 100%)" position="relative">
            <Container maxW="800px" pt={20} pb={20}>
                <VStack spacing={8}>
                    <Heading size="xl" color="brand.textDark" fontWeight="300" fontStyle="italic">
                        Dear Ms. Su,
                    </Heading>

                    <Box
                        bg="white"
                        p={12}
                        borderRadius="lg"
                        boxShadow="xl"
                        borderTop="3px solid"
                        borderTopColor="brand.primary"
                    >
                        <VStack align="start" spacing={6}>
                            <Text color="brand.textBody" lineHeight="1.8">
                                I think back on my years in your English class so very fondly. I think about being afraid to speak up, and your encouraging feedback on my essays giving me courage to contribute in class. I remember feeling seen when you included Orphan of Zhao in our curriculum - both in the sense that we were studying Chinese literature and also you and I's shared Chinese heritage. I still think it's crazy you taught at YCIS!
                            </Text>

                            <Text color="brand.textBody" lineHeight="1.8">
                                You probably don't know that I scored a 4 on the AP Lit exam. I was devastated. After years of being "the English kid," of reading at a college level since elementary school, that 4 felt like a betrayal of everything I thought I was. The pandemic had taken so much from us that year. I remember being unable to shake the feeling that I had failed you somehow. I remember you stopping by my house to congratulate me on graduating. Thank you.
                            </Text>

                            <Text color="brand.textBody" lineHeight="1.8">
                                But here's what you definitely don't know: I went to college and majored in Computer Science and Psychology, but I couldn't let go of English. I added it as a minor, and I discovered I loved teaching. Teaching CS showed me that complex ideas could be made beautiful and accessible. Psychology taught me how minds learn and grow. And English? English remained the thread that wove everything together.
                            </Text>

                            <Text color="brand.textBody" lineHeight="1.8">
                                I'm writing this letter from as a graduate student at UC Berkeley, where I'm pursuing my teaching credential. Tomorrow, I'll stand in front of a classroom at Pinole Valley High School, teaching English to students who might be reading at college level, or might be struggling with every word. I'll remember being both of those students at different times.
                            </Text>

                            <Text color="brand.textBody" lineHeight="1.8">
                                You taught me that literature isn't just about perfect scores or flawless analysis. It's about finding yourself in stories, about using words to build bridges between hearts and minds. You showed me that being "the English kid" wasn't about coasting through tests—it was about caring deeply about language and its power to transform.
                            </Text>

                            <Text color="brand.textBody" lineHeight="1.8">
                                Thank you for planting seeds that took years to bloom. Thank you for creating a space where I could find my voice, in all my crazy extended metaphor essays (why did the chicken cross the road? who knows). And thank you for being part of a journey that brought me full circle—from student to teacher, from consumer of stories to creator of learning experiences.
                            </Text>

                            <Text color="brand.textBody" lineHeight="1.8">
                                I hope my students will one day write letters like this, not because they scored perfectly on tests, but because they discovered that English—and learning itself—is a lifelong journey.
                            </Text>

                            <Text color="brand.textBody" lineHeight="1.8" fontStyle="italic">
                                With deep gratitude and respect,
                            </Text>

                            <Text color="brand.textDark" fontWeight="500" fontSize="lg">
                                Katelin
                            </Text>

                            <Text color="brand.textLight" fontSize="sm" fontStyle="italic">
                                P.S. I'm still editor-in-chief at heart, just now I edit lives instead of literary magazines.
                            </Text>
                        </VStack>
                    </Box>

                    <HStack spacing={4} mt={8}>
                        <IconButton
                            aria-label="Previous"
                            icon={<ArrowBackIcon />}
                            onClick={onPrev}
                            variant="ghost"
                            size="lg"
                        />
                        <Button
                            as={Link}
                            to="/"
                            bg="brand.primary"
                            color="white"
                            size="lg"
                            _hover={{ bg: 'brand.primaryLight' }}
                        >
                            Return Home
                        </Button>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
};

const ELAJourney: React.FC = () => {
    const [currentScene, setCurrentScene] = useState(1);

    const nextScene = () => setCurrentScene(prev => Math.min(prev + 1, 7));
    const prevScene = () => setCurrentScene(prev => Math.max(prev - 1, 1));

    const renderScene = () => {
        switch (currentScene) {
            case 1:
                return <Scene1YCIS onNext={nextScene} />;
            case 2:
                return <Scene2Elementary onNext={nextScene} onPrev={prevScene} />;
            case 3:
                return <Scene3HighSchool onNext={nextScene} onPrev={prevScene} />;
            case 4:
                return <Scene4PragmaticChoice onNext={nextScene} onPrev={prevScene} />;
            case 5:
                return <Scene5College onNext={nextScene} onPrev={prevScene} />;
            case 6:
                return <Scene6Present onNext={nextScene} onPrev={prevScene} />;
            case 7:
                return <Scene7Letter onNext={nextScene} onPrev={prevScene} />;
            default:
                return <Scene1YCIS onNext={nextScene} />;
        }
    };

    return (
        <Box minH="100vh" position="relative">
            <Box
                position="fixed"
                top="0"
                left="0"
                right="0"
                h="4px"
                bg="brand.border"
                zIndex={1000}
            >
                <Box
                    h="full"
                    bg="brand.primary"
                    w={`${(currentScene / 7) * 100}%`}
                    transition="width 0.3s ease"
                />
            </Box>

            <Button
                as={Link}
                to="/"
                position="fixed"
                top="20px"
                right="20px"
                variant="ghost"
                zIndex={1000}
                _hover={{ bg: 'whiteAlpha.800' }}
            >
                Home
            </Button>

            <Fade in={true} key={currentScene}>
                {renderScene()}
            </Fade>
        </Box>
    );
};

export default ELAJourney;