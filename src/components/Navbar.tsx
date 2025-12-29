// components/Navbar.tsx
import React from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Experience', href: '#experience', sectionId: 'experience' },
    { label: 'Certificates', href: '#certificates', sectionId: 'certificates' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

const projectItems = [
    { label: '🏆 Khoury Teaching Award', to: '/projects/khoury-award' },
    { label: '🎮 Covey.Town Wordle', to: '/projects/wordle' },
    { label: '🎯 Reversi AI Game', to: '/projects/reversi' },
    { label: '💾 FUSE File System', to: '/projects/file-system' },
    { label: '💼 Portfolio Website', to: '/projects/website' },
    { label: '🎒 ELA Journey', to: '/ela-journey' },
];

// Home page paths - add any paths that contain the main sections
const homePagePaths = ['/', '/portfolio', ''];

const Navbar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const navigate = useNavigate();

    // Check if we're on a page that has the main sections
    const isOnHomePage = homePagePaths.includes(location.pathname) ||
        location.pathname.endsWith('/portfolio') ||
        location.pathname.endsWith('/portfolio/');

    const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();

        if (isOnHomePage) {
            // If on home page, just scroll to the section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on external page, navigate to home page with hash
            // The hash will trigger scroll after navigation
            navigate(`/#${sectionId}`);

            // Use setTimeout to scroll after navigation completes
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const handleMobileNavClick = (e: React.MouseEvent, sectionId: string) => {
        handleNavClick(e, sectionId);
        onClose();
    };

    return (
        <Box
            as="nav"
            position="fixed"
            top={0}
            w="full"
            bg="rgba(255, 255, 255, 0.98)"
            backdropFilter="blur(10px)"
            boxShadow="0 1px 10px rgba(156, 163, 219, 0.15)"
            zIndex={1000}
        >
            <Flex
                maxW="1200px"
                mx="auto"
                px={8}
                py={4}
                align="center"
                justify="space-between"
            >
                <Link
                    as={RouterLink}
                    to="/"
                    _hover={{ textDecoration: 'none' }}
                >
                    <Text
                        fontSize="1.8rem"
                        fontWeight="600"
                        color="brand.primary"
                        fontFamily="Georgia, serif"
                        letterSpacing="-1px"
                        cursor="pointer"
                        _hover={{ opacity: 0.8 }}
                        transition="opacity 0.2s ease"
                    >
                        Katelin Tharp
                    </Text>
                </Link>

                <HStack
                    as="nav"
                    spacing={10}
                    display={{ base: 'none', md: 'flex' }}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.sectionId)}
                            color="brand.textDark"
                            fontSize="0.95rem"
                            fontWeight="500"
                            letterSpacing="0.5px"
                            textTransform="uppercase"
                            fontFamily="heading"
                            position="relative"
                            cursor="pointer"
                            _hover={{
                                color: 'brand.primary',
                                textDecoration: 'none',
                                _after: {
                                    width: '100%',
                                },
                            }}
                            _after={{
                                content: '""',
                                position: 'absolute',
                                bottom: '-8px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '0',
                                height: '2px',
                                bg: 'brand.secondary',
                                transition: 'width 0.3s ease',
                                borderRadius: '1px',
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* Projects Dropdown */}
                    <Menu>
                        <MenuButton
                            color="brand.textDark"
                            fontSize="0.95rem"
                            fontWeight="500"
                            letterSpacing="0.5px"
                            textTransform="uppercase"
                            fontFamily="heading"
                            position="relative"
                            _hover={{
                                color: 'brand.primary',
                            }}
                            transition="color 0.3s ease"
                        >
                            <HStack spacing={1}>
                                <Text>Projects</Text>
                                <ChevronDownIcon />
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg="white"
                            borderColor="brand.border"
                            boxShadow="0 4px 20px rgba(156, 163, 219, 0.2)"
                            borderRadius="12px"
                            py={2}
                        >
                            {projectItems.map((item) => (
                                <MenuItem
                                    key={item.label}
                                    as={RouterLink}
                                    to={item.to}
                                    color="brand.textDark"
                                    fontWeight="400"
                                    fontSize="0.9rem"
                                    _hover={{
                                        bg: 'brand.border',
                                        color: 'brand.primary',
                                    }}
                                    px={4}
                                    py={2}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </HStack>

                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Open Menu"
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    variant="ghost"
                />
            </Flex>

            {isOpen && (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as="nav" spacing={4} px={8}>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleMobileNavClick(e, item.sectionId)}
                                color="brand.textDark"
                                fontWeight="500"
                                cursor="pointer"
                                _hover={{
                                    color: 'brand.primary',
                                    textDecoration: 'none',
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Mobile Projects Links */}
                        <Text
                            color="brand.textLight"
                            fontSize="0.85rem"
                            fontWeight="600"
                            textTransform="uppercase"
                            letterSpacing="1px"
                            pt={2}
                        >
                            Projects
                        </Text>
                        {projectItems.map((item) => (
                            <Link
                                key={item.label}
                                as={RouterLink}
                                to={item.to}
                                onClick={onClose}
                                color="brand.textDark"
                                fontWeight="500"
                                pl={4}
                                _hover={{
                                    color: 'brand.primary',
                                    textDecoration: 'none',
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default Navbar;