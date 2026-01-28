"use client";
import React, { useState } from 'react';
import Header from '../../components/Header';
import Image from 'next/image';
import '../product-detail.css';
import './inks_friendly.css';

// Static ink products data with updated categories and products
const getInkProductsData = () => {
  return {
    categories: [
      {
        id: 1,
        name: "Eco-Solvent Inks",
        description: "Environmentally friendly inks with low odor and reduced VOC emissions, perfect for indoor and outdoor use.",
        image: "/KELIN-LOGO-01.png",
        features: [
          "Low VOC emissions",
          "Minimal odor",
          "Excellent adhesion",
          "Scratch resistant finish"
        ],
        applications: ["Indoor posters", "Retail displays", "Exhibition graphics", "Photo prints"],
        products: [
          {
            name: "Eco M15 1L Cyan",
            size: "1L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "High-quality eco-solvent ink with excellent color reproduction and minimal odor.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Viscosity": "10-14 cP",
              "Color Gamut": "Wide gamut coverage",
              "Shelf Life": "18 months",
              "Storage": "Room temperature"
            }
          },
          {
            name: "Eco M15 1L Magenta",
            size: "1L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "Vibrant magenta eco-solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Viscosity": "10-14 cP",
              "Color Gamut": "Wide gamut coverage",
              "Shelf Life": "18 months",
              "Storage": "Room temperature"
            }
          },
          {
            name: "Eco M15 1L Yellow",
            size: "1L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "Bright yellow eco-solvent ink with excellent lightfastness.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Viscosity": "10-14 cP",
              "Color Gamut": "Wide gamut coverage",
              "Shelf Life": "18 months",
              "Storage": "Room temperature"
            }
          },
          {
            name: "Eco M15 1L Black",
            size: "1L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "Deep black eco-solvent ink for sharp text and solid areas.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Viscosity": "10-14 cP",
              "Color Gamut": "Wide gamut coverage",
              "Shelf Life": "18 months",
              "Storage": "Room temperature"
            }
          },
          {
            name: "M21 Cyan (i3200)",
            size: "1L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "Specialized cyan ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Printhead": "i3200 Compatible",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "M21 Magenta (i3200)",
            size: "1L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "Specialized magenta ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Printhead": "i3200 Compatible",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "M21 Yellow (i3200)",
            size: "1L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "Specialized yellow ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Printhead": "i3200 Compatible",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "M21 Black (i3200)",
            size: "1L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "Specialized black ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Printhead": "i3200 Compatible",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "Phoenix E2 1L. Cyan",
            size: "1L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "Premium Phoenix E2 cyan ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Series": "Phoenix E2",
              "Viscosity": "12-16 cP",
              "Color Density": "High",
              "Shelf Life": "20 months"
            }
          },
          {
            name: "Phoenix E2 1L. Magenta",
            size: "1L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "Premium Phoenix E2 magenta ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Series": "Phoenix E2",
              "Viscosity": "12-16 cP",
              "Color Density": "High",
              "Shelf Life": "20 months"
            }
          },
          {
            name: "Phoenix E2 1L. Yellow",
            size: "1L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "Premium Phoenix E2 yellow ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Series": "Phoenix E2",
              "Viscosity": "12-16 cP",
              "Color Density": "High",
              "Shelf Life": "20 months"
            }
          },
          {
            name: "Phoenix E2 1L. Black",
            size: "1L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "Premium Phoenix E2 black ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent",
              "Series": "Phoenix E2",
              "Viscosity": "12-16 cP",
              "Color Density": "High",
              "Shelf Life": "20 months"
            }
          }
        ]
      },
      {
        id: 2,
        name: "Solvent Inks",
        description: "High-performance solvent-based inks designed for outdoor applications and durable signage. Includes cleaning solutions.",
        image: "/KELIN-LOGO-01.png",
        features: [
          "Excellent weather resistance",
          "Vibrant color reproduction",
          "Fast drying properties",
          "Compatible with various substrates"
        ],
        applications: ["Outdoor banners", "Vehicle wraps", "Billboards", "PVC signage"],
        products: [
          {
            name: "Eagle V2 1L. Cyan",
            size: "1L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "Professional solvent-based cyan ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "Eagle V2 1L. Magenta",
            size: "1L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "Professional solvent-based magenta ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "Eagle V2 1L. Yellow",
            size: "1L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "Professional solvent-based yellow ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "Eagle V2 1L. Black",
            size: "1L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "Professional solvent-based black ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "Eagle V2 5L. Cyan",
            size: "5L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "Large volume professional solvent-based cyan ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "Eagle V2 5L. Magenta",
            size: "5L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "Large volume professional solvent-based magenta ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "Eagle V2 5L. Yellow",
            size: "5L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "Large volume professional solvent-based yellow ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "Eagle V2 5L. Black",
            size: "5L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "Large volume professional solvent-based black ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent",
              "Series": "Eagle V2",
              "Weather Resistance": "Excellent",
              "Viscosity": "8-12 cP",
              "Shelf Life": "24 months"
            }
          },
          {
            name: "T14 Cyan",
            size: "1L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "T14 series cyan solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "T14",
              "Viscosity": "10-14 cP",
              "Shelf Life": "18 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "T14 Magenta",
            size: "1L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "T14 series magenta solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "T14",
              "Viscosity": "10-14 cP",
              "Shelf Life": "18 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "T14 Yellow",
            size: "1L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "T14 series yellow solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "T14",
              "Viscosity": "10-14 cP",
              "Shelf Life": "18 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "T14 Black",
            size: "1L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "T14 series black solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent",
              "Series": "T14",
              "Viscosity": "10-14 cP",
              "Shelf Life": "18 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "T14 Eco Plus 2L Cyan",
            size: "2L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "Enhanced T14 Eco Plus cyan ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent",
              "Series": "T14 Eco Plus",
              "Viscosity": "9-13 cP",
              "Eco-Friendly": "Enhanced formula",
              "Shelf Life": "20 months"
            }
          },
          {
            name: "T14 Eco Plus 2L Magenta",
            size: "2L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "Enhanced T14 Eco Plus magenta ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent",
              "Series": "T14 Eco Plus",
              "Viscosity": "9-13 cP",
              "Eco-Friendly": "Enhanced formula",
              "Shelf Life": "20 months"
            }
          },
          {
            name: "T14 Eco Plus 2L Yellow",
            size: "2L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "Enhanced T14 Eco Plus yellow ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent",
              "Series": "T14 Eco Plus",
              "Viscosity": "9-13 cP",
              "Eco-Friendly": "Enhanced formula",
              "Shelf Life": "20 months"
            }
          },
          {
            name: "T14 Eco Plus 2L Black",
            size: "2L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "Enhanced T14 Eco Plus black ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent",
              "Series": "T14 Eco Plus",
              "Viscosity": "9-13 cP",
              "Eco-Friendly": "Enhanced formula",
              "Shelf Life": "20 months"
            }
          },
          {
            name: "Cleaning Solution 1L.",
            size: "1L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/KELIN-LOGO-01.png",
            description: "Professional cleaning solution for maintaining print quality and extending printhead life.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Cleaning Solution",
              "Application": "Printhead cleaning",
              "Compatibility": "All solvent systems",
              "Shelf Life": "36 months",
              "Storage": "Room temperature"
            }
          },
          {
            name: "Cleaning Solution 5L.",
            size: "5L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/KELIN-LOGO-01.png",
            description: "Large volume professional cleaning solution for high-usage environments.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Cleaning Solution",
              "Application": "Printhead cleaning",
              "Compatibility": "All solvent systems",
              "Shelf Life": "36 months",
              "Storage": "Room temperature"
            }
          },
          {
            name: "Cleaning Solution 4L. T Series",
            size: "4L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/KELIN-LOGO-01.png",
            description: "Specialized cleaning solution optimized for T Series printing systems.",
            specifications: {
              "Volume": "4 Liters",
              "Type": "Cleaning Solution",
              "Series": "T Series Compatible",
              "Application": "System maintenance",
              "Shelf Life": "36 months",
              "Storage": "Cool, dry place"
            }
          },
          {
            name: "Cleaning Solution 1L. T Series",
            size: "1L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/KELIN-LOGO-01.png",
            description: "Specialized cleaning solution optimized for T Series printing systems.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Cleaning Solution",
              "Series": "T Series Compatible",
              "Application": "System maintenance",
              "Shelf Life": "36 months",
              "Storage": "Cool, dry place"
            }
          }
        ]
      },
      {
        id: 3,
        name: "DTF Inks",
        description: "Direct-to-Film inks for textile printing with exceptional color vibrancy and wash fastness.",
        image: "/KELIN-LOGO-01.png",
        features: [
          "Excellent color vibrancy",
          "Superior wash fastness",
          "Smooth texture finish",
          "Compatible with DTF films"
        ],
        applications: ["T-shirt printing", "Textile decoration", "Fashion apparel", "Custom garments"],
        products: [
          { name: "Brilliant DTF Textile 1L. Cyan", size: "1L", color: "Cyan" },
          { name: "Brilliant DTF Textile 1L. Magenta", size: "1L", color: "Magenta" },
          { name: "Brilliant DTF Textile 1L. Yellow", size: "1L", color: "Yellow" },
          { name: "Brilliant DTF Textile 1L. Black", size: "1L", color: "Black" },
          { name: "Brilliant DTF Textile 1L. White", size: "1L", color: "White" },
          { name: "Vivid DTF Textile 1L. Cyan", size: "1L", color: "Cyan" },
          { name: "Vivid DTF Textile 1L. Magenta", size: "1L", color: "Magenta" },
          { name: "Vivid DTF Textile 1L. Yellow", size: "1L", color: "Yellow" },
          { name: "Vivid DTF Textile 1L. Black", size: "1L", color: "Black" },
          { name: "Vivid DTF Textile 1L. White", size: "1L", color: "White" },
          { name: "Brilliant DTF Textile 1L. Fluorescent Yellow", size: "1L", color: "Fluorescent Yellow" },
          { name: "Brilliant DTF Textile 1L. Fluorescent Pink", size: "1L", color: "Fluorescent Pink" },
          { name: "Brilliant DTF Textile 1L. Fluorescent Orange", size: "1L", color: "Fluorescent Orange" },
          { name: "Brilliant DTF Textile 1L. Fluorescent Red", size: "1L", color: "Fluorescent Red" },
          { name: "DTF Cleaning Solution 500ml", size: "500ml", color: "Clear", type: "Cleaning Solution" },
          { name: "DTF Cleaning Solution 1L", size: "1L", color: "Clear", type: "Cleaning Solution" }
        ]
      },
      {
        id: 4,
        name: "Sublimation Inks",
        description: "High-quality sublimation inks for vibrant transfers on polyester fabrics and polymer-coated substrates.",
        image: "/KELIN-LOGO-01.png",
        features: [
          "Vibrant color transfer",
          "Excellent heat stability",
          "Deep color penetration",
          "Long-lasting prints"
        ],
        applications: ["Sportswear", "Mugs & tumblers", "Phone cases", "Polyester fabrics"],
        products: [
          { name: "Vivid Sublimation 1L Cyan", size: "1L", color: "Cyan" },
          { name: "Vivid Sublimation 1L Magenta", size: "1L", color: "Magenta" },
          { name: "Vivid Sublimation 1L Yellow", size: "1L", color: "Yellow" },
          { name: "Vivid Sublimation 1L Black", size: "1L", color: "Black" },
          { name: "Vivid Sublimation 5L Cyan", size: "5L", color: "Cyan" },
          { name: "Vivid Sublimation 5L Magenta", size: "5L", color: "Magenta" },
          { name: "Vivid Sublimation 5L Yellow", size: "5L", color: "Yellow" },
          { name: "Vivid Sublimation 5L Black", size: "5L", color: "Black" },
          { name: "Brilliant Sublimation 1L Cyan", size: "1L", color: "Cyan" },
          { name: "Brilliant Sublimation 1L Magenta", size: "1L", color: "Magenta" },
          { name: "Brilliant Sublimation 1L Yellow", size: "1L", color: "Yellow" },
          { name: "Brilliant Sublimation 1L Black", size: "1L", color: "Black" },
          { name: "Papijet LTI 203 Cyan", size: "1L", color: "Cyan" },
          { name: "Papijet LTI 203 Magenta", size: "1L", color: "Magenta" },
          { name: "Papijet LTI 203 Yellow", size: "1L", color: "Yellow" },
          { name: "Papijet LTI 203 Black", size: "1L", color: "Black" },
          { name: "Papijet LTIP Light Cyan", size: "1L", color: "Light Cyan" },
          { name: "Papijet LTIP Light Magenta", size: "1L", color: "Light Magenta" },
          { name: "Papijet LTI 202 Fluorescent Yellow", size: "1L", color: "Fluorescent Yellow" },
          { name: "Papijet LTI 202 Fluorescent Pink", size: "1L", color: "Fluorescent Pink" }
        ]
      },
      {
        id: 5,
        name: "UV Inks",
        description: "Instant-curing UV inks that provide exceptional durability and print quality for demanding applications.",
        image: "/KELIN-LOGO-01.png",
        features: [
          "Instant curing",
          "Superior durability",
          "No heat required",
          "Excellent color density"
        ],
        applications: ["Rigid substrates", "Industrial labels", "Packaging", "Electronics"],
        products: [
          { name: "Smart UV 1L Cyan", size: "1L", color: "Cyan" },
          { name: "Smart UV 1L Magenta", size: "1L", color: "Magenta" },
          { name: "Smart UV 1L Yellow", size: "1L", color: "Yellow" },
          { name: "Smart UV 1L Black", size: "1L", color: "Black" },
          { name: "Smart UV 1L White", size: "1L", color: "White" }
        ]
      }
    ]
  };
};

