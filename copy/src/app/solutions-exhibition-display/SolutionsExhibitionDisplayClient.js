"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import "./textile-apparel.css";

export default function ExhibitionDisplayPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const productData = {
        'Roll Up Banner': ['/promotional-display/roll-up-banner-aluminum.webp', '/promotional-display/roll-up-banner.webp'],
        'X Banner Stand': ['/promotional-display/x-banner-stand.webp', '/promotional-display/x-banner-stand(2).webp'],
        'Adjustable Banner Stand': ['/promotional-display/Adjustable Banner Stand(2).webp', '/promotional-display/Adjustable Banner Stand.webp'],
        'Feather Wing Banner': ['/promotional-display/Feather Wing Banner.webp', '/promotional-display/Feather Wing Banner(2).webp', '/promotional-display/Feather Wing Banner(3).webp', '/promotional-display/Feather Wing Banner(4).webp'],
        'Teardrop Banner Stand': ['/promotional-display/teardrop-banner-stand.webp', '/promotional-display/teardrop-banner-stand(2).webp', '/promotional-display/teardrop-banner-stand(3).webp', '/promotional-display/teardrop-banner-stand(4).webp', '/promotional-display/teardrop-banner-stand(5).webp'],
        'Single Sided Poster Stand': ['/promotional-display/single-sided-poster-stand-printed.webp', '/promotional-display/single-sided-poster-stand.webp', '/promotional-display/single-sided-poster-stand-closed-up.webp', '/promotional-display/single-sided-poster-stand-sets.webp'],
        'Double Sided Poster Stand': ['/promotional-display/double-sided-poster-stand.webp', '/promotional-display/double-sided-poster-stand-front.webp', '/promotional-display/double-sided-poster-stand-unprinted.webp'],
        'Iron Poster Stand': ['/promotional-display/iron poster stand.webp', '/promotional-display/iron poster stand(2).webp'],
        'Round Base Poster Banner': ['/promotional-display/round-base-poster-banner.webp', '/promotional-display/round-base-poster-banner(2).webp', '/promotional-display/round-base-poster-banner(3).webp', '/promotional-display/round-base-poster-banner(4).webp'],
        'Aluminum Easel Stand': ['/promotional-display/Aluminum Easel Stand(2).webp', '/promotional-display/Aluminum Easel Stand(3).webp', '/promotional-display/Aluminum Easel Stand.webp'],
        'Wooden Easel Stand': ['/promotional-display/wooden-easel-stand.webp', '/promotional-display/wooden-easel-stand(2).webp', '/promotional-display/wooden-easel-stand(3).webp', '/promotional-display/wooden-easel-stand(4).webp', '/promotional-display/wooden-easel-stand(5).webp', '/promotional-display/wooden-easel-stand(6).webp'],
        'Triangle Banner Easel Stand': ['/promotional-display/triangle-banner-easel-stand.webp', '/promotional-display/triangle-banner-easel-stand(2).webp', '/promotional-display/triangle-banner-easel-stand(3).webp', '/promotional-display/triangle-banner-easel-stand(4).webp', '/promotional-display/triangle-banner-easel-stand(5).webp'],
        'Human Standee': ['/promotional-display/human-standee.webp'],
        'Pop Up Structure': ['/promotional-display/pop-up-structure.webp', '/promotional-display/pop-up-structure(1).webp', '/promotional-display/pop-up-structure(2).webp', '/promotional-display/pop-up-structure(3).webp', '/promotional-display/pop-up-structure(4).webp', '/promotional-display/pop-up-structure(5).webp', '/promotional-display/pop-up-structure(6).webp', '/promotional-display/pop-up-structure(7).webp', '/promotional-display/pop-up-structure(8).webp', '/promotional-display/pop-up-structure(9).webp'],
        'Portable Backdrop': ['/promotional-display/portable-backdrop.webp', '/promotional-display/portable-backdrop(2).webp', '/promotional-display/portable-backdrop(3).webp', '/promotional-display/portable-backdrop(4).webp'],
        'Mini Promotional Booth': ['/promotional-display/promotional-booth-small.webp', '/promotional-display/promotional-booth-small(2).webp', '/promotional-display/promotional-booth-small(3).webp', '/promotional-display/promotional-booth-small(4).webp'],
        'Regular Promotional Booth': ['/promotional-display/promotional-booth-regular.webp', '/promotional-display/promotional-booth-regular(2).webp', '/promotional-display/promotional-booth-regular(3).webp'],
        'Semi Circle Promotional Booth': ['/promotional-display/promotional-booth-semi-circle.webp', '/promotional-display/promotional-booth-semi-circle(2).webp', '/promotional-display/promotional-booth-semi-circle(3).webp', '/promotional-display/promotional-booth-semi-circle(4).webp', '/promotional-display/promotional-booth-semi-circle(5).webp'],
        'Door Frame Banner Stand': ['/promotional-display/door-frame-banner-stand.webp', '/promotional-display/door-frame-banner-stand(2).webp', '/promotional-display/door-frame-banner-stand(3).webp', '/promotional-display/door-frame-banner-stand(4).webp', '/promotional-display/door-frame-banner-stand(5).webp'],
        'Aluminum Data Rack': ['/promotional-display/data-rack-aluminum.webp', '/promotional-display/data-rack-aluminum(2).webp'],
        'Iron Data Rack': ['/promotional-display/data-rack-iron.webp', '/promotional-display/data-rack-iron(2).webp'],
        'New Rotating Lightbox': ['/promotional-display/Rotating Lightbox Round 3 (1).webp', '/promotional-display/Primex Rotating Lightbox Round B (Upper) (3).webp', '/promotional-display/Primex Rotating Lightbox Round B (Upper) (4).webp'],
        'LED Menu Lightbox Double Poles Stand': ['/promotional-display/lead menu lightbox double poles stand(2).webp', '/promotional-display/lead menu lightbox double poles stand.webp'],
        'New Windproof Display': ['/promotional-display/Windproof Display  (2).webp'],
    };

    const openLightbox = (productName) => {
        setSelectedProduct(productName);
        setCurrentImageIndex(0);
    };

    const closeLightbox = () => {
        setSelectedProduct(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProduct && productData[selectedProduct]) {
            setCurrentImageIndex((prev) =>
                prev === productData[selectedProduct].length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProduct && productData[selectedProduct]) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? productData[selectedProduct].length - 1 : prev - 1
            );
        }
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    const categories = [
        {
            title: 'Banner & Display Systems',
            products: [
                { name: 'Roll Up Banner', img: '/promotional-display/roll-up-banner-iron.webp', desc: 'Portable retractable banners perfect for trade shows, presentations, and retail displays.' },
                { name: 'X Banner Stand', img: '/promotional-display/x-banner-stand(2).webp', desc: 'Lightweight and portable X-frame banner stands ideal for indoor events and promotions.' },
                { name: 'Adjustable Banner Stand', img: '/promotional-display/Adjustable Banner Stand.webp', desc: 'Versatile banner stands with adjustable height and width for various display needs.' },
                { name: 'Feather Wing Banner', img: '/promotional-display/Feather Wing Banner.webp', desc: 'Eye-catching feather-shaped outdoor banners that flutter in the wind for maximum visibility.' },
                { name: 'Teardrop Banner Stand', img: '/promotional-display/teardrop-banner-stand.webp', desc: 'Unique teardrop-shaped banners perfect for outdoor events and high-visibility marketing.' },
            ],
        },
        {
            title: 'Poster & Display Stands',
            products: [
                { name: 'Single Sided Poster Stand', img: '/promotional-display/single-sided-poster-stand-printed.webp', desc: 'Professional single-sided poster stands for indoor advertising and information display.' },
                { name: 'Double Sided Poster Stand', img: '/promotional-display/double-sided-poster-stand.webp', desc: 'Double-sided poster stands for maximum visibility from multiple viewing angles.' },
                { name: 'Iron Poster Stand', img: '/promotional-display/iron poster stand.webp', desc: 'Heavy-duty iron poster stands for outdoor and high-traffic indoor locations.' },
                { name: 'Round Base Poster Banner', img: '/promotional-display/round-base-poster-banner.webp', desc: 'Elegant poster banners with round weighted base for stability and professional appearance.' },
            ],
        },
        {
            title: 'Easel & Specialty Stands',
            products: [
                { name: 'Aluminum Easel Stand', img: '/promotional-display/Aluminum Easel Stand(2).webp', desc: 'Lightweight aluminum easel stands perfect for presentations and display boards.' },
                { name: 'Wooden Easel Stand', img: '/promotional-display/wooden-easel-stand(6).webp', desc: 'Classic wooden easel stands providing elegant display solution for various settings.' },
                { name: 'Triangle Banner Easel Stand', img: '/promotional-display/triangle-banner-easel-stand.webp', desc: 'Unique triangular base easel stands offering superior stability and modern aesthetics.' },
                { name: 'Human Standee', img: '/promotional-display/human-standee.webp', desc: 'Life-size human cutout standees perfect for promotional displays and photo opportunities.' },
            ],
        },
        {
            title: 'Exhibition & Specialty Systems',
            products: [
                { name: 'Pop Up Structure', img: '/promotional-display/pop-up-structure.webp', desc: 'Large format pop-up display structures for trade shows and exhibitions with maximum impact.' },
                { name: 'Portable Backdrop', img: '/promotional-display/portable-backdrop.webp', desc: 'Portable backdrop systems perfect for photo booths, presentations, and event displays.' },
                { name: 'Mini Promotional Booth', img: '/promotional-display/promotional-booth-small(3).webp', desc: 'Compact promotional booth perfect for small spaces and intimate trade show setups.' },
                { name: 'Regular Promotional Booth', img: '/promotional-display/promotional-booth-regular(3).webp', desc: 'Standard promotional booth with complete features for professional trade show presence.' },
                { name: 'Semi Circle Promotional Booth', img: '/promotional-display/promotional-booth-semi-circle.webp', desc: 'Unique curved design booth that creates an inviting space and maximizes visibility.' },
                { name: 'Door Frame Banner Stand', img: '/promotional-display/door-frame-banner-stand.webp', desc: 'Space-saving banner stands designed to fit in doorways and narrow spaces.' },
                { name: 'Aluminum Data Rack', img: '/promotional-display/data-rack-aluminum(2).webp', desc: 'Lightweight aluminum literature and brochure display racks with modern design.' },
                { name: 'Iron Data Rack', img: '/promotional-display/data-rack-iron.webp', desc: 'Heavy-duty iron literature racks providing durability and stability for high-traffic areas.' },
                { name: 'New Rotating Lightbox', img: '/promotional-display/Rotating Lightbox Round 3 (1).webp', desc: 'Illuminated rotating lightboxes for dynamic advertising and maximum attention.' },
                { name: 'LED Menu Lightbox Double Poles Stand', img: '/promotional-display/lead menu lightbox double poles stand.webp', desc: 'Illuminated menu display stands with dual support poles for restaurants and retail.' },
                { name: 'New Windproof Display', img: '/promotional-display/Windproof Display  (2).webp', desc: 'Heavy-duty windproof displays designed to withstand outdoor weather conditions.' },
            ],
        },
    ];

    return (
        <main className="luxor-page-container">
            <Header />

            <header className="luxor-header">
                <h1>Exhibition Displays</h1>
                <p>Professional promotional displays, banners, and exhibition materials designed to maximize your brand visibility and create impactful marketing experiences.</p>
            </header>

            {categories.map((cat) => (
                <div key={cat.title} style={{ marginBottom: '3rem' }}>
                    <h2 style={{ padding: '0 1rem 0.75rem', fontSize: '1.25rem', fontWeight: 700, borderBottom: '2px solid #e53e3e', marginBottom: '1.5rem' }}>{cat.title}</h2>
                    <section className="luxor-grid">
                        {cat.products.map((product) => (
                            <article key={product.name} className="luxor-card">
                                <div className="card-image-container" onClick={() => openLightbox(product.name)} style={{ cursor: 'pointer' }}>
                                    <img src={product.img} alt={product.name} className="card-img" />
                                </div>
                                <div className="card-content">
                                    <h3>{product.name}</h3>
                                    <p className="post-excerpt">{product.desc}</p>
                                    <button
                                        onClick={() => openLightbox(product.name)}
                                        className="read-more-link"
                                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}
                                    >
                                        View Gallery &rarr;
                                    </button>
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            ))}

            {selectedProduct && (
                <div
                    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={closeLightbox}
                >
                    <div
                        style={{ background: '#fff', borderRadius: '12px', maxWidth: '800px', width: '90%', overflow: 'hidden', position: 'relative' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid #eee' }}>
                            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{selectedProduct}</h2>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Link href="/contact" style={{ background: '#e53e3e', color: '#fff', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', textDecoration: 'none' }}>
                                    Send Inquiry
                                </Link>
                                <button onClick={closeLightbox} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.6rem', lineHeight: 1 }}>&times;</button>
                            </div>
                        </div>

                        <div style={{ position: 'relative', background: '#f5f5f5', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={productData[selectedProduct][currentImageIndex]}
                                alt={selectedProduct}
                                style={{ maxHeight: '420px', maxWidth: '100%', objectFit: 'contain' }}
                            />
                            {productData[selectedProduct].length > 1 && (
                                <>
                                    <button onClick={prevImage} style={{ position: 'absolute', left: '1rem', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.4rem' }}>&#8249;</button>
                                    <button onClick={nextImage} style={{ position: 'absolute', right: '1rem', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.4rem' }}>&#8250;</button>
                                    <div style={{ position: 'absolute', bottom: '0.75rem', display: 'flex', gap: '6px', justifyContent: 'center', width: '100%' }}>
                                        {productData[selectedProduct].map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => goToImage(i)}
                                                style={{ width: '8px', height: '8px', borderRadius: '50%', border: 'none', cursor: 'pointer', background: i === currentImageIndex ? '#e53e3e' : '#ccc', padding: 0 }}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
