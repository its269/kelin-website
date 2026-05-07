import EcoSolventPrintersClient from './EcoSolventPrintersClient';

export const metadata = {
    title: 'Eco-Solvent Printers Philippines | SMART RJ24 & XLINE | Kelin Graphics',
    description: "Explore Kelin Philippines' eco-solvent printer lineup â€” the SMART RJ24-2004-i3200 and XLINE Eco-Solvent. Industrial large-format inkjet printers built for outdoor signage, vehicle graphics, and high-volume production.",
    keywords: 'eco-solvent printer Philippines, SMART RJ24 eco-solvent, XLINE eco-solvent printer, large format inkjet printer, Kelin Philippines eco-solvent',
    openGraph: {
        title: 'Eco-Solvent Printers Philippines | SMART RJ24 & XLINE | Kelin Graphics',
        description: 'Industrial eco-solvent large-format printers for outdoor signage, vehicle graphics, and high-volume production. Available at Kelin Philippines.',
        images: [{ url: '/eco-solvent-machines/SMART.webp', width: 1200, height: 630, alt: 'Eco-Solvent Printers by Kelin Philippines' }],
        type: 'website',
    },
    alternates: {
        canonical: 'https://kelinph.com/eco-solvent-printers',
    },
};

export default function EcoSolventPrintersPage() {
    return <EcoSolventPrintersClient />;
}