// Generate structured data for SEO
const generateStructuredData = (inkData) => {
  const categories = inkData.categories.map(category => ({
    "@type": "Product",
    "name": category.name,
    "description": category.description,
    "brand": {
      "@type": "Brand",
      "name": "Kelin"
    },
    "category": "Printing Inks"
  }));

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional Printing Inks",
    "description": "Comprehensive range of high-quality printing inks for various applications",
    "url": "https://www.kelinph.com/products/inks",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": categories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          ...category,
          "@id": `https://www.kelinph.com/products/inks#${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.kelinph.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://www.kelinph.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Inks",
          "item": "https://www.kelinph.com/products/inks"
        }
      ]
    }
  };
};

// Helper function for color codes (grayscale palette)
const getColorCode = (colorName) => {
  const colorMap = {
    'Cyan': '#9ca3af',
    'Magenta': '#6b7280',
    'Yellow': '#d1d5db',
    'Black': '#374151',
    'White': '#f9fafb',
    'Clear': '#e5e7eb',
    'Light Cyan': '#d1d5db',
    'Light Magenta': '#9ca3af',
    'Fluorescent Yellow': '#f3f4f6',
    'Fluorescent Pink': '#9ca3af',
    'Fluorescent Orange': '#9ca3af',
    'Fluorescent Red': '#6b7280'
  };
  return colorMap[colorName] || '#9e9e9e';
};

export default function Inks() {
  // Get static data at build time
  const inkData = getInkProductsData();
  const structuredData = generateStructuredData(inkData);

  // Lightbox state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);
  const [inquiryFormData, setInquiryFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    productName: ''
  });

  const openLightbox = (product, categoryName) => {
    setSelectedProduct({ ...product, categoryName });
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedProduct(null);
  };

  const openInquiryForm = (product) => {
    setInquiryFormData(prev => ({ ...prev, productName: product.name, subject: `Inquiry about ${product.name}` }));
    setIsInquiryFormOpen(true);
  };

  const closeInquiryForm = () => {
    setIsInquiryFormOpen(false);
    setInquiryFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
      productName: ''
    });
  };

  const handleInquiryInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Inquiry submitted:', inquiryFormData);
    closeInquiryForm();
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div>
        <Header />
        <main className="ink-blog-container">
          {/* Hero Section */}
          <header className="ink-hero">
            <div className="hero-content">
              <h1 className="ink-hero-title">Printing Inks</h1>
              <p className="ink-hero-subtitle">Professional Quality • Fast Delivery • Expert Support</p>
              <p className="ink-hero-description">
                Browse our complete selection of professional printing inks for all your projects.
                From eco-friendly options to high-performance solutions.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">70+</span>
                  <span className="stat-label">Products</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Categories</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </header>

          {/* Quick Filter Section */}
          <section className="quick-filters">
            <h3>Find Your Ink Type</h3>
            <div className="filter-grid">
              {inkData.categories.map((category) => (
                <a
                  key={category.id}
                  href={`#category-${category.id}`}
                  className="filter-card"
                >
                  <div className="filter-icon">
                    <Image
                      src={category.image || '/KELIN-LOGO-01.png'}
                      alt={category.name}
                      width={60}
                      height={60}
                      className="filter-img"
                    />
                  </div>
                  <h4>{category.name}</h4>
                  <p>{category.products.length} products</p>
                  <span className="filter-arrow">→</span>
                </a>
              ))}
            </div>
          </section>

          {/* Products Section */}
          <section className="ink-products">
            {inkData.categories.map((category, index) => (
              <div key={category.id} id={`category-${category.id}`} className="category-section">
                <div className="category-header">
                  <h2 className="category-title">{category.name}</h2>
                  <p className="category-description">{category.description}</p>
                </div>

                <div className="category-content">
                  <div className="category-details">
                    <div className="features-applications">
                      <div className="features">
                        <h4>✓ Key Features</h4>
                        <ul>
                          {category.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="applications">
                        <h4>📋 Best For</h4>
                        <div className="app-list">
                          {category.applications.map((app, idx) => (
                            <span key={idx} className="app-item">{app}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="products-list">
                    <h4>Available Products ({category.products.length})</h4>
                    <div className="ink-products-grid">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="ink-product-card">
                          <div className="ink-product-image">
                            <Image
                              src={product.image || '/KELIN-LOGO-01.png'}
                              alt={product.name}
                              width={80}
                              height={80}
                              className="ink-product-img"
                            />
                          </div>
                          <div className="ink-product-header">
                            <h5>{product.name}</h5>
                            <div className="ink-product-badges">
                              <span className={`size-badge ${product.size === '5L' ? 'large' : product.size === '2L' ? 'medium' : 'small'}`}>
                                {product.size}
                              </span>
                              <span className="color-indicator" style={{ backgroundColor: getColorCode(product.color) }}></span>
                            </div>
                          </div>
                          <div className="ink-product-details">
                            <span className="color-name">{product.color}</span>
                            {product.type && <span className="product-type">{product.type}</span>}
                          </div>
                          <button
                            className="inquire-btn"
                            onClick={() => openLightbox(product, category.name)}
                          >
                            View Details
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Support Section */}
          <section className="support-section">
            <div className="support-grid">
              <div className="support-card">
                <h3>🎯 Need Help Choosing?</h3>
                <p>Our experts will help you select the right ink for your specific needs.</p>
                <button className="support-btn primary">Get Recommendations</button>
              </div>
              <div className="support-card">
                <h3>📞 Technical Support</h3>
                <p>Get professional assistance with installation and troubleshooting.</p>
                <button className="support-btn secondary">Contact Support</button>
              </div>
              <div className="support-card">
                <h3>📦 Bulk Orders</h3>
                <p>Special pricing available for large quantity orders.</p>
                <button className="support-btn tertiary">Request Quote</button>
              </div>
            </div>
          </section>
        </main>

        {/* Product Lightbox Modal */}
        {isLightboxOpen && selectedProduct && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                ×
              </button>

              <div className="lightbox-content">
                <div className="lightbox-image">
                  <Image
                    src={selectedProduct.image || '/KELIN-LOGO-01.png'}
                    alt={selectedProduct.name}
                    width={300}
                    height={300}
                    className="modal-product-img"
                  />
                </div>

                <div className="lightbox-info">
                  <div className="modal-header">
                    <h2>{selectedProduct.name}</h2>
                    <span className="modal-category">{selectedProduct.categoryName}</span>
                  </div>

                  <div className="modal-badges">
                    <span className={`size-badge ${selectedProduct.size === '5L' ? 'large' : selectedProduct.size === '2L' ? 'medium' : 'small'}`}>
                      {selectedProduct.size}
                    </span>
                    <span className="color-badge" style={{ backgroundColor: getColorCode(selectedProduct.color) }}>
                      {selectedProduct.color}
                    </span>
                    {selectedProduct.type && (
                      <span className="type-badge">{selectedProduct.type}</span>
                    )}
                  </div>

                  <div className="modal-description">
                    <h3>Description</h3>
                    <p>{selectedProduct.description}</p>
                  </div>

                  <div className="modal-specifications">
                    <h3>Specifications</h3>
                    <div className="specs-grid">
                      {Object.entries(selectedProduct.specifications || {}).map(([key, value]) => (
                        <div key={key} className="spec-row">
                          <span className="spec-label">{key}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-actions">
                    <button
                      className="btn-primary"
                      onClick={() => {
                        closeLightbox();
                        openInquiryForm(selectedProduct);
                      }}
                    >
                      Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inquiry Form Modal */}
        {isInquiryFormOpen && (
          <div className="lightbox-overlay" onClick={closeInquiryForm}>
            <div className="inquiry-form-modal" onClick={(e) => e.stopPropagation()}>
              <div className="inquiry-form-header">
                <h2>Product Inquiry</h2>
                <button className="close-btn" onClick={closeInquiryForm}>&times;</button>
              </div>

              <form className="inquiry-form" onSubmit={handleInquirySubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={inquiryFormData.name}
                    onChange={handleInquiryInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={inquiryFormData.email}
                    onChange={handleInquiryInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={inquiryFormData.company}
                      onChange={handleInquiryInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={inquiryFormData.phone}
                      onChange={handleInquiryInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={inquiryFormData.subject}
                    onChange={handleInquiryInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={inquiryFormData.message}
                    onChange={handleInquiryInputChange}
                    placeholder="Please describe your inquiry, requirements, or questions about this product..."
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-secondary-inks" onClick={closeInquiryForm}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary-inks">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
