// Example usage of FeaturedCarousel component
import FeaturedCarousel from './components/FeaturedCarousel';

export default function ExamplePage() {
    // Sample data structure for carousel items
    const carouselItems = [
        {
            id: 1,
            image: "https://picsum.photos/id/1011/300/300",
            title: "Cutting Machines",
            buttonText: "View Products", // Optional: defaults to "View More"
            onButtonClick: (item) => {
                // Handle button click - can navigate, open modal, etc.
                console.log(`Navigate to ${item.title} page`);
                // Example: router.push('/products/cutting-machines');
            }
        },
        {
            id: 2,
            image: "https://picsum.photos/id/1025/300/300",
            title: "Eco-Solvent Printers",
            buttonText: "Learn More",
            onButtonClick: (item) => {
                console.log(`Open details for ${item.title}`);
                // Example: setSelectedProduct(item); setModalOpen(true);
            }
        },
        {
            id: 3,
            image: "https://picsum.photos/id/1035/300/300",
            title: "Solvent Printers",
            // buttonText not specified - will default to "View More"
            onButtonClick: (item) => {
                console.log(`Button clicked for ${item.title}`);
            }
        },
        {
            id: 4,
            image: "https://picsum.photos/id/1041/300/300",
            title: "Sublimation Printers",
            buttonText: "Explore",
            onButtonClick: (item) => {
                console.log(`Explore ${item.title}`);
            }
        },
        {
            id: 5,
            image: "https://picsum.photos/id/1062/300/300",
            title: "DTF Printers",
            buttonText: "View Details",
            onButtonClick: (item) => {
                console.log(`View details for ${item.title}`);
            }
        }
    ];

    return (
        <div>
            <h1>My Landing Page</h1>

            {/* Basic usage with custom title */}
            <FeaturedCarousel
                items={carouselItems}
                title="Featured Products"
            />

            {/* Usage with default title */}
            <FeaturedCarousel
                items={carouselItems}
            />

            {/* Usage with different data */}
            <FeaturedCarousel
                items={[
                    {
                        id: 1,
                        image: "/images/service1.jpg",
                        title: "Printing Services",
                        buttonText: "Get Quote",
                        onButtonClick: (item) => console.log('Request quote')
                    },
                    {
                        id: 2,
                        image: "/images/service2.jpg",
                        title: "Design Services",
                        buttonText: "Portfolio",
                        onButtonClick: (item) => console.log('View portfolio')
                    }
                ]}
                title="Our Services"
            />
        </div>
    );
}

/*
COMPONENT FEATURES:
✅ Drag-to-scroll functionality
✅ Center-active scaling animation
✅ Only active item shows title + button
✅ Automatically centers middle item on load
✅ Smooth scroll behavior when clicking items
✅ Responsive design
✅ CSS Modules for scoped styling
✅ TypeScript-ready prop structure

PROP STRUCTURE:
- items: Array of objects with:
  - id: Unique identifier
  - image: Image URL or path
  - title: Display title
  - buttonText: (optional) Button text, defaults to "View More"
  - onButtonClick: (optional) Function called when button is clicked
- title: (optional) Carousel section title, defaults to "Featured Subjects"

USAGE PATTERNS:
1. Basic carousel with product showcase
2. Service carousel with custom actions
3. Portfolio carousel with navigation
4. Feature carousel with modal triggers
*/