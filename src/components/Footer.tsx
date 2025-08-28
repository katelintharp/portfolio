// components/Footer.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            bg="brand.border"
            color="brand.textBody"
            textAlign="center"
            py={8}
            mt={16}
        >
            <Text fontSize="0.95rem">
                © {currentYear} Katelin Tharp
            </Text>
        </Box>
    );
};

export default Footer;