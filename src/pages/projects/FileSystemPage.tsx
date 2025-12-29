// pages/projects/FileSystemPage.tsx
import React, { useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    Button,
    List,
    ListItem,
    ListIcon,
    SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon, CheckCircleIcon } from '@chakra-ui/icons';
import Navbar from "../../components/Navbar.tsx";

const FileSystemPage: React.FC = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <Box minH="100vh" bg="brand.background">
                {/* Header */}
                <Box bg="linear-gradient(135deg, #95B8F6 0%, #7FA3E0 100%)" py={20} pt={32}>
                    <Container maxW="1200px">
                        <VStack align="start" spacing={4}>
                            <Heading as="h1" size="3xl" color="white" fontWeight="300">
                                💾 FUSE File System
                            </Heading>
                            <Text fontSize="xl" color="whiteAlpha.900">
                                Low-Level File System Implementation in C and Assembly
                            </Text>
                        </VStack>
                    </Container>
                </Box>

                {/* Content */}
                <Container maxW="1200px" py={12}>
                    <VStack spacing={12} align="start">
                        <HStack spacing={4}>
                            <Button
                                as="a"
                                href="https://github.com/katelintharp/FileSystem/tree/main/FileSystem/project2-jaypat73-ktharp-main"
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
                                A comprehensive implementation of a FUSE (Filesystem in Userspace) file system driver
                                that enables mounting and manipulation of 1MB disk images. This project demonstrates
                                deep understanding of operating system concepts, memory management, and low-level
                                system programming.
                            </Text>
                            <Text color="brand.textBody" fontSize="lg" lineHeight="1.8">
                                The file system supports essential operations including file creation, deletion,
                                reading, writing, and hierarchical directory structures, all implemented from
                                scratch using C and Assembly language.
                            </Text>
                        </Box>

                        {/* Technical Architecture */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                System Architecture
                            </Heading>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                <Box>
                                    <Heading as="h3" size="md" mb={3} color="brand.primary">Core Components</Heading>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Block allocation management
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Inode structure implementation
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Directory entry handling
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Free space management
                                        </ListItem>
                                    </List>
                                </Box>
                                <Box>
                                    <Heading as="h3" size="md" mb={3} color="brand.primary">File Operations</Heading>
                                    <List spacing={2}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Create, read, write, delete
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Directory traversal
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            File metadata management
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color="brand.accent" />
                                            Permission handling
                                        </ListItem>
                                    </List>
                                </Box>
                            </SimpleGrid>
                        </Box>

                        {/* Implementation Details */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                Key Features
                            </Heading>
                            <List spacing={4}>
                                <ListItem>
                                    <HStack align="start">
                                        <Text fontSize="2xl" mt={-1}>📁</Text>
                                        <Box>
                                            <Text fontWeight="500" color="brand.textDark">Hierarchical Directory Structure</Text>
                                            <Text color="brand.textBody">
                                                Full support for nested directories with proper path resolution,
                                                allowing creation of complex file system hierarchies similar to
                                                traditional Unix-like systems.
                                            </Text>
                                        </Box>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack align="start">
                                        <Text fontSize="2xl" mt={-1}>💾</Text>
                                        <Box>
                                            <Text fontWeight="500" color="brand.textDark">Dynamic Block Allocation</Text>
                                            <Text color="brand.textBody">
                                                Efficient block allocation and deallocation algorithms that minimize
                                                fragmentation and optimize disk space utilization for files of
                                                varying sizes.
                                            </Text>
                                        </Box>
                                    </HStack>
                                </ListItem>
                                <ListItem>
                                    <HStack align="start">
                                        <Text fontSize="2xl" mt={-1}>⚡</Text>
                                        <Box>
                                            <Text fontWeight="500" color="brand.textDark">Performance Optimization</Text>
                                            <Text color="brand.textBody">
                                                Assembly-level optimizations for critical paths, including fast
                                                bitmap operations and efficient memory copying routines.
                                            </Text>
                                        </Box>
                                    </HStack>
                                </ListItem>
                            </List>
                        </Box>

                        {/* Code Sample */}
                        <Box bg="white" p={8} borderRadius="15px" boxShadow="0 3px 15px rgba(0,0,0,0.1)" w="full">
                            <Heading as="h2" size="xl" mb={6} color="brand.textDark" fontWeight="400">
                                Implementation Highlights
                            </Heading>
                            <VStack align="start" spacing={4}>
                                <Box>
                                    <List spacing={2} ml={4}>
                                        <ListItem color="brand.textBody" fontSize="sm">
                                            • Successfully mounts 1MB disk images as functional filesystems
                                        </ListItem>
                                        <ListItem color="brand.textBody" fontSize="sm">
                                            • Handles files up to several hundred KB with indirect blocks
                                        </ListItem>
                                        <ListItem color="brand.textBody" fontSize="sm">
                                            • Passes comprehensive test suite including edge cases
                                        </ListItem>
                                        <ListItem color="brand.textBody" fontSize="sm">
                                            • Maintains data integrity across mount/unmount cycles
                                        </ListItem>
                                    </List>
                                </Box>
                            </VStack>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </>
    );
};

export default FileSystemPage;
