// components/Awards.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
} from '@chakra-ui/react';

interface AwardItemProps {
    icon: string;
    title: string;
    description: string;
}

const AwardItem: React.FC<AwardItemProps> = ({ icon, title, description }) => (
    <VStack spacing={4} textAlign="center">
        <Text fontSize="2.5rem">{icon}</Text>
        <Heading as="h3" size="md" color="brand.textDark" fontWeight="500">
            {title}
        </Heading>
        <Text color="brand.textBody" lineHeight="1.7" maxW="600px" mx="auto">
            {description}
        </Text>
    </VStack>
);

const Awards: React.FC = () => {
    const awards = [
        {
            icon: '🏆',
            title: '2025 Khoury College Undergraduate Teaching Award',
            description: 'Recognized for three years of outstanding leadership as a teaching assistant, cross-continental program development, and ability to help students without prior CS experience succeed.',
        },
        {
            icon: '🌟',
            title: "Dean's List Recognition",
            description: 'Maintained a 3.90 GPA while balancing coursework in Computer Science, Cognitive Psychology, and English.',
        },
        {
            icon: '🌍',
            title: 'International Studies Distinction',
            description: 'Achieved perfect 4.0 GPA and Distinction honors at University College London, demonstrating adaptability and excellence in international educational contexts.',
        },
    ];

    return (
        <Box id="awards" py={20} bg="rgba(243, 232, 255, 0.2)">
            <Container maxW="1200px">
                <VStack spacing={3} mb={12}>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-0.5px"
                    >
                        Recognition & Achievements
                    </Heading>
                </VStack>

                <Box
                    bg="linear-gradient(135deg, rgba(243, 232, 255, 0.5) 0%, white 100%)"
                    borderRadius="20px"
                    p={12}
                >
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12}>
                        {awards.map((award, index) => (
                            <AwardItem key={index} {...award} />
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Awards;