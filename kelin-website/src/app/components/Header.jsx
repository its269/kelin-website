"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import "./header.css"; // import external CSS file

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
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
        { title: "Printers", path: "/products/machine/printers", type: "product" },
        { title: "Cutters", path: "/products/machine/cutters", type: "product" },
        { title: "Laminators", path: "/products/machine/laminators", type: "product" },
        { title: "Heat Press", path: "/products/machine/heat-press", type: "product" },
        { title: "About Us", path: "/services", type: "page" },
        { title: "News and Events", path: "/contact", type: "page" },
        { title: "Services", path: "/services", type: "page" },
        { title: "Contact", path: "/contact", type: "page" }
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

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo">
                    <img src="/KELIN-LOGO-01.png" alt="Kelin Graphics System Logo" width={50} />
                    KELIN GRAPHICS SYSTEM
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
                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </div>
            <div className="nav-menu">
                <Link href="/" className={`dropdown-toggle ${isActive("/") ? "active" : ""}`}>Home</Link>
                <Link href="/explore" className={`dropdown-toggle ${isActive("/explore") ? "active" : ""}`}>Explore</Link>

                {/* Products Dropdown */}
                <div
                    className="dropdown"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                >
                    <Link href="/products" className={`dropdown-toggle ${isActive("/products") ? "active" : ""}`}>
                        Products
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    {productsOpen && (
                        <div className="dropdown-menu">
                            <Link href="/products/inks">Inks</Link>
                            <Link href="/products/materials">Materials</Link>
                            <Link href="/products/accessories">Accessories</Link>
                            <Link href="/products/promotional-display">Promotional Display</Link>

                            {/* Machine Nested Dropdown */}
                            <div
                                className="dropdown-nested"
                                onMouseEnter={() => setMachineOpen(true)}
                                onMouseLeave={() => setMachineOpen(false)}
                            >
                                <Link href="/products/machine" className="dropdown-toggle-nested">
                                    Machine
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>

                                {machineOpen && (
                                    <div className="dropdown-menu-nested">
                                        <Link href="/products/machine/printers">Printers</Link>
                                        <Link href="/products/machine/cutters">Cutters</Link>
                                        <Link href="/products/machine/laminators">Laminators</Link>
                                        <Link href="/products/machine/heat-press">Heat Press</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <Link href="/services" className={`dropdown-toggle ${isActive("/services") ? "active" : ""}`}>About Us</Link>
                <Link href="/contact" className={`dropdown-toggle ${isActive("/contact") ? "active" : ""}`}>News and Events</Link>
            </div>

            {/* Mobile Menu */}
            {open && (
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

                    <Link href="/explore" className={isActive("/explore") ? "active" : ""} onClick={() => setOpen(false)}>Explore</Link>

                    {/* Mobile Products Dropdown */}
                    <div className="mobile-dropdown">
                        <button
                            className={`mobile-dropdown-toggle ${isActive("/products") ? "active" : ""}`}
                            onClick={() => setProductsOpen(!productsOpen)}
                        >
                            Products
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {productsOpen && (
                            <div className="mobile-dropdown-menu">
                                <Link href="/products/inks" onClick={() => setOpen(false)}>Inks</Link>
                                <Link href="/products/materials" onClick={() => setOpen(false)}>Materials</Link>
                                <Link href="/products/accessories" onClick={() => setOpen(false)}>Accessories</Link>
                                <Link href="/products/promotional-display" onClick={() => setOpen(false)}>Promotional Display</Link>

                                {/* Mobile Machine Nested Dropdown */}
                                <div className="mobile-dropdown-nested">
                                    <button
                                        className="mobile-dropdown-toggle-nested"
                                        onClick={() => setMachineOpen(!machineOpen)}
                                    >
                                        Machine
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    {machineOpen && (
                                        <div className="mobile-dropdown-menu-nested">
                                            <Link href="/products/machine/printers" onClick={() => setOpen(false)}>Printers</Link>
                                            <Link href="/products/machine/cutters" onClick={() => setOpen(false)}>Cutters</Link>
                                            <Link href="/products/machine/laminators" onClick={() => setOpen(false)}>Laminators</Link>
                                            <Link href="/products/machine/heat-press" onClick={() => setOpen(false)}>Heat Press</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/services" className={isActive("/services") ? "active" : ""} onClick={() => setOpen(false)}>About Us</Link>
                    <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>News and Events</Link>
                </nav>
            )}
        </header>
    );
}
