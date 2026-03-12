// src/data/productData.js

// Images data
import bathsoap from '../assets/bathsoap.jpeg';
import greenGrapes from '../assets/greenGrapes.jpeg';
import hospitalAprons from '../assets/hospitalaprons.jpg';
import luxuryTowels from '../assets/LuxuryTowels.jpg';
import tasbih from '../assets/Tasbih.jpeg';
import ihrambelts from '../assets/ihrambelts.jpeg';
import redgrapes from '../assets/redgrapes.jpeg';
import mixgrapes from '../assets/mixgrapes.jpeg';
import onionpowder from '../assets/OnionPowder.jpeg';
import onion from '../assets/onions.jpeg';
import suniform from '../assets/uniform.jpg';

// Categories data
export const categories = [
  { id: 1, name: "All Products", slug: "all-products", count: 14 },
  { id: 2, name: "Clothing & Textiles", slug: "clothing-textiles", count: 3 },
  { id: 3, name: "Soaps", slug: "soaps", count: 2 },
  { id: 4, name: "Spices", slug: "spices", count: 2 },
  { id: 5, name: "Grapes", slug: "grapes", count: 3 },
  { id: 6, name: "Hajj Specials", slug:"hajj-items", count: 2 },
  { id: 7, name: "Onions", slug: "onionitems", count: 2 },
];

