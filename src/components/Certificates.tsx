// components/Certificates.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Badge,
    HStack,
    Icon,
    Divider,
} from '@chakra-ui/react';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';

interface CertificateCardProps {
    title: string;
    issuer: string;
    date: string;
    validThrough?: string;
    icon: React.ReactNode;
    color: string;
    details?: string[];
    badge?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
                                                             title,
                                                             issuer,
                                                             date,
                                                             validThrough,
                                                             icon,
                                                             color,
                                                             details,
                                                             badge,
                                                         }) => (
    <Box
        bg="white"
        borderRadius="15px"
        p={6}
        boxShadow="0 3px 15px rgba(156, 163, 219, 0.15)"
        transition="all 0.3s ease"
        _hover={{
            transform: 'translateY(-5px)',
            boxShadow: '0 5px 25px rgba(156, 163, 219, 0.25)',
        }}
        position="relative"
        borderTop="4px solid"
        borderTopColor={color}
    >
        {badge && (
            <Badge
                position="absolute"
                top={4}
                right={4}
                bg={color}
                color="white"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="xs"
            >
                {badge}
            </Badge>
        )}

        <VStack align="start" spacing={3}>
            <HStack spacing={3}>
                <Box color={color} fontSize="2rem">
                    {icon}
                </Box>
                <VStack align="start" spacing={0}>
                    <Heading as="h3" size="md" color="brand.textDark" fontWeight="500">
                        {title}
                    </Heading>
                    <Text color="brand.primary" fontSize="sm" fontWeight="500">
                        {issuer}
                    </Text>
                </VStack>
            </HStack>

            <Divider />

            <VStack align="start" spacing={2} w="full">
                <HStack justify="space-between" w="full">
                    <Text fontSize="sm" color="brand.textBody">
                        <strong>Issued:</strong> {date}
                    </Text>
                    {validThrough && (
                        <Text fontSize="sm" color="brand.textBody">
                            <strong>Valid:</strong> {validThrough}
                        </Text>
                    )}
                </HStack>

                {details && details.length > 0 && (
                    <VStack align="start" spacing={1} pt={2}>
                        {details.map((detail, index) => (
                            <HStack key={index} align="start">
                                <Icon as={CheckCircleIcon} color={color} boxSize={3} mt={1} />
                                <Text fontSize="sm" color="brand.textBody">
                                    {detail}
                                </Text>
                            </HStack>
                        ))}
                    </VStack>
                )}
            </VStack>
        </VStack>
    </Box>
);

const Certificates: React.FC = () => {
    const certificates = [
        {
            title: '30-Day Substitute Teaching Permit',
            issuer: 'California Commission on Teacher Credentialing',
            date: 'June 13, 2025',
            validThrough: 'July 1, 2026',
            icon: '📋',
            color: 'brand.primary',
            details: [
                'Authorized to substitute teach in California public schools',
                'All grade levels and subject areas',
                'Document Number: 250207455',
            ],
            badge: 'ACTIVE',
        },
        {
            title: 'Certificate of Clearance',
            issuer: 'California Commission on Teacher Credentialing',
            date: 'December 17, 2024',
            validThrough: 'January 1, 2030',
            icon: '✅',
            color: 'brand.accent',
            details: [
                'Background clearance for education employment',
                'Required for all California educators',
                'Document Number: 240324934',
            ],
        },
        {
            title: 'CSET English - All Subtests Passed',
            issuer: 'California Subject Examinations for Teachers',
            date: 'January 9, 2025',
            validThrough: '10 years from test date',
            icon: '📝',
            color: 'brand.secondary',
            details: [
                'Subtest I: Reading Literature & Informational Texts - PASS',
                'Subtest II: Language, Linguistics & Literacy - PASS',
                'Subtest III: Composition & Rhetoric - PASS',
                'Subtest IV: Communications - PASS',
            ],
            badge: 'COMPLETE',
        },
    ];

    const upcomingCredentials = [
        {
            credential: 'Single Subject Teaching Credential - English',
            expectedDate: 'June 2026',
            status: 'In Progress',
        },
        {
            credential: 'Additional Authorization - Computer Science',
            expectedDate: 'June 2026',
            status: 'In Progress',
        },
        {
            credential: 'Additional Authorization - Psychology',
            expectedDate: 'June 2026',
            status: 'In Progress',
        },
    ];

    return (
        <Box id="certificates" py={20} bg="rgba(243, 232, 255, 0.2)">
            <Container maxW="1200px">
                <VStack spacing={3} mb={12}>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-0.5px"
                    >
                        Certificates & Credentials
                    </Heading>
                    <Text
                        color="brand.textBody"
                        fontSize="1.1rem"
                        fontStyle="italic"
                        fontFamily="Georgia, serif"
                    >
                        Professional certifications and academic achievements
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={12}>
                    {certificates.map((cert, index) => (
                        <CertificateCard key={index} {...cert} />
                    ))}
                </SimpleGrid>

                <Box
                    bg="white"
                    borderRadius="20px"
                    p={8}
                    boxShadow="0 5px 30px rgba(156, 163, 219, 0.15)"
                >
                    <Heading as="h3" size="lg" mb={6} color="brand.textDark" fontWeight="400">
                        <Icon as={StarIcon} color="brand.primary" mr={2} />
                        Credentials in Progress
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        {upcomingCredentials.map((cred, index) => (
                            <Box key={index} p={4} bg="brand.border" borderRadius="10px">
                                <Text fontWeight="500" color="brand.textDark" mb={2}>
                                    {cred.credential}
                                </Text>
                                <Text fontSize="sm" color="brand.textBody">
                                    Expected: {cred.expectedDate}
                                </Text>
                                <Badge
                                    mt={2}
                                    bg="brand.primary"
                                    color="white"
                                    fontSize="xs"
                                    px={2}
                                    py={1}
                                    borderRadius="md"
                                >
                                    {cred.status}
                                </Badge>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Certificates;