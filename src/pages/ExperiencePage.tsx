// pages/ExperiencePage.tsx
import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Tag,
    Icon,
    Divider,
    Button,
} from '@chakra-ui/react';
import {
    FaBriefcase,
    FaChalkboardTeacher,
    FaGraduationCap,
    FaCode,
} from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import Navbar from '../components/Navbar';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

interface ExperienceDetailProps {
    role: string;
    company: string;
    location: string;
    date: string;
    type: 'teaching' | 'engineering' | 'education';
    description: string[];
    skills?: string[];
    highlights?: string[];
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({
    role,
    company,
    location,
    date,
    type,
    description,
    skills,
}) => {
    const iconMap = {
        teaching: FaChalkboardTeacher,
        engineering: FaCode,
        education: FaGraduationCap,
    };

    const colorMap = {
        teaching: 'brand.accent',
        engineering: 'brand.primary',
        education: 'brand.secondary',
    };

    return (
        <Box
            bg="white"
            borderRadius="20px"
            p={8}
            boxShadow="0 5px 30px rgba(156, 163, 219, 0.15)"
            position="relative"
            overflow="hidden"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '6px',
                height: '100%',
                bg: colorMap[type],
            }}
            animation={`${fadeIn} 0.6s ease`}
        >
            <VStack align="start" spacing={4}>
                <HStack spacing={4} w="full" justify="space-between" flexWrap="wrap">
                    <HStack spacing={3}>
                        <Box
                            p={3}
                            bg={`${colorMap[type]}20`}
                            borderRadius="12px"
                        >
                            <Icon as={iconMap[type]} boxSize={6} color={colorMap[type]} />
                        </Box>
                        <VStack align="start" spacing={0}>
                            <Heading as="h3" size="md" color="brand.textDark" fontWeight="600">
                                {role}
                            </Heading>
                            <Text color="brand.primary" fontWeight="500" fontSize="1rem">
                                {company}
                            </Text>
                        </VStack>
                    </HStack>
                    <VStack align="end" spacing={0}>
                        <Text color="brand.textLight" fontSize="0.9rem" fontStyle="italic">
                            {date}
                        </Text>
                        <Text color="brand.textLight" fontSize="0.85rem">
                            {location}
                        </Text>
                    </VStack>
                </HStack>

                <Divider borderColor="brand.border" />

                <VStack align="start" spacing={3} w="full">
                    {description.map((item, index) => (
                        <HStack key={index} align="start" spacing={3}>
                            <Box
                                w="6px"
                                h="6px"
                                bg={colorMap[type]}
                                borderRadius="50%"
                                mt={2}
                                flexShrink={0}
                            />
                            <Text color="brand.textBody" lineHeight="1.8" fontSize="0.95rem">
                                {item}
                            </Text>
                        </HStack>
                    ))}
                </VStack>

                {skills && skills.length > 0 && (
                    <>
                        <Text fontWeight="500" color="brand.textDark" fontSize="0.9rem" pt={2}>
                            Technologies & Skills:
                        </Text>
                        <HStack wrap="wrap" spacing={2}>
                            {skills.map((skill) => (
                                <Tag
                                    key={skill}
                                    bg="brand.border"
                                    color="brand.textDark"
                                    px={3}
                                    py={1}
                                    borderRadius="20px"
                                    fontSize="0.8rem"
                                    fontWeight="400"
                                >
                                    {skill}
                                </Tag>
                            ))}
                        </HStack>
                    </>
                )}
            </VStack>
        </Box>
    );
};

