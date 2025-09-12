// App.tsx
import {
    ChakraProvider,
    Box,
    extendTheme,
    type ThemeConfig,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KhouryAwardPage from './pages/projects/KhouryAwardPage';
import WordlePage from './pages/projects/WordlePage';
import ReversiPage from './pages/projects/ReversiPage';
import FileSystemPage from './pages/projects/FileSystemPage';
import PortfolioPage from './pages/projects/PortfolioPage';

// Custom theme with soft pastel colors
const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    colors: {
        brand: {
            primary: '#9CA3DB',
            primaryLight: '#B8BEE8',
            secondary: '#F4B8C5',
            accent: '#A8D5BA',
            warm: '#FFCAA6',
            background: '#FEFEFE',
            cardBg: '#FFFFFF',
            textDark: '#4A5568',
            textBody: '#6B7280',
            textLight: '#9CA3AF',
            border: '#F3E8FF',
        },
    },
    fonts: {
        heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
        body: `'Georgia', 'Times New Roman', serif`,
    },
    styles: {
        global: {
            'html, body': {
                backgroundColor: 'brand.background',
                color: 'brand.textBody',
                lineHeight: '1.7',
            },
            'html': {
                scrollBehavior: 'smooth',
            },
        },
    },
});

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box minH="100vh" overflowX="hidden">
                <Router basename={import.meta.env.BASE_URL}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects/khoury-award" element={<KhouryAwardPage />} />
                        <Route path="/projects/wordle" element={<WordlePage />} />
                        <Route path="/projects/reversi" element={<ReversiPage />} />
                        <Route path="/projects/file-system" element={<FileSystemPage />} />
                        <Route path="/projects/portfolio" element={<PortfolioPage />} />
                    </Routes>
                </Router>
            </Box>
        </ChakraProvider>
    );
}

export default App;