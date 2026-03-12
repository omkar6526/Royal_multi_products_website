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
  { id: 1, name: "All Products", slug: "all-products", count: 11 },
  { id: 2, name: "Clothing & Textiles", slug: "clothing-textiles", count: 3 },
  { id: 3, name: "Soaps", slug: "soaps", count: 2 },
  { id: 4, name: "Spices", slug: "spices", count: 2 },
  { id: 5, name: "Grapes", slug: "grapes", count: 2 },
  { id: 6, name: "Hajj Specials", slug:"hajj-items", count: 2 },
  { id: 7, name: "Onions", slug: "onionitems", count: 1 },
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
    image:tasbih,
    images: [
      "https://media.istockphoto.com/id/1360990467/photo/souvenir-stall-with-variety-of-colorful-souvenirs-wooden-beads-bracelets-and-amulets-street.jpg?s=612x612&w=is&k=20&c=fg4Q8JA1cUKXLTFej8BZKCRd7vViggYK1DaPYuM6YTU="
    ],
    description: "High-quality prayer beads for spiritual practice",
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