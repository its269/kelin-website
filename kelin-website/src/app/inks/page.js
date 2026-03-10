"use client";
import React, { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import './inks_friendly.css';

// Static ink products data with updated categories and products
const getInkProductsData = () => {
  return {
    categories: [
      {
        id: 1,
        name: "Eco-Solvent Inks",
        description: "Environmentally friendly inks with low odor and reduced VOC emissions, perfect for indoor and outdoor use.",
        image: "/inks.png",
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
            image: "/inks/ECO M15/M15 Cyan (Transparent).webp",
            description: "High-quality eco-solvent ink with excellent color reproduction and minimal odor.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "Eco M15 1L Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/ECO M15/M15 Magenta (Transparent).webp",
            description: "Vibrant magenta eco-solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "Eco M15 1L Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/ECO M15/M15 Yellow (Transparent).webp",
            description: "Bright yellow eco-solvent ink with excellent lightfastness.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "Eco M15 1L Black",
            size: "1L",
            color: "Black",
            image: "/inks/ECO M15/M15 Black (Transparent).webp",
            description: "Deep black eco-solvent ink for sharp text and solid areas.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "M21 Cyan (i3200)",
            size: "1L",
            color: "Cyan",
            image: "/inks/M21/M21 Cyan (Transparent).webp",
            description: "Specialized cyan ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "M21 Magenta (i3200)",
            size: "1L",
            color: "Magenta",
            image: "/inks/M21/M21 Magenta (Transparent).webp",
            description: "Specialized magenta ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "M21 Yellow (i3200)",
            size: "1L",
            color: "Yellow",
            image: "/inks/M21/M21 Yellow (Transparent).webp",
            description: "Specialized yellow ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "M21 Black (i3200)",
            size: "1L",
            color: "Black",
            image: "/inks/M21/M21 Black (Transparent).webp",
            description: "Specialized black ink optimized for i3200 printheads.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "Phoenix E2 1L. Cyan",
            size: "1L",
            color: "Cyan",
            image: "/inks/PHOENIX E2 1L/PHOENIX E2 1L Cyan (Transparent).webp",
            description: "Premium Phoenix E2 cyan ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "Phoenix E2 1L. Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/PHOENIX E2 1L/PHOENIX E2 1L Magenta (Transparent).webp",
            description: "Premium Phoenix E2 magenta ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "Phoenix E2 1L. Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/PHOENIX E2 1L/PHOENIX E2 1L Yellow (Transparent).webp",
            description: "Premium Phoenix E2 yellow ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          },
          {
            name: "Phoenix E2 1L. Black",
            size: "1L",
            color: "Black",
            image: "/inks/PHOENIX E2 1L/PHOENIX E2 1L Black (Transparent).webp",
            description: "Premium Phoenix E2 black ink for superior print quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Eco-Solvent"
            }
          }
        ]
      },
      {
        id: 2,
        name: "Solvent Inks",
        description: "High-performance solvent-based inks designed for outdoor applications and durable signage. Includes cleaning solutions.",
        image: "/inks.png",
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
            image: "/inks/EAGLE%20V2%201L/Eagle%20V2%201L%20Cyan%20(Transparent1).webp",
            description: "Professional solvent-based cyan ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "Eagle V2 1L. Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/EAGLE%20V2%201L/Eagle%20V2%201L%20Magenta%20%20(Transparent1).webp",
            description: "Professional solvent-based magenta ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "Eagle V2 1L. Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/EAGLE%20V2%201L/Eagle%20V2%201L%20Yellow%20%20(Transparent1).webp",
            description: "Professional solvent-based yellow ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "Eagle V2 1L. Black",
            size: "1L",
            color: "Black",
            image: "/inks/EAGLE%20V2%201L/Eagle%20V2%201L%20Black%20%20(Transparent1).webp",
            description: "Professional solvent-based black ink with excellent weather resistance for outdoor applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "Eagle V2 5L. Cyan",
            size: "5L",
            color: "Cyan",
            image: "/inks/EAGLE%20V2%205L/Eagle%20V2%205L%20Cyan%20(Transparent1).webp",
            description: "Large volume professional solvent-based cyan ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "Eagle V2 5L. Magenta",
            size: "5L",
            color: "Magenta",
            image: "/inks/EAGLE%20V2%205L/Eagle%20V2%205L%20Magenta%20(Transparent1).webp",
            description: "Large volume professional solvent-based magenta ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "Eagle V2 5L. Yellow",
            size: "5L",
            color: "Yellow",
            image: "/inks/EAGLE%20V2%205L/Eagle%20V2%205L%20Yellow%20%20(Transparent1).webp",
            description: "Large volume professional solvent-based yellow ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "Eagle V2 5L. Black",
            size: "5L",
            color: "Black",
            image: "/inks/EAGLE%20V2%205L/Eagle%20V2%205L%20Black%20(Transparent1).webp",
            description: "Large volume professional solvent-based black ink for high-volume printing.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Cyan",
            size: "1L",
            color: "Cyan",
            image: "/inks/T14 1L/_0002_T14-Ink-1L-Cyan-(Transparent).webp",
            description: "T14 series cyan solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/T14 1L/_0001_T14-Ink-1L-Magenta-(Transparent).webp",
            description: "T14 series magenta solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/T14 1L/_0000_T14-Ink-1L-Yellow-(Transparent).webp",
            description: "T14 series yellow solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Black",
            size: "1L",
            color: "Black",
            image: "/inks/T14 1L/_0003_T14-Ink-1L-Black-(Transparent).webp",
            description: "T14 series black solvent ink for professional printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Eco Plus 2L Cyan",
            size: "2L",
            color: "Cyan",
            image: "/inks/T14 ECO PLUS 2L INKS/T14 Eco Plus 2L  Cyan (Transparent).webp",
            description: "Enhanced T14 Eco Plus cyan ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Eco Plus 2L Magenta",
            size: "2L",
            color: "Magenta",
            image: "/inks/T14 ECO PLUS 2L INKS/T14 Eco Plus 2L Magenta (Transparent).webp",
            description: "Enhanced T14 Eco Plus magenta ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Eco Plus 2L Yellow",
            size: "2L",
            color: "Yellow",
            image: "/inks/T14 ECO PLUS 2L INKS/T14 Eco Plus 2L Yellow (Transparent).webp",
            description: "Enhanced T14 Eco Plus yellow ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "T14 Eco Plus 2L Black",
            size: "2L",
            color: "Black",
            image: "/inks/T14 ECO PLUS 2L INKS/T14 Eco Plus 2L Black (Transparent).webp",
            description: "Enhanced T14 Eco Plus black ink with improved environmental properties.",
            specifications: {
              "Volume": "2 Liters",
              "Type": "Solvent"
            }
          },
          {
            name: "Cleaning Solution 1L.",
            size: "1L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/inks/CLEANING SOLUTIONS/Cleaning Solution 1L. (Transparent).webp",
            description: "Professional cleaning solution for maintaining print quality and extending printhead life.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Cleaning Solution"
            }
          },
          {
            name: "Cleaning Solution 5L.",
            size: "5L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/inks/CLEANING SOLUTIONS/Cleaning Solution 5L (Transparent).webp",
            description: "Large volume professional cleaning solution for high-usage environments.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Cleaning Solution"
            }
          },
          {
            name: "Cleaning Solution 4L. T Series",
            size: "4L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/inks/CLEANING SOLUTIONS/Cleaning Solution 4L. T Series (Transparent).webp",
            description: "Specialized cleaning solution optimized for T Series printing systems.",
            specifications: {
              "Volume": "4 Liters",
              "Type": "Cleaning Solution"
            }
          },
          {
            name: "Cleaning Solution 1L. T Series",
            size: "1L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/inks/CLEANING SOLUTIONS/Cleaning Solution 1L. T Series (Transparent).webp",
            description: "Specialized cleaning solution optimized for T Series printing systems.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Cleaning Solution"
            }
          }
        ]
      },
      {
        id: 3,
        name: "DTF Inks",
        description: "Direct-to-Film inks for textile printing with exceptional color vibrancy and wash fastness.",
        image: "/inks.png",
        features: [
          "Excellent color vibrancy",
          "Superior wash fastness",
          "Smooth texture finish",
          "Compatible with DTF films"
        ],
        applications: ["T-shirt printing", "Textile decoration", "Fashion apparel", "Custom garments"],
        products: [
          {
            name: "Brilliant DTF Textile 1L. Cyan",
            size: "1L",
            color: "Cyan",
            image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Cyan (Transparent).webp",
            description: "High-quality brilliant DTF cyan ink for vibrant textile printing with excellent wash fastness.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Brilliant DTF Textile 1L. Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Magenta (Transparent).webp",
            description: "High-quality brilliant DTF magenta ink for vibrant textile printing with excellent wash fastness.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Brilliant DTF Textile 1L. Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Yellow (Transparent).webp",
            description: "High-quality brilliant DTF yellow ink for vibrant textile printing with excellent wash fastness.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Brilliant DTF Textile 1L. Black",
            size: "1L",
            color: "Black",
            image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Black (Transparent).webp",
            description: "High-quality brilliant DTF black ink for vibrant textile printing with excellent wash fastness.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Brilliant DTF Textile 1L. White",
            size: "1L",
            color: "White",
            image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L White (Transparent).webp",
            description: "High-quality brilliant DTF white ink for vibrant textile printing with excellent opacity.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Vivid DTF Textile 1L. Cyan",
            size: "1L",
            color: "Cyan",
            image: "/inks/VIVID DTF TEXTILE 1L/Brilliant DTF Textile 1L Cyan (Transparent).webp",
            description: "Premium vivid DTF cyan ink for exceptional color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Vivid DTF Textile 1L. Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/VIVID DTF TEXTILE 1L/Brilliant DTF Textile 1L Magenta (Transparent).webp",
            description: "Premium vivid DTF magenta ink for exceptional color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Vivid DTF Textile 1L. Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/VIVID DTF TEXTILE 1L/Brilliant DTF Textile 1L Yellow (Transparent).webp",
            description: "Premium vivid DTF yellow ink for exceptional color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Vivid DTF Textile 1L. Black",
            size: "1L",
            color: "Black",
            image: "/inks/VIVID DTF TEXTILE 1L/Brilliant DTF Textile 1L Black (Transparent).webp",
            description: "Premium vivid DTF black ink for exceptional color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          {
            name: "Vivid DTF Textile 1L. White",
            size: "1L",
            color: "White",
            image: "/inks/VIVID DTF TEXTILE 1L/Brilliant DTF Textile 1L White (Transparent).webp",
            description: "Premium vivid DTF white ink for exceptional opacity and coverage.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Textile"
            }
          },
          // {
          //   name: "Brilliant DTF Textile 1L. Fluorescent Yellow",
          //   size: "1L",
          //   color: "Fluorescent Yellow",
          //   image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Yellow (Transparent).webp",
          //   description: "Specialty fluorescent yellow DTF ink for eye-catching designs with vibrant glow effect.",
          //   specifications: {
          //     "Volume": "1 Liter",
          //     "Type": "DTF Fluorescent"
          //   }
          // },
          // {
          //   name: "Brilliant DTF Textile 1L. Fluorescent Pink",
          //   size: "1L",
          //   color: "Fluorescent Pink",
          //   image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Magenta (Transparent).webp",
          //   description: "Specialty fluorescent pink DTF ink for eye-catching designs with vibrant glow effect.",
          //   specifications: {
          //     "Volume": "1 Liter",
          //     "Type": "DTF Fluorescent"
          //   }
          // },
          // {
          //   name: "Brilliant DTF Textile 1L. Fluorescent Orange",
          //   size: "1L",
          //   color: "Fluorescent Orange",
          //   image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Yellow (Transparent).webp",
          //   description: "Specialty fluorescent orange DTF ink for eye-catching designs with vibrant glow effect.",
          //   specifications: {
          //     "Volume": "1 Liter",
          //     "Type": "DTF Fluorescent"
          //   }
          // },
          // {
          //   name: "Brilliant DTF Textile 1L. Fluorescent Red",
          //   size: "1L",
          //   color: "Fluorescent Red",
          //   image: "/inks/BRILLIANT DTF INK 1L/Brilliant DTF Ink 1L Magenta (Transparent).webp",
          //   description: "Specialty fluorescent red DTF ink for eye-catching designs with vibrant glow effect.",
          //   specifications: {
          //     "Volume": "1 Liter",
          //     "Type": "DTF Fluorescent"
          //   }
          // },
          {
            name: "DTF Cleaning Solution 500ml",
            size: "500ml",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/inks/DTF CLEANING SOLUTIONS/DTF Cleaning Solution 500ml.webp",
            description: "Specialized DTF cleaning solution for maintaining print heads and system performance.",
            specifications: {
              "Volume": "500ml",
              "Type": "DTF Cleaning Solution"
            }
          },
          {
            name: "DTF Cleaning Solution 1L",
            size: "1L",
            color: "Clear",
            type: "Cleaning Solution",
            image: "/inks/DTF CLEANING SOLUTIONS/DTF Cleaning Solution 1L (Transparent).webp",
            description: "Large volume DTF cleaning solution for maintaining print heads and system performance.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "DTF Cleaning Solution"
            }
          }
        ]
      },
      {
        id: 4,
        name: "Sublimation Inks",
        description: "High-quality sublimation inks for vibrant transfers on polyester fabrics and polymer-coated substrates.",
        image: "/inks.png",
        features: [
          "Vibrant color transfer",
          "Excellent heat stability",
          "Deep color penetration",
          "Long-lasting prints"
        ],
        applications: ["Sportswear", "Mugs & tumblers", "Phone cases", "Polyester fabrics"],
        products: [
          {
            name: "Vivid Sublimation 1L Cyan",
            size: "1L",
            color: "Cyan",
            image: "/inks/VIVID SUBLIMATION 1L INK/Vivid Sublimation Ink Cyan 1L (Transparent).webp",
            description: "High-performance vivid sublimation cyan ink for brilliant color transfer and excellent heat stability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Vivid Sublimation 1L Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/VIVID SUBLIMATION 1L INK/Vivid Sublimation Ink Magenta 1L (Transparent).webp",
            description: "High-performance vivid sublimation magenta ink for brilliant color transfer and excellent heat stability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Vivid Sublimation 1L Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/VIVID SUBLIMATION 1L INK/Vivid Sublimation Ink Yellow 1L  (Transparent).webp",
            description: "High-performance vivid sublimation yellow ink for brilliant color transfer and excellent heat stability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Vivid Sublimation 1L Black",
            size: "1L",
            color: "Black",
            image: "/inks/VIVID SUBLIMATION 1L INK/Vivid Sublimation Ink Black 1L (Transparent).webp",
            description: "High-performance vivid sublimation black ink for brilliant color transfer and excellent heat stability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Vivid Sublimation 5L Cyan",
            size: "5L",
            color: "Cyan",
            image: "/inks/VIVID SUBLIMATION 5L INK/Vivid Sublimation 5L Cyan (Transparent).webp",
            description: "Large volume vivid sublimation cyan ink for high-volume printing with consistent quality.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Sublimation"
            }
          },
          {
            name: "Vivid Sublimation 5L Magenta",
            size: "5L",
            color: "Magenta",
            image: "/inks/VIVID SUBLIMATION 5L INK/Vivid Sublimation 5L  Magenta (Transparent).webp",
            description: "Large volume vivid sublimation magenta ink for high-volume printing with consistent quality.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Sublimation"
            }
          },
          {
            name: "Vivid Sublimation 5L Yellow",
            size: "5L",
            color: "Yellow",
            image: "/inks/VIVID SUBLIMATION 5L INK/Vivid Sublimation 5L  Yellow (Transparent).webp",
            description: "Large volume vivid sublimation yellow ink for high-volume printing with consistent quality.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Sublimation"
            }
          },
          {
            name: "Vivid Sublimation 5L Black",
            size: "5L",
            color: "Black",
            image: "/inks/VIVID SUBLIMATION 5L INK/Vivid Sublimation 5L Black (Transparent).webp",
            description: "Large volume vivid sublimation black ink for high-volume printing with consistent quality.",
            specifications: {
              "Volume": "5 Liters",
              "Type": "Sublimation"
            }
          },
          {
            name: "Brilliant Sublimation 1L Cyan",
            size: "1L",
            color: "Cyan",
            image: "/inks/BRILLIANT SUBLIMATION INK 1L/Brilliant Sublimation Ink Cyan 1L (Transparent).webp",
            description: "Premium brilliant sublimation cyan ink with superior color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Brilliant Sublimation 1L Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/BRILLIANT SUBLIMATION INK 1L/Brilliant Sublimation Ink Magenta 1L (Transparent).webp",
            description: "Premium brilliant sublimation magenta ink with superior color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Brilliant Sublimation 1L Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/BRILLIANT SUBLIMATION INK 1L/Brilliant Sublimation Ink Yellow 1L (Transparent).webp",
            description: "Premium brilliant sublimation yellow ink with superior color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Brilliant Sublimation 1L Black",
            size: "1L",
            color: "Black",
            image: "/inks/BRILLIANT SUBLIMATION INK 1L/Brilliant Sublimation Ink Black 1L (Transparent).webp",
            description: "Premium brilliant sublimation black ink with superior color reproduction and durability.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Papijet LTI 203 Cyan",
            size: "1L",
            color: "Cyan",
            image: "/inks/PAPIJET/Papijet 203 LIT Cyan (Transparent).webp",
            description: "Professional Papijet LTI 203 cyan sublimation ink optimized for textile applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Papijet LTI 203 Magenta",
            size: "1L",
            color: "Magenta",
            image: "/inks/PAPIJET/Papijet LIT 203 Magenta  (Transparent).webp",
            description: "Professional Papijet LTI 203 magenta sublimation ink optimized for textile applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Papijet LTI 203 Yellow",
            size: "1L",
            color: "Yellow",
            image: "/inks/PAPIJET/Papijet LIT 203 Yellow (Transparent).webp",
            description: "Professional Papijet LTI 203 yellow sublimation ink optimized for textile applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Papijet LTI 203 Black",
            size: "1L",
            color: "Black",
            image: "/inks/PAPIJET/Papijet 203 LIT Black (Transparent).webp",
            description: "Professional Papijet LTI 203 black sublimation ink optimized for textile applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Papijet LTIP Light Cyan",
            size: "1L",
            color: "Light Cyan",
            image: "/inks/PAPIJET/Papijet LITP Light Cyan  (Transparent).webp",
            description: "Specialized Papijet LTIP light cyan ink for enhanced color gradation and photo quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Papijet LTIP Light Magenta",
            size: "1L",
            color: "Light Magenta",
            image: "/inks/PAPIJET/Papijet LITP Light Magenta (Transparent).webp",
            description: "Specialized Papijet LTIP light magenta ink for enhanced color gradation and photo quality.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation"
            }
          },
          {
            name: "Papijet LTI 202 Fluorescent Yellow",
            size: "1L",
            color: "Fluorescent Yellow",
            image: "/inks/PAPIJET/Papijet Fluorescent Yellow (Transparent).webp",
            description: "Specialty Papijet LTI 202 fluorescent yellow ink for eye-catching designs with vibrant glow.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation Fluorescent"
            }
          },
          {
            name: "Papijet LTI 202 Fluorescent Pink",
            size: "1L",
            color: "Fluorescent Pink",
            image: "/inks/PAPIJET/Papijet LTI 202 Fluorescent Pink (Transparent) (1).webp",
            description: "Specialty Papijet LTI 202 fluorescent pink ink for eye-catching designs with vibrant glow.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "Sublimation Fluorescent"
            }
          }
        ]
      },
      {
        id: 5,
        name: "UV Inks",
        description: "Instant-curing UV inks that provide exceptional durability and print quality for demanding applications.",
        image: "/inks.png",
        features: [
          "Instant curing",
          "Superior durability",
          "No heat required",
          "Excellent color density"
        ],
        applications: ["Rigid substrates", "Industrial labels", "Packaging", "Electronics"],
        products: [
          {
            name: "Smart UV 1L Cyan",
            size: "1L",
            color: "Cyan",
            image: "/KELIN-LOGO-01.png",
            description: "Instant-curing UV cyan ink with exceptional durability and superior color density for industrial applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "UV Curable"
            }
          },
          {
            name: "Smart UV 1L Magenta",
            size: "1L",
            color: "Magenta",
            image: "/KELIN-LOGO-01.png",
            description: "Instant-curing UV magenta ink with exceptional durability and superior color density for industrial applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "UV Curable"
            }
          },
          {
            name: "Smart UV 1L Yellow",
            size: "1L",
            color: "Yellow",
            image: "/KELIN-LOGO-01.png",
            description: "Instant-curing UV yellow ink with exceptional durability and superior color density for industrial applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "UV Curable"
            }
          },
          {
            name: "Smart UV 1L Black",
            size: "1L",
            color: "Black",
            image: "/KELIN-LOGO-01.png",
            description: "Instant-curing UV black ink with exceptional durability and superior color density for industrial applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "UV Curable"
            }
          },
          {
            name: "Smart UV 1L White",
            size: "1L",
            color: "White",
            image: "/KELIN-LOGO-01.png",
            description: "Instant-curing UV white ink with exceptional opacity and coverage for specialty printing applications.",
            specifications: {
              "Volume": "1 Liter",
              "Type": "UV Curable"
            }
          }
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
    "url": "https://www.kelinph.com/inks",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": categories.map((category, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          ...category,
          "@id": `https://www.kelinph.com/inks#${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
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
          "item": "https://www.kelinph.com/inks"
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
        <main className="inks-blog-container">
          {/* Hero Section */}
          <header className="inks-hero">
            <div className="inks-hero-content">
              <h1 className="inks-hero-title">Printing Inks</h1>
              <p className="inks-hero-subtitle">Professional Quality • Fast Delivery • Expert Support</p>
              <p className="inks-hero-description">
                Browse our complete selection of professional printing inks for all your projects.
                From eco-friendly options to high-performance solutions.
              </p>
              {/* <div className="inks-hero-stats">
                <div className="inks-stat">
                  <span className="inks-stat-number">70+</span>
                  <span className="inks-stat-label">Products</span>
                </div>
                <div className="inks-stat">
                  <span className="inks-stat-number">5</span>
                  <span className="inks-stat-label">Categories</span>
                </div>
                <div className="inks-stat">
                  <span className="inks-stat-number">24/7</span>
                  <span className="inks-stat-label">Support</span>
                </div>
              </div> */}
            </div>
          </header>

          {/* Quick Filter Section */}
          <section className="inks-quick-filters">
            <h3>Find Your Ink Type</h3>
            <div className="inks-filter-grid">
              {inkData.categories.map((category) => (
                <a
                  key={category.id}
                  href={`#category-${category.id}`}
                  className="inks-filter-card"
                >
                  <div className="inks-filter-icon">
                    <Image
                      src={category.image || '/KELIN-LOGO-01.png'}
                      alt={category.name}
                      width={60}
                      height={60}
                      className="inks-filter-img"
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
              <div key={category.id} id={`category-${category.id}`} className="inks-category-section">
                <div className="inks-category-header">
                  <h2 className="inks-category-title">{category.name}</h2>
                  <p className="inks-category-description">{category.description}</p>
                </div>

                <div className="inks-category-content">
                  <div className="inks-category-details">
                    <div className="inks-features-applications">
                      <div className="inks-features">
                        <h4>✓ Key Features</h4>
                        <ul>
                          {category.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="inks-applications">
                        <h4>📋 Best For</h4>
                        <div className="inks-app-list">
                          {category.applications.map((app, idx) => (
                            <span key={idx} className="inks-app-item">{app}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inks-products-list">
                    <h4>Available Products ({category.products.length})</h4>
                    <div className="inks-products-grid">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="inks-product-card">
                          <div className="inks-product-image">
                            <Image
                              src={product.image || '/KELIN-LOGO-01.png'}
                              alt={product.name}
                              width={80}
                              height={80}
                              className="inks-product-img"
                            />
                          </div>
                          <div className="inks-product-header">
                            <h5>{product.name}</h5>
                            <div className="inks-product-badges">
                              <span className={`inks-size-badge ${product.size === '5L' ? 'large' : product.size === '2L' ? 'medium' : 'small'}`}>
                                {product.size}
                              </span>
                              <span className="inks-color-indicator" style={{ backgroundColor: getColorCode(product.color) }}></span>
                            </div>
                          </div>
                          <div className="inks-product-details">
                            <span className="inks-color-name">{product.color}</span>
                            {product.type && <span className="inks-product-type">{product.type}</span>}
                          </div>
                          <button
                            className="inks-inquire-btn"
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
          <section className="inks-support-section">
            <div className="inks-support-grid">
              <div className="inks-support-card">
                <div className="inks-support-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3>Need Help Choosing?</h3>
                <p>Our experts will help you select the right ink for your specific needs.</p>
                <button className="inks-support-btn primary">Get Recommendations</button>
              </div>
              <div className="inks-support-card">
                <div className="inks-support-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3>Technical Support</h3>
                <p>Get professional assistance with installation and troubleshooting.</p>
                <button className="inks-support-btn secondary">Contact Support</button>
              </div>
              <div className="inks-support-card">
                <div className="inks-support-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3>Bulk Orders</h3>
                <p>Special pricing available for large quantity orders.</p>
                <button className="inks-support-btn tertiary">Request Quote</button>
              </div>
            </div>
          </section>
        </main>

        {/* Product Lightbox Modal */}
        {isLightboxOpen && selectedProduct && (
          <div className="inks-lightbox-overlay" onClick={closeLightbox}>
            <div className="inks-lightbox-modal" onClick={(e) => e.stopPropagation()}>
              <button className="inks-lightbox-close" onClick={closeLightbox}>
                ×
              </button>

              <div className="inks-lightbox-content">
                <div className="inks-lightbox-image">
                  <Image
                    src={selectedProduct.image || '/KELIN-LOGO-01.png'}
                    alt={selectedProduct.name}
                    width={300}
                    height={300}
                    className="inks-modal-product-img"
                  />
                </div>

                <div className="inks-lightbox-info">
                  <div className="inks-modal-header">
                    <h2>{selectedProduct.name}</h2>
                    <span className="inks-modal-category">{selectedProduct.categoryName}</span>
                  </div>

                  <div className="inks-modal-badges">
                    <span className={`inks-size-badge ${selectedProduct.size === '5L' ? 'large' : selectedProduct.size === '2L' ? 'medium' : 'small'}`}>
                      {selectedProduct.size}
                    </span>
                    <span className="inks-color-badge" style={{ backgroundColor: getColorCode(selectedProduct.color) }}>
                      {selectedProduct.color}
                    </span>
                    {selectedProduct.type && (
                      <span className="inks-type-badge">{selectedProduct.type}</span>
                    )}
                  </div>

                  <div className="inks-modal-description">
                    <h3>Description</h3>
                    <p>{selectedProduct.description}</p>
                  </div>

                  <div className="inks-modal-specifications">
                    <h3>Specifications</h3>
                    <div className="inks-specs-grid">
                      {Object.entries(selectedProduct.specifications || {}).map(([key, value]) => (
                        <div key={key} className="inks-spec-row">
                          <span className="inks-spec-label">{key}:</span>
                          <span className="inks-spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="inks-modal-actions">
                    <button
                      className="inks-btn-primary"
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
          <div className="inks-lightbox-overlay" onClick={closeInquiryForm}>
            <div className="inks-inquiry-form-modal" onClick={(e) => e.stopPropagation()}>
              <div className="inks-inquiry-form-header">
                <h2>Product Inquiry</h2>
                <button className="inks-close-btn" onClick={closeInquiryForm}>&times;</button>
              </div>

              <form className="inks-inquiry-form" onSubmit={handleInquirySubmit}>
                <div className="inks-form-group">
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

                <div className="inks-form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={inquiryFormData.email}
                    onChange={handleInquiryInputChange}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address (e.g., name@domain.com)"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="inks-form-row">
                  <div className="inks-form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={inquiryFormData.company}
                      onChange={handleInquiryInputChange}
                    />
                  </div>

                  <div className="inks-form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="inks-phone-input">
                      <select name="countryCode" className="inks-country-select" defaultValue="+63">
                        <option value="+63">🇵🇭 +63</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+1">🇨🇦 +1</option>
                        <option value="+52">🇲🇽 +52</option>
                        <option value="+54">🇦🇷 +54</option>
                        <option value="+55">🇧🇷 +55</option>
                        <option value="+56">🇨🇱 +56</option>
                        <option value="+57">🇨🇴 +57</option>
                        <option value="+58">🇻🇪 +58</option>
                        <option value="+51">🇵🇪 +51</option>
                        <option value="+593">🇪🇨 +593</option>
                        <option value="+595">🇵🇾 +595</option>
                        <option value="+598">🇺🇾 +598</option>
                        <option value="+591">🇧🇴 +591</option>
                        <option value="+592">🇬🇾 +592</option>
                        <option value="+597">🇸🇷 +597</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+353">🇮🇪 +353</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+31">🇳🇱 +31</option>
                        <option value="+32">🇧🇪 +32</option>
                        <option value="+41">🇨🇭 +41</option>
                        <option value="+43">🇦🇹 +43</option>
                        <option value="+45">🇩🇰 +45</option>
                        <option value="+46">🇸🇪 +46</option>
                        <option value="+47">🇳🇴 +47</option>
                        <option value="+48">🇵🇱 +48</option>
                        <option value="+420">🇨🇿 +420</option>
                        <option value="+421">🇸🇰 +421</option>
                        <option value="+36">🇭🇺 +36</option>
                        <option value="+40">🇷🇴 +40</option>
                        <option value="+359">🇧🇬 +359</option>
                        <option value="+30">🇬🇷 +30</option>
                        <option value="+351">🇵🇹 +351</option>
                        <option value="+354">🇮🇸 +354</option>
                        <option value="+356">🇲🇹 +356</option>
                        <option value="+357">🇨🇾 +357</option>
                        <option value="+372">🇪🇪 +372</option>
                        <option value="+371">🇱🇻 +371</option>
                        <option value="+370">🇱🇹 +370</option>
                        <option value="+386">🇸🇮 +386</option>
                        <option value="+385">🇭🇷 +385</option>
                        <option value="+381">🇷🇸 +381</option>
                        <option value="+382">🇲🇪 +382</option>
                        <option value="+387">🇧🇦 +387</option>
                        <option value="+389">🇲🇰 +389</option>
                        <option value="+355">🇦🇱 +355</option>
                        <option value="+373">🇲🇩 +373</option>
                        <option value="+380">🇺🇦 +380</option>
                        <option value="+375">🇧🇾 +375</option>
                        <option value="+7">🇷🇺 +7</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="+82">🇰🇷 +82</option>
                        <option value="+852">🇭🇰 +852</option>
                        <option value="+853">🇲🇴 +853</option>
                        <option value="+886">🇹🇼 +886</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+60">🇲🇾 +60</option>
                        <option value="+66">🇹🇭 +66</option>
                        <option value="+84">🇻🇳 +84</option>
                        <option value="+62">🇮🇩 +62</option>
                        <option value="+673">🇧🇳 +673</option>
                        <option value="+856">🇱🇦 +856</option>
                        <option value="+855">🇰🇭 +855</option>
                        <option value="+95">🇲🇲 +95</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+92">🇵🇰 +92</option>
                        <option value="+880">🇧🇩 +880</option>
                        <option value="+94">🇱🇰 +94</option>
                        <option value="+977">🇳🇵 +977</option>
                        <option value="+975">🇧🇹 +975</option>
                        <option value="+960">🇲🇻 +960</option>
                        <option value="+93">🇦🇫 +93</option>
                        <option value="+98">🇮🇷 +98</option>
                        <option value="+964">🇮🇶 +964</option>
                        <option value="+962">🇯🇴 +962</option>
                        <option value="+966">🇸🇦 +966</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+968">🇴🇲 +968</option>
                        <option value="+974">🇶🇦 +974</option>
                        <option value="+973">🇧🇭 +973</option>
                        <option value="+965">🇰🇼 +965</option>
                        <option value="+90">🇹🇷 +90</option>
                        <option value="+972">🇮🇱 +972</option>
                        <option value="+20">🇪🇬 +20</option>
                        <option value="+27">🇿🇦 +27</option>
                        <option value="+234">🇳🇬 +234</option>
                        <option value="+254">🇰🇪 +254</option>
                        <option value="+255">🇹🇿 +255</option>
                        <option value="+256">🇺🇬 +256</option>
                        <option value="+251">🇪🇹 +251</option>
                        <option value="+212">🇲🇦 +212</option>
                        <option value="+213">🇩🇿 +213</option>
                        <option value="+216">🇹🇳 +216</option>
                        <option value="+218">🇱🇾 +218</option>
                        <option value="+233">🇬🇭 +233</option>
                        <option value="+221">🇸🇳 +221</option>
                        <option value="+225">🇨🇮 +225</option>
                        <option value="+237">🇨🇲 +237</option>
                        <option value="+243">🇨🇩 +243</option>
                        <option value="+242">🇨🇬 +242</option>
                        <option value="+240">🇬🇶 +240</option>
                        <option value="+241">🇬🇦 +241</option>
                        <option value="+250">🇷🇼 +250</option>
                        <option value="+257">🇧🇮 +257</option>
                        <option value="+260">🇿🇲 +260</option>
                        <option value="+263">🇿🇼 +263</option>
                        <option value="+258">🇲🇿 +258</option>
                        <option value="+264">🇳🇦 +264</option>
                        <option value="+267">🇧🇼 +267</option>
                        <option value="+266">🇱🇸 +266</option>
                        <option value="+268">🇸🇿 +268</option>
                        <option value="+261">🇲🇬 +261</option>
                        <option value="+230">🇲🇺 +230</option>
                        <option value="+248">🇸🇨 +248</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+64">🇳🇿 +64</option>
                        <option value="+675">🇵🇬 +675</option>
                        <option value="+679">🇫🇯 +679</option>
                        <option value="+685">🇼🇸 +685</option>
                        <option value="+676">🇹🇴 +676</option>
                        <option value="+678">🇻🇺 +678</option>
                        <option value="+691">🇫🇲 +691</option>
                        <option value="+692">🇲🇭 +692</option>
                        <option value="+680">🇵🇼 +680</option>
                        <option value="+688">🇹🇻 +688</option>
                        <option value="+682">🇨🇰 +682</option>
                        <option value="+683">🇳🇺 +683</option>
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={inquiryFormData.phone}
                        onChange={handleInquiryInputChange}
                        placeholder="123 456 7890"
                        pattern="[0-9\s\-\(\)]{7,15}"
                        title="Please enter a valid phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="inks-form-group">
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

                <div className="inks-form-group">
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

                <div className="inks-form-actions">
                  <button type="button" className="inks-btn-secondary" onClick={closeInquiryForm}>
                    Cancel
                  </button>
                  <button type="submit" className="inks-btn-primary">
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
