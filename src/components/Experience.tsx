// components/Experience.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    List,
    ListItem,
    useBreakpointValue,
} from '@chakra-ui/react';

interface ExperienceItemProps {
    role: string;
    company: string;
    date: string;
    description: string[];
    isLeft?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
                                                           role,
                                                           company,
                                                           date,
                                                           description,
                                                           isLeft = false,
                                                       }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box position="relative" mb={12}>
            {/* Timeline dot */}
            <Box
                position="absolute"
                left={{ base: '30px', md: '50%' }}
                transform={{ base: 'none', md: 'translateX(-50%)' }}
                w="16px"
                h="16px"
                bg="brand.primary"
                border="4px solid"
                borderColor="brand.background"
                borderRadius="50%"
                top="2rem"
                zIndex={1}
            />

            {/* Content */}
            <Box
                ml={{ base: '60px', md: isLeft ? 0 : '52%' }}
                mr={{ base: 0, md: isLeft ? '52%' : 0 }}
                textAlign={{ base: 'left', md: isLeft ? 'right' : 'left' }}
            >
                <Box
                    bg="white"
                    p={8}
                    borderRadius="15px"
                    boxShadow="0 3px 15px rgba(156, 163, 219, 0.15)"
                    position="relative"
                    transition="all 0.3s ease"
                    _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: isLeft && !isMobile ? 'auto' : 0,
                        right: isLeft && !isMobile ? 0 : 'auto',
                        width: '4px',
                        height: '100%',
                        bg: 'linear-gradient(135deg, #9CA3DB 0%, #F4B8C5 100%)',
                        borderRadius: '15px 0 0 15px',
                    }}
                >
                    <VStack align={isLeft && !isMobile ? 'end' : 'start'} spacing={2}>
                        <Heading as="h3" size="md" color="brand.textDark" fontWeight="500">
                            {role}
                        </Heading>
                        <Text color="brand.primary" fontWeight="400">
                            {company}
                        </Text>
                        <Text color="brand.textLight" fontSize="0.9rem" fontStyle="italic">
                            {date}
                        </Text>
                        <List spacing={2} pt={2}>
                            {description.map((item, index) => (
                                <ListItem
                                    key={index}
                                    color="brand.textBody"
                                    fontSize="0.95rem"
                                    lineHeight="1.8"
                                    textAlign="left"
                                    position="relative"
                                    pl={6}
                                    _before={{
                                        content: '"•"',
                                        position: 'absolute',
                                        left: 0,
                                        color: 'brand.secondary',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
};

const Experience: React.FC = () => {
    const experiences = [
        {
            role: 'Student Teacher',
            company: 'Pinole Valley High School',
            date: 'August 2025 - Present',
            description: [
                'Developing inclusive lesson plans for diverse learners',
                'Implementing California ELA standards across grade levels',
                'Integrating technology to enhance student engagement',
            ],
            isLeft: true,
        },
        {
            role: 'Software Engineer',
            company: 'eMoney Advisor',
            date: 'June 2024 - May 2025',
            description: [
                'Developed data aggregation services using .NET/C#',
                'Led complex MFA and JavaScript parser implementations',
                'Improved legacy codebase through systematic refactoring',
            ],
            isLeft: false,
        },
        {
            role: 'Global Scholars Teaching Assistant',
            company: 'Northeastern University London',
            date: 'January 2024 - May 2024',
            description: [
                'Facilitated cross-continental education program',
                'Supported 100+ international students in CS fundamentals',
                'Designed collaborative learning experiences',
            ],
            isLeft: true,
        },
        {
            role: 'Computer Science Teaching Assistant',
            company: 'Northeastern University',
            date: 'Fall 2021, 2022, 2023',
            description: [
                'Mentored 900+ students in functional programming',
                'Provided 5+ weekly office hours for individual support',
                'Developed innovative teaching methods for complex concepts',
            ],
            isLeft: false,
        },
    ];

    return (
        <Box id="experience" py={20} bg="rgba(243, 232, 255, 0.3)">
            <Container maxW="1200px">
                <VStack spacing={3} mb={12}>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-0.5px"
                    >
                        Professional Journey
                    </Heading>
                    <Text
                        color="brand.textBody"
                        fontSize="1.1rem"
                        fontStyle="italic"
                        fontFamily="Georgia, serif"
                    >
                        From classroom to codebase and back again
                    </Text>
                </VStack>

                <Box position="relative">
                    {/* Timeline line */}
                    <Box
                        position="absolute"
                        left={{ base: '30px', md: '50%' }}
                        transform={{ base: 'none', md: 'translateX(-50%)' }}
                        width="2px"
                        height="100%"
                        bg="brand.border"
                        display={{ base: 'block' }}
                    />

                    {/* Experience items */}
                    <VStack spacing={0} align="stretch">
                        {experiences.map((exp, index) => (
                            <ExperienceItem key={index} {...exp} />
                        ))}
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
};

export default Experience;