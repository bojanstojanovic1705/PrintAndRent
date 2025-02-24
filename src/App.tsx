import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import ReservationForm from './components/ReservationForm';

function HomePage() {
  const [isReservationFormOpen, setIsReservationFormOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <main style={{ minHeight: '100vh' }}>
      <ReservationForm
        isOpen={isReservationFormOpen}
        onClose={() => setIsReservationFormOpen(false)}
        productName="Oprema po izboru"
        productPrice={0}
        rentPeriod="dan"
      />
      
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '100vh' }}>
        {/* Background with gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #2D5A27, #3B7A33)',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}></div>
        </div>

        {/* Navigation */}
        <nav style={{ position: 'relative', zIndex: 10 }}>
          <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: 'white' }}>
                Print & Rent
              </div>
              <div style={{ display: 'none', gap: '2rem' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Početna</Link>
                <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Usluge</Link>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>O nama</Link>
                <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Kontakt</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: 'calc(100vh - 5rem)',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div className="container">
            <div style={{ maxWidth: '42rem' }}>
              <h1 style={{
                fontSize: '3.75rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1.5rem',
              }}>
                Rentirajte najbolje štampače i fotokopir aparate
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '2rem',
              }}>
                Profesionalna oprema po pristupačnim cenama. Brza isporuka i instalacija na teritoriji cele Srbije.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => setIsReservationFormOpen(true)}
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors duration-300"
                >
                  Zakažite odmah
                </button>
                <button
                  onClick={() => navigate('/products')}
                  className="px-8 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  Pogledajte ponudu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary mb-12">
            Zašto izabrati nas?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Brza isporuka',
                description: 'Dostavljamo i instaliramo opremu na teritoriji cele Srbije u najkraćem mogućem roku.',
                icon: (
                  <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-1-1H3zM12 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Povoljne cene',
                description: 'Nudimo konkurentne cene rentiranja uz mogućnost prilagođavanja vašim potrebama.',
                icon: (
                  <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4zm1 1a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                ),
              },
              {
                title: 'Profesionalna podrška',
                description: '24/7 tehnička podrška i održavanje za bezbrižno korišćenje opreme.',
                icon: (
                  <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Kvalitetna oprema',
                description: 'Rentiramo samo proverene i pouzdane brendove štampača i fotokopir aparata.',
                icon: (
                  <svg className="w-6 h-6 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4zm1 1a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                ),
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md group hover:bg-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-white text-center">
                  {advantage.title}
                </h3>
                <p className="text-secondary-light group-hover:text-white/90 text-center">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0,0,0,0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(0,0,0,0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px' 
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Zašto Rentirati?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Prednosti Rentiranja
            </h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Otkrijte zašto je rentiranje štampača i kopir uređaja pametan izbor za vaše poslovanje
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bez Velikih Početnih Ulaganja",
                description: "Izbegnite visoke troškove kupovine opreme i započnite sa minimalnim inicijalnim ulaganjem",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )
              },
              {
                title: "Redovno Održavanje",
                description: "Besplatno održavanje i servisiranje uređaja uz brzu zamenu u slučaju kvara",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Fleksibilni Ugovori",
                description: "Prilagodite period rentiranja i uslove prema vašim potrebama, bez dugoročnih obaveza",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                )
              },
              {
                title: "Tehnička Podrška 24/7",
                description: "Stručna podrška dostupna u bilo koje vreme za sve vrste problema i pitanja",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "Praćenje Troškova",
                description: "Transparentno mesečno izveštavanje o upotrebi i troškovima štampanja",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: "Moderna Oprema",
                description: "Uvek imate pristup najnovijim modelima i tehnologijama štampača",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/90 
                  transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Decoration line */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light blur opacity-0 
                  group-hover:opacity-20 transition duration-500 rounded-2xl"></div>
                
                {/* Icon wrapper */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-xl 
                  bg-gradient-to-br from-primary/10 to-accent/20 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-primary group-hover:text-primary-light transition-colors duration-500">
                    {benefit.icon}
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-light group-hover:text-secondary transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white/70 backdrop-blur-lg 
              rounded-full font-medium text-primary hover:text-white transition-colors duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Saznajte više o našim uslovima rentiranja</span>
              <span className="relative w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center
                group-hover:bg-white/20 transition-colors duration-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-white to-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <span className="text-sm font-medium text-primary-light tracking-wider uppercase mb-2 block">
              Profesionalna Oprema
            </span>
            <h2 className="py-5 text-4xl md:text-5xl font-bold text-secondary mb-4 relative inline-block">
              Naša ponuda
              <div className="py -5 absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
            <p className="py-5 text-xl text-secondary-light max-w-2xl mx-auto">
              Izaberite između velikog broja profesionalnih štampača i fotokopir aparata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "HP LaserJet Pro M404",
                type: "Laserski štampač",
                image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=500",
                features: [
                  "Brzina štampe: 38 str/min",
                  "Rezolucija: 1200 x 1200 dpi",
                  "Automatska duplex štampa",
                  "Mesečni obim: do 80.000 strana"
                ],
                price: "od 2.500",
                period: "mesečno"
              },
              {
                name: "Canon imageRUNNER 2630i",
                type: "Multifunkcijski uređaj",
                image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=500",
                features: [
                  "Štampa, kopiranje, skeniranje",
                  "Brzina: 30 str/min",
                  "Ekran osetljiv na dodir",
                  "Wireless povezivanje"
                ],
                price: "od 5.000",
                period: "mesečno"
              },
              {
                name: "Epson WorkForce Pro",
                type: "Inkjet štampač",
                image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=500",
                features: [
                  "Kolor štampa",
                  "WiFi Direct",
                  "Duplex štampa",
                  "Niski troškovi štampe"
                ],
                price: "od 3.500",
                period: "mesečno"
              }
            ].map((product, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-2">
                      {product.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-secondary-light group/item">
                        <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mr-3 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </span>
                        <span className="group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        <span className="text-secondary-light ml-1 text-sm">RSD</span>
                        <span className="block text-sm text-secondary-light">{product.period}</span>
                      </div>
                      <button className="bg-accent text-primary w-12 h-12 rounded-full flex items-center justify-center 
                        group-hover:bg-primary group-hover:text-white transform group-hover:rotate-90 transition-all duration-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        


          <div className="text-center mt-16">
            <button onClick={() => navigate('/products')} className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-lg 
              rounded-full text-sm font-medium text-primary hover:text-white transition-colors duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Pogledajte celu ponudu</span>
              <span className="relative w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center
                group-hover:bg-white/20 transition-colors duration-500">
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Iskustva Klijenata
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Šta Kažu Naši Klijenti
            </h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Poverenje naših klijenata je naš najveći uspeh. Pogledajte njihova iskustva sa našim uslugama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marko Petrović",
                position: "Direktor, TechCorp d.o.o.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
                rating: 5,
                text: "Izuzetan kvalitet usluge. Štampači koje smo iznajmili su pouzdani, a tehnička podrška je uvek tu kad nam zatreba. Značajno smo smanjili troškove štampanja.",
                highlight: "Značajno smo smanjili troškove štampanja"
              },
              {
                name: "Ana Marković",
                position: "Office Manager, Design Studio",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                rating: 5,
                text: "Kao dizajn studiju, kvalitet štampe nam je od presudnog značaja. Sa njihovim uređajima dobijamo perfektne rezultate svaki put. Posebno cenimo brzu reakciju tima za podršku.",
                highlight: "Dobijamo perfektne rezultate svaki put"
              },
              {
                name: "Stefan Jovanović",
                position: "Vlasnik, Copy Centar",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                rating: 5,
                text: "Već treću godinu sarađujemo i ne možemo biti zadovoljniji. Oprema je vrhunska, održavanje redovno, a cene konkurentne. Preporučujem svima koji traže pouzdanog partnera.",
                highlight: "Oprema je vrhunska, održavanje redovno"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/90 
                  transition-all duration-500 hover:shadow-lg relative"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/40 to-accent/40 rounded-2xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

                {/* Quote icon */}
                <div className="absolute -right-4 -top-4 w-8 h-8 bg-primary/10 rounded-full flex items-center 
                  justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-secondary-light leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Highlight */}
                <div className="bg-accent/30 rounded-lg p-4 mb-8 transform group-hover:-translate-y-1 transition-transform duration-500">
                  <p className="text-primary font-medium">
                    "{testimonial.highlight}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500"
                  />
                  <div>
                    <h4 className="font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-secondary-light">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-lg 
              rounded-full text-sm font-medium text-primary hover:text-white transition-colors duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Pogledajte sve recenzije</span>
              <span className="relative w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center
                group-hover:bg-white/20 transition-colors duration-500">
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-white to-transparent blur-3xl"></div>
          <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-white to-transparent blur-3xl"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Često Postavljana Pitanja
            </h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Odgovori na najčešća pitanja o našim uslugama rentiranja štampača
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "Koliko traje minimalni period rentiranja?",
                answer: "Minimalni period rentiranja je 12 meseci. Međutim, možemo prilagoditi period prema vašim potrebama uz posebne uslove."
              },
              {
                question: "Šta je uključeno u cenu rentiranja?",
                answer: "U cenu je uključeno: instalacija opreme, redovno održavanje, tehnička podrška, potrošni materijal (toneri) i servisiranje u slučaju kvara."
              },
              {
                question: "Kako se obračunava potrošnja?",
                answer: "Potrošnja se obračunava po broju odštampanih strana. Mesečno očitavamo brojače i šaljemo izveštaj o potrošnji zajedno sa računom."
              },
              {
                question: "Šta ako se štampač pokvari?",
                answer: "U slučaju kvara, naš tim reaguje u roku od 24 sata. Ukoliko nije moguća popravka na licu mesta, obezbeđujemo zamenu uređaja."
              },
              {
                question: "Da li je moguće prevremeno raskinuti ugovor?",
                answer: "Da, moguće je uz poštovanje otkaznog roka definisanog ugovorom. Detalji se mogu dogovoriti u zavisnosti od okolnosti."
              },
              {
                question: "Koji su načini plaćanja?",
                answer: "Prihvatamo različite načine plaćanja: mesečno fakturisanje sa rokom plaćanja, direktno zaduženje ili avansno plaćanje uz dodatni popust."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/90 
                  transition-all duration-500 hover:shadow-lg relative"
              >
                {/* Gradient border */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

                {/* Question mark decoration */}
                <div className="absolute -right-4 -top-4 w-8 h-8 bg-primary/10 rounded-full flex items-center 
                  justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-secondary mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-secondary-light mb-6">
              Niste pronašli odgovor na vaše pitanje?
            </p>
            <button onClick={() => navigate('/contact')} className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-lg 
              rounded-full text-sm font-medium text-primary hover:text-white transition-colors duration-500">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light rounded-full 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Kontaktirajte nas</span>
              <span className="relative w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center
                group-hover:bg-white/20 transition-colors duration-500">
                <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-accent/20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(45, 90, 39, 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Kontaktirajte Nas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Tu Smo Za Vas
            </h2>
            <p className="text-xl text-secondary-light max-w-3xl mx-auto">
              Pišite nam za više informacija o našim uslugama ili zakažite konsultacije
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg relative group">
              {/* Gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary" htmlFor="name">
                      Ime i prezime
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary 
                        focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Unesite vaše ime"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary" htmlFor="email">
                      Email adresa
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary 
                        focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="vasa@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary" htmlFor="phone">
                    Broj telefona
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary 
                      focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="+381 6X XXX XXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary" htmlFor="service">
                    Zainteresovani ste za
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary 
                      focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <option value="">Izaberite uslugu</option>
                    <option value="printer">Rentiranje štampača</option>
                    <option value="copier">Rentiranje fotokopir aparata</option>
                    <option value="both">Kombinovano rešenje</option>
                    <option value="consultation">Konsultacije</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary" htmlFor="message">
                    Vaša poruka
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-primary 
                      focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Opišite vaše potrebe..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-medium hover:bg-primary-light 
                    transform hover:-translate-y-1 transition-all duration-300"
                >
                  Pošaljite poruku
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Email",
                    value: "info@printerrent.rs",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Telefon",
                    value: "+381 11 123 4567",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )
                  }
                ].map((contact, index) => (
                  <div 
                    key={index}
                    className="group bg-white/70 backdrop-blur-lg rounded-xl p-6 flex items-start space-x-4
                      hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
                      group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {contact.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-primary">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-2 shadow-lg">
                <div className="rounded-xl overflow-hidden h-[400px] relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9359968904396!2d20.457706776191067!3d44.814256774344105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab25c703261%3A0x364a6488c2c3c1f!2sTerazije%2C%20Beograd!5e0!3m2!1sen!2srs!4v1690235234240!5m2!1sen!2srs"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary">Radno vreme</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-secondary-light">
                    <span>Ponedeljak - Petak</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-secondary-light">
                    <span>Subota</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between text-secondary-light">
                    <span>Nedelja</span>
                    <span>Zatvoreno</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Footer */}
      <footer className="relative py-12 bg-gradient-to-br from-secondary to-secondary-dark overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-white to-transparent blur-3xl"></div>
          <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-white to-transparent blur-3xl"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Print & Rent</h3>
              <p className="text-gray-300">Vaš pouzdan partner za štampu i rentiranje opreme.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.235 2.064.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Brzi linkovi</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-primary transition-colors duration-300">O nama</Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-primary transition-colors duration-300">Usluge</Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-300 hover:text-primary transition-colors duration-300">Proizvodi</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300">Kontakt</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Kontakt</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>Bulevar Kralja Aleksandra 73, Beograd</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>info@printandrent.rs</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+381 11 123 4567</span>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Pravna dokumenta</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Politika privatnosti
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    Uslovi korišćenja
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} PrintAndRent. Sva prava zadržana.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Dizajn i razvoj: <a href="#" className="text-primary hover:text-primary-light transition-colors">PrintAndRent Tim</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
