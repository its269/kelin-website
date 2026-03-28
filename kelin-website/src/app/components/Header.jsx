"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import "./header.css"; // import external CSS file

export default function Header() {
    const pathname = usePathname();
    const router = useRouter(); // Added Next.js router for seamless navigation
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [machineOpen, setMachineOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const [activeResultIndex, setActiveResultIndex] = useState(-1);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const searchRef = useRef(null);
    const searchMobileRef = useRef(null);

    // Search data - expanded with Materials products
    const searchData = [
        // Main Pages
        { title: "Home", path: "/", type: "page" },
        { title: "Explore", path: "/explore", type: "page" },
        { title: "Products", path: "/products", type: "page" },
        { title: "About Us", path: "/about", type: "page" },
        { title: "News and Events", path: "/events", type: "page" },
        { title: "Contact", path: "/contact", type: "page" },
        { title: "Connect with Us", path: "/contact", type: "page" },
        { title: "Privacy Policy", path: "/privacy-policy", type: "page" },

        // Product Categories
        { title: "Inks", path: "/inks", type: "category" },
        { title: "Materials", path: "/materials", type: "category" },
        { title: "Accessories", path: "/accessories", type: "category" },
        { title: "Promotional Display", path: "/promotional-display", type: "category" },
        { title: "Machine", path: "/machine", type: "category" },
        { title: "Printers", path: "/printers", type: "category" },
        { title: "Cutters", path: "/cutters", type: "category" },

        // Machine Categories
        { title: "Eco-Solvent Printers", path: "/eco-solvent-printers", type: "category" },
        { title: "Solvent Printers", path: "/solvent-printers", type: "category" },
        { title: "Cutting Machine", path: "/cutting-machine", type: "category" },
        { title: "Sublimation and DTF", path: "/sublimation-dtf", type: "category" },
        { title: "UV Printers", path: "/uv-printers", type: "category" },
        { title: "Heatpress", path: "/heatpress", type: "category" },
        { title: "Laminator", path: "/laminator", type: "category" },
        { title: "Laser Machine", path: "/embroidery-knitting", type: "category" },
        { title: "Embroidery and Knitting", path: "/embroidery-knitting", type: "category" },
        { title: "3D Printer", path: "/3d-printer", type: "category" },

        // Ink Products
        { title: "Brilliant DTF Ink 1L", path: "/inks", type: "ink" },
        { title: "Brilliant Sublimation Ink 1L", path: "/inks", type: "ink" },
        { title: "Cleaning Solutions", path: "/inks", type: "ink" },
        { title: "DTF Cleaning Solutions", path: "/inks", type: "ink" },
        { title: "Eagle V2 1L", path: "/inks", type: "ink" },
        { title: "Eagle V2 5L", path: "/inks", type: "ink" },
        { title: "Eco M15", path: "/inks", type: "ink" },
        { title: "M21 Ink", path: "/inks", type: "ink" },
        { title: "Papijet", path: "/inks", type: "ink" },
        { title: "Papijet LTI 203", path: "/inks", type: "ink" },
        { title: "Phoenix E2 1L", path: "/inks", type: "ink" },
        { title: "T14 Eco Plus 2L Inks", path: "/inks", type: "ink" },
        { title: "Vivid DTF Textile 1L", path: "/inks", type: "ink" },
        { title: "Vivid Sublimation 1L Ink", path: "/inks", type: "ink" },
        { title: "Vivid Sublimation 5L Ink", path: "/inks", type: "ink" },

        // Eco-Solvent & Solvent Machines
        { title: "Smart RJ24 2004 I3200 Eco Solvent", path: "/smart-rj24-2004-i3200-eco-solvent", type: "machine" },
        { title: "SMART Eco-Solvent Machine RJ24-2004", path: "/smart-rj24-2004-i3200-eco-solvent", type: "machine" },
        { title: "Xline Eco Solvent", path: "/xline-eco-solvent", type: "machine" },
        { title: "Apollo Xline Eco Solvent Printer", path: "/xline-eco-solvent", type: "machine" },
        { title: "Liyu X-Line DQS UV Hybrid Printer", path: "/liyu-x-line-dqs-uv-hybrid-printer", type: "machine" },

        // Cutting Machines
        { title: "iEcho BK3", path: "/iecho-bk3", type: "machine" },
        { title: "iEcho BK3 Cutting Machine", path: "/iecho-bk3", type: "machine" },
        { title: "iEcho BK4", path: "/iecho-bk4", type: "machine" },
        { title: "iEcho BK4 Cutting Machine", path: "/iecho-bk4", type: "machine" },
        { title: "iEcho PK", path: "/iecho-pk", type: "machine" },
        { title: "iEcho PK1209 Cutting Machine", path: "/iecho-pk", type: "machine" },
        { title: "iEcho PK4", path: "/iecho-pk4", type: "machine" },
        { title: "iEcho PK4 Cutting Machine", path: "/iecho-pk4", type: "machine" },
        { title: "iEcho TK4S", path: "/iecho-tk4s", type: "machine" },
        { title: "iEcho TK4S Large Format Cutting System", path: "/iecho-tk4s", type: "machine" },
        { title: "GCC AR24 Desktop", path: "/gcc-ar24-desktop", type: "machine" },
        { title: "GCC AR-24 Desktop Cutter", path: "/gcc-ar24-desktop", type: "machine" },
        { title: "GCC Expert 24LX", path: "/gcc-expert-24lx", type: "machine" },
        { title: "GCC Expert LX EX-24LX", path: "/gcc-expert-24lx", type: "machine" },
        { title: "GCC Expert 52LX", path: "/gcc-expert-52lx", type: "machine" },
        { title: "GCC Expert LX EX-52LX", path: "/gcc-expert-52lx", type: "machine" },
        { title: "GCC Puma IV", path: "/gcc-puma-iv", type: "machine" },
        { title: "GCC PUMA IV Cutter", path: "/gcc-puma-iv", type: "machine" },

        // Sublimation & DTF Machines
        { title: "Smart Sublimation", path: "/smart-sublimation", type: "machine" },
        { title: "SUBL Smart Sublimation Printer", path: "/smart-sublimation", type: "machine" },
        { title: "Smart DTF Machine", path: "/smart-dtf-machine", type: "machine" },
        { title: "DTF SMART DTF Machine", path: "/smart-dtf-machine", type: "machine" },
        { title: "Smart DTF Powder Shaker", path: "/smart-dtf-powder-shaker", type: "machine" },
        { title: "DTF Powder Shaker D650", path: "/smart-dtf-powder-shaker", type: "machine" },
        { title: "DTF Smart Powder Shaker W650-4C", path: "/smart-dtf-powder-shaker", type: "machine" },
        { title: "Sublimation Printer FD6198E", path: "/sublimation-printer-fd6198e", type: "machine" },
        { title: "SUBL Sublimation Printer FD6198E", path: "/sublimation-printer-fd6198e", type: "machine" },
        { title: "Kirin", path: "/kirin", type: "machine" },
        { title: "Kirin DA182T Plus Sublimation Printer", path: "/kirin", type: "machine" },
        { title: "R2000 Roller", path: "/r2000-roller", type: "machine" },
        { title: "R2000 Roller Type Sublimation Machine GS 1200", path: "/r2000-roller", type: "machine" },

        // UV Printers
        { title: "Smart UV Printer", path: "/smart-uv-printer", type: "machine" },
        { title: "SMART UV Printer RJ24U", path: "/smart-uv-printer", type: "machine" },
        { title: "DTF UV Printer SF303 F1080", path: "/dtf-uv-printer-sf303-f1080", type: "machine" },
        { title: "LUXOR SF303-F1080 DTF UV Printer", path: "/dtf-uv-printer-sf303-f1080", type: "machine" },
        { title: "DTF UV Printer SF604 I3200", path: "/dtf-uv-printer-sf604-i3200", type: "machine" },
        { title: "LUXOR SF604-i3200 DTF UV Printer", path: "/dtf-uv-printer-sf604-i3200", type: "machine" },
        { title: "Luxor RTR UV", path: "/luxor-rtr-uv", type: "machine" },
        { title: "LUXOR UV-A3 RTR Flatbed Printer", path: "/luxor-rtr-uv", type: "machine" },
        { title: "Automatic UV Crystal Flat Pasting", path: "/automatic-uv-crystal-flat-pasting", type: "machine" },
        { title: "Automatic UV Crystal Flat Pasting Machine", path: "/automatic-uv-crystal-flat-pasting", type: "machine" },

        // Heat Press Machines
        { title: "Sapphire Heat Press", path: "/sapphire-heat-press", type: "machine" },
        { title: "Sapphire Heat Press 60cm x 90cm", path: "/sapphire-heat-press", type: "machine" },
        { title: "Subli-Mate Manual Heat Press", path: "/subli-mate-manual-heat-press", type: "machine" },
        { title: "Subli-Mate Manual Heat Press 80cm x 100cm", path: "/subli-mate-manual-heat-press", type: "machine" },
        { title: "Dual Pneumatic", path: "/dual-pneumatic", type: "machine" },
        { title: "Dual Pneumatic Sublimation Machine 80cm x 100cm", path: "/dual-pneumatic", type: "machine" },

        // Laminator Machines
        { title: "Cold Laminator", path: "/cold-laminator", type: "machine" },
        { title: "Cold Laminating Machine", path: "/cold-laminator", type: "machine" },
        { title: "Fulei BU-1425FA Flatbed Laminator", path: "/fulei-bu-1425fa-flatbed-laminator", type: "machine" },
        { title: "Fulei BU-1425FA Flatbed", path: "/fulei-bu-1425fa-flatbed-laminator", type: "machine" },
        { title: "Fulei BU-1600E Warm Auto Laminator", path: "/fulei-bu-1600e-warm-auto-laminator", type: "machine" },
        { title: "Fulei BU-1600E Warm Auto", path: "/fulei-bu-1600e-warm-auto-laminator", type: "machine" },

        // Laser Machines
        { title: "Handheld Fiber Laser", path: "/handheld-fiber-laser", type: "machine" },
        { title: "TFZ-S Mini Handheld Laser Welding", path: "/handheld-fiber-laser", type: "machine" },
        { title: "Handheld Fiber Laser Welding Machine", path: "/handheld-fiber-laser", type: "machine" },
        { title: "Reci Handheld Fiber Laser Welding", path: "/reci-handheld-fiber-laser-welding", type: "machine" },
        { title: "Reci Handheld Fiber Laser Welding Machine R-A80 800W", path: "/reci-handheld-fiber-laser-welding", type: "machine" },
        { title: "Hanniu K1390 CO2 Laser 150w CCD", path: "/hanniu-k1390-co2-laser-150w-ccd", type: "machine" },
        { title: "Hanniu K1390 CO2 Laser Cutting Machine 150w", path: "/hanniu-k1390-co2-laser-150w-ccd", type: "machine" },
        { title: "Hanniu K1390 CO2 Laser 300w", path: "/hanniu-k1390-co2-laser-300w", type: "machine" },
        { title: "Hanniu K1390 CO2 Laser Cutting Machine 300w", path: "/hanniu-k1390-co2-laser-300w", type: "machine" },
        { title: "K-Sign Desktop Laser B330", path: "/k-sign-desktop-laser-b330", type: "machine" },
        { title: "K-Sign Desktop Laser Engraving B330", path: "/k-sign-desktop-laser-b330", type: "machine" },
        { title: "K-Sign DF-1916 Laser Fabric Cutting", path: "/k-sign-df-1916-laser-fabric-cutting", type: "machine" },
        { title: "K-Sign DF-1916 Laser Fabric Cutter", path: "/k-sign-df-1916-laser-fabric-cutting", type: "machine" },
        { title: "K-Sign Desktop Laser Marking", path: "/k-sign-desktop-laser-marking", type: "machine" },
        { title: "K-Sign Desktop Laser Marking Machine", path: "/k-sign-desktop-laser-marking", type: "machine" },
        { title: "Yueming Fiber Laser CMA-1325C-G-G", path: "/yueming-fiber-laser-cma-1325c-g-g", type: "machine" },
        { title: "Yueming Fiber Laser CMA-1325C-G-G 1000w", path: "/yueming-fiber-laser-cma-1325c-g-g", type: "machine" },
        { title: "Yueming Fiber Laser HL1530C-G-E", path: "/yueming-fiber-laser-hl1530c-g-e", type: "machine" },
        { title: "Yueming Fiber Laser HL1530C-G-E 1500w IPG", path: "/yueming-fiber-laser-hl1530c-g-e", type: "machine" },

        // Embroidery and Knitting Machines
        { title: "PROMAKER Embroidery 1201", path: "/promaker-embroidery-1201", type: "machine" },
        { title: "PROMAKER Embroidery Single Head 1201", path: "/promaker-embroidery-1201", type: "machine" },
        { title: "PROMAKER Embroidery 1202", path: "/promaker-embroidery-1202", type: "machine" },
        { title: "PROMAKER Embroidery Dual Head 1202", path: "/promaker-embroidery-1202", type: "machine" },
        { title: "PROMAKER Embroidery 1204", path: "/promaker-embroidery-1204", type: "machine" },
        { title: "PROMAKER Embroidery Quad Head 1204", path: "/promaker-embroidery-1204", type: "machine" },
        { title: "Smartex Knitting GS-CE152", path: "/smartex-knitting-gsce-1-52", type: "machine" },
        { title: "Smartex Knitting Machine GS-CE152", path: "/smartex-knitting-gsce-1-52", type: "machine" },

        // 3D Printers
        { title: "Apollomax Plus II", path: "/apollomax-plus-II", type: "machine" },
        { title: "ApolloMax Plus II PZG3208-KV", path: "/apollomax-plus-II", type: "machine" },
        { title: "K-Sign Letter Shell 3D Printer", path: "/k-sign-letter-shell-3d-printer", type: "machine" },
        { title: "K-Sign 3D Printer Letter Shell", path: "/k-sign-letter-shell-3d-printer", type: "machine" },

        // Promotional Display Products
        { title: "Roll Up Banner", path: "/promotional-display", type: "promotional" },
        { title: "Retractable Banner Stand", path: "/promotional-display", type: "promotional" },
        { title: "X Banner Stand", path: "/promotional-display", type: "promotional" },
        { title: "X-Frame Banner", path: "/promotional-display", type: "promotional" },
        { title: "Adjustable Banner Stand", path: "/promotional-display", type: "promotional" },
        { title: "Telescopic Banner Stand", path: "/promotional-display", type: "promotional" },
        { title: "Feather Wing Banner", path: "/promotional-display", type: "promotional" },
        { title: "Feather Flag", path: "/promotional-display", type: "promotional" },
        { title: "Teardrop Banner Stand", path: "/promotional-display", type: "promotional" },
        { title: "Teardrop Flag", path: "/promotional-display", type: "promotional" },
        { title: "Single Sided Poster Stand", path: "/promotional-display", type: "promotional" },
        { title: "Single Side Snap Frame", path: "/promotional-display", type: "promotional" },
        { title: "Double Sided Poster Stand", path: "/promotional-display", type: "promotional" },
        { title: "Double Side A-Frame", path: "/promotional-display", type: "promotional" },
        { title: "Iron Poster Stand", path: "/promotional-display", type: "promotional" },
        { title: "Metal Poster Stand", path: "/promotional-display", type: "promotional" },
        { title: "Round Base Poster Banner", path: "/promotional-display", type: "promotional" },
        { title: "Round Base Banner Stand", path: "/promotional-display", type: "promotional" },
        { title: "Aluminum Easel Stand", path: "/promotional-display", type: "promotional" },
        { title: "Metal Easel Display", path: "/promotional-display", type: "promotional" },
        { title: "Wooden Easel Stand", path: "/promotional-display", type: "promotional" },
        { title: "Wood Easel Display", path: "/promotional-display", type: "promotional" },
        { title: "Triangle Banner Easel Stand", path: "/promotional-display", type: "promotional" },
        { title: "Triangle Display Stand", path: "/promotional-display", type: "promotional" },
        { title: "Human Standee", path: "/promotional-display", type: "promotional" },
        { title: "Life Size Cutout", path: "/promotional-display", type: "promotional" },
        { title: "Pop Up Structure", path: "/promotional-display", type: "promotional" },
        { title: "Pop Up Display", path: "/promotional-display", type: "promotional" },
        { title: "Portable Backdrop", path: "/promotional-display", type: "promotional" },
        { title: "Backdrop Stand", path: "/promotional-display", type: "promotional" },
        { title: "Mini Promotional Booth", path: "/promotional-display", type: "promotional" },
        { title: "Small Exhibition Booth", path: "/promotional-display", type: "promotional" },
        { title: "Regular Promotional Booth", path: "/promotional-display", type: "promotional" },
        { title: "Standard Exhibition Booth", path: "/promotional-display", type: "promotional" },
        { title: "Semi Circle Promotional Booth", path: "/promotional-display", type: "promotional" },
        { title: "Curved Exhibition Booth", path: "/promotional-display", type: "promotional" },
        { title: "Door Frame Banner Stand", path: "/promotional-display", type: "promotional" },
        { title: "Door Frame Display", path: "/promotional-display", type: "promotional" },
        { title: "Aluminum Data Rack", path: "/promotional-display", type: "promotional" },
        { title: "Metal Brochure Stand", path: "/promotional-display", type: "promotional" },
        { title: "Iron Data Rack", path: "/promotional-display", type: "promotional" },
        { title: "Iron Brochure Holder", path: "/promotional-display", type: "promotional" },
        { title: "New Rotating Lightbox", path: "/promotional-display", type: "promotional" },
        { title: "Rotating LED Lightbox", path: "/promotional-display", type: "promotional" },
        { title: "LED Menu Lightbox Double Poles Stand", path: "/promotional-display", type: "promotional" },
        { title: "LED Menu Board", path: "/promotional-display", type: "promotional" },
        { title: "New Windproof Display", path: "/promotional-display", type: "promotional" },
        { title: "Windproof Banner Stand", path: "/promotional-display", type: "promotional" },

        // Materials
        { title: "Tickee Vinyl Sticker (TK Series)", path: "/materials", type: "material" },
        { title: "Sofie Vinyl & Specialty Stickers", path: "/materials", type: "material" },
        { title: "Sofie Clear Sticker", path: "/materials", type: "material" },
        { title: "Tickee Cold Laminating Film", path: "/materials", type: "material" },
        { title: "Sofie PP Film & Sticker", path: "/materials", type: "material" },
        { title: "Ba-cut Translucent Sticker", path: "/materials", type: "material" },
        { title: "Specialty & Architectural Films", path: "/materials", type: "material" },
        { title: "Omega Tarpaulin", path: "/materials", type: "material" },
        { title: "Beta Tarpaulin", path: "/materials", type: "material" },
        { title: "Omega Black-Out Tarpaulin", path: "/materials", type: "material" },
        { title: "Alpha Tarpaulin & Flex", path: "/materials", type: "material" },
        { title: "Subli-Mate Nova & S100 Paper", path: "/materials", type: "material" },
        { title: "Smartex & Subli-Mate Fabrics", path: "/materials", type: "material" },
        { title: "Textile Accessories", path: "/materials", type: "material" },
        { title: "Backlit Film & Lightbox Fabric", path: "/materials", type: "material" },
        { title: "Just Cast Acrylic", path: "/materials", type: "material" },
        { title: "Luminao & Extruded Acrylic", path: "/materials", type: "material" },
        { title: "Just Sintra Board", path: "/materials", type: "material" },
        { title: "Just Aluminum Composite Panel", path: "/materials", type: "material" },
        { title: "Foam Board & High Impact Sheets", path: "/materials", type: "material" }
    ];

    const isActive = (path) => {
        if (path === "/" || path === "/") {
            return pathname === "/" || pathname === "/";
        }
        return pathname.startsWith(path);
    };

    const performSearch = (query) => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            setSearchResults([]);
            setShowSearchResults(false);
            setActiveResultIndex(-1);
            return;
        }

        const scoredMatches = [];
        const seen = new Set();

        for (const item of searchData) {
            const title = item.title.toLowerCase();
            const path = item.path.toLowerCase();
            const matches = title.includes(normalizedQuery) || path.includes(normalizedQuery);

            if (!matches) continue;

            const dedupeKey = `${item.title.toLowerCase()}|${item.path}`;
            if (seen.has(dedupeKey)) continue;

            seen.add(dedupeKey);

            let score = 0;
            if (title.startsWith(normalizedQuery)) score += 5;
            if (title.includes(normalizedQuery)) score += 3;
            if (path.startsWith(normalizedQuery)) score += 2;
            if (path.includes(normalizedQuery)) score += 1;

            scoredMatches.push({ item, score });
        }

        scoredMatches.sort((left, right) => {
            if (right.score !== left.score) {
                return right.score - left.score;
            }
            return left.item.title.length - right.item.title.length;
        });

        const quickSuggestions = scoredMatches.slice(0, 8).map((entry) => entry.item);

        setSearchResults(quickSuggestions);
        setShowSearchResults(true);
        setActiveResultIndex(quickSuggestions.length > 0 ? 0 : -1);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        performSearch(query);
        if (query.trim()) setShowSearchResults(true);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            if (searchResults.length > 0) {
                const selectedResult = (activeResultIndex >= 0 && activeResultIndex < searchResults.length)
                    ? searchResults[activeResultIndex]
                    : searchResults[0];

                router.push(selectedResult.path); // Updated to use Next.js router
            }
            closeSearchModal();
        }
    };

    const closeSearchModal = () => {
        setSearchExpanded(false);
        setSearchQuery("");
        setSearchResults([]);
        setShowSearchResults(false);
        setActiveResultIndex(-1);
    };

    const handleResultSelect = (path) => {
        closeSearchModal();
        router.push(path); // Updated to use Next.js router
    };

    const handleSearchInputKeyDown = (event) => {
        if (!searchResults.length) return;

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setActiveResultIndex((prev) => (prev + 1) % searchResults.length);
            return;
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            setActiveResultIndex((prev) => (prev <= 0 ? searchResults.length - 1 : prev - 1));
            return;
        }

        if (event.key === 'Enter' && activeResultIndex >= 0) {
            event.preventDefault();
            handleResultSelect(searchResults[activeResultIndex].path);
            return;
        }

        if (event.key === 'Escape') {
            closeSearchModal();
        }
    };

    const renderHighlightedText = (text, query) => {
        const trimmedQuery = query.trim();

        if (!trimmedQuery) return text;

        const lowerText = text.toLowerCase();
        const lowerQuery = trimmedQuery.toLowerCase();
        const matchIndex = lowerText.indexOf(lowerQuery);

        if (matchIndex === -1) return text;

        const beforeMatch = text.slice(0, matchIndex);
        const matchedText = text.slice(matchIndex, matchIndex + trimmedQuery.length);
        const afterMatch = text.slice(matchIndex + trimmedQuery.length);

        return (
            <>
                {beforeMatch}
                <mark className="search-highlight">{matchedText}</mark>
                {afterMatch}
            </>
        );
    };

    const toggleSearch = () => {
        if (!searchExpanded) {
            setSearchExpanded(true);
            setTimeout(() => {
                const input = searchRef.current?.querySelector('.search-input');
                if (input) input.focus();
            }, 100);
            if (searchQuery.trim()) setShowSearchResults(true);
        } else {
            closeSearchModal();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedInsideDesktopSearch = searchRef.current?.contains(event.target);
            const clickedInsideMobileSearch = searchMobileRef.current?.contains(event.target);

            if (!clickedInsideDesktopSearch && !clickedInsideMobileSearch) {
                // Only close modal if no query, otherwise keep suggestions open
                if (searchExpanded && !searchQuery.trim()) {
                    closeSearchModal();
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchExpanded, searchQuery]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 150);
            setShowScrollTop(scrollPosition > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleDropdownClickOutside = (event) => {
            if (!event.target.closest('.dropdown') &&
                !event.target.closest('.dropdown-nested') &&
                !event.target.closest('.mobile-dropdown') &&
                !event.target.closest('.mobile-dropdown-nested')) {
                setProductsOpen(false);
                setMachineOpen(false);
            }
        };

        document.addEventListener('touchstart', handleDropdownClickOutside);
        document.addEventListener('mousedown', handleDropdownClickOutside);

        return () => {
            document.removeEventListener('touchstart', handleDropdownClickOutside);
            document.removeEventListener('mousedown', handleDropdownClickOutside);
        };
    }, []);

    const handleMobileMenuOverlayClick = (e) => {
        if (e.target === e.currentTarget) setOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show dropdown for any non-empty input (even a single letter)
    const shouldShowDropdownResults = searchQuery.trim().length > 0 && showSearchResults;
    const hasFewSearchResults = searchResults.length > 0 && searchResults.length <= 2;

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo">
                    <img src="/KELIN-LOGO-01.png" alt="Kelin Graphics System Logo" width={65} />
                </Link>

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    {/* ...existing code... */}
                </nav>

                {/* Mobile Menu Button */}
                <button className={`menu-btn ${open ? 'menu-btn-active' : ''}`} onClick={() => setOpen(!open)}>
                    {open ? '✕' : '☰'}
                </button>
            </div>

            <div className={`nav-menu ${isScrolled ? 'scrolled' : ''}`}>
                <Link href="/" className={`dropdown-toggle ${isActive("/") ? "active" : ""}`}>Home</Link>



                {/* Learn More Dropdown in Main Nav */}
                <div
                    className={`dropdown`}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                >
                    <span
                        className="dropdown-toggle"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setProductsOpen(!productsOpen)}
                    >
                        Learn More
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 4 }}>
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    {productsOpen && (
                        <div className="dropdown-menu" style={{ minWidth: 140 }}>
                            <Link href="/explore">Explore</Link>
                            <Link href="/blogs">Blog</Link>
                        </div>
                    )}
                </div>

                {/* Products Dropdown */}
                <div
                    className={`dropdown ${productsOpen ? 'active' : ''}`}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                >
                    <span
                        className={`dropdown-toggle ${isActive("/products") ? "active" : ""}`}
                        onClick={() => setProductsOpen(!productsOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        Products
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                    {productsOpen && (
                        <div className="dropdown-menu">
                            <div
                                className={`dropdown-nested ${machineOpen ? 'active' : ''}`}
                                onMouseEnter={() => setMachineOpen(true)}
                                onMouseLeave={() => setMachineOpen(false)}
                            >
                                <span
                                    className="dropdown-toggle-nested"
                                    onClick={() => setMachineOpen(!machineOpen)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Machine
                                    <svg className="arrow-right" width="10" height="10" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>

                                {machineOpen && (
                                    <div className="dropdown-menu-nested">
                                        <Link href="/eco-solvent-printers">Eco Solvent Printers</Link>
                                        <Link href="/solvent-printers">Solvent Printers</Link>
                                        <Link href="/cutting-machine">Cutting Machine</Link>
                                        <Link href="/sublimation-dtf">Sublimation and DTF</Link>
                                        <Link href="/uv-printers">UV Printers</Link>
                                        <Link href="/heatpress">Heatpress</Link>
                                        <Link href="/laminator">Laminator</Link>
                                        <Link href="/laser-machine">Laser Machine</Link>
                                        <Link href="/embroidery-knitting">Embroidery and Knitting</Link>
                                        <Link href="/3d-printer">3D Printer</Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/inks">Inks</Link>
                            <Link href="/materials">Materials</Link>
                            <Link href="/accessories">Accessories</Link>
                            <Link href="/promotional-display">Promotional Display</Link>
                        </div>
                    )}
                </div>

                <Link href="/about" className={`dropdown-toggle ${isActive("/about") ? "active" : ""}`}>About Us</Link>
                <Link href="/events" className={`dropdown-toggle ${isActive("/events") ? "active" : ""}`}>News and Events</Link>

                <div className="vertical-line"></div>
                <Link href="/contact" id="connectwithus" className={`dropdown-toggle ${isActive("/contact") ? "" : ""}`}>Connect with Us</Link>

                {/* Desktop Search */}
                <div className="search-wrapper">
                    <button
                        type="button"
                        className="search-icon-btn"
                        onClick={toggleSearch}
                        aria-label="Open search"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {searchExpanded && (
                <div className="search-lightbox-overlay" onClick={closeSearchModal}>
                    <div className="search-lightbox" ref={searchRef} onClick={(e) => e.stopPropagation()}>
                        <div className="search-lightbox-header">
                            <h3>Search</h3>
                            <button
                                type="button"
                                className="search-lightbox-close"
                                onClick={closeSearchModal}
                                aria-label="Close search"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        <form className="search-lightbox-form" onSubmit={handleSearch}>
                            <div className="search-lightbox-input-wrap">
                                <input
                                    type="text"
                                    className="search-input search-lightbox-input"
                                    placeholder="Search products, pages, machines..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    onKeyDown={handleSearchInputKeyDown}
                                    onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                                />
                            </div>
                        </form>

                        {/* AUTO-SUGGESTION UI DISPLAY */}
                        {shouldShowDropdownResults && (
                            <div className="search-dropdown search-lightbox-results">
                                {searchResults.length > 0 ? (
                                    <>
                                        {searchResults.map((result, index) => (
                                            <div
                                                key={index}
                                                className={`search-result-item ${index === activeResultIndex ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveResultIndex(index)}
                                                onClick={() => handleResultSelect(result.path)}
                                            >
                                                <div className="search-result-title">{renderHighlightedText(result.title, searchQuery)}</div>
                                                <div className="search-result-type">{result.type}</div>
                                            </div>
                                        ))}
                                        {hasFewSearchResults && (
                                            <div className="search-results-info">
                                                Only {searchResults.length} result{searchResults.length > 1 ? 's' : ''} found. Try a broader keyword.
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="search-no-results">No results found for "{searchQuery}"</div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {open && (
                <div className="mobile-menu-overlay" onClick={handleMobileMenuOverlayClick}>
                    <nav className="nav-mobile">
                        {/* Mobile Search Bar - Inline */}
                        <div className="search-wrapper-mobile" ref={searchMobileRef}>
                            <form className="search-form-mobile" onSubmit={handleSearch}>
                                <div className="search-container-mobile">
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                                    />
                                    <button type="submit" className="search-btn">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </form>

                            {/* Search Results Dropdown - Mobile */}
                            {shouldShowDropdownResults && (
                                <div className="search-dropdown-mobile">
                                    {searchResults.length > 0 ? (
                                        <>
                                            {searchResults.map((result, index) => (
                                                <div
                                                    key={index}
                                                    className="search-result-item"
                                                    onClick={() => {
                                                        handleResultSelect(result.path);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <div className="search-result-title">{renderHighlightedText(result.title, searchQuery)}</div>
                                                    <div className="search-result-type">{result.type}</div>
                                                </div>
                                            ))}
                                            {hasFewSearchResults && (
                                                <div className="search-results-info">
                                                    Only {searchResults.length} result{searchResults.length > 1 ? 's' : ''} found. Try a broader keyword.
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="search-no-results">No results found for "{searchQuery}"</div>
                                    )}
                                </div>
                            )}
                        </div>


                        <Link href="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
                        {/* Learn More Dropdown for Mobile in Main Nav */}
                        <div className="mobile-dropdown">
                            <button
                                className="mobile-dropdown-toggle"
                                onClick={() => setProductsOpen(!productsOpen)}
                                aria-expanded={productsOpen}
                                aria-controls="mobile-learnmore-submenu"
                            >
                                Learn More
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {productsOpen && (
                                <div id="mobile-learnmore-submenu" className="mobile-dropdown-menu" role="menu">
                                    <Link href="/explore" onClick={() => setOpen(false)} role="menuitem">Explore</Link>
                                    <Link href="/blogs" onClick={() => setOpen(false)} role="menuitem">Blog</Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Products Dropdown */}
                        <div className="mobile-dropdown">
                            <button
                                className={`mobile-dropdown-toggle ${isActive("/products") ? "active" : ""}`}
                                onClick={() => setProductsOpen(!productsOpen)}
                                aria-expanded={productsOpen}
                                aria-controls="mobile-products-submenu"
                            >
                                Products
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {productsOpen && (
                                <div id="mobile-products-submenu" className="mobile-dropdown-menu" role="menu">
                                    <Link href="/inks" onClick={() => setOpen(false)} role="menuitem">Inks</Link>
                                    <Link href="/materials" onClick={() => setOpen(false)} role="menuitem">Materials</Link>
                                    <Link href="/accessories" onClick={() => setOpen(false)} role="menuitem">Accessories</Link>
                                    <Link href="/promotional-display" onClick={() => setOpen(false)} role="menuitem">Promotional Display</Link>

                                    <div className="mobile-dropdown-nested">
                                        <button
                                            className="mobile-dropdown-toggle-nested"
                                            onClick={() => setMachineOpen(!machineOpen)}
                                            aria-expanded={machineOpen}
                                            aria-controls="mobile-machine-submenu"
                                        >
                                            Machine
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>

                                        {machineOpen && (
                                            <div id="mobile-machine-submenu" className="mobile-dropdown-menu-nested" role="menu">
                                                <Link href="/eco-solvent-printers" onClick={() => setOpen(false)} role="menuitem">Eco - Solvent Printers</Link>
                                                <Link href="/solvent-printers" onClick={() => setOpen(false)} role="menuitem">Solvent Printers</Link>
                                                <Link href="/cutting-machine" onClick={() => setOpen(false)} role="menuitem">Cutting Machine</Link>
                                                <Link href="/sublimation-dtf" onClick={() => setOpen(false)} role="menuitem">Sublimation and DTF</Link>
                                                <Link href="/uv-printers" onClick={() => setOpen(false)} role="menuitem">UV Printers</Link>
                                                <Link href="/heatpress" onClick={() => setOpen(false)} role="menuitem">Heatpress</Link>
                                                <Link href="/laminator" onClick={() => setOpen(false)} role="menuitem">Laminator</Link>
                                                <Link href="/laser-machine" onClick={() => setOpen(false)} role="menuitem">Laser Machine</Link>
                                                <Link href="/embroidery-knitting" onClick={() => setOpen(false)} role="menuitem">Embroidery and Knitting</Link>
                                                <Link href="/3d-printer" onClick={() => setOpen(false)} role="menuitem">3D Printer</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={() => setOpen(false)}>About Us</Link>
                        <Link href="/events" className={isActive("/events") ? "active" : ""} onClick={() => setOpen(false)}>News and Events</Link>
                        <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>Connect with Us</Link>
                    </nav>
                </div>
            )}

            {showScrollTop && (
                <button
                    className="scroll-to-top-btn"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </header>
    );
}