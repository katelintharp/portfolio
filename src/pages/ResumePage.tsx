// pages/ResumePage.tsx
import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Icon,
    Divider,
    useBreakpointValue,
} from '@chakra-ui/react';
import {
    FaDownload,
    FaFileAlt,
    FaEnvelope,
    FaExternalLinkAlt,
} from 'react-icons/fa';
import { keyframes } from '@emotion/react';
import Navbar from '../components/Navbar';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`;

interface DocumentViewerProps {
    pdfPath: string;
    title: string;
    downloadName: string;
}

const DocumentViewer: React.FC<DocumentViewerProps> = ({ pdfPath, title, downloadName }) => {
    const iframeHeight = useBreakpointValue({ base: '500px', md: '700px', lg: '800px' });

    return (
        <VStack spacing={6} align="stretch" animation={`${fadeIn} 0.6s ease`}>
            <HStack justify="space-between" flexWrap="wrap" gap={4}>
                <Text color="brand.textDark" fontWeight="500" fontSize="1.1rem">
                    {title}
                </Text>
                <HStack spacing={3}>
                    <Button
                        as="a"
                        href={pdfPath}
                        download={downloadName}
                        size="md"
                        bg="brand.primary"
                        color="white"
                        leftIcon={<FaDownload />}
                        borderRadius="25px"
                        px={6}
                        _hover={{
                            bg: 'brand.primaryLight',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 15px rgba(156, 163, 219, 0.4)',
                        }}
                        transition="all 0.3s ease"
                    >
                        Download PDF
                    </Button>
                    <Button
                        as="a"
                        href={pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                        variant="outline"
                        borderColor="brand.primary"
                        color="brand.primary"
                        leftIcon={<FaExternalLinkAlt />}
                        borderRadius="25px"
                        px={6}
                        _hover={{
                            bg: 'brand.primary',
                            color: 'white',
                            transform: 'translateY(-2px)',
                        }}
                        transition="all 0.3s ease"
                    >
                        Open in New Tab
                    </Button>
                </HStack>
            </HStack>

            <Box
                bg="white"
                borderRadius="15px"
                overflow="hidden"
                boxShadow="0 5px 30px rgba(156, 163, 219, 0.15)"
                border="1px solid"
                borderColor="brand.border"
            >
                <iframe
                    src={`${pdfPath}#toolbar=0&navpanes=0`}
                    width="100%"
                    height={iframeHeight}
                    style={{ border: 'none' }}
                    title={title}
                />
            </Box>
        </VStack>
    );
};

const ResumePage: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        {
            id: 'resume',
            label: 'Resume',
            icon: FaFileAlt,
            title: 'Teaching Resume',
            pdfPath: `${import.meta.env.BASE_URL}documents/Resume_Teaching.pdf`,
            downloadName: 'Katelin_Tharp_Resume.pdf',
            description: 'My current resume highlighting teaching experience, technical skills, and achievements.',
        },
        {
            id: 'letter',
            label: 'Letter of Introduction',
            icon: FaEnvelope,
            title: 'Letter of Introduction',
            pdfPath: `${import.meta.env.BASE_URL}documents/Letter_of_Introduction.pdf`,
            downloadName: 'Katelin_Tharp_Letter_of_Introduction.pdf',
            description: 'A personal introduction to hiring committees outlining my unique interdisciplinary background.',
        },
    ];

    return (
        <>
            <Navbar />
            <Box minH="100vh" bg="brand.background" pt="100px" pb={20}>
            <Container maxW="1000px">
                {/* Header */}
                <VStack spacing={4} mb={10} textAlign="center">
                    <Heading
                        as="h1"
                        size="2xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-0.5px"
                    >
                        Documents
                    </Heading>
                </VStack>

                <Divider borderColor="brand.border" mb={10} />

                {/* Document Viewer Tabs */}
                <Tabs
                    index={tabIndex}
                    onChange={setTabIndex}
                    variant="soft-rounded"
                    colorScheme="purple"
                >
                    <TabList
                        bg="white"
                        borderRadius="30px"
                        p={2}
                        boxShadow="0 3px 15px rgba(156, 163, 219, 0.15)"
                        mb={8}
                        justifyContent="center"
                        flexWrap="wrap"
                    >
                        {documents.map((doc) => (
                            <Tab
                                key={doc.id}
                                borderRadius="25px"
                                fontWeight="500"
                                px={6}
                                py={3}
                                mx={1}
                                color="brand.textBody"
                                _selected={{
                                    bg: 'brand.primary',
                                    color: 'white',
                                }}
                                _hover={{
                                    bg: tabIndex === documents.indexOf(doc) ? 'brand.primary' : 'brand.border',
                                }}
                                transition="all 0.3s ease"
                            >
                                <HStack spacing={2}>
                                    <Icon as={doc.icon} />
                                    <Text>{doc.label}</Text>
                                </HStack>
                            </Tab>
                        ))}
                    </TabList>

                    <TabPanels>
                        {documents.map((doc) => (
                            <TabPanel key={doc.id} p={0}>
                                <Box mb={6}>
                                    <Text color="brand.textBody" fontSize="0.95rem" textAlign="center">
                                        {doc.description}
                                    </Text>
                                </Box>
                                <DocumentViewer
                                    pdfPath={doc.pdfPath}
                                    title={doc.title}
                                    downloadName={doc.downloadName}
                                />
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </Container>
        </Box>
        </>
    );
};

export default ResumePage;
