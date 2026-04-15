"use client";
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import "./textile-apparel.css";

export default function SubstratesMaterialsPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const categories = [
        {
            title: "Printable Sticker & Film Series",
            products: [
                {
                    name: 'Tickee Vinyl Sticker (TK Series)',
                    desc: 'Includes TK50, TK80, TK85 (Gray Back), TK100, and TK105 (Gray Permanent).',
                    specs: 'Widths: 3.0ft, 3.5ft, 4.2ft, 4.5ft, 5.0ft x 164ft. Matte and Glossy finishes.',
                    features: ['Removable options available', 'Gray back blockout options', 'Industrial grade'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Sofie Vinyl & Specialty Stickers',
                    desc: 'SK4100, SK4101 (Bubble Free), I-1333 Blockout, KB1015 Rough Wall, and Texture Surface.',
                    specs: 'Sizes vary up to 5.0ft x 164ft. Includes Wall Covering fabric and PCW6000 Car Wrapping.',
                    features: ['Bubble-free options', 'Rough surface compatible', 'Ultra Clear PVC available'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Sofie Clear Sticker',
                    desc: 'SR2900M/SR2800 (Removable) and SP2900M/SP2800 (Permanent).',
                    specs: 'Size: 4.5ft x 164ft (also 4.2ft for SP2800). Matte and Glossy.',
                    features: ['Optically clear', 'Permanent or Removable adhesive', 'Waterproof'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Tickee Cold Laminating Film',
                    desc: 'KL1856, 3D Cat Eye, LF1601H, and LF1602H.',
                    specs: 'Widths: 1.0ft to 5.0ft x 164ft. Matte, Glossy, and 3D Cat Eye finishes.',
                    features: ['UV protection', 'Scratch resistant', 'Enhances print life'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Sofie PP Film & Sticker',
                    desc: 'AES1140201 (160mic), AES1170301 (190mic), Gray Backing, and PP Sticker.',
                    specs: 'Widths: 3.0ft & 4.2ft x 164ft. Matte finish.',
                    features: ['Tear-resistant', 'Eco-friendly', 'Stay-flat non-adhesive options'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Specialty & Architectural Films',
                    desc: 'Window films, Floor lamination, Magnetic sheets, and Rewritable films.',
                    specs: 'Includes Anti-Scratching Rainbow, White Dot Gradient, Chalk Board (Green/Black), and Reflective Sheeting.',
                    features: ['Anti-slip floor graphics', 'Static cling', 'Hologram/Silver finishes'],
                    images: ['/dummy-image-square.jpg'],
                },
            ],
        },
        {
            title: "Ba-cut Translucent Sticker",
            products: [
                {
                    name: 'Ba-cut Translucent Sticker',
                    desc: 'Premium colored translucent vinyl for backlit applications.',
                    specs: 'Size: 10m x 1.22m (33ft x 4ft). 19+ colors including Red, Blue, Yellow, Green, Gold.',
                    features: ['Vibrant illumination', 'Uniform color', 'Excellent plotting'],
                    images: ['/dummy-image-square.jpg'],
                },
            ],
        },
        {
            title: "Tarpaulin & Flex Series",
            products: [
                {
                    name: 'Omega Tarpaulin',
                    desc: 'High-tenacity frontlit media in multiple weights.',
                    specs: 'Grades: A2(260gsm), AO(280gsm), B1(300gsm), C2(320gsm), CO(340gsm), E1(400gsm), DO(380gsm). Sizes: 3.3ft to 10.5ft x 164ft.',
                    features: ['Heavy duty', 'High tensile', 'Outdoor rated'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Beta Tarpaulin',
                    desc: 'Economical and lightweight tarpaulin solutions.',
                    specs: 'Grades: X2 (220gsm), A2 (260gsm), 300gsm. Sizes: 3.3ft to 10.5ft x 164ft/246ft.',
                    features: ['Lightweight', 'Economical', 'Short-term outdoor'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Omega Black-Out Tarpaulin',
                    desc: 'BB Series for double-sided or light-blocking banners.',
                    specs: 'Grades: 400gsm (12oz), 510gsm (15oz), 580gsm (17oz), 610gsm (18oz). Sizes: 4.5ft to 10.5ft x 164ft.',
                    features: ['100% Opaque', 'Smooth surface', 'Heavy blockout'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Alpha Tarpaulin & Flex',
                    desc: 'Alpha High Glossy, Alpha Flex (650gsm), and Alpha Flex Mesh (440gsm).',
                    specs: 'Sizes ranging from 3.3ft up to 10.5ft x 164ft depending on variant.',
                    features: ['High gloss finish', 'Mesh wind-resistant options', 'Premium strength'],
                    images: ['/dummy-image-square.jpg'],
                },
            ],
        },
        {
            title: "Sublimation, Textiles & Lightbox Media",
            products: [
                {
                    name: 'Subli-Mate Nova & S100 Paper',
                    desc: 'High-speed sublimation paper for industrial use.',
                    specs: 'Widths: 24", 36", 44", 50", 61", 64", 72". Rolls: 328ft & 3280ft (Jumbo).',
                    features: ['High transfer rate', 'Fast drying', 'Vibrant output'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Smartex & Subli-Mate Fabrics',
                    desc: 'Polydex Kiana, Air Cool, Drifit, ITY, Neo Prene, Nylon Spandex, and Yonex.',
                    specs: 'Widths: 64" & 72". Weights: 120gsm to 200gsm. Includes Tube Type and Lining fabrics.',
                    features: ['Print ready', 'Stretchable', 'Apparel grade'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Textile Accessories',
                    desc: 'Side taping, elastic band garters, and drawstring cords.',
                    specs: 'Taping: 50m (Various colors). Garters: 2cm to 5cm widths. Drawstrings: 1m to 1.4m.',
                    features: ['Apparel finishing', 'Durable elastic', 'Multi-color'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Backlit Film & Lightbox Fabric',
                    desc: 'Sofie Backlit PET Film, Constant Lightbox Fabric (UV21, UV22), and Soft Film.',
                    specs: 'Films: 165mic & 220mic. Fabrics: Up to 10.5ft x 331ft rolls.',
                    features: ['Uniform light diffusion', 'Vibrant illumination', 'Large format support'],
                    images: ['/dummy-image-square.jpg'],
                },
            ],
        },
        {
            title: "Rigid Substrates & Boards",
            products: [
                {
                    name: 'Just Cast Acrylic',
                    desc: 'High-clarity durable acrylic sheets (Clear, Diffuser White, Colors, Mirror).',
                    specs: 'Thickness: 1.5mm to 12.0mm. Sizes: 4x6ft, 4x8ft. Wide array of K-series colors.',
                    features: ['High clarity', 'Thermoformable', 'UV stable'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Luminao & Extruded Acrylic',
                    desc: 'Clear and Diffuser White options in extruded and Luminao brand.',
                    specs: 'Thickness: 1.5mm to 6.0mm. Size: 4x8ft.',
                    features: ['Cost-effective', 'Consistent thickness', 'Easy machining'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Just Sintra Board',
                    desc: 'Expanded PVC foam board (Vers White, Bluish, Black, Colors, Lite, HD).',
                    specs: 'Thickness: 1.5mm to 20.0mm. Sizes: 4x6ft, 4x8ft, 4x10ft.',
                    features: ['Lightweight', 'Firm/Durable', 'Mounting ready'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Just Aluminum Composite Panel',
                    desc: 'Architectural grade exterior cladding panels.',
                    specs: 'Thickness: 3.0mm. Size: 4x8ft. Colors: Glossy White, Champagne, Navy Blue, Mouse Gray, Coffee, Brush/Mirror Silver.',
                    features: ['Rigid/Lightweight', 'Weatherproof', 'Premium finish'],
                    images: ['/dummy-image-square.jpg'],
                },
                {
                    name: 'Foam Board & High Impact Sheets',
                    desc: 'Just Foam Board, High Impact Sheet (Bluish White), and Rigid PVC Sheet (Clear).',
                    specs: 'Foam Board: 5.0mm (4x8ft). Impact/PVC: 0.5mm, 0.7mm, 1.0mm.',
                    features: ['Ultra-light', 'Interior mounting', 'Flexible rigid PVC'],
                    images: ['/dummy-image-square.jpg'],
                },
            ],
        },
    ];

    const openLightbox = (product) => {
        setSelectedProduct(product);
        setCurrentImageIndex(0);
    };

    const closeLightbox = () => {
        setSelectedProduct(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProduct && selectedProduct.images) {
            setCurrentImageIndex((prev) =>
                prev === selectedProduct.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProduct && selectedProduct.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProduct.images.length - 1 : prev - 1
            );
        }
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <main className="luxor-page-container">
            <Header />

            <header className="luxor-header">
                <h1>Substrates and Materials</h1>
                <p>High-performance printable media, textiles, and rigid substrates designed for durability and professional-grade finishing.</p>
            </header>

            {categories.map((cat, catIndex) => (
                <div key={catIndex} style={{ marginBottom: '3rem' }}>
                    <h2 style={{ padding: '0 1rem 0.75rem', fontSize: '1.25rem', fontWeight: 700, borderBottom: '2px solid #e53e3e', marginBottom: '1.5rem' }}>{cat.title}</h2>
                    <section className="luxor-grid">
                        {cat.products.map((product, prodIndex) => (
                            <article key={prodIndex} className="luxor-card">
                                <div className="card-image-container" onClick={() => openLightbox(product)} style={{ cursor: 'pointer' }}>
                                    <img src={product.images[0]} alt={product.name} className="card-img" />
                                </div>
                                <div className="card-content">
                                    <h3>{product.name}</h3>
                                    <p className="post-excerpt">{product.desc}</p>
                                    <p style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '0.5rem' }}>{product.specs}</p>
                                    <ul style={{ fontSize: '0.82rem', color: '#374151', paddingLeft: '1.1rem', marginBottom: '0.75rem' }}>
                                        {product.features.map((f, i) => <li key={i}>{f}</li>)}
                                    </ul>
                                    <button
                                        onClick={() => openLightbox(product)}
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
                            <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{selectedProduct.name}</h2>
                            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                <Link href="/contact" style={{ background: '#e53e3e', color: '#fff', padding: '0.4rem 1rem', borderRadius: '6px', fontSize: '0.85rem', textDecoration: 'none' }}>
                                    Send Inquiry
                                </Link>
                                <button onClick={closeLightbox} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.6rem', lineHeight: 1 }}>&times;</button>
                            </div>
                        </div>

                        <div style={{ position: 'relative', background: '#f5f5f5', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={selectedProduct.images[currentImageIndex]}
                                alt={selectedProduct.name}
                                style={{ maxHeight: '420px', maxWidth: '100%', objectFit: 'contain' }}
                            />
                            {selectedProduct.images.length > 1 && (
                                <>
                                    <button onClick={prevImage} style={{ position: 'absolute', left: '1rem', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.4rem' }}>&#8249;</button>
                                    <button onClick={nextImage} style={{ position: 'absolute', right: '1rem', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.4rem' }}>&#8250;</button>
                                    <div style={{ position: 'absolute', bottom: '0.75rem', display: 'flex', gap: '6px', justifyContent: 'center', width: '100%' }}>
                                        {selectedProduct.images.map((_, i) => (
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
