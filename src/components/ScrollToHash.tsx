// components/ScrollToHash.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that handles scrolling to hash sections when navigating from external pages.
 * Add this component to your HomePage to enable hash-based navigation.
 */
const ScrollToHash: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if there's a hash in the URL
        if (location.hash) {
            // Remove the '#' from the hash
            const sectionId = location.hash.slice(1);
            
            // Small delay to ensure the page has rendered
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return null;
};

export default ScrollToHash;
