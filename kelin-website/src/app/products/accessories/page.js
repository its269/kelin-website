import Header from '../../components/Header';
import Image from 'next/image';
import './accessories.css';

export const metadata = {
  title: 'Printing Accessories - Kelin Graphics System | Professional Tools & Equipment',
  description: 'Complete range of printing accessories including cutting tools, application tools, measurement equipment, cleaning supplies, and professional accessories for all printing needs.',
  keywords: 'printing accessories, cutting tools, squeegees, application tools, measurement tools, cleaning supplies, safety equipment, professional accessories',
};

export default function Accessories() {
  const accessoryCategories = [
    {
      category: "Application Tools",
      products: [
        {
          name: "Professional Squeegees",
          description: "High-quality squeegees for smooth vinyl and film application",
          features: ["Multiple hardness levels", "Ergonomic handle", "Scratch-resistant edge", "Chemical resistant"],
          applications: ["Vinyl installation", "Window films", "Decal application", "Bubble removal"]
        },
        {
          name: "Heat Guns",
          description: "Variable temperature heat guns for professional vinyl installation",
          features: ["Temperature control", "Multiple nozzles", "Lightweight design", "Safety features"],
          applications: ["Vinyl conforming", "Paint removal", "Shrinking tubing", "Adhesive activation"]
        },
        {
          name: "Application Fluid",
          description: "Specialized application solution for easier positioning and installation",
          features: ["Reduces tack temporarily", "Easy repositioning", "No residue", "Fast evaporation"],
          applications: ["Large format graphics", "Window films", "Precision placement", "Complex curves"]
        },
        {
          name: "Felt Edge Tools",
          description: "Soft-edge application tools to prevent scratching on delicate surfaces",
          features: ["Felt-wrapped edges", "Various sizes", "Flexible design", "Durable construction"],
          applications: ["Automotive wraps", "Painted surfaces", "Delicate substrates", "Detail work"]
        }
      ]
    },
    {
      category: "Cutting Tools",
      products: [
        {
          name: "Precision Craft Knives",
          description: "Sharp, precise cutting tools for detailed trimming and cutting",
          features: ["Replaceable blades", "Ergonomic grip", "Multiple blade types", "Safety cap included"],
          applications: ["Vinyl trimming", "Stencil cutting", "Detail work", "Corner cutting"]
        },
        {
          name: "Rotary Cutters",
          description: "Professional rotary cutters for straight, clean cuts",
          features: ["Sharp circular blade", "Adjustable depth", "Safety guard", "Comfortable handle"],
          applications: ["Fabric cutting", "Paper trimming", "Straight cuts", "Production work"]
        },
        {
          name: "Cutting Mats",
          description: "Self-healing cutting mats to protect work surfaces and extend blade life",
          features: ["Self-healing surface", "Grid markings", "Multiple sizes", "Non-slip base"],
          applications: ["Cutting protection", "Measuring guide", "Work surface", "Blade preservation"]
        },
        {
          name: "Blade Sets",
          description: "Complete sets of replacement blades for various cutting applications",
          features: ["Multiple blade types", "Sharp edges", "Compatible sizes", "Storage case"],
          applications: ["General cutting", "Specialized tasks", "Replacement stock", "Maintenance"]
        }
      ]
    },
    {
      category: "Measurement & Alignment",
      products: [
        {
          name: "Digital Measuring Tools",
          description: "Precise digital measuring devices for accurate installations",
          features: ["LCD display", "Multiple units", "Memory function", "Compact design"],
          applications: ["Layout planning", "Precise measuring", "Quality control", "Installation verification"]
        },
        {
          name: "Alignment Guides",
          description: "Professional alignment tools for perfect positioning",
          features: ["Magnetic base", "Clear markings", "Flexible arms", "Durable construction"],
          applications: ["Sign alignment", "Logo positioning", "Text alignment", "Multi-panel layouts"]
        },
        {
          name: "Measuring Tapes",
          description: "Heavy-duty measuring tapes designed for professional use",
          features: ["Standout blade", "Clear markings", "Magnetic tip", "Belt clip"],
          applications: ["Large format measuring", "Installation layout", "Material sizing", "Distance measuring"]
        },
        {
          name: "Laser Levels",
          description: "Precision laser levels for perfect horizontal and vertical alignment",
          features: ["Self-leveling", "Visible laser lines", "Tripod compatible", "Long battery life"],
          applications: ["Sign installation", "Level alignment", "Layout reference", "Professional mounting"]
        }
      ]
    },
    {
      category: "Maintenance & Cleaning",
      products: [
        {
          name: "Cleaning Solutions",
          description: "Specialized cleaning products for equipment and substrate preparation",
          features: ["Surface preparation", "Equipment cleaning", "Residue removal", "Fast evaporation"],
          applications: ["Surface prep", "Equipment maintenance", "Adhesive removal", "Final cleaning"]
        },
        {
          name: "Microfiber Cloths",
          description: "High-quality microfiber cloths for streak-free cleaning",
          features: ["Lint-free", "Absorbent", "Machine washable", "Multiple sizes"],
          applications: ["Screen cleaning", "Surface preparation", "Equipment wiping", "Final polish"]
        },
        {
          name: "Maintenance Kits",
          description: "Complete maintenance kits for printer and equipment care",
          features: ["All-in-one solution", "Multiple components", "Instructions included", "Storage case"],
          applications: ["Routine maintenance", "Preventive care", "Equipment longevity", "Performance optimization"]
        },
        {
          name: "Lubricants & Oils",
          description: "Specialized lubricants for smooth equipment operation",
          features: ["Equipment specific", "Long-lasting", "Clean application", "Temperature stable"],
          applications: ["Moving parts", "Maintenance schedules", "Equipment care", "Performance enhancement"]
        }
      ]
    }
  ];

  // Placeholder image for all products
  const placeholderImg = '/display.png';

  return (
    <div>
      <Header />
      <main className="accessories-container">
        <div className="accessories-header">
          <h1 className="accessories-title">Printing Accessories</h1>
          <p className="accessories-description">
            Professional accessories and tools to enhance your printing workflow and ensure perfect results.
            From application tools to maintenance supplies, we have everything you need for professional printing operations.
          </p>
        </div>

        {accessoryCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="accessory-category">
            <h2 className="accessory-category-title">{category.category}</h2>
            <div className="accessories-grid">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="accessory-card">
                  <Image
                    src={placeholderImg}
                    alt={product.name}
                    width={180}
                    height={120}
                    className="accessory-image"
                  />
                  <div className="accessory-info">
                    <h3 className="accessory-name">{product.name}</h3>
                    <p className="accessory-description">{product.description}</p>

                    <div className="accessory-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="accessory-applications">
                      <h4>Applications:</h4>
                      <div className="accessory-application-tags">
                        {product.applications.map((application, appIndex) => (
                          <span key={appIndex} className="accessory-application-tag">{application}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="accessories-info">
          <h2>Why Choose Our Accessories?</h2>
          <div className="accessories-info-grid">
            <div className="accessories-info-item">
              <h3>🛠️ Professional Grade</h3>
              <p>All accessories are selected for professional use with durability and performance in mind.</p>
            </div>
            <div className="accessories-info-item">
              <h3>🎯 Perfect Compatibility</h3>
              <p>Accessories designed to work seamlessly with our equipment and materials for optimal results.</p>
            </div>
            <div className="accessories-info-item">
              <h3>📦 Complete Solutions</h3>
              <p>From basic tools to advanced equipment, we provide everything needed for professional installations.</p>
            </div>
            <div className="accessories-info-item">
              <h3>💡 Expert Guidance</h3>
              <p>Our team provides recommendations and training on proper tool usage and techniques.</p>
            </div>
          </div>
        </div>

        <div className="accessories-contact-section">
          <h2>Need Help Choosing Accessories?</h2>
          <p>Our accessories specialists can recommend the right tools and supplies for your specific applications and workflow requirements.</p>
          <div className="accessories-contact-buttons">
            <a href="/contact" className="btn-primary-accessories">Contact Our Experts</a>
            <a href="/services" className="btn-secondary-accessories">Technical Support</a>
          </div>
        </div>
      </main>
    </div>
  );
}