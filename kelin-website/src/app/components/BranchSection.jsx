"use client";
import { useState } from "react";
import "./branch-section.css";

export default function BranchSection() {
    const [selectedBranch, setSelectedBranch] = useState(0);

    const branches = [
        {
            id: 'manila',
            name: 'Manila Branch',
            address: '2115, 1014 Felix Huertas Rd, Santa Cruz, Manila, 1014 Metro Manila',
            phone: '(02) 8711 1188',
            mobile: '0917 678 0608 | 0908 196 0836',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 14.7571, lng: 120.9497 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.234!2d120.9497!3d14.7571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ1JzI1LjYiTiAxMjDCsDU2JzU5LjAiRQ!5e0!3m2!1sen!2sph!4v1000000000000!5m2!1sen!2sph'
        },
        {
            id: 'cdo',
            name: 'CDO Branch',
            address: 'Oro Wonder Warehouse, Kauswagan National Highway, Cagayan de Oro City. Landmark: behind CFmoto',
            phone: '(088) 880 0579',
            mobile: '0917 7131 432 | 0995 483 0653',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 8.4803, lng: 124.6293 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31570.816142770782!2d124.63891446361276!3d8.465107684644748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff3006d209ca9%3A0x37c1ba93340ee710!2sKauswagan%20cagayan%20de%20oro!5e0!3m2!1sen!2sph!4v1773908935855!5m2!1sen!2sph'
        },
        {
            id: 'bacolod',
            name: 'Bacolod Branch',
            address: 'Adc Warehouse Door A10 Alijis Road, Purok Pag-asa, Brgy Alijis, Bacolod City. Landmark: SHOPEE HUB ALIJIS',
            phone: '446 6429',
            mobile: '0956 651 0022 | 0999 509 4908',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 10.6769, lng: 122.9785 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.345!2d122.9785!3d10.6769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQwJzM2LjgiTiAxMjLCsDU4JzQyLjYiRQ!5e0!3m2!1sen!2sph!4v1000000000001!5m2!1sen!2sph'
        },
        {
            id: 'cebu',
            name: 'Cebu Branch',
            address: 'F. Cabahug St. Kasambagan Mabolo, Cebu City',
            phone: '(032) 265-1014',
            mobile: '0933 195 6565',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 10.3317, lng: 123.9012 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.213793588813!2d123.91309467573268!3d10.324768267360836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9991a7ef9177d%3A0xff1e06c23d048824!2sF.%20Cabahug%20St%2C%20Cebu!5e0!3m2!1sen!2sph!4v1773909097249!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
        },
        {
            id: 'naga',
            name: 'Naga Branch',
            address: 'Besmark Commodities Inc. Compound Warehouse #8 Maharlika Highway Brgy. Del Rosario, Naga City',
            phone: '(054) 881 0968',
            mobile: '0998 257 8968 | 0906 459 8398',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 13.6218, lng: 123.1948 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.6736202373345!2d123.23508067576243!3d13.61673490040492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a18ded74ed5677%3A0x20a1d214dfc8aefc!2sKelin%20Graphics%20System%20-%20Naga!5e0!3m2!1sen!2sph!4v1773909214168!5m2!1sen!2sph'
        },
        {
            id: 'iloilo',
            name: 'Iloilo Branch',
            address: 'Golden Luck Warehouse Door B8 Ticud Coastal Road Lapaz, IloIlo City.',
            phone: '(033) 327-2958 | 393-3205',
            mobile: '0917 673 0056 / 0929 644 6886',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 10.7202, lng: 122.5621 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.213875375586!2d122.58141767573557!3d10.717980460267672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee5f9d8cc4399%3A0xcb395a1c567c65d9!2sGolden%20lock!5e0!3m2!1sen!2sph!4v1773909397216!5m2!1sen!2sph'
        },
        {
            id: 'tacloban',
            name: 'Tacloban Branch',
            address: 'Brgy. 91, Abucay, Landmark: Heather Plus compound, Tacloban City',
            phone: '(053) 832 3327',
            mobile: '0945 475 4729',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 11.2447, lng: 125.0048 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7826.64052729646!2d124.98309819426423!3d11.237834428919586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330876d0645f2cb9%3A0x233a4c6fbec47bb8!2sHeather%20Plus%20Home%20and%20Office%20Furniture!5e0!3m2!1sen!2sph!4v1773909530831!5m2!1sen!2sph'
        },
        {
            id: 'zamboanga',
            name: 'Zamboanga Branch',
            address: 'Gov. Alvarez Ave., Brgy. Camino Nuevo, Zamboanga City. Landmark: Camino Nuevo, near at La Merced funeral fronting National Housing Authority (Yellow Gate)',
            phone: '(062) 310 9240',
            mobile: '0995 483 0653',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 6.9126, lng: 122.0805 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.55213846543097!2d122.07374690451104!3d6.91041738124151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041fb6712744b%3A0xe604db850eef5562!2sFuneraria%20La%20Merced!5e0!3m2!1sen!2sph!4v1773909681968!5m2!1sen!2sph'
        },
        {
            id: 'davao',
            name: 'Davao Branch',
            address: 'Doors 4 & 5, Johnny Go Warehouse, Gadi rd., Purok 8 Barangay 19-B Poblacion District, Davao City',
            phone: '(082) 308-2681',
            mobile: '0917 674 3073 | 0920 964 6705',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 7.0709, lng: 125.6179 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.286497690725!2d125.59522667571505!3d7.092752016285092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d23c25c5225%3A0xd6c5cd98cb278357!2sMaximma%20Graphics%20System%20Corp.%20-%20Davao!5e0!3m2!1sen!2sph!4v1773909753735!5m2!1sen!2sph'
        },
        {
            id: 'gensan',
            name: 'Gensan Branch',
            address: 'Danfer Door 1, Barangay Apopong National Highway. General Santos City, Philippines',
            phone: '(083) 552-6820',
            mobile: '0966 135 8083 | 0969 018 8608',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 6.1145, lng: 125.1716 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.325253746374!2d125.12513540183046!3d6.12523122795543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79f87892e0e7f%3A0x9971303883b79688!2sMaximma%20Graphics%20System%20Corp.%20-%20Gensan!5e0!3m2!1sen!2sph!4v1773910115366!5m2!1sen!2sph'
        },
        {
            id: 'pagadian',
            name: 'Pagadian Branch',
            address: 'Warehouse Door no. 3 Barangay Bulanit, Labangan, Zamboanga Del Sur. Landmark: Kimrich warehouse',
            phone: 'N/A',
            mobile: '0927-422-5642 | 0927-422-5641',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 7.8257, lng: 123.4370 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4894959267876!2d123.48102697571824!3d7.8437260064136165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32543dc28c0ef8f5%3A0x54414fdd00423295!2sBrgy.%20Bulanit%20labangan%20zamboanga%20del%20sur!5e0!3m2!1sen!2sph!4v1773910253863!5m2!1sen!2sph'
        },
        {
            id: 'tarlac',
            name: 'Tarlac Branch',
            address: 'Warehouse Door no. 7 Northern Prints Corp., Manila Nc, 58 Santa Rosa - Tarlac Rd, Tarlac City, 8521 Tarlac',
            phone: 'N/A',
            mobile: '0927-422-5642 | 0927-422-5641',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 15.4802, lng: 120.5979 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30759.42919873083!2d120.55327727431637!3d15.488269600000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c63b64154d8b%3A0xdeaac283cb17f25d!2sNew%20Tarlac%20Print%20Shoppe%20Art%20Supplies!5e0!3m2!1sen!2sph!4v1773910354142!5m2!1sen!2sph'
        },
        {
            id: 'isabela',
            name: 'Isabela Branch',
            address: 'Golden Crown Warehouse #4 Maharlika highway Cauayan City, Isabela, Infront of Isuzu Cauayan at the back of Maximillian Hotel',
            phone: 'N/A',
            mobile: '0927-422-5642 | 0927-422-5641',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 16.9343, lng: 121.7716 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.234!2d120.9497!3d14.7571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ1JzI1LjYiTiAxMjDCsDU2JzU5LjAiRQ!5e0!3m2!1sen!2sph!4v1000000000000!5m2!1sen!2sph3'
        },
        {
            id: 'la-union',
            name: 'La Union Branch',
            address: 'Sitio Redying Brgy.Calumbaya Bauang, La Union',
            phone: 'N/A',
            mobile: '0966-203-1848',
            hours: 'Mon-Fri, 8 AM - 5 PM',
            coordinates: { lat: 16.5361, lng: 120.3235 },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1608.3291758540997!2d120.33131526558778!3d16.512309791742865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391850069f7cc67%3A0xe9cefd3360c69c1c!2sRed%20rying!5e0!3m2!1sen!2sph!4v1773910577013!5m2!1sen!2sph'
        }
    ];

    const currentBranch = branches[selectedBranch];

    return (
        <section className="kg-branch-section">
            <div className="kg-branch-header">
                <h2 className="kg-section-title">Our Branches</h2>
                <p className="kg-section-subtitle">Visit us at any of our branches nationwide</p>
            </div>

            <div className="kg-branch-container">
                <div className="kg-branch-selector">
                    <div className="kg-branch-tabs">
                        {branches.map((branch, index) => (
                            <button
                                key={branch.id}
                                className={`kg-branch-tab ${index === selectedBranch ? 'kg-active' : ''}`}
                                onClick={() => setSelectedBranch(index)}
                            >
                                <span className="kg-branch-city">{branch.name.replace(' Branch', '')}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="kg-branch-content">
                    <div className="kg-map-container">
                        <iframe
                            src={currentBranch.mapUrl}
                            className="kg-branch-map"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${currentBranch.name} Location`}
                        />
                    </div>

                    <div className="kg-branch-details">
                        <h3 className="kg-branch-name">{currentBranch.name}</h3>

                        <div className="kg-contact-grid">
                            <div className="kg-contact-card">
                                <div className="kg-contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div className="kg-contact-info">
                                    <span className="kg-contact-label">Address</span>
                                    <span className="kg-contact-value">{currentBranch.address}</span>
                                </div>
                            </div>

                            <div className="kg-contact-card">
                                <div className="kg-contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div className="kg-contact-info">
                                    <span className="kg-contact-label">Phone</span>
                                    <span className="kg-contact-value">{currentBranch.phone}</span>
                                </div>
                            </div>

                            <div className="kg-contact-card">
                                <div className="kg-contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                        <line x1="12" y1="18" x2="12.01" y2="18" />
                                    </svg>
                                </div>
                                <div className="kg-contact-info">
                                    <span className="kg-contact-label">Mobile</span>
                                    <span className="kg-contact-value">{currentBranch.mobile}</span>
                                </div>
                            </div>

                            <div className="kg-contact-card">
                                <div className="kg-contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12,6 12,12 16,14" />
                                    </svg>
                                </div>
                                <div className="kg-contact-info">
                                    <span className="kg-contact-label">Hours</span>
                                    <span className="kg-contact-value">{currentBranch.hours}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}