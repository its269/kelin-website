"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import "./header.css"; // import external CSS file

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [machineOpen, setMachineOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [searchExpanded, setSearchExpanded] = useState(false);
    const searchRef = useRef(null);
    const searchMobileRef = useRef(null);

    // Search data - you can expand this or fetch from API
    const searchData = [
        { title: "Explore", path: "/explore", type: "page" },
        { title: "Products", path: "/products", type: "page" },
        { title: "Inks", path: "/products/inks", type: "product" },
        { title: "Materials", path: "/products/materials", type: "product" },
        { title: "Accessories", path: "/products/accessories", type: "product" },
        { title: "Promotional Display", path: "/products/promotional-display", type: "product" },
        { title: "Machine", path: "/products/machine", type: "product" },
        { title: "Eco - Solvent Printers", path: "/products/machine/eco-solvent-printers", type: "product" },
        { title: "Solvent Printers", path: "/products/machine/solvent-printers", type: "product" },
        { title: "Cutting Machine", path: "/products/machine/cutting-machine", type: "product" },
        { title: "Sublimation and DTF", path: "/products/machine/sublimation-dtf", type: "product" },
        { title: "UV Printers", path: "/products/machine/uv-printers", type: "product" },
        { title: "Heatpress", path: "/products/machine/heatpress", type: "product" },
        { title: "Laminator", path: "/products/machine/laminator", type: "product" },
        { title: "Laser Machine", path: "/products/machine/laser-machine", type: "product" },
        { title: "Embroidery and Knitting", path: "/products/machine/embroidery-knitting", type: "product" },
        { title: "3D Printer", path: "/products/machine/3d-printer", type: "product" },
        { title: "About Us", path: "/about", type: "page" },
        { title: "News and Events", path: "/events", type: "page" },
        { title: "Services", path: "/about", type: "page" },
        { title: "Contact", path: "/contact", type: "page" },
        { title: "Connect with Us", path: "/contact", type: "page" },
        { title: "events", path: "/events", type: "page" }
    ];

    // Helper function to check if link is active
    const isActive = (path) => {
        if (path === "/" || path === "/") {
            return pathname === "/" || pathname === "/";
        }
        return pathname.startsWith(path);
    };

    // Search function
    const performSearch = (query) => {
        if (!query.trim()) {
            setSearchResults([]);
            setShowSearchResults(false);
            return;
        }

        const filtered = searchData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.path.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
        setShowSearchResults(true);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        performSearch(query);
    };

    // Handle search form submission
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // If there are results, navigate to the first one
            if (searchResults.length > 0) {
                window.location.href = searchResults[0].path;
            }
            setShowSearchResults(false);
        }
    };

    // Handle result selection
    const handleResultSelect = (path) => {
        setSearchQuery("");
        setSearchResults([]);
        setShowSearchResults(false);
        setSearchExpanded(false);
        window.location.href = path;
    };

    // Handle search toggle
    const toggleSearch = () => {
        setSearchExpanded(!searchExpanded);
        if (!searchExpanded) {
            // Focus input when expanding
            setTimeout(() => {
                const input = searchRef.current?.querySelector('.search-input');
                if (input) input.focus();
            }, 100);
        } else {
            // Clear search when collapsing
            setSearchQuery("");
            setSearchResults([]);
            setShowSearchResults(false);
        }
    };

    // Handle click outside to close search results
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target) &&
                searchMobileRef.current && !searchMobileRef.current.contains(event.target)) {
                setShowSearchResults(false);
                // Also collapse search if clicked outside and no query
                if (searchExpanded && !searchQuery.trim()) {
                    setSearchExpanded(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchExpanded, searchQuery]);

    // Handle scroll detection for nav-menu positioning
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle dropdown clicks outside for iOS touch devices
    useEffect(() => {
        const handleDropdownClickOutside = (event) => {
            // Close dropdowns if clicking outside
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

    // Handle mobile menu overlay click
    const handleMobileMenuOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo">
                    <img src="/KELIN-LOGO-01.png" alt="Kelin Graphics System Logo" width={65} />
                    <h1 className="company-name">KELIN GRAPHICS SYSTEM</h1>
                </Link>

                {/* Desktop Menu */}
                <nav className="nav-desktop">


                    {/* Desktop Search Bar - Inline */}
                    <div className="search-wrapper" ref={searchRef}>
                        {!searchExpanded ? (
                            // Collapsed state - just icon
                            <button
                                type="button"
                                className="search-icon-btn"
                                onClick={toggleSearch}
                                aria-label="Open search"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        ) : (
                            // Expanded state - full search bar
                            <form className="search-form-inline" onSubmit={handleSearch}>
                                <div className="search-container-inline expanded">
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
                                    />
                                    <button type="submit" className="search-btn">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        className="search-close-btn"
                                        onClick={toggleSearch}
                                        aria-label="Close search"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18 6L6 18M6 6L18 18"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Search Results Dropdown - Desktop */}
                        {searchExpanded && showSearchResults && searchResults.length > 0 && (
                            <div className="search-dropdown">
                                {searchResults.map((result, index) => (
                                    <div
                                        key={index}
                                        className="search-result-item"
                                        onClick={() => handleResultSelect(result.path)}
                                    >
                                        <div className="search-result-title">{result.title}</div>
                                        <div className="search-result-type">{result.type}</div>
                                    </div>
                                ))}
                                {searchQuery.trim() && searchResults.length === 0 && (
                                    <div className="search-no-results">
                                        No results found for "{searchQuery}"
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button className={`menu-btn ${open ? 'menu-btn-active' : ''}`} onClick={() => setOpen(!open)}>
                    {open ? '✕' : '☰'}
                </button>
            </div>
            <div className={`nav-menu ${isScrolled ? 'scrolled' : ''}`}>
                <Link href="/" className={`dropdown-toggle ${isActive("/") ? "active" : ""}`}>Home</Link>
                <Link href="/explore" className={`dropdown-toggle ${isActive("/explore") ? "active" : ""}`}>Explore</Link>

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
                            {/* Machine Nested Dropdown */}
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
                                        <Link href="/products/machine/eco-solvent-printers">Eco - Solvent Printers</Link>
                                        <Link href="/products/machine/solvent-printers">Solvent Printers</Link>
                                        <Link href="/products/machine/cutting-machine">Cutting Machine</Link>
                                        <Link href="/products/machine/sublimation-dtf">Sublimation and DTF</Link>
                                        <Link href="/products/machine/uv-printers">UV Printers</Link>
                                        <Link href="/products/machine/heatpress">Heatpress</Link>
                                        <Link href="/products/machine/laminator">Laminator</Link>
                                        <Link href="/products/machine/laser-machine">Laser Machine</Link>
                                        <Link href="/products/machine/embroidery-knitting">Embroidery and Knitting</Link>
                                        <Link href="/products/machine/3d-printer">3D Printer</Link>
                                    </div>
                                )}
                            </div>
                            <Link href="/products/inks">Inks</Link>
                            <Link href="/products/materials">Materials</Link>
                            <Link href="/products/accessories">Accessories</Link>
                            <Link href="/products/promotional-display">Promotional Display</Link>
                        </div>
                    )}
                </div>

                <Link href="/about" className={`dropdown-toggle ${isActive("/about") ? "active" : ""}`}>About Us</Link>
                <Link href="/events" className={`dropdown-toggle ${isActive("/events") ? "active" : ""}`}>News and Events</Link>
                <div className="vertical-line"></div>
                <Link href="/contact" id="connectwithus" className={`dropdown-toggle ${isActive("/contact") ? "" : ""}`}>Connect with Us</Link>
            </div>

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
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>

                            {/* Search Results Dropdown - Mobile */}
                            {showSearchResults && searchResults.length > 0 && (
                                <div className="search-dropdown-mobile">
                                    {searchResults.map((result, index) => (
                                        <div
                                            key={index}
                                            className="search-result-item"
                                            onClick={() => {
                                                handleResultSelect(result.path);
                                                setOpen(false);
                                            }}
                                        >
                                            <div className="search-result-title">{result.title}</div>
                                            <div className="search-result-type">{result.type}</div>
                                        </div>
                                    ))}
                                    {searchQuery.trim() && searchResults.length === 0 && (
                                        <div className="search-no-results">
                                            No results found for "{searchQuery}"
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <Link href="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/explore" className={isActive("/explore") ? "active" : ""} onClick={() => setOpen(false)}>Explore</Link>

                        {/* Mobile Products Dropdown */}
                        <div className="mobile-dropdown">
                            <button
                                className={`mobile-dropdown-toggle ${isActive("/products") ? "active" : ""}`}
                                onClick={() => setProductsOpen(!productsOpen)}
                                aria-expanded={productsOpen}
                                aria-controls="mobile-products-submenu"
                                aria-label="Toggle products menu"
                            >
                                Products
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {productsOpen && (
                                <div
                                    id="mobile-products-submenu"
                                    className="mobile-dropdown-menu"
                                    role="menu"
                                >
                                    <Link href="/products/inks" onClick={() => setOpen(false)} role="menuitem">Inks</Link>
                                    <Link href="/products/materials" onClick={() => setOpen(false)} role="menuitem">Materials</Link>
                                    <Link href="/products/accessories" onClick={() => setOpen(false)} role="menuitem">Accessories</Link>
                                    <Link href="/products/promotional-display" onClick={() => setOpen(false)} role="menuitem">Promotional Display</Link>

                                    {/* Mobile Machine Nested Dropdown */}
                                    <div className="mobile-dropdown-nested">
                                        <button
                                            className="mobile-dropdown-toggle-nested"
                                            onClick={() => setMachineOpen(!machineOpen)}
                                            aria-expanded={machineOpen}
                                            aria-controls="mobile-machine-submenu"
                                            aria-label="Toggle machine categories"
                                        >
                                            Machine
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>

                                        {machineOpen && (
                                            <div
                                                id="mobile-machine-submenu"
                                                className="mobile-dropdown-menu-nested"
                                                role="menu"
                                            >
                                                <Link href="/products/machine/eco-solvent-printers" onClick={() => setOpen(false)} role="menuitem">Eco - Solvent Printers</Link>
                                                <Link href="/products/machine/solvent-printers" onClick={() => setOpen(false)} role="menuitem">Solvent Printers</Link>
                                                <Link href="/products/machine/cutting-machine" onClick={() => setOpen(false)} role="menuitem">Cutting Machine</Link>
                                                <Link href="/products/machine/sublimation-dtf" onClick={() => setOpen(false)} role="menuitem">Sublimation and DTF</Link>
                                                <Link href="/products/machine/uv-printers" onClick={() => setOpen(false)} role="menuitem">UV Printers</Link>
                                                <Link href="/products/machine/heatpress" onClick={() => setOpen(false)} role="menuitem">Heatpress</Link>
                                                <Link href="/products/machine/laminator" onClick={() => setOpen(false)} role="menuitem">Laminator</Link>
                                                <Link href="/products/machine/laser-machine" onClick={() => setOpen(false)} role="menuitem">Laser Machine</Link>
                                                <Link href="/products/machine/embroidery-knitting" onClick={() => setOpen(false)} role="menuitem">Embroidery and Knitting</Link>
                                                <Link href="/products/machine/3d-printer" onClick={() => setOpen(false)} role="menuitem">3D Printer</Link>
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
        </header>
    );
}
// ne