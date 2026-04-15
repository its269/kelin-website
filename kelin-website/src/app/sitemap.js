// Required for static export
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap() {
    const baseUrl = 'https://www.kelinph.com'
    const lastMod = new Date('2026-04-11')

    return [

        // ─── Core Pages ───────────────────────────────────────────
        {
            url: baseUrl,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/events`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/explore`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.3,
        },

        // ─── Products & Catalogue ─────────────────────────────────
        {
            url: `${baseUrl}/products`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/inks`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/materials`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/accessories`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/promotional-display`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // ─── Machine Category Pages ───────────────────────────────
        {
            url: `${baseUrl}/eco-solvent-printers`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solvent-printers`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/sublimation-dtf`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/uv-printers`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/cutting-machine`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/heatpress`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/laminator`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/laser-machine`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/embroidery-knitting`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/3d-printer`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // ─── Solutions Pages ──────────────────────────────────────
        {
            url: `${baseUrl}/solutions-digital-printing-equipment`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-cutting-machines`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-industrial-cutter`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-dtf`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-uv-dtf`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-industrial-sublimation`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-textile-apparel`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-threadwork`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-laser-machines`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-personalize-machines`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-signages`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-exhibition-display`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions-substrates-materials`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // ─── Blog Pages ───────────────────────────────────────────
        {
            url: `${baseUrl}/blogs`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blogs-smart-eco-solvent-printer`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blogs-xline-eco-solvent`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blogs-apolloMax-plus-II`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blogs-iecho-pk`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — Eco-Solvent Printers ─────────────────
        {
            url: `${baseUrl}/smart-rj24-2004-i3200-eco-solvent`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/xline-eco-solvent`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/apollomax-plus-II`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — Sublimation & DTF ───────────────────
        {
            url: `${baseUrl}/smart-sublimation`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/sublimation-printer-fd6198e`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/smart-dtf-machine`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/smart-dtf-powder-shaker`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/kirin`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — UV Printers ─────────────────────────
        {
            url: `${baseUrl}/dtf-uv-printer-sf303-f1080`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/dtf-uv-printer-sf604-i3200`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/luxor-rtr-uv`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/smart-uv-printer`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/liyu-x-line-dqs-uv-hybrid-printer`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/automatic-uv-crystal-flat-pasting`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — Cutting Machines ────────────────────
        {
            url: `${baseUrl}/iecho-bk3`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/iecho-bk4`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/iecho-pk`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/iecho-pk4`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/iecho-tk4s`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/gcc-puma-iv`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/gcc-expert-24lx`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/gcc-expert-52lx`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/gcc-ar24-desktop`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — Heat Press ───────────────────────────
        {
            url: `${baseUrl}/dual-pneumatic`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/r2000-roller`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/sapphire-heat-press`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/subli-mate-manual-heat-press`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — Laminators ──────────────────────────
        {
            url: `${baseUrl}/fulei-bu-1425fa-flatbed-laminator`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/fulei-bu-1600e-warm-auto-laminator`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/cold-laminator`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — Laser Machines ──────────────────────
        {
            url: `${baseUrl}/hanniu-k1390-co2-laser-150w-ccd`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/hanniu-k1390-co2-laser-300w`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/yueming-fiber-laser-cma-1325c-g-g`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/yueming-fiber-laser-hl1530c-g-e`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/k-sign-desktop-laser-b330`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/k-sign-desktop-laser-marking`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/k-sign-df-1916-laser-fabric-cutting`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/k-sign-letter-shell-3d-printer`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/handheld-fiber-laser`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/reci-handheld-fiber-laser-welding`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // ─── Product Pages — Embroidery & Knitting ────────────────
        {
            url: `${baseUrl}/promaker-embroidery-1201`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/promaker-embroidery-1202`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/promaker-embroidery-1204`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/smartex-knitting-gsce-1-52`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]
}