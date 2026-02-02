import Header from '../../components/Header';
import Image from 'next/image';
import './materials.css';

export const metadata = {
  title: 'Printing Materials - Kelin Graphics System | Premium Substrates & Media',
  description: 'Comprehensive range of printing materials including vinyl, tarpaulin, acrylic, foam boards, stickers, and specialty substrates for all printing applications.',
  keywords: 'printing materials, vinyl stickers, tarpaulin, magnetic film, acrylic sheets, foam board, aluminum composite panel, printing substrates',
};

export default function Materials() {
  const materialCategories = [
    {
      category: "Flexible Materials",
      products: [
        {
          name: "Vinyl Stickers",
          description: "High-quality adhesive vinyl for indoor and outdoor applications",
          features: ["Weather resistant", "Easy application", "Various finishes", "Long-lasting adhesion"],
          applications: ["Vehicle decals", "Window graphics", "Wall stickers", "Brand labeling"]
        },
        {
          name: "Tarpaulin",
          description: "Heavy-duty PVC tarpaulin for large format outdoor printing",
          features: ["UV resistant", "Waterproof", "Tear resistant", "Flame retardant options"],
          applications: ["Banners", "Billboards", "Event signage", "Construction barriers"]
        },
        {
          name: "Magnetic Film",
          description: "Flexible magnetic sheeting for removable graphics",
          features: ["Strong magnetic backing", "Easy repositioning", "Indoor/outdoor use", "Custom cutting"],
          applications: ["Vehicle magnets", "Refrigerator magnets", "Promotional displays", "Trade show graphics"]
        },
        {
          name: "Colored Sticker Vinyl",
          description: "Premium colored vinyl films in various shades and finishes",
          features: ["Wide color range", "Matte and gloss options", "Air-release technology", "Precision cutting"],
          applications: ["Craft projects", "Signage", "Decorative graphics", "Custom designs"]
        }
      ]
    },
    {
      category: "Rigid Substrates",
      products: [
        {
          name: "Colored Acrylic Sheets",
          description: "High-quality colored acrylic panels for premium displays",
          features: ["Vibrant colors", "UV stable", "Easy to fabricate", "Excellent clarity"],
          applications: ["Indoor signage", "Display stands", "Architectural elements", "Retail displays"]
        },
        {
          name: "Clear Acrylic Sheet",
          description: "Crystal clear acrylic for transparent applications",
          features: ["Optical clarity", "Impact resistant", "Weather resistant", "Easy machining"],
          applications: ["Protective barriers", "Display cases", "Windows", "LED backlighting"]
        },
        {
          name: "Aluminum Composite Panel (ACP)",
          description: "Lightweight aluminum composite for professional signage",
          features: ["Lightweight yet strong", "Flat surface", "Weather resistant", "Easy installation"],
          applications: ["Building facades", "Outdoor signs", "Trade show displays", "Corporate branding"]
        },
        {
          name: "Foam Board",
          description: "Lightweight foam core board for temporary and permanent displays",
          features: ["Lightweight", "Easy to cut", "Smooth surface", "Cost effective"],
          applications: ["Presentations", "Temporary signs", "Mounting photos", "Display boards"]
        },
        {
          name: "Sintra Board (PVC)",
          description: "Expanded PVC sheets for durable indoor and outdoor applications",
          features: ["Chemical resistant", "Easy to fabricate", "Lightweight", "Paintable surface"],
          applications: ["Outdoor signs", "Industrial applications", "Marine use", "Chemical environments"]
        }
      ]
    },
    {
      category: "Specialty Materials",
      products: [
        {
          name: "Reflective Vinyl",
          description: "High-visibility reflective materials for safety applications",
          features: ["High retroreflectivity", "DOT approved options", "Weather resistant", "Easy weeding"],
          applications: ["Traffic signs", "Safety vests", "Vehicle markings", "Emergency signage"]
        },
        {
          name: "Heat Transfer Vinyl (HTV)",
          description: "Specialty vinyl for heat press applications",
          features: ["Easy weeding", "Smooth transfer", "Wash resistant", "Various textures"],
          applications: ["Custom apparel", "Sports uniforms", "Promotional items", "Personalization"]
        },
        {
          name: "Window Cling Film",
          description: "Static cling vinyl for temporary window graphics",
          features: ["No adhesive", "Removable", "Repositionable", "Clear or white options"],
          applications: ["Window promotions", "Privacy films", "Decorative graphics", "Temporary displays"]
        },
        {
          name: "Canvas Material",
          description: "Textile canvas for fine art and photography printing",
          features: ["Archival quality", "Texture options", "Fade resistant", "Wide format"],
          applications: ["Fine art prints", "Photography", "Gallery displays", "Interior decoration"]
        },
        {
          name: "Mesh Banner",
          description: "Perforated banner material for windy conditions",
          features: ["Wind resistant", "Reduced wind load", "Outdoor durability", "Easy installation"],
          applications: ["Building wraps", "Fence graphics", "Stadium banners", "Outdoor advertising"]
        },
        {
          name: "Backlit Film",
          description: "Translucent film for illuminated signage",
          features: ["Even light diffusion", "Vibrant colors", "Tear resistant", "Easy installation"],
          applications: ["Light boxes", "Menu boards", "Airport displays", "Retail lighting"]
        }
      ]
    }
  ];

  // Placeholder image for all products
  const placeholderImg = '/display.png';

  return (
    <div>
      <Header />
      <main className="product-detail-container">
        <div className="product-header">
          <h1 className="product-detail-title">Printing Materials</h1>
          <p className="product-detail-description">
            Comprehensive range of premium printing materials and substrates for all your professional printing needs.
            From flexible vinyl to rigid panels, we provide high-quality materials for every application.
          </p>
        </div>

        {materialCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="material-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="products-grid">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="product-card">
                  <Image
                    src={placeholderImg}
                    alt={product.name}
                    width={180}
                    height={120}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>

                    <div className="product-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="product-applications">
                      <h4>Applications:</h4>
                      <div className="application-tags">
                        {product.applications.map((application, appIndex) => (
                          <span key={appIndex} className="application-tag">{application}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="materials-info">
          <h2>Why Choose Our Materials?</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>🏆 Premium Quality</h3>
              <p>All materials sourced from trusted manufacturers with proven track records in the printing industry.</p>
            </div>
            <div className="info-item">
              <h3>🔬 Technical Support</h3>
              <p>Expert advice on material selection, application techniques, and troubleshooting.</p>
            </div>
            <div className="info-item">
              <h3>📦 Reliable Supply</h3>
              <p>Consistent stock availability with fast delivery to keep your projects on schedule.</p>
            </div>
            <div className="info-item">
              <h3>🎯 Perfect Match</h3>
              <p>Materials perfectly matched to our inks and equipment for optimal printing results.</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>Need Material Recommendations?</h2>
          <p>Our material specialists can help you choose the perfect substrate for your specific application and budget requirements.</p>
          <div className="contact-buttons">
            <a href="/contact" className="btn-primary-materials">Contact Our Experts</a>
            <a href="/services" className="btn-secondary-materials">Technical Support</a>
          </div>
        </div>
      </main>
    </div>
  );
}