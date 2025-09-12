//components/About.tsx
import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    VStack,
    HStack,
    SimpleGrid,
    Tag,
    Icon,
    Image,
} from '@chakra-ui/react';
import {
    FaGraduationCap,
    FaLaptopCode,
    FaBrain,
    FaUsers,
} from 'react-icons/fa';

interface SkillCategoryProps {
    icon: React.ElementType;
    title: string;
    skills: string[];
    color: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills, color }) => (
    <Box
        bg="white"
        p={6}
        borderRadius="15px"
        boxShadow="0 3px 15px rgba(156, 163, 219, 0.15)"
        transition="all 0.3s ease"
    >
        <HStack mb={4} color={color}>
            <Icon as={icon} boxSize={5} />
            <Text fontWeight="500" fontSize="1.1rem" fontFamily="heading">
                {title}
            </Text>
        </HStack>
        <HStack wrap="wrap" spacing={2}>
            {skills.map((skill) => (
                <Tag
                    key={skill}
                    bg="brand.border"
                    color="brand.textDark"
                    px={3}
                    py={1}
                    borderRadius="20px"
                    fontSize="0.85rem"
                    fontWeight="400"
                    mb={2}
                    transition="all 0.2s ease"
                >
                    {skill}
                </Tag>
            ))}
        </HStack>
    </Box>
);

const About: React.FC = () => {
    const skillCategories = [
        {
            icon: FaGraduationCap,
            title: 'Education',
            skills: ['Curriculum Design', 'Assessment', 'EdTech', 'Cross-Cultural Teaching'],
            color: 'brand.primary',
        },
        {
            icon: FaLaptopCode,
            title: 'Technical',
            skills: ['Full-Stack', 'React', 'Python', 'Java', 'C#/.NET'],
            color: 'brand.secondary',
        },
        {
            icon: FaBrain,
            title: 'Cognitive Science',
            skills: ['Learning Theory', 'UX Research', 'HCI', 'Memory & Cognition'],
            color: 'brand.accent',
        },
        {
            icon: FaUsers,
            title: 'Leadership',
            skills: ['Mentorship', 'Public Speaking', 'Project Management', 'Team Building'],
            color: 'brand.warm',
        },
    ];

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
                                As an aspiring educator at Berkeley's Teacher Education Program (BTEP) with experience
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
                                Recognized with the 2025 Khoury College Undergraduate Teaching Award, I'm committed to creating
                                inclusive learning environments where every student can thrive.
                            </Text>
                        </VStack>
                    </Grid>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                    {skillCategories.map((category) => (
                        <SkillCategory key={category.title} {...category} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default About;