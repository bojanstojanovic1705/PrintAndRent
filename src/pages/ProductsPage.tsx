import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import BackToHome from '../components/BackToHome';
import ProductModal from '../components/ProductModal';

// Mock podaci za proizvode
const products = [
  {
    id: 1,
    name: 'HP DesignJet T650',
    category: 'Ploter',
    description: 'Profesionalni ploter za štampu velikih formata',
    price: 150,
    rentPeriod: 'dan',
    image: '/images/products/plotter1.jpg', // Dodaćemo slike kasnije
    features: [
      'Format štampe do A0+',
      'Rezolucija 2400 x 1200 dpi',
      'Brzina štampe 25 sec/A1',
      'Wifi povezivanje'
    ],
    availability: true
  },
  {
    id: 2,
    name: 'Canon imagePROGRAF PRO-1000',
    category: 'Štampač',
    description: 'Profesionalni fotografski štampač',
    price: 80,
    rentPeriod: 'dan',
    image: '/images/products/printer1.jpg',
    features: [
      'A2 format štampe',
      'Rezolucija 2400 x 1200 dpi',
      '12 boja mastila',
      'Wifi i LAN povezivanje'
    ],
    availability: true
  },
  {
    id: 3,
    name: 'Epson SureColor SC-P8000',
    category: 'Štampač',
    description: 'Štampač za velike formate u boji',
    price: 200,
    rentPeriod: 'dan',
    image: '/images/products/printer2.jpg',
    features: [
      'Format štampe do 44 inča',
      'Rezolucija 2880 x 1440 dpi',
      '8 boja mastila',
      'Profesionalna kalibracija boja'
    ],
    availability: false
  },
  {
    id: 4,
    name: 'Xerox Versant 280',
    category: 'Digitalna štamparija',
    description: 'Profesionalna digitalna štamparska mašina',
    price: 500,
    rentPeriod: 'dan',
    image: '/images/products/press1.jpg',
    features: [
      'Brzina 80 str/min',
      'Format do SRA3',
      'Automatsko dupleks štampanje',
      'Inline finishing opcije'
    ],
    availability: true
  },
  {
    id: 5,
    name: 'Epson Expression 12000XL',
    category: 'Skener',
    description: 'Profesionalni grafički skener',
    price: 100,
    rentPeriod: 'dan',
    image: '/images/products/scanner1.jpg',
    features: [
      'A3 format skeniranja',
      'Optička rezolucija 2400 x 4800 dpi',
      '48-bit boja',
      'Profesionalna kalibracija'
    ],
    availability: true
  },
  {
    id: 6,
    name: 'Roland CAMM-1 GR2-640',
    category: 'Ploter',
    description: 'Profesionalni ploter za sečenje',
    price: 180,
    rentPeriod: 'dan',
    image: '/images/products/cutter1.jpg',
    features: [
      'Širina sečenja do 1625mm',
      'Brzina do 1485mm/s',
      'Pritisak sečenja do 600gf',
      'Optical registration system'
    ],
    availability: true
  }
];

const categories = Array.from(new Set(products.map(product => product.category)));

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtriranje proizvoda
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BackToHome />
      
      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-secondary to-secondary-dark py-20 mb-8">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-white to-transparent blur-3xl"></div>
          <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-white to-transparent blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Naša Oprema
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Iznajmite profesionalnu opremu za štampu i skeniranje po najpovoljnijim cenama.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Pretraga proizvoda
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4  border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Pretražite proizvode..."
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Kategorija
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Sve kategorije</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600 md-10">
            Pronađeno {filteredProducts.length} proizvoda
          </div>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {product.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      {product.price}€
                    </p>
                    <p className="text-sm text-gray-500">
                      po {product.rentPeriod}u
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                  {product.features.length > 2 && (
                    <div className="text-sm text-primary">
                      +{product.features.length - 2} više karakteristika
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    product.availability
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.availability ? 'Dostupno' : 'Trenutno nedostupno'}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                      product.availability
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.availability}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.availability) {
                        handleProductClick(product);
                      }
                    }}
                  >
                    Detaljnije
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-xl">
              Nema pronađenih proizvoda za vašu pretragu
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('');
              }}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Resetuj filtere
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
