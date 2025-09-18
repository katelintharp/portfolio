// components/Projects.tsx
import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
    Tag,
    Link,
    Icon,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

interface ProjectCardProps {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    link?: string;
    isExternal?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     icon,
                                                     title,
                                                     description,
                                                     tags,
                                                     gradient,
                                                     link,
                                                     isExternal = false,
                                                 }) => (
    <Link
        href={link ?? '#'}
        _hover={{ textDecoration: 'none' }}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
    >
        <Box
            bg="white"
            borderRadius="15px"
            overflow="hidden"
            boxShadow="0 3px 15px rgba(156, 163, 219, 0.15)"
            transition="all 0.3s ease"
            cursor="pointer"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '0 8px 30px rgba(156, 163, 219, 0.25)',
            }}
        >
            <Box
                h="120px"
                bg={gradient}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="2.5rem"
                color="white"
                position="relative"
            >
                {icon}
                {link && isExternal && (
                    <Icon
                        as={ExternalLinkIcon}
                        position="absolute"
                        top="10px"
                        right="10px"
                        fontSize="1.2rem"
                        opacity={0.8}
                    />
                )}
            </Box>
            <VStack align="start" p={6} spacing={3}>
                <Heading as="h3" size="md" color="brand.textDark" fontWeight="500">
                    {title}
                </Heading>
                <Text color="brand.textBody" fontSize="0.95rem" lineHeight="1.7">
                    {description}
                </Text>
                <HStack wrap="wrap" spacing={2}>
                    {tags.map((tag) => (
                        <Tag
                            key={tag}
                            bg="brand.border"
                            color="brand.textDark"
                            size="sm"
                            px={3}
                            py={1}
                            borderRadius="15px"
                            fontSize="0.8rem"
                            fontWeight="400"
                            mb={1}
                        >
                            {tag}
                        </Tag>
                    ))}
                </HStack>
            </VStack>
        </Box>
    </Link>
);

const Projects: React.FC = () => {
    const projects = [
        {
            icon: '🏆',
            title: '2025 Khoury College Teaching Award',
            description: 'Recognized for exceptional leadership as lead TA in London, three years of teaching, and innovative cross-continental program development.',
            tags: ['Teaching Excellence', 'Leadership', 'Innovation'],
            gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            link: '/portfolio/projects/khoury-award',
            isExternal: false,
        },
        {
            icon: '🎮',
            title: 'Covey.Town Wordle',
            description: 'Full-stack integration of the NYT Wordle game into an open-source virtual meeting platform, enabling collaborative word-guessing in virtual spaces.',
            tags: ['React', 'TypeScript', 'Game Development', 'WebSockets'],
            gradient: 'linear-gradient(135deg, #F4B8C5 0%, #FFB5C5 100%)',
            link: '/portfolio/projects/wordle',
            isExternal: false,
        },
        {
            icon: '🎯',
            title: 'Reversi AI Game',
            description: 'Implementation of the classic Reversi game with advanced AI opponents using minimax and expectimax algorithms for human vs. human, human vs. AI, and AI vs. AI gamemodes.',
            tags: ['Python', 'AI Algorithms', 'Game Theory', 'Minimax'],
            gradient: 'linear-gradient(135deg, #A8D5BA 0%, #90C9A4 100%)',
            link: '/portfolio/projects/reversi',
            isExternal: false,
        },
        {
            icon: '💾',
            title: 'FUSE File System',
            description: 'Low-level file system implementation supporting 1MB disk images with proper allocation, deallocation, and nested directory structures.',
            tags: ['C', 'Assembly', 'Systems Programming', 'FUSE'],
            gradient: 'linear-gradient(135deg, #95B8F6 0%, #7FA3E0 100%)',
            link: '/portfolio/projects/file-system',
            isExternal: false,
        },
        {
            icon: '💼',
            title: 'Portfolio Website',
            description: 'This website! Modern, responsive portfolio built with React, TypeScript, and ChakraUI.',
            tags: ['React', 'TypeScript', 'ChakraUI', 'Web Design'],
            gradient: 'linear-gradient(135deg, #B8BEE8 0%, #9CA3DB 100%)',
            link: '/portfolio/projects/portfolio',
            isExternal: false,
        },
    ];

    return (
        <Box id="projects" py={20}>
            <Container maxW="1200px">
                <VStack spacing={3} mb={12}>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="300"
                        color="brand.textDark"
                        letterSpacing="-0.5px"
                    >
                        Featured
                    </Heading>
                    <Text
                        color="brand.textBody"
                        fontSize="1.1rem"
                        fontStyle="italic"
                        fontFamily="Georgia, serif"
                    >
                        Project and career highlights!
                    </Text>
                </VStack>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default Projects;