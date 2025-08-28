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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Recognition', href: '#awards' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Text
                    fontSize="1.8rem"
                    fontWeight="600"
                    color="brand.primary"
                    fontFamily="Georgia, serif"
                    letterSpacing="-1px"
                >
                    Katelin Tharp
                </Text>

                <HStack
                    as="nav"
                    spacing={10}
                    display={{ base: 'none', md: 'flex' }}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            color="brand.textDark"
                            fontSize="0.95rem"
                            fontWeight="500"
                            letterSpacing="0.5px"
                            textTransform="uppercase"
                            fontFamily="heading"
                            position="relative"
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
                                onClick={onClose}
                                color="brand.textDark"
                                fontWeight="500"
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