// Products data - All products from your AllProducts component
export const products = [
  {
    id: 1,
    name: "Premium School Uniforms",
    title: "Premium School Uniforms",
    slug: "premium-school-uniforms",
    category: "Clothing & Textiles",
    categorySlug: "clothing-textiles",
    image: suniform,
    images: [
      suniform
    ],
    description: "High-quality, durable school uniforms in various sizes",
    longDescription: `Our Premium School Uniforms represent the perfect blend of comfort, durability, and professional appearance, designed specifically for educational institutions that demand the highest quality standards.

MANUFACTURING EXCELLENCE:
Each uniform is crafted using state-of-the-art manufacturing processes in our ISO-certified facility. We utilize double-stitched seams for enhanced durability, reinforced stress points to withstand daily wear and tear, and premium quality threads that maintain color consistency through repeated washes. Our production line maintains strict quality control checks at every stage, ensuring that every piece meets our exacting standards before dispatch.

FABRIC TECHNOLOGY:
We use specialized fabric blends that offer superior breathability while maintaining shape retention. The fabric composition typically includes:
- 65% Premium Cotton for comfort and breathability
- 35% Polyester for durability and wrinkle resistance
This blend ensures that students remain comfortable throughout school hours while the uniforms maintain their crisp appearance even after long days.

DESIGN FEATURES:
Our uniforms incorporate thoughtful design elements including:
- Reinforced knee patches for younger students
- Adjustable waistbands for growing children
- Extra-deep pockets that don't bulge
- Stain-resistant treatment on lighter colors
- Reflective elements for safety during early morning or evening commutes
- Name tag-friendly chest areas
- Easy-iron fabric technology

SIZE INCLUSIVITY:
We believe every child deserves well-fitting uniforms. Our size range spans from age 3 to adult sizes, including:
- Junior sizes: 3-4 years through 10-11 years
- Senior sizes: 12-13 years through 15-16 years
- Plus sizes for all age groups
- Custom tailoring available for special requirements
- Slim and regular fits in every size

CUSTOMIZATION OPTIONS:
Schools can personalize uniforms with:
- Embroidered school logos and crests
- Custom color combinations matching school colors
- Printed house names or student names
- Year of graduation markings
- Achievement badges attachment points
- House color piping or trim options

QUALITY ASSURANCE:
Every uniform undergoes rigorous testing for:
- Colorfastness (minimum 40 washes without fading)
- Shrinkage control (less than 3% after first wash)
- Tensile strength (withstands 50+ pounds of force)
- Seam strength (double the industry standard)
- Pilling resistance (Grade 4 or higher)
- Fabric breathability (minimum 80 CFM)

MAINTENANCE GUIDE:
Our uniforms are designed for easy care:
- Machine washable up to 40°C
- Tumble dry low or line dry
- Minimal ironing required
- Color-safe bleach acceptable
- Stain treatment guidelines included

ENVIRONMENTAL COMMITMENT:
We're proud to manufacture using sustainable practices:
- Water-efficient dyeing processes
- Recycled polyester options available
- Biodegradable packaging
- Zero-waste cutting techniques
- Solar-powered manufacturing facility

BULK ORDER BENEFITS:
Educational institutions enjoy:
- Volume-based pricing discounts
- Free size grading services
- Dedicated account management
- Express delivery options
- Replacement stock availability
- Annual contract pricing
- Parent direct ordering portal

Our commitment to quality has made us the preferred uniform supplier for over 500 schools across the region, with a 98% customer satisfaction rate and repeat business exceeding 85% annually.`,
    bgColor: "#f5e6d3",
    featured: true
  },
  {
    id: 2,
    name: "Medical Hospital Aprons",
    title: "Medical Hospital Aprons",
    slug: "medical-hospital-aprons",
    category: "Clothing & Textiles",
    categorySlug: "clothing-textiles",
    image: hospitalAprons,
    images: [
    hospitalAprons
    ],
    description: "Sterile, comfortable aprons for medical professionals",
    longDescription: `Our Medical Hospital Aprons are engineered for healthcare professionals who demand the highest standards of protection, comfort, and functionality during long shifts and critical procedures.

PROFESSIONAL GRADE PROTECTION:
These aprons meet international medical standards including ISO 13485 and CE certification. They provide:
- Bacterial filtration efficiency exceeding 98%
- Fluid resistance up to 160 mmHg
- Antistatic properties for sensitive environments
- Latex-free materials for allergy prevention
- Antimicrobial coating that inhibits bacterial growth
- Radiation attenuation options for radiology departments

MATERIAL SCIENCE:
Crafted from advanced medical-grade non-woven polypropylene with:
- Three-layer SMS (Spunbond-Meltblown-Spunbond) construction
- Breathability rating of 2500 g/m²/24hrs
- Gram weight options: 25gsm to 75gsm depending on application
- Blue, green, and white color options
- Sterile and non-sterile variants available
- Reinforced panels for high-risk areas

ERGONOMIC DESIGN:
Understanding the demands of healthcare work, our aprons feature:
- Extended length for full coverage (standard 48 inches)
- Adjustable neck closure with tear-away safety feature
- Side ties that won't come undone during procedures
- Raglan sleeves for unrestricted arm movement
- Thumb loops to prevent sleeve migration
- Pockets at chest level for essential tools
- Weight distribution system to reduce shoulder fatigue

PROCEDURE-SPECIFIC VARIANTS:
We offer specialized aprons for different departments:
- Surgical aprons with reinforced sterile fields
- Isolation aprons for infectious disease units
- Radiology aprons with lead equivalent protection
- Labor and delivery aprons with extended coverage
- Emergency room aprons with quick-donning features
- Pediatric aprons with child-friendly designs
- Laboratory aprons with chemical resistance

STERILITY ASSURANCE:
Our sterile aprons undergo:
- Gamma radiation sterilization (25-40 kGy)
- Individual peel-pouch packaging
- 5-year sterility guarantee when unopened
- Sterility indicators on each package
- Lot tracking for quality control
- AQL 1.5 inspection standards

COMFORT IN LONG SHIFTS:
Healthcare workers often wear aprons for 12+ hours. Our design addresses this with:
- Moisture-wicking inner layer
- Breathable back panel
- Weight distribution system (reduces shoulder pressure by 40%)
- Anti-fatigue standing support
- Temperature regulation fabric
- Odor control technology
- Reduced noise material for quiet movement

COMPLIANCE AND STANDARDS:
All aprons meet or exceed:
- AAMI PB70 Level 3 and 4 requirements
- ASTM F1670/F1671 fluid resistance
- EN 13795 surgical drape and gown standards
- FDA Class II medical device requirements
- WHO infection control guidelines
- OSHA bloodborne pathogen standards

BULK HOSPITAL SUPPLY:
We partner with healthcare institutions to provide:
- Just-in-time inventory management
- Custom imprinting with hospital logos
- Mixed size case configurations
- Emergency rapid response stocking
- Usage tracking and analytics
- Cost-per-procedure optimization
- Staff training resources

Our medical aprons are trusted by leading hospitals including 15 major healthcare networks, 200+ surgical centers, and countless medical professionals who rely on our consistent quality for their critical work.`,
    bgColor: "#e0f0fa",
    featured: true
  },
  {
    id: 3,
    name: "Luxury Cotton Towels",
    title: "Luxury Cotton Towels",
    slug: "luxury-cotton-towels",
    category: "Clothing & Textiles",
    categorySlug: "clothing-textiles",
    image: luxuryTowels,
    images: [
      luxuryTowels
    ],
    description: "Soft, absorbent premium towels for hotels and homes",
    longDescription: `Experience the pinnacle of comfort with our Luxury Cotton Towels, crafted for those who appreciate the finer things in life and for hospitality establishments that demand excellence.

SUPREME COTTON QUALITY:
Our towels are crafted from the world's finest cotton varieties:
- Egyptian Giza 45 extra-long staple cotton (optional premium line)
- Turkish Aegean cotton with superior absorbency
- Supima cotton for exceptional softness
- Organic cotton certified by GOTS
- Combed and ring-spun for zero impurities
- Single-ply and double-ply construction options

GRAM WEIGHT SELECTION:
Choose the perfect weight for your needs:
- 400-500 GSM: Lightweight, quick-drying for gym and travel
- 500-600 GSM: Standard luxury for daily home use
- 600-700 GSM: Premium hotel quality, perfect balance
- 700-800 GSM: Spa-grade ultra-plush, maximum absorbency
- 800+ GSM: The ultimate luxury experience

COMPLETE BATH COLLECTION:
Available in full range of sizes:
- Washcloths: 13" x 13"
- Hand towels: 16" x 30" 
- Bath towels: 27" x 54"
- Bath sheets: 35" x 70"
- Bath mats: 20" x 30"
- Bath robes: S-XXL
- Custom sizes available for hospitality

MANUFACTURING EXCELLENCE:
Each towel undergoes meticulous production:
- Zero-twist technology for cloud-like softness
- Double-stitched hems that never unravel
- Border detailing with dobby or jacquard patterns
- Color retention treatment for 100+ washes
- Anti-microbial treatment optional
- Hypoallergenic processing
- Eco-friendly dyeing with OEKO-TEX certification

ABSORPTION TECHNOLOGY:
Our towels feature proprietary absorption enhancement:
- 40% more absorbent than standard towels
- Quick-dry technology reduces bacterial growth
- Lint-free manufacturing process
- Maintains fluffiness through repeated washing
- Water-release technology dries 30% faster

HOSPITALITY SOLUTIONS:
For hotels and resorts, we offer:
- Custom embroidery with hotel logos
- Color matching to property brand guidelines
- Bulk pricing with tiered discounts
- Linen inventory management programs
- Rental and purchase options
- Replacement stock programs
- Staff training for linen care

DESIGN COLLECTIONS:
Choose from our curated collections:
- Classic White Collection: Timeless elegance
- Spa Serenity: Calming earth tones
- Modern Minimalist: Clean lines, solid colors
- Heritage Collection: Traditional patterns
- Resort Collection: Bold, tropical colors
- Organic Line: Undyed natural cotton

CARE AND LONGEVITY:
To maintain premium quality:
- Machine wash warm with like colors
- Tumble dry low with wool dryer balls
- No fabric softeners (reduces absorbency)
- Avoid bleach and harsh detergents
- Fluff in dryer before folding
- Storage in breathable linen cabinets

CERTIFICATIONS:
Our luxury towels carry prestigious certifications:
- OEKO-TEX Standard 100
- Global Organic Textile Standard (GOTS)
- Fair Trade Certified
- BCI (Better Cotton Initiative)
- ISO 9001:2015 quality management
- Carbon neutral manufacturing

Our commitment to quality has made us the preferred choice for 5-star hotels including Marriott, Hilton, and Hyatt properties, as well as discerning homeowners who refuse to compromise on daily comfort.`,
    bgColor: "#e8f0e8",
    featured: true
  },
  {
    id: 4,
    name: "Natural Handmade Soap",
    title: "Natural Handmade Soap Bars",
    slug: "natural-handmade-soap",
    category: "Soaps",
    categorySlug: "soaps",
    image: "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=",
    images: [
      "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4="
    ],
    description: "Organic handcrafted soap bars with natural ingredients",
    longDescription: `Discover the pure essence of natural skincare with our Handmade Natural Soap Bars, crafted using traditional methods combined with modern understanding of skin health and botanical benefits.

COLD-PROCESS METHOD:
Our soaps are made using the traditional cold-process method that preserves the natural glycerin and beneficial properties of ingredients. This technique involves:
- Slow saponification at low temperatures (below 120°F)
- 4-6 week curing period for perfect hardness and mildness
- Retention of natural glycerin that moisturizes skin
- No chemical accelerants or detergents
- Small batch production for quality control
- Hand-cut bars with natural, rustic appearance

PREMIUM OIL BLEND:
Each bar contains a carefully balanced blend of:
- Extra virgin olive oil (40-60%): Deep moisturizing
- Organic coconut oil (15-25%): Rich lather, cleansing
- Sustainable palm oil (optional): Hardness and creaminess
- Castor oil (5-10%): Lather stability and conditioning
- Shea butter (5-15%): Ultimate softness and healing
- Sweet almond oil: Vitamin E and skin nourishment
- Jojoba oil: Balances natural skin oils

NATURAL VARIETIES:
Explore our extensive range of natural soaps:

1. OLIVE OIL CASTILE (80%+ Olive Oil):
   - Ultra-gentle for sensitive skin
   - Traditional recipe from Aleppo
   - Best for babies and eczema-prone skin
   - Creamy, low-lather cleansing

2. OATMEAL & HONEY:
   - Colloidal oatmeal for gentle exfoliation
   - Raw honey for antibacterial properties
   - Calming for irritated skin
   - Naturally soothing scent

3. CHARCOAL DETOX:
   - Activated charcoal from coconut shells
   - Deep pore cleansing
   - Ideal for oily and acne-prone skin
   - Draws out impurities without stripping

4. LAVENDER DREAMS:
   - Real lavender buds for gentle exfoliation
   - Pure lavender essential oil
   - Calming aromatherapy benefits
   - Purple clay for gentle color

5. CITRUS BURST:
   - Organic orange and lemon peel
   - Grapefruit essential oil
   - Vitamin C rich for brightening
   - Energizing morning shower

6. GOAT MILK & HONEY:
   - Fresh goat milk from local farms
   - Rich in vitamins A, D, and B
   - Lactic acid for gentle exfoliation
   - Ultra-moisturizing for dry skin

7. TURMERIC & NEEM:
   - Traditional Ayurvedic ingredients
   - Anti-inflammatory properties
   - Brightening and even skin tone
   - Natural antiseptic qualities

8. COFFEE SCRUB:
   - Fine-ground Arabica coffee
   - Natural caffeine for firming
   - Exfoliating without microplastics
   - Invigorating morning scent

9. PEPPERMINT TEA TREE:
   - Cooling peppermint essential oil
   - Tea tree for acne control
   - Invigorating and refreshing
   - Perfect for athlete's foot

10. ROSE PETAL:
    - Real rose petals and rose clay
    - Rose geranium essential oil
    - Romantic, floral scent
    - Gentle for mature skin

INGREDIENT SOURCING:
We pride ourselves on ethical sourcing:
- Direct trade with organic farmers
- Fair trade she butter from Ghana
- Sustainable palm oil from RSPO-certified sources
- Local raw honey from apiaries
- Essential oils steam-distilled in-house
- Natural colorants from clays and botanicals
- No synthetic fragrances or dyes

SKIN BENEFITS:
Regular use of natural soap provides:
- Balanced pH (9-10 versus commercial soap's 11-12)
- Preservation of skin's natural moisture barrier
- No stripping of beneficial skin oils
- Reduction in irritation and allergic reactions
- Natural antibacterial protection
- Improvement in skin conditions over time
- Biodegradable, environmentally friendly

PACKAGING:
Environmentally responsible packaging:
- Recycled paper boxes printed with soy ink
- Compostable cellulose wrap
- Plastic-free shipping materials
- Minimal packaging design
- Refill options at local markets
- Return program for packaging

Our natural soaps are more than just cleansers; they're a return to traditional skincare wisdom, crafted with intention and respect for both your skin and the planet.`,
    bgColor: "#e8f0e8",
    featured: true
  },
  {
    id: 5,
    name: "Organic Bath Soaps",
    title: "Organic Bath Soaps",
    slug: "organic-bath-soaps",
    category: "Soaps",
    categorySlug: "soaps",
    image: bathsoap,
    images: [
     bathsoap
    ],
    description: "Premium organic bath soaps for daily use",
    longDescription: `Elevate your daily bathing ritual with our Certified Organic Bath Soaps, formulated to nourish your skin while respecting the environment through sustainable practices and pure ingredients.

USDA CERTIFIED ORGANIC:
Our organic soaps carry the prestigious USDA Organic seal, guaranteeing:
- 95%+ organic ingredients by volume (excluding water and salt)
- No synthetic pesticides or fertilizers in any ingredient
- No GMOs throughout the supply chain
- No artificial preservatives or colors
- No synthetic fragrances or phthalates
- Annual on-site farm inspections
- Complete ingredient traceability from seed to soap

ORGANIC OIL BLEND:
Masterfully balanced organic oils create the perfect bar:
- Organic coconut oil*: Creates rich, bubbly lather
- Organic olive oil*: Deeply moisturizing, skin-nourishing
- Organic shea butter*: Ultimate softness and healing
- Organic castor oil: Lather stability and conditioning
- Organic cocoa butter: Skin elasticity and protection
- Organic avocado oil: Rich in vitamins A, D, E
- Organic hemp seed oil: Perfect omega balance for skin
*Indicates primary oils in larger quantities

SPECIALTY FORMULATIONS:

1. SENSITIVE SKIN FORMULA:
   - Fragrance-free for maximum gentleness
   - Extra shea butter for barrier protection
   - Oatmeal infusion for calming irritation
   - Low-lather for non-stripping cleansing
   - Pediatrician-tested for baby use

2. ACNE-PRONE SKIN:
   - Tea tree oil from organic Australian sources
   - Neem leaf infusion for antibacterial action
   - Kaolin clay for gentle oil absorption
   - Salicylic acid from willow bark extract
   - Non-comedogenic formula

3. ANTI-AGING FORMULA:
   - Rosehip seed oil for natural retinol alternative
   - Pomegranate oil for antioxidant protection
   - Frankincense essential oil for cell regeneration
   - Red palm oil for natural vitamin E
   - CoQ10 from plant sources

4. ECZEMA RELIEF:
   - Colloidal oatmeal for itch relief
   - Calendula infusion for healing
   - Manuka honey for antibacterial properties
   - Evening primrose oil for inflammation
   - Dermatologist-recommended formulation

5. ATHLETE'S FORMULA:
   - Peppermint for cooling recovery
   - Eucalyptus for muscle relief
   - Arnica for bruise healing
   - Spirulina for mineral replenishment
   - Antifungal essential oil blend

6. PREGNANCY CARE:
   - Unscented for sensitivity
   - Stretch mark prevention blend
   - Gentle enough for postpartum
   - Safe for nursing mothers
   - Nausea-soothing citrus option

MANUFACTURING PROCESS:
Our organic certification extends to manufacturing:
- Certified organic facility with segregation
- Cold-process method preserving organic integrity
- No chemical processing aids
- Solar-heated production areas
- Recycled water systems
- Zero-waste manufacturing goal
- 100% renewable energy used

THERAPEUTIC GRADE ESSENTIAL OILS:
When we add scent, it's only through certified organic essential oils:
- Lavender: Calming, sleep-promoting
- Peppermint: Energizing, mentally clarifying
- Tea tree: Antiseptic, purifying
- Eucalyptus: Respiratory support
- Lemon: Uplifting, detoxifying
- Frankincense: Meditative, grounding
- Rosemary: Memory-enhancing, stimulating
- Ylang ylang: Mood-balancing, romantic

ORGANIC CERTIFICATIONS:
Our commitment is verified by multiple certifications:
- USDA Organic (National Organic Program)
- EcoCert Organic Cosmetics
- COSMOS Organic
- Soil Association (UK)
- BioGro (New Zealand)
- JAS (Japanese Agricultural Standard)

SKIN LOVING ADDITIVES:
Each bar may include beneficial organic additives:
- Organic oatmeal for gentle exfoliation
- Organic poppy seeds for texture
- Organic rose petals for beauty
- Organic calendula petals for healing
- Organic French green clay for detox
- Organic spirulina for nutrition
- Organic cocoa for antioxidant boost

ENVIRONMENTAL IMPACT:
Our organic commitment extends to the planet:
- Biodegradable formulas safe for waterways
- No palm oil or certified sustainable alternatives
- Carbon-neutral manufacturing
- Plastic-free, compostable packaging
- Reforestation partnerships
- Water conservation in production
- Support for organic farming transition

Customer satisfaction is guaranteed with our 100% natural, organic bath soaps that transform daily cleansing into a nourishing ritual for both body and planet.`,
    bgColor: "#f5e6d3",
    featured: false
  },
  {
    id: 6,
    name: "Premium Spice Collection",
    title: "Premium Spice Collection",
    slug: "premium-spice-collection",
    category: "Spices",
    categorySlug: "spices",
    image: "https://deliciousfoods.in/cdn/shop/articles/spices.jpg?v=1742457010",
    images: [
      "https://deliciousfoods.in/cdn/shop/articles/spices.jpg?v=1742457010"
    ],
    description: "Authentic Indian spice blends for cooking",
    longDescription: `Embark on a culinary journey with our Premium Spice Collection, featuring authentic Indian spice blends that have been perfected over generations and sourced from the finest growing regions across the subcontinent.

THE ART OF BLENDING:
Indian cooking is incomplete without carefully balanced spice blends. Our master blenders combine:
- Whole spices roasted to perfection before grinding
- Traditional stone-grinding methods for authentic texture
- Precise ratios developed over decades of expertise
- Small batch production for consistency
- Fresh grinding within 72 hours of packaging
- Volatile oil preservation techniques

INDIVIDUAL SPICES IN OUR COLLECTION:

1. CARDAMOM (Elaichi):
   - Green Cardamom: Sweet, floral notes from Western Ghats
   - Black Cardamom: Smoky, camphor-like from Sikkim
   - Uses: Chai, biryani, desserts, garam masala
   - Grade: 6-8mm pods, 100% hand-sorted

2. CINNAMON (Dalchini):
   - True Cassia from Kerala forests
   - Thin, multiple layered quills
   - Sweet, warm flavor profile
   - Uses: Curries, rice dishes, desserts
   - Essential oil content: 2.5% minimum

3. CLOVES (Laung):
   - Hand-picked from Spice Islands
   - Full, unbroken buds with heads
   - Pungent, numbing quality
   - Uses: Biryani, meat marinades, mulled wine
   - Eugenol content: 85% minimum

4. BLACK PEPPER (Kali Mirch):
   - Tellicherry Garbled Special Extra Bold (TGSEB)
   - 5mm+ berry size
   - Complex, fruity, piney notes
   - Uses: Essential in almost every dish
   - Piperine content: 5% minimum

5. CUMIN (Jeera):
   - Royal cumin from Rajasthan desert
   - Elongated, dark seeds with high oil content
   - Earthy, warm, slightly citrus
   - Uses: Tadka, curries, rice, yogurt
   - Steam-sterilized for safety

6. CORIANDER (Dhania):
   - Whole seeds from Madhya Pradesh
   - Citrusy, floral, slightly sweet
   - Essential base for most gravies
   - Uses: Curries, marinades, chutneys
   - Cold-ground to preserve aroma

7. TURMERIC (Haldi):
   - Alleppey Finger variety from Kerala
   - High curcumin content (4%+)
   - Vibrant golden-yellow color
   - Uses: Almost all savory dishes
   - Anti-inflammatory properties preserved

8. RED CHILI POWDER (Lal Mirch):
   - Byadgi variety from Karnataka
   - Deep red color, mild heat
   - Kashmir variety for color without heat
   - Guntur variety for intense heat
   - Custom blends available

9. GARAM MASALA:
   - Signature blend of 12+ spices
   - Cardamom, cinnamon, cloves, nutmeg, mace
   - Black pepper, cumin, coriander, bay leaves
   - Star anise, fennel, stone flower
   - Aromatic, warming, complex
   - Added at the end of cooking

10. TANDOORI MASALA:
    - Specialized for tandoor cooking
    - Rich red color from Kashmiri chilies
    - Fenugreek for smoky notes
    - Ginger-garlic profile
    - Perfect for grilled meats

11. CHAAT MASALA:
    - Tangy, savory street food blend
    - Dried mango powder (amchur)
    - Black salt (kala namak) for sulfur notes
    - Cumin, black pepper, ginger
    - Sprinkled on finished dishes

12. BIRYANI MASALA:
    - Complex layered blend for rice dishes
    - Whole spices for fragrance
    - Saffron strands optional addition
    - Rose petals and kewra water notes
    - Region-specific variations (Hyderabadi, Lucknowi)

QUALITY GRADING:
All spices are graded according to:
- ASTA (American Spice Trade Association) cleanliness standards
- ISO 927 (for specific spice types)
- Agmark (Indian government grading)
- Size, color, and oil content specifications
- Microbiological safety (steam sterilization)
- Heavy metal testing for safety

PACKAGING FOR FRESHNESS:
Our innovative packaging ensures:
- UV-protected stand-up pouches
- One-way degassing valves
- Nitrogen flushing for oxygen removal
- Resealable zippers for convenience
- Moisture barrier foil lining
- Whole spices in valve-sealed bags
- Ground spices in tinted glass jars (premium line)

CERTIFICATIONS:
Our spices meet international standards:
- FSSAI certified manufacturing
- HACCP compliant processing
- ISO 22000:2018 food safety
- Organic certified options available
- Kosher certified
- Halal certified
- Non-GMO verified

STORAGE GUIDE:
To maximize shelf life and potency:
- Store in cool, dark place (below 70°F)
- Away from moisture and steam
- Whole spices: 2-3 years optimal
- Ground spices: 6-12 months optimal
- Refrigeration not recommended
- Smell test before use

Each jar in our Premium Spice Collection contains the essence of India's rich culinary heritage, carefully preserved and packaged to bring authentic flavors to your kitchen.`,
    bgColor: "#e0f0fa",
    featured: true
  },
  {
    id: 7,
    name: "Organic Spices",
    title: "Organic Spices",
    slug: "organic-spices",
    category: "Spices",
    categorySlug: "spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop"
    ],
    description: "Pure organic spices from trusted farms",
    longDescription: `Experience the true essence of nature with our Certified Organic Spices, cultivated without synthetic chemicals and processed with minimal intervention to preserve their inherent goodness and authentic flavors.

ORGANIC CERTIFICATION:
Our organic spices carry rigorous certifications including:
- USDA Organic (National Organic Program)
- EU Organic (European Union standards)
- India Organic (NPOP certified)
- Japan Agricultural Standard (JAS)
- Canada Organic (COR)
- All certifications verified annually
- Farm-to-fork traceability

ORGANIC FARMING PRACTICES:
Our partner farms follow strict protocols:
- No synthetic pesticides or herbicides
- Natural fertilizers (compost, vermicompost, green manure)
- Crop rotation for soil health
- Companion planting for pest management
- Biological pest control with beneficial insects
- Rainwater harvesting and drip irrigation
- Buffer zones to prevent contamination

ORGANIC VARIETALS:

1. ORGANIC TURMERIC (Lakadong variety):
   - From Meghalaya hills
   - 7-9% curcumin content (world's highest)
   - Hand-harvested, sun-dried
   - No chemical curing or coloring
   - Retains essential volatile oils

2. ORGANIC CUMIN:
   - From certified organic farms in Rajasthan
   - Traditional varieties preserved
   - Solar drying on bamboo mats
   - No irradiation (steam sterilization only)
   - Rich, complex aroma

3. ORGANIC CORIANDER:
   - Grown in rotation with legumes
   - Wild pollinators encouraged
   - Harvested at peak maturity
   - Cold-ground to preserve oils
   - Bright, citrusy notes

4. ORGANIC BLACK PEPPER:
   - From organic forests of Kerala
   - Grown under native shade trees
   - Hand-picked when fully ripe
   - Sun-dried on raised platforms
   - Complex, fruity profile

5. ORGANIC CARDAMOM:
   - From organic cooperative in Idukki
   - Forest-grown under canopy
   - Hand-pollinated (traditional method)
   - Kiln-dried with natural heat
   - Intense, sweet aroma

6. ORGANIC CINNAMON:
   - True cinnamon (Cinnamomum verum)
   - Grown without irrigation
   - Harvested during dry season
   - Hand-peeled thin layers
   - Delicate, sweet flavor

7. ORGANIC RED CHILI:
   - Heirloom varieties preserved
   - No synthetic ripening agents
   - Sun-dried to perfect moisture
   - Natural color retention
   - Custom heat levels available

8. ORGANIC FENUGREEK:
   - Grown as nitrogen-fixing cover crop
   - Seeds and leaves both harvested
   - No chemical defoliants
   - Naturally bitter-sweet profile
   - Medicinal grade quality

PROCESSING WITH CARE:
Organic processing maintains integrity:
- No irradiation (steam sterilization only)
- No ethylene oxide fumigation
- No artificial colors or coatings
- No anti-caking agents
- Stone grinding at low temperatures
- Stainless steel equipment only
- Frequent cleaning between batches

SUSTAINABILITY INITIATIVES:
Beyond organic, we support:
- Fair trade premiums to farmers
- Women-led farming collectives
- Biodiversity preservation on farms
- Native tree planting programs
- Farmer training in organic methods
- School lunch programs
- Carbon sequestration projects

PACKAGING COMMITMENT:
Eco-friendly packaging solutions:
- Home-compostable stand-up pouches
- Glass jars with bamboo lids
- No plastic windows or coatings
- Soy-based inks for printing
- Minimal outer packaging
- Refill subscription options
- Returnable container program

HEALTH BENEFITS:
Organic spices offer enhanced benefits:
- Higher antioxidant levels (studies show 20-40% more)
- No pesticide residues
- No heavy metal contamination
- Beneficial soil microorganisms
- Higher essential oil content
- Better mineral absorption
- Traditional medicine properties

CERTIFICATION VERIFICATION:
Each batch includes:
- Certificate of Analysis (COA)
- Organic certificate reference number
- Batch traceability code
- Third-party lab test results
- QR code for blockchain traceability
- Farmer cooperative identification
- Harvest date and location

Our organic spices represent a commitment to purity, sustainability, and traditional farming methods that honor both the earth and the farmers who tend it.`,
    bgColor: "#e8f0e8",
    featured: false
  },
  {
    id: 8,
    name: "Green Grapes",
    title: "Green Grapes",
    slug: "green-grapes",
    category: "Grapes",
    categorySlug: "grapes",
    image: greenGrapes,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOnf2qtnyvAsUE4dwzAnI5-EKeElSfCOX7w&s"
    ],
    description: "Fresh export-quality green grapes",
    longDescription: `Our Premium Green Grapes represent the pinnacle of viticulture, carefully cultivated in the ideal growing conditions of Nashik Valley, often called the "Wine Capital of India," and exported to discerning customers worldwide.

GROWING REGION:
Nashik's unique terroir provides perfect conditions:
- Elevation: 2,000-3,000 feet above sea level
- Volcanic red soil with excellent drainage
- Cool nights and warm days for sugar development
- Annual rainfall of 600-800mm (supplemented with drip irrigation)
- PH-balanced soil (6.5-7.0) for optimal nutrient uptake
- Protected valley location minimizing disease pressure

VARIETAL EXCELLENCE:
We specialize in Thompson Seedless and its sports:
- Thompson Seedless: The classic green grape
- Superior Seedless: Larger berries, crispier texture
- Manik Chaman: Early season variety with distinct flavor
- Sonaka: Elongated berries, excellent shelf life
- Tas-A-Ganesh: Premium export variety with perfect sugar-acid balance

CULTIVATION PRACTICES:
Our partner farms follow strict protocols:
- Open-canopy pruning for sunlight exposure
- Precision irrigation based on soil moisture sensors
- Integrated pest management with beneficial insects
- Organic farming practices in select orchards
- Hand-thinning for optimal berry size
- Netting protection against birds and hail
- Reflective mulching for even ripening

HARVEST TIMING:
The art of picking at perfect maturity:
- Brix level: 18-22° (optimal sweetness)
- Sugar-acid ratio: 30:1 minimum
- Berry firmness: 0.5-0.7 kg pressure test
- Color: Uniform translucent green (no ambering)
- Harvest window: February to April
- Hand-picked in early morning (before 10 AM)
- Field-packed within 2 hours

GRADING STANDARDS:
Every cluster is graded by:
- Berry size: 16mm+ for premium export
- Cluster weight: 500g-1000g optimal
- Uniformity: 90%+ similar size berries
- Color: Even green with no sunburn
- Condition: No splits, bruises, or decay
- Stem condition: Green, flexible, not woody
- Bloom: Natural waxy coating intact

POST-HARVEST HANDLING:
Cutting-edge cold chain management:
- Forced-air cooling to 0°C within 4 hours
- SO₂ generating pads in boxes for mold prevention
- 95% relative humidity maintained
- Modified atmosphere packaging options
- Ethylene scrubbers in storage
- Temperature recorders in every shipment
- Cold chain maintained through delivery

PACKAGING OPTIONS:
Export-ready packaging configurations:
- 8.2kg (18lb) master cartons (industry standard)
- 5kg (11lb) consumer-ready clamshells
- 2kg (4.4lb) gift boxes with cushioning
- 500g retail punnets with breathable film
- Custom branding and labeling available
- Recyclable cardboard with food-grade lining
- Palletized shipments for container loading

NUTRITIONAL PROFILE:
Per 100g serving:
- Calories: 69
- Carbohydrates: 18g (natural sugars)
- Fiber: 0.9g
- Vitamin C: 10% RDA
- Vitamin K: 14% RDA
- Potassium: 5% RDA
- Copper: 6% RDA
- Antioxidants: Resveratrol, quercetin, catechins

SHIPPING AND STORAGE:
- Optimal storage temperature: 0-1°C
- Relative humidity: 90-95%
- Storage life: 4-8 weeks under optimal conditions
- Sea freight: 20-30 days to international markets
- Air freight: 2-5 days for premium orders
- Shelf life after opening: 5-7 days refrigerated

QUALITY CERTIFICATIONS:
- GlobalG.A.P. certified farms
- SEDEX audited packhouses
- ISO 22000:2018 food safety
- USDA GACC approved for China
- EU import compliant
- MRL testing for pesticide residues
- BRC Grade A packhouse facilities

Our commitment to quality ensures that each grape delivers the perfect balance of sweetness and acidity, with the satisfying crunch that grape connoisseurs demand.`,
    bgColor: "#f5e6d3",
    featured: false
  },
  {
    id: 9,
    name: "Red Grapes",
    title: "Red Grapes",
    slug: "red-grapes",
    category: "Grapes",
    categorySlug: "grapes",
    image: redgrapes,
    images: [
      redgrapes
    ],
    description: "Sweet and juicy red grapes",
    longDescription: `Our Premium Red Grapes offer a delightful burst of sweet-tart flavor with an attractive crimson hue, grown in the optimal conditions of India's premier grape-growing regions and exported to sophisticated markets worldwide.

VARIETAL SELECTION:
We offer the finest red grape varieties:

1. FLAME SEEDLESS:
   - The most popular red seedless variety
   - Round, medium-sized berries with red to dark red color
   - Sweet flavor with subtle tartness
   - Excellent crunch and shelf life
   - Harvest: March-May

2. RED GLOBE:
   - Large berries (up to 28mm!) with seeds
   - Stunning bright red color
   - Sweet, mild flavor
   - Impressive presentation for fruit platters
   - Harvest: April-June

3. SCARLOTTA SEEDLESS:
   - New variety gaining popularity
   - Elongated berries with crisp texture
   - Deep red color at full maturity
   - Excellent sugar content (20-22° Brix)
   - Harvest: March-April

4. CRIMSON SEEDLESS:
   - Late-season variety extending availability
   - Oval berries with pinkish-red color
   - Sweet with Muscat notes
   - Excellent storage capacity
   - Harvest: May-July

5. SHARAD SEEDLESS:
   - Indian-bred variety adapted to local conditions
   - Medium-sized, round berries
   - Deep red to purple color
   - Balanced sugar-acid ratio
   - Harvest: March-May

TERROIR ADVANTAGE:
Our grapes benefit from:
- Deccan Plateau's ideal grape-growing climate
- Well-draining red and black soils
- 250-300 sunny days annually
- Diurnal temperature variation (15-20°C difference)
- PH-balanced soils (6.8-7.2)
- Protected from monsoon by harvesting window
- Ancient volcanic soil mineral content

VINEYARD MANAGEMENT:
Advanced viticulture practices:
- Trellis systems for optimal canopy management
- Regulated deficit irrigation for flavor concentration
- Leaf removal around clusters for color development
- Crop load management (15-20 clusters per vine)
- Organic matter addition for soil health
- Bird netting and reflective ground covers
- Weather monitoring stations in each block

COLOR DEVELOPMENT:
Red grapes require special attention for color:
- Sunlight exposure management
- Temperature control through canopy management
- Ethephon applications (where permitted) for uniform color
- Night harvesting for cooler fruit temperatures
- Color sorting at packing
- LED lighting in packhouse for color assessment
- Anthocyanin content testing (minimum 50mg/100g)

HARVEST SPECIFICATIONS:
Picked at peak perfection:
- Brix: 18-22° (varietal dependent)
- Color: 75%+ variety-typical red
- Berry firmness: 0.6-0.8kg pressure
- Sugar-acid ratio: 25-35:1
- No visible defects or sunburn
- Harvest window: February-July (varietal dependent)
- Field packed within 2 hours

GRADING SYSTEM:
Stringent quality grades:
- Extra Class: Premium export, flawless appearance
- Class I: High quality, minor defects allowed
- Class II: Good quality, local markets
- Berry size: 16mm-28mm+ (varietal dependent)
- Cluster presentation: 4-6 clusters per consumer pack
- Uniformity: 90%+ similar maturity

HEALTH BENEFITS:
Red grapes offer exceptional nutritional value:
- Resveratrol: Powerful antioxidant for heart health
- Anthocyanins: Anti-inflammatory compounds
- Quercetin: Natural antihistamine
- Vitamin C: Immune system support
- Vitamin K: Bone health
- Potassium: Blood pressure regulation
- Copper: Collagen production
- Melatonin: Sleep regulation

FOOD PAIRINGS:
Culinary versatility of red grapes:
- Cheese boards with aged cheddar or brie
- Red wine reductions for meats
- Roasted with poultry or pork
- Fresh in fruit salads and green salads
- Frozen as healthy dessert
- Grilled for smoky sweetness
- Pressed for fresh juice and smoothies

ANTIOXIDANT CONTENT:
Red grapes are powerhouses of antioxidants:
- ORAC value: 1,260 μmol TE/100g
- Total phenolics: 150-200mg GAE/100g
- Anthocyanins: 30-150mg/100g (varietal dependent)
- Proanthocyanidins: Oligomeric compounds in seeds
- Higher antioxidant activity than green varieties
- Skin contains highest concentration
- Synergistic effects of multiple compounds

STORAGE AND HANDLING:
Optimal conditions for red grapes:
- Temperature: -0.5 to 0°C
- Humidity: 90-95%
- Storage life: 3-8 weeks (varietal dependent)
- SO₂ pads for long-term storage
- Ventilated packaging for air circulation
- Stacking height limitations
- Regular quality monitoring

Our red grapes bring the perfect balance of sweetness and tang, with the visual appeal of deep ruby colors that make them as beautiful as they are delicious.`,
    bgColor: "#e0f0fa",
    featured: false
  },
  {
    id: 10,
    name: "Grapes",
    title: "Grapes",
    slug: "grapes",
    category: "Grapes",
    categorySlug: "grapes",
    image: mixgrapes,
    images: [
     mixgrapes
    ],
    description: "Sweet and juicy red grapes",
    longDescription: `Our Premium Grape Selection offers the finest table grapes from India's premier growing regions, combining traditional varietals with modern cultivation techniques to deliver exceptional quality to global markets.

COMPREHENSIVE GRAPE PROGRAM:
Our grape program encompasses multiple varieties to serve diverse market needs:

GREEN SEEDLESS VARIETIES:
1. THOMPSON SEEDLESS:
   - The global standard for green grapes
   - Elongated, medium-sized berries
   - Honey-sweet flavor with mild acidity
   - Excellent for fresh consumption and raisins
   - Availability: March-May

2. SONAKA SEEDLESS:
   - Indian-bred Thompson selection
   - Larger, more elongated berries
   - Superior crispiness and shelf life
   - Preferred for long-distance exports
   - Availability: March-May

3. MANIK CHAMAN:
   - Early season variety
   - Round, medium berries
   - Sweet with pleasant Muscat notes
   - First to market (February-March)
   - Premium pricing window

RED SEEDLESS VARIETIES:
4. FLAME SEEDLESS:
   - Classic red seedless grape
   - Round, crunchy berries
   - Sweet-tart balance
   - Deep red color when fully ripe
   - Availability: March-May

5. SCARLOTTA SEEDLESS:
   - Premium red seedless variety
   - Elongated, extra-crisp berries
   - Intense sweetness (20+ Brix)
   - Attractive presentation
   - Availability: March-April

BLACK/PURPLE VARIETIES:
6. BLACK SEEDLESS (Sharad/Black Sapphire):
   - Elongated, medium-sized berries
   - Deep purple to black color
   - Intensely sweet with berry notes
   - Natural waxy bloom for protection
   - Availability: March-May

SPECIALTY VARIETIES:
7. RED GLOBE (Seeded):
   - Extra-large berries (golf ball size)
   - Stunning presentation
   - Mild, sweet flavor
   - Perfect for fruit platters
   - Availability: April-June

8. CRIMSON SEEDLESS:
   - Late-season red variety
   - Oval berries with pink-red color
   - Excellent storage capability
   - Extends season to July
   - Availability: May-July

GROWING REGIONS:
Our grapes are sourced from premium growing areas:

NASHIK VALLEY (Maharashtra):
- India's primary grape region (70%+ production)
- Elevation: 2,000-3,000 feet
- Volcanic red soil
- Ideal climate with distinct seasons
- Advanced viticulture practices
- Largest export volume

SANGOLA (Maharashtra):
- Emerging premium region
- Higher elevation (3,000+ feet)
- Cooler nights for better color
- Excellent for red varieties
- Growing export significance

BIJAPUR (Karnataka):
- Traditional grape region
- Black soil with good water retention
- Known for Thompson Seedless
- Longer growing season
- Strong domestic market presence

CULTIVATION EXCELLENCE:
Our partner farms implement:
- Precision farming with soil sensors
- Drip irrigation with fertigation
- Integrated pest management
- Organic practices in select blocks
- Canopy management for optimal sun exposure
- Crop regulation for quality over quantity
- Weather station integration

HARVEST AND POST-HARVEST:
Meticulous attention from vine to port:
- Brix monitoring from veraison to harvest
- Pre-harvest field audits
- Early morning hand-harvesting (cool fruit)
- Field packing into export cartons
- Forced-air cooling to 0°C within 4 hours
- SO₂ generating pads for mold control
- Cold chain maintained throughout

GRADING SPECIFICATIONS:
Stringent quality parameters:
- Berry size: 16mm-22mm+ (varietal dependent)
- Brix: 16-22° (market dependent)
- Sugar-acid ratio: 25:1 minimum
- Color: Variety-typical with 75%+ coverage
- Defects: Less than 2% (splits, bruises, decay)
- Stem condition: Green, flexible
- Uniformity: 90%+ similar maturity

EXPORT PACKAGING:
Professional packaging for global markets:
- 8.2kg master cartons (standard export)
- 5kg consumer-ready clamshells
- 2kg premium gift boxes
- 500g retail punnets
- Custom branding and labeling
- Ventilated for air circulation
- Palletized for container loading

QUALITY CERTIFICATIONS:
Meeting international standards:
- GlobalG.A.P. certified farms
- HACCP certified packhouses
- BRC Grade A facilities
- SEDEX audited
- USDA GACC registration for China
- MRL compliance for all markets
- Traceability from vine to retail

Our comprehensive grape program ensures consistent quality, year after year, making us a trusted partner for importers and retailers worldwide.`,
    bgColor: "#e0f0fa",
    featured: true
  },
  {
    id: 11,
    name: "Prayer Beads (Tasbih)",
    title: "Prayer Beads (Tasbih)",
    slug: "prayer-beads-tasbih",
    category: "Hajj Specials",
    categorySlug: "hajj-items",
    image: tasbih,
    images: [
      "https://media.istockphoto.com/id/1360990467/photo/souvenir-stall-with-variety-of-colorful-souvenirs-wooden-beads-bracelets-and-amulets-street.jpg?s=612x612&w=is&k=20&c=fg4Q8JA1cUKXLTFej8BZKCRd7vViggYK1DaPYuM6YTU="
    ],
    description: "High-quality prayer beads for spiritual practice",
    longDescription: `Our Tasbih (Prayer Beads) collection represents the perfect fusion of spiritual significance and artisanal craftsmanship, designed to accompany the faithful in their daily dhikr (remembrance of Allah) and special devotional practices.

HISTORICAL SIGNIFICANCE:
The use of prayer beads in Islamic tradition dates back to the early days of Islam, serving as a tool to count the 99 names of Allah, tasbih (SubhanAllah), tahmid (Alhamdulillah), and takbir (Allahu Akbar). Our collection honors this rich heritage while incorporating modern craftsmanship.

BEAD COUNT AND STRUCTURE:
Traditional configurations include:
- 33-bead tasbih (one-third of 99, used with finger counting)
- 99-bead tasbih (complete for the 99 names)
- 100-bead tasbih (includes extra for accuracy)
- 1000-bead tasbih for extended dhikr sessions
- Each configuration includes an imam (leader bead) and marker beads
- Silk tassel for traditional handling

PREMIUM MATERIALS:

1. PRAYER BEADS (Tasbih/Misbaha):
   - Genuine amber (fossilized tree resin) - warm to touch
   - Natural rosewood and sandalwood - aromatic properties
   - Olive wood from blessed lands - traditional choice
   - Premium coconut shell - lightweight, durable
   - Freshwater pearls - for special occasions
   - Semi-precious stones (agate, onyx, tiger eye)
   - High-grade plastic for travel-friendly options

2. HAJJ/UMRAH ESSENTIALS:
   - Ihram belts with secure buckle systems
   - Money belts for document safety
   - Zamzam bottle carriers
   - Travel prayer rugs with compass
   - Quran protective cases
   - Suit bags for Ihram garments

3. ISLAMIC GIFTS:
   - Wall art with Quranic calligraphy
   - Decorative plates with 99 names
   - Wooden mosque models
   - Prayer timetables and compasses
   - Dates presentation boxes
   - Attar (perfume oil) sets

4. QURAN ACCESSORIES:
   - Quran stands (rehal/rihal) in wood and metal
   - Silk Quran covers and pouches
   - Bookmark tasbih combinations
   - Magnifying glass bookmarks
   - LED book lights for night reading
   - Quran translation sets

ARTISAN CRAFTSMANSHIP:
Our products are crafted by skilled artisans:
- Hand-carved wooden beads from sustainable sources
- Hand-knotted silk threads (never glued)
- Traditional Turkish knotting techniques
- Individual quality inspection
- Signature artisan markings
- Heritage designs preserved
- Modern interpretations available

SPIRITUAL SIGNIFICANCE:
Understanding the role of each component:
- Imam bead: Represents the starting point and unity
- Marker beads (shahid): Separate 33-bead sections
- Tassel: Traditional grip for counting
- Spacing between beads: Allows smooth movement
- Material choice: Enhances sensory connection
- Color significance: Personal and cultural preferences

USAGE GUIDE:
Proper handling enhances the spiritual experience:
- Hold between thumb and index finger
- Move one bead per recitation
- 33 repetitions per section (typical)
- Complete cycle: 33+33+33 = 99
- Can be used for any recitation count
- Pass between hands for longer sessions
- Store in provided pouch when not in use

CARE INSTRUCTIONS:
To preserve your tasbih:
- Natural materials: Keep away from water
- Oiled woods: Occasional natural oil application
- Amber: Avoid perfumes and chemicals
- Stone beads: Clean with soft, dry cloth
- Silk thread: Professional restringing available
- Store in provided velvet pouch
- Avoid direct sunlight for extended periods

GIFT PACKAGING:
Beautiful presentation options:
- Velvet display boxes
- Silk pouches with drawstrings
- Wooden gift boxes with Islamic patterns
- Certificate of authenticity
- Care instruction cards
- Personalized engraving available
- Bulk packaging for masjid gifts

SPECIAL COLLECTIONS:

1. HAJJ COMMEMORATIVE:
   - Limited edition designs
   - "Hajj Mabroor" inscribed beads
   - Zamzam bottle companion
   - Travel size for pilgrimage
   - Certificate of blessing

2. WEDDING COLLECTION:
   - Matching bride and groom sets
   - Pearl and crystal options
   - Gift box with Quran verses
   - Keepsake presentation
   - Blessings ceremony sets

3. CHILDREN'S TASBIH:
   - Smaller beads for little hands
   - Bright, engaging colors
   - Durable, break-resistant materials
   - Educational cards included
   - First dhikr encouragement sets

4. MOSQUE SUPPLIES:
   - Bulk tasbih for congregations
   - Durable, affordable options
   - Customized with mosque name
   - Distribution boxes included
   - Ramadan specials

Our prayer beads and Islamic gifts are designed to enhance spiritual practice while serving as beautiful reminders of faith, suitable for personal use or as meaningful gifts for loved ones.`,
    bgColor: "#e8f0e8",
    featured: true
  },
  {
    id: 12,
    name: "Ihram Belts",
    title: "Ihram Belts",
    slug: "ihram-belts",
    category: "Hajj Specials",
    categorySlug: "hajj-items",
    image: ihrambelts,
    images: [
      "https://images.unsplash.com/photo-1614192377611-1d5a0e1514fc?w=400&h=300&fit=crop"
    ],
    description: "Comfortable belts for Ihram during pilgrimage",
    longDescription: `Our Ihram Belts are essential accessories for pilgrims undertaking the sacred journey of Hajj and Umrah, designed to provide security, comfort, and convenience while maintaining the spiritual requirements of the state of Ihram.

THE SIGNIFICANCE OF IHRAM:
Ihram is both a physical state and spiritual intention for pilgrimage. Our belts are designed to support pilgrims in maintaining their Ihram while providing practical solutions for carrying essentials without violating the restrictions of this sacred state.

BELT DESIGNS AND FEATURES:

1. CLASSIC IHRAM BELT:
   - Elastic waistband for comfortable fit
   - Adjustable buckle system (plastic/metal options)
   - Width: 2 inches for even pressure distribution
   - Available sizes: S-XXL
   - Color options: White (traditional), Beige (practical)
   - Machine washable for hygiene

2. MONEY BELT (SECURITY BELT):
   - Hidden zippered compartment
   - RFID-blocking lining for passport protection
   - Water-resistant outer layer
   - Flat profile, undetectable under Ihram
   - Capacity: Passport, cash, cards, hotel key
   - 3-4 pockets for organized storage

3. COMBINATION BELT:
   - Classic belt with integrated money pocket
   - Dual-function design
   - Removable security pouch option
   - Best of both worlds
   - Popular with experienced pilgrims

4. DOCUMENT HOLDER BELT:
   - Clear ID window on outer side
   - Quick-access passport pocket
   - Lanyard attachment point
   - Ideal for group travel
   - Easy identification for guides

5. DELUXE IHRAM SET:
   - Matching belt and money belt
   - Coordinated travel pouch
   - Spare elastic band included
   - Travel-size sewing kit
   - Safety pin assortment

MATERIAL QUALITY:
All belts are crafted from premium materials:
- Soft, non-irritating cotton/elastic blends
- Breathable mesh backing for hot climates
- Latex-free elastic (hypoallergenic options)
- Reinforced stitching at stress points
- Rust-proof plastic or coated metal buckles
- Colorfast dyes (will not bleed on Ihram)
- Quick-dry fabric after wudu (ablution)

PRACTICAL FEATURES:
Thoughtful design elements include:
- Wide belt design prevents rolling or twisting
- Buckle placement that won't press into skin during prostration
- Flat pocket profiles invisible under clothing
- Moisture-wicking fabric for all-day comfort
- Easy-clean materials for hygiene
- Tear-away safety feature in emergencies
- Reflective elements for night visibility

SECURITY CONSIDERATIONS:
Protecting valuables during pilgrimage:
- RFID-blocking technology prevents electronic theft
- Multiple compartment layers
- Hook-and-loop closure for silent access
- Body-hugging fit prevents slipping
- Hidden opening prevents casual theft
- Water-resistant protects documents from sweat
- Easy access without removing Ihram

SIZE AND FIT:
Comprehensive sizing for all pilgrims:
- Waist sizes: 24" to 52" available
- Adjustable up to 4" beyond measured size
- Children's sizes for young pilgrims
- Plus sizes with extra length
- Custom sizing available for groups
- Fitting guide with every order
- Easy-return policy for incorrect fit

CARE INSTRUCTIONS:
Maintaining hygiene during pilgrimage:
- Hand wash in cold water
- Mild soap only (avoid harsh detergents)
- Air dry away from direct sunlight
- Do not iron elastic sections
- Replace annually for optimal elasticity
- Store in clean, dry pouch
- Disinfect after each use

IHRAM ETIQUETTE:
Using belts within Ihram restrictions:
- Belts are permitted in Ihram
- No knots tied with intention of permanence
- Money belts acceptable for necessity
- Should not resemble normal stitched clothing
- Remove before using restroom (if separate)
- Keep clean and free of impurities
- Intention for permissible use only

TRAVEL TIPS:
Maximizing belt utility during pilgrimage:
- Practice accessing money belt before travel
- Keep photocopies separate from originals
- Distribute valuables across multiple locations
- Note emergency contact numbers separately
- Use clear window for group identification
- Keep hotel information accessible
- Emergency cash in easily accessible pocket

BULK GROUP ORDERS:
Special arrangements for travel groups:
- Group pricing for 20+ units
- Customized with group name or symbol
- Coordinated color coding for subgroups
- Combined shipping to single address
- Emergency replacement stock included
- Guide training materials provided
- Lost item replacement program

Our Ihram belts combine the spiritual requirements of pilgrimage with modern practical needs, allowing pilgrims to focus on their worship while their valuables remain secure and accessible.`,
    bgColor: "#f5e6d3",
    featured: true
  },
  {
  id: 13,
  name: "Fresh Red Onions",
  title: "Fresh Red Onions",
  slug: "fresh-red-onions",
  category: "Onions",
  categorySlug: "onionitems",
  image: onion,
  images: [
   onion
  ],
  description: "Farm-fresh, pungent red onions essential for every kitchen base.",
  longDescription: `Our Premium Fresh Red Onions represent the finest quality from India's premier onion-growing regions, carefully selected for export to meet the demanding standards of international markets.

GROWING REGIONS:
India's diverse climate produces onions year-round:
- Maharashtra (Nashik): The "Onion Capital" - Rabi season (April-June)
- Karnataka: Kharif season (October-December)
- Madhya Pradesh: Late Kharif (January-March)
- Gujarat: Early season (November-January)
- Andhra Pradesh: Year-round production

VARIETAL CHARACTERISTICS:
Our red onions feature:
- Deep purple-red outer skin
- White to light pink inner flesh
- Pungent, spicy flavor profile
- High pyruvic acid content (tear-inducing compound)
- Firm, compact layers
- 50-80mm diameter range
- 8-12% total soluble solids

QUALITY GRADES:
Stringent sorting standards:

EXPORT GRADE (Premium):
- Size: 55-75mm diameter
- No splits, doubles, or malformations
- No sprouting or root growth
- Tight neck (less than 10mm opening)
- Uniform color and shape
- No mechanical damage
- 0% decay or disease

COMMERCIAL GRADE (Good quality):
- Size: 40-80mm diameter
- Minor defects allowed (5% max)
- Some mechanical damage acceptable
- Suitable for processing
- Good storage life

PROCESSING GRADE:
- Size: 25-60mm
- Defects up to 10% allowed
- For dehydration or processing
- Lower price point
- Immediate use recommended

HARVEST AND CURING:
Optimal handling for long storage:
- Harvested at 80-90% maturity (tops falling)
- Field-cured for 3-5 days
- Artificial curing in forced-air systems
- Neck drying to prevent disease
- Size grading immediately after curing
- Removal of damaged bulbs
- Temperature management throughout

STORAGE TECHNOLOGY:
Extending shelf life through:
- Cold storage at 0-2°C for exports
- Relative humidity: 65-70%
- Ventilated packaging for air circulation
- Ethylene removal systems
- Sprout inhibitors (maleic hydrazide) applied pre-harvest
- Regular culling during storage
- 3-6 month storage potential

NUTRITIONAL PROFILE:
Per 100g serving:
- Calories: 40
- Carbohydrates: 9g
- Fiber: 1.7g
- Vitamin C: 12% RDA
- Vitamin B6: 5% RDA
- Folate: 5% RDA
- Potassium: 4% RDA
- Manganese: 6% RDA
- Quercetin: High antioxidant content

HEALTH BENEFITS:
Regular onion consumption supports:
- Heart health (blood pressure, cholesterol)
- Anti-inflammatory properties
- Blood sugar regulation
- Digestive health (prebiotic fiber)
- Immune system support
- Bone density maintenance
- Antibacterial effects

EXPORT PACKAGING:
Professional presentation:
- Mesh bags: 5kg, 10kg, 25kg
- Jute bags: Traditional, breathable
- Cartons: 10kg, 20kg with ventilation
- Consumer packs: 500g, 1kg net bags
- Palletized container loading
- Custom labeling available
- Food-grade packaging materials

CERTIFICATIONS:
Meeting global standards:
- Phytosanitary certification
- Fumigation certificate (if required)
- MRL compliance for pesticides
- GLOBALG.A.P. certified farms
- Organic certification (select lots)
- HACCP compliant packhouses
- Traceability from farm to port

Our fresh red onions deliver the pungent flavor essential for countless cuisines, with the quality and consistency demanded by international buyers.`,
  bgColor: "#fce4ec",
  featured: false
  },
  {
  id: 14,
  name: "Toasted Onion Powder",
  title: "Toasted Onion Powder",
  slug: "toasted-onion-powder",
  category: "Onions",
  categorySlug: "onionitems",
  image: onionpowder,
  images: [
    onionpowder
  ],
  description: "Finely ground dehydrated onions for instant flavor without the prep.",
  longDescription: `Our Toasted Onion Powder transforms fresh onions into a concentrated, shelf-stable flavor powerhouse, perfect for food manufacturers, restaurants, and home cooks seeking authentic onion taste without the preparation work.

PRODUCTION PROCESS:
From fresh onion to premium powder:
1. SELECTION: Premium export-grade onions only
2. WASHING: Multi-stage cleaning system
3. PEELING: Mechanical and steam peeling
4. SLICING: Uniform thickness for even drying
5. TOASTING: Controlled thermal process for flavor development
6. DEHYDRATION: Continuous belt dryers at 60-70°C
7. GRINDING: Multi-stage milling to desired particle size
8. SIFTING: Mesh screening for consistency
9. METAL DETECTION: Final safety check
10. PACKAGING: Nitrogen-flushed, light-protected

TOASTING PROCESS:
Our signature toasting creates:
- Maillard reaction for savory depth
- Caramelization of natural sugars
- Reduction of raw onion harshness
- Development of sweet, roasted notes
- Color darkening (light tan to golden brown)
- Aroma intensification
- Flavor complexity enhancement

PARTICLE SIZE OPTIONS:
Available in multiple grinds:
- Coarse: 2-4mm (for rubs and blends)
- Medium: 0.5-2mm (general purpose)
- Fine: 0.2-0.5mm (quick dissolving)
- Powder: <0.2mm (smooth applications)
- Custom specifications available
- Uniform particle distribution
- Low dust generation

FLAVOR PROFILE:
Complex taste characteristics:
- Initial: Sweet, caramelized onion notes
- Middle: Savory, umami depth
- Finish: Mild warmth without harshness
- Aroma: Roasted onion with subtle sweetness
- Intensity: 4-5x stronger than raw onion (by weight)
- Stability: Heat-stable for cooking
- Compatibility: Blends well with all cuisines

TECHNICAL SPECIFICATIONS:
Quality parameters:
- Moisture content: <5% (prevents caking)
- Water activity: <0.6 (microbial stability)
- Bulk density: 0.4-0.6 g/ml
- pH: 4.5-6.0 (typical)
- Color: Light tan to golden (Hunter L value 60-70)
- Flavor intensity: Standardized by lot
- Microbiological: Total plate count <10,000 CFU/g
- Yeast/mold: <100 CFU/g
- E. coli, Salmonella: Negative

APPLICATIONS:
Versatile usage across industries:

FOOD SERVICE:
- Dry rubs for meats
- Seasoning blends
- Soup bases and stocks
- Gravy mixes
- Marinade formulations
- Bread crumb seasonings
- Vegetable sautés (rehydrated)

FOOD MANUFACTURING:
- Snack seasonings (chips, crackers)
- Ready meals and sauces
- Processed meat seasonings
- Canned soup formulations
- Dry mix convenience foods
- Pet food flavoring
- Plant-based meat alternatives

RETAIL/CONSUMER:
- Spice rack essential
- Quick meal preparation
- Dip and dressing mixes
- Homemade seasoning blends
- Emergency pantry item
- Camping and outdoor cooking
- Gift basket inclusion

INDUSTRIAL:
- Flavor encapsulation base
- Reaction flavor precursor
- Natural flavor ingredient
- Clean label alternative
- Organic certified options
- Non-GMO verified
- Kosher and Halal certified

PACKAGING OPTIONS:
Professional packaging solutions:
- Food-grade poly bags: 1kg, 5kg, 10kg, 25kg
- Carton with inner liner: 10kg, 20kg
- Bulk bags: 500kg, 1000kg super sacks
- Retail jars: 50g, 100g, 250g
- Nitrogen flushing for oxygen removal
- Vacuum packaging for extended shelf life
- Custom labeling for private label

SHELF LIFE AND STORAGE:
Maintaining quality:
- Shelf life: 24 months from production
- Storage: Cool, dry place (<25°C, <60% RH)
- Light protection: Opaque packaging
- Oxygen barrier: Foil laminates recommended
- Opened containers: Use within 6 months
- Freezing: Not required, but acceptable
- Clumping prevention: Desiccant packets included

ADVANTAGES OVER FRESH ONIONS:
Why choose onion powder:
- No peeling, chopping, or tears
- Consistent flavor batch to batch
- Year-round availability
- Reduced storage space
- No waste or spoilage
- Instant solubility in recipes
- Concentrated flavor (use less)

QUALITY CERTIFICATIONS:
Meeting global food standards:
- FSSC 22000 certified facility
- Halal certified
- Kosher certified (OU)
- Organic certified (USDA, EU)
- Non-GMO Project Verified
- Gluten-free certified
- Allergen-free processing line available

Our toasted onion powder captures the essence of perfectly caramelized onions in a convenient, shelf-stable form, ready to enhance any culinary creation with minimal effort.`,
  bgColor: "#fff9c4",
  featured: true
  }
];

// Featured products from your FeaturedProducts component
export const featuredProducts = [
  {
    id: 1,
    category: "CLOTHING & TEXTILES",
    title: "Premium School Uniforms",
    description: "High-quality, durable school uniforms in various sizes",
    imageUrl: "https://image.made-in-china.com/203f0j00KAlouVCwLacp/blog.jpg",
    bgColor: "#f5e6d3"
  },
  {
    id: 2,
    category: "CLOTHING & TEXTILES", 
    title: "Medical Hospital Aprons",
    description: "Sterile, comfortable aprons for medical professionals",
    imageUrl: "https://thumbs.dreamstime.com/b/closeup-green-surgical-smock-stethoscope-white-hanger-against-neutral-grey-background-medical-uniform-nurse-doctor-384820455.jpg",
    bgColor: "#e0f0fa"
  },
  {
    id: 3,
    category: "CLOTHING & TEXTILES",
    title: "Luxury Cotton Towels",
    description: "Soft, absorbent premium towels for hotels and homes",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5GB3-grc9de-jeCVFpDOCkvoLStXg7A2lg&s",
    bgColor: "#e8f0e8"
  },
  {
    id: 4,
    category: "CLOTHING & TEXTILES",
    title: "Hajj Ihram Set",
    description: "Authentic white ihram clothing for pilgrimage",
    imageUrl: "https://www.hadiyahgifting.com/cdn/shop/files/Hajj-e-Mabroor_Luxe_Couple_Set-Photoroom.webp?v=1746469481",
    bgColor: "#f5e6d3"
  },
  {
    id: 5,
    category: "CLOTHING & TEXTILES", 
    title: "Premium Hijab Collection",
    description: "Elegant hijabs in various styles and fabrics",
    imageUrl: "https://img.nihaojewelry.com/fit-in/800x800/filters:format(webp)/product/2025/7/29/1950012980083167232/121-Colors-Pure-Color-Pearl-Chiffon-Long-Scarf-Premium-Straight-Edge-Ruffle-Chiffon-Shawl-Single-Color-Indonesian-Headscarf.jpg",
    bgColor: "#e0f0fa"
  },
  {
    id: 6,
    category: "Soaps",
    title: "Natural Handmade Soap Bars",
    description: "Organic handcrafted soap with natural ingredients",
    imageUrl: "https://media.istockphoto.com/id/517495506/photo/bars-of-homemade-soaps-honey-or-oil-and-healing-herbs.jpg?s=612x612&w=0&k=20&c=bQPtsclGfpY5yIjyRDSSSRn4wAy94O1DFsQr2aoz0K4=",
    bgColor: "#e8f0e8"
  }
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (categoryName) => {
  if (categoryName === "All Products") return products;
  return products.filter(product => product.category === categoryName);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured === true);
};

export const getRelatedProducts = (productId, limit = 3) => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(p => p.category === currentProduct.category && p.id !== productId)
    .slice(0, limit);
};

export const getCategoryCount = (categoryName) => {
  if (categoryName === "All Products") return products.length;
  return products.filter(p => p.category === categoryName).length;
};

// Get categories with updated counts
export const getCategoriesWithCounts = () => {
  return categories.map(cat => ({
    ...cat,
    count: cat.name === "All Products" 
      ? products.length 
      : products.filter(p => p.category === cat.name).length
  }));
};