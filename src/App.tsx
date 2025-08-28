// App.tsx
import {
    ChakraProvider,
    Box,
    extendTheme,
    type ThemeConfig,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
                <Navbar />
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Awards />
                <Certificates />
                <Contact />
                <Footer />
            </Box>
        </ChakraProvider>
    );
}

export default App;