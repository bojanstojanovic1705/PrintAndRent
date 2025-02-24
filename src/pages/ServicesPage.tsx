import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import BackToHome from '../components/BackToHome';

const services = [
  {
    id: 1,
    title: 'Digitalna Štampa',
    description: 'Vrhunska digitalna štampa za sve vaše potrebe - od vizit karti do velikih formata.',
    longDescription: `Naša usluga digitalne štampe kombinuje najnoviju tehnologiju sa stručnim znanjem kako bismo vam pružili izuzetne rezultate. Nudimo:

    • Štampu velikog formata za postere i banere
    • Visokokvalitetnu štampu marketinških materijala
    • Štampu na različitim materijalima i podlogama
    • Brzu izradu i isporuku
    • Mogućnost malih i velikih tiraža
    • Personalizovanu štampu
    • Probne otiske pre finalne štampe
    
    Koristimo najsavremenije digitalne štampače koji garantuju oštre detalje, živopisne boje i konzistentan kvalitet od prvog do poslednjeg primerka.`,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    features: ['Brza izrada', 'Visok kvalitet', 'Različiti formati', 'Pristupačne cene']
  },
  {
    id: 2,
    title: 'Rentiranje Opreme',
    description: 'Iznajmljivanje profesionalne opreme za štampu i skeniranje uz stručnu podršku.',
    longDescription: `Naša usluga rentiranja opreme pruža vam pristup profesionalnoj opremi bez velikih početnih ulaganja. Nudimo:

    • Širok izbor profesionalnih štampača
    • Skenere velikog formata
    • Opremu za završnu obradu
    • Fleksibilne periode iznajmljivanja
    • Kompletnu tehničku podršku
    • Održavanje i servisiranje
    • Obuku za korišćenje opreme
    
    Sva oprema se redovno održava i servisira kako bi osigurali najbolje performanse i pouzdanost tokom korišćenja.`,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Fleksibilni periodi', 'Tehnička podrška', 'Dostava opreme', 'Održavanje uključeno']
  },
  {
    id: 3,
    title: 'Grafički Dizajn',
    description: 'Kreativna rešenja za vaš vizuelni identitet i marketinške materijale.',
    longDescription: `Naš tim iskusnih grafičkih dizajnera stvara jedinstvena vizuelna rešenja koja će vas izdvojiti na tržištu. Nudimo:

    • Kreiranje kompletnog vizuelnog identiteta
    • Dizajn logotipa i brendinga
    • Dizajn marketinških materijala
    • Dizajn ambalaže
    • Web dizajn
    • Dizajn za društvene mreže
    • Ilustracije i infografike
    
    Svaki projekat započinjemo detaljnim razgovorom kako bismo razumeli vaše potrebe i ciljeve, a zatim kreiramo dizajn koji će najbolje predstaviti vašu poruku.`,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Logo dizajn', 'Brending', 'Marketing materijali', 'Web dizajn']
  },
  {
    id: 4,
    title: 'Konsultacije',
    description: 'Stručni saveti i planiranje vaših projekata štampe i dizajna.',
    longDescription: `Naše konsultantske usluge pomažu vam da donesete prave odluke za vaše projekte štampe i dizajna. Nudimo:

    • Analizu potreba i ciljeva projekta
    • Savetovanje o najboljim tehnikama štampe
    • Optimizaciju troškova
    • Planiranje rokova i resursa
    • Procenu kvaliteta materijala
    • Savete za održivost i ekološka rešenja
    • Praćenje projekta od ideje do realizacije
    
    Naši konsultanti imaju višegodišnje iskustvo u industriji i mogu vam pomoći da izbegnete česte greške i optimizujete svoje projekte.`,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Individualni pristup', 'Procena troškova', 'Optimizacija procesa', 'Praćenje projekta']
  }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <BackToHome />
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-secondary to-secondary-dark py-20">
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
              Naše Usluge
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Pružamo kompletan spektar usluga štampe i rentiranja opreme, uz profesionalnu podršku i konsultacije.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="rounded-2xl p-3 bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  Saznaj više
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Spremni ste da započnete projekat?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas danas za besplatne konsultacije i procenu vašeg projekta.
              Naš tim stručnjaka je tu da vam pomogne.
            </p>
            <button 
              onClick={handleContactClick}
              className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors duration-300 transform hover:scale-105"
            >
              Kontaktirajte nas
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                onClick={() => setSelectedService(null)}
              />

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              >
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span className="sr-only">Zatvori</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 sm:mx-0 sm:h-10 sm:w-10">
                      {selectedService.icon}
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-2xl leading-6 font-semibold text-gray-900" id="modal-title">
                        {selectedService.title}
                      </h3>
                      <div className="mt-4">
                        <p className="text-gray-600 whitespace-pre-line">
                          {selectedService.longDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Zatvori
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
