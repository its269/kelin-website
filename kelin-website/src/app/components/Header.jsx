"use client";
import Link from "next/link";
import { useState } from "react";
import "./header.css"; // import external CSS file

export default function Header() {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [productsOpen, setProductsOpen] = useState(false);
    const [machineOpen, setMachineOpen] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            alert(`Searching for: ${searchQuery}`);
            // Here you can implement actual search functionality
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link href="/" className="logo">
                    <img src="/KELIN-LOGO-01.png" alt="Kelin Graphics System Logo" width={50} />
                    Kelin Graphics System
                </Link>

                {/* Desktop Menu */}
                <nav className="nav-desktop">
                    <Link href="/explore">Explore</Link>

                    {/* Products Dropdown */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                    >
                        <Link href="/products" className="dropdown-toggle">
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

                    <Link href="/services">About Us</Link>
                    <Link href="/contact">News and Events</Link>

                    {/* Desktop Search Bar - Inline */}
                    <form className="search-form-inline" onSubmit={handleSearch}>
                        <div className="search-container-inline">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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
                </nav>

                {/* Mobile Menu Button */}
                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="nav-mobile">
                    {/* Mobile Search Bar - Inline */}
                    <form className="search-form-mobile" onSubmit={handleSearch}>
                        <div className="search-container-mobile">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
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

                    <Link href="/" onClick={() => setOpen(false)}>Explore</Link>

                    {/* Mobile Products Dropdown */}
                    <div className="mobile-dropdown">
                        <button
                            className="mobile-dropdown-toggle"
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

                    <Link href="/services" onClick={() => setOpen(false)}>About Us</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>News and Events</Link>
                </nav>
            )}
        </header>
    );
}
