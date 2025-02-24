import React from 'react';
import { motion } from 'framer-motion';
import BackToHome from '../components/BackToHome';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: '10+', label: 'Godina iskustva' },
    { number: '500+', label: 'Zadovoljnih klijenata' },
    { number: '1000+', label: 'Uspešnih projekata' },
    { number: '24/7', label: 'Tehnička podrška' }
  ];

  const values = [
    {
      title: 'Kvalitet',
      description: 'Koristimo samo najkvalitetniju opremu renomiranih proizvođača.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Pouzdanost',
      description: 'Garantujemo pouzdanost i tačnost u svakom poslu koji radimo.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Inovativnost',
      description: 'Pratimo najnovije trendove i tehnologije u našoj industriji.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Posvećenost',
      description: 'Posvećeni smo uspehu svakog projekta i zadovoljstvu klijenata.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BackToHome />
      
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
              O Nama
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Vaš pouzdan partner za štampu i rentiranje opreme već više od decenije
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Our Story */}
        <motion.section 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Naša Priča</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">
                Print&Rent je osnovana sa jasnom vizijom: da pružimo profesionalnu opremu za štampu i skeniranje po pristupačnim cenama. 
                Naš tim čine stručnjaci sa dugogodišnjim iskustvom u grafičkoj industriji.
              </p>
              <p className="text-gray-600">
                Kroz godine rada, izgradili smo reputaciju pouzdanog partnera koji uvek isporučuje vrhunski kvalitet i profesionalnu uslugu. 
                Naša oprema je redovno održavana i servisirana, što garantuje besprekoran rad i vrhunske rezultate.
              </p>
            </div>
            <div className="relative h-64 md:h-96 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section 
          {...fadeInUp} 
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Naše Vrednosti</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section 
          {...fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Naš Tim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                Naš tim čine stručnjaci iz različitih oblasti - od grafičkih dizajnera do tehničkih eksperata. 
                Svako od nas donosi jedinstveno iskustvo i znanje, što nam omogućava da pružimo sveobuhvatnu uslugu našim klijentima.
              </p>
              <p className="text-gray-600">
                Kontinuirano ulažemo u edukaciju i usavršavanje našeg tima, prateći najnovije trendove i tehnologije u industriji. 
                Ovo nam omogućava da uvek budemo korak ispred i pružimo najbolje moguće rešenje za vaše potrebe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          {...fadeInUp}
          className="mb-16 text-center"
        >
          <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Spremni ste da započnemo saradnju?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Kontaktirajte nas danas i saznajte kako možemo pomoći u realizaciji vašeg sledećeg projekta.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-secondary font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              onClick={() => window.location.href = '/contact'}
            >
              Kontaktirajte nas
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
