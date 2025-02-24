import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReservationForm from './ReservationForm';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    rentPeriod: string;
    image: string;
    features: string[];
    availability: boolean;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: '-50%',
    x: '-50%'
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: '-50%',
    x: '-50%',
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    y: '-50%',
    x: '-50%',
    transition: {
      duration: 0.2
    }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);

  if (!product) return null;

  return (
    <>
      <ReservationForm
        isOpen={isReservationFormOpen}
        onClose={() => setIsReservationFormOpen(false)}
        productName={product.name}
        productPrice={product.price}
        rentPeriod={product.rentPeriod}
      />

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-1/2 top-1/2 bg-white rounded-2xl shadow-2xl p-6 md:p-8 z-40
                       w-[calc(100%-2rem)] md:w-[800px] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative h-64 md:h-full bg-gray-100 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {product.category}
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {product.price}€
                      <span className="text-base font-normal text-gray-500 ml-1">
                        po {product.rentPeriod}u
                      </span>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      product.availability
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.availability ? 'Dostupno' : 'Trenutno nedostupno'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Opis</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Karakteristike</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-center text-gray-600"
                        >
                          <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl text-white font-semibold transition-colors duration-300 ${
                      product.availability
                        ? 'bg-primary hover:bg-primary-dark'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                    disabled={!product.availability}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsReservationFormOpen(true);
                    }}
                  >
                    {product.availability ? 'Rezervišite odmah' : 'Trenutno nedostupno'}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductModal;