const ExperiencePage: React.FC = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teachingExperiences: ExperienceDetailProps[] = [
        {
            role: 'Student Teacher',
            company: 'Pinole Valley High School',
            location: 'Pinole, CA',
            date: 'August 2025 - Present',
            type: 'teaching',
            description: [
                'Developing and implementing 10th and 12th grade ELA lesson plans for bi-weekly observations serving 100+ students.',
                'Collaborating weekly with cooperating teacher and university supervisors to refine practice and align instruction with California Common Core, Universal Design for Learning (UDL), and responsive pedagogy standards.',
                'Leading and designing full class period and week-long takeover lesson plans.',
            ],
        },
        {
            role: 'Substitute Teacher',
            company: 'West Contra Costa Unified School District',
            location: 'Richmond, CA',
            date: 'August 2025 - Present',
            type: 'teaching',
            description: [
                'Executing emergency and planned lesson plans in English, Computer Science, and elective courses.',
                'Maintaining accurate attendance records and applying classroom management strategies to support productive learning.',
            ],
        },
        {
            role: 'Global Scholars Head Teaching Assistant',
            company: 'Northeastern University London',
            location: 'London, UK',
            date: 'January 2024 - May 2024',
            type: 'teaching',
            description: [
                'Facilitated lab instruction, created and graded assessments, and hosted 20+ office hours per week to support 100+ Global Scholars students for CS2510: Fundamentals of Computer Science II.',
                'Worked with London faculty to create and run a cross-site education program with Northeastern\'s home campus in Boston.',
                'Connected with the home site team on a weekly basis to share insight into the experience of performing this function and teaching first year Computer Science students abroad.',
            ],
            skills: ['Java', 'Functional Programming', 'Curriculum Design'],
        },
        {
            role: 'Computer Science Teaching Assistant',
            company: 'Northeastern University',
            location: 'Boston, MA',
            date: 'Fall 2021, Fall 2022, Fall 2023',
            type: 'teaching',
            description: [
                'Conducted and co-taught course-related labs, assisted students with coursework, and reviewed course content for CS2500: Fundamentals of Computer Science I.',
                'Supported 900+ students in reviewing concepts such as the design recipe and functional programming.',
                'Held 5+ office hours per week for one-on-one academic support and tutoring.',
            ],
            skills: ['Racket', 'Functional Programming', 'Mentorship'],
        },
    ];

    const engineeringExperiences: ExperienceDetailProps[] = [
        {
            role: 'Software Engineer',
            company: 'eMoney Advisor',
            location: 'Remote',
            date: 'June 2024 - May 2025',
            type: 'engineering',
            description: [
                'Continued work on eMoney\'s Data Aggregation services as part of the group and advisor parser team using tools such as Docker, Fiddler, and Powershell.',
                'Completed code reviews to further engage with the team and improve eMoney\'s monolithic legacy codebase.',
                'Independently carried complex MFA, OTA, and JavaScript parser-related tickets and features through all stages of development.',
            ],
            skills: ['.NET/C#', 'Docker', 'Fiddler', 'PowerShell', 'JavaScript', 'SQL Server'],
        },
        {
            role: 'Software Developer Co-Op',
            company: 'MCPHS University',
            location: 'Boston, MA',
            date: 'January 2023 - June 2023',
            type: 'engineering',
            description: [
                'Supported the Application Development staff in the programming, analysis, documentation, and testing of new and existing applications to support the university Student Information System.',
                'Maintained existing software systems by installing upgrades and identifying/correcting software defects.',
                'Created technical specifications, test plans, and operational documentation for development projects.',
                'Enhanced existing systems by analyzing business objectives, preparing action plans, and implementing solutions.',
            ],
            skills: ['PowerBuilder', 'SQL', 'Technical Documentation', 'Testing'],
        },
        {
            role: 'Software Engineer Co-Op',
            company: 'eMoney Advisor',
            location: 'Radnor, PA',
            date: 'January 2022 - August 2022',
            type: 'engineering',
            description: [
                'Solved customer-reported issues with 800+ screen scrapers on eMoney\'s Data Aggregation services using our .NET/C# stack involving other tools such as XPath, SQL Server, and Powershell.',
                'Collaborated with other developers, support, and analysts via Jira, Teams, and Bitbucket.',
                'Independently carried tickets and features through all stages of development.',
                'Parsed and interacted with data in HTML, JSON, and OFX/CSV forms.',
            ],
            skills: ['.NET/C#', 'XPath', 'SQL Server', 'PowerShell', 'Jira', 'Bitbucket'],
        },
    ];

    const education: ExperienceDetailProps[] = [
        {
            role: 'M.A. in Education, Single Subject Teaching Credential in English',
            company: 'UC Berkeley - Teacher Education Program (BTEP)',
            location: 'Berkeley, CA',
            date: 'Anticipated June 2026',
            type: 'education',
            description: [
                'Pursuing Single Subject Teaching Credential in English with additional subject authorizations in Computer Science and Psychology.',
                'Engaged in coursework focusing on curriculum design, Universal Design for Learning (UDL), and responsive pedagogy.',
            ],
        },
        {
            role: 'B.S. in Computer Science and Cognitive Psychology',
            company: 'Northeastern University - Khoury College of Computer Sciences',
            location: 'Boston, MA',
            date: 'September 2020 - December 2024',
            type: 'education',
            description: [
                'Graduated Summa Cum Laude with a GPA of 3.90/4.0.',
            ],
            skills: ['Java', 'C#', 'Python', 'JavaScript', 'React', 'SQL'],
        },
        {
            role: 'International Studies Program',
            company: 'University College London',
            location: 'London, UK',
            date: 'Summer Semester 2023',
            type: 'education',
            description: [
                'Completed international studies program with Distinction (4.0/4.0 GPA).',
                'Coursework in Web Development and Language and the Mind.',
            ],
        },
    ];

    return (
        <>
            <Navbar />
            <Box minH="100vh" bg="brand.background" pt="100px" pb={20}>
            <Container maxW="1000px">
                {/* Header */}
                <VStack spacing={4} mb={12} textAlign="center">
                    <Heading
                        as="h1"
                        size="2xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-0.5px"
                    >
                        Full Experience
                    </Heading>
                    <Text
                        color="brand.textBody"
                        fontSize="1.1rem"
                        fontStyle="italic"
                        fontFamily="Georgia, serif"
                        maxW="600px"
                    >
                        A comprehensive look at my journey across education, technology, and everything in between
                    </Text>

                    {/* Resume Link */}
                    <VStack spacing={4} pt={8}>
                        <Divider borderColor="brand.border" />
                        <Text color="brand.textBody" fontSize="0.95rem" textAlign="center">
                            Want a downloadable version?
                        </Text>
                        <Button
                            as={RouterLink}
                            to="/resume"
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
                            View Resume & Documents
                        </Button>
                    </VStack>
                </VStack>

                {/* Education Section */}
                <VStack spacing={8} mb={16} align="stretch">
                    <HStack spacing={3}>
                        <Icon as={FaGraduationCap} boxSize={6} color="brand.secondary" />
                        <Heading as="h2" size="lg" fontWeight="400" color="brand.textDark">
                            Education
                        </Heading>
                    </HStack>
                    {education.map((exp, index) => (
                        <ExperienceDetail key={index} {...exp} />
                    ))}
                </VStack>

                {/* Teaching Experience Section */}
                <VStack spacing={8} mb={16} align="stretch">
                    <HStack spacing={3}>
                        <Icon as={FaChalkboardTeacher} boxSize={6} color="brand.accent" />
                        <Heading as="h2" size="lg" fontWeight="400" color="brand.textDark">
                            Teaching Experience
                        </Heading>
                    </HStack>
                    {teachingExperiences.map((exp, index) => (
                        <ExperienceDetail key={index} {...exp} />
                    ))}
                </VStack>

                {/* Engineering Experience Section */}
                <VStack spacing={8} mb={16} align="stretch">
                    <HStack spacing={3}>
                        <Icon as={FaBriefcase} boxSize={6} color="brand.primary" />
                        <Heading as="h2" size="lg" fontWeight="400" color="brand.textDark">
                            Industry Experience
                        </Heading>
                    </HStack>
                    {engineeringExperiences.map((exp, index) => (
                        <ExperienceDetail key={index} {...exp} />
                    ))}
                </VStack>

                {/* Resume Link */}
                <VStack spacing={4} pt={8}>
                    <Divider borderColor="brand.border" />
                    <Text color="brand.textBody" fontSize="0.95rem" textAlign="center">
                        Want a downloadable version?
                    </Text>
                    <Button
                        as={RouterLink}
                        to="/resume"
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
                        View Resume & Documents
                    </Button>
                </VStack>
            </Container>
        </Box>
        </>
    );
};

export default ExperiencePage;
