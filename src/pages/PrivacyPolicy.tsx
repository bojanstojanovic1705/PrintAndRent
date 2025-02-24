import React from 'react';
import Navigation from '../components/Navigation';

const PrivacyPolicy = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Background decoration */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-accent/10"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-gradient-to-br from-accent/10 to-transparent blur-3xl"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(45, 90, 39, 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Dokumenti
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Politika Privatnosti
              </h1>
              <p className="text-xl text-secondary-light max-w-3xl mx-auto">
                Saznajte kako štitimo i upravljamo vašim podacima
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg space-y-8">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl opacity-0 
                group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              
              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">1. Uvod</h2>
                <p className="text-secondary-light leading-relaxed">
                  PrintAndRent se obavezuje da će štititi vašu privatnost i lične podatke u skladu sa Zakonom o zaštiti podataka o ličnosti Republike Srbije.
                  Ova politika privatnosti objašnjava koje podatke prikupljamo, kako ih koristimo i štitimo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">2. Koje podatke prikupljamo</h2>
                <p className="text-secondary-light mb-4">Prikupljamo sledeće podatke:</p>
                <ul className="list-none space-y-3">
                  {[
                    "Osnovne podatke o kontaktu (ime, email, telefon)",
                    "Podatke o kompaniji (naziv, PIB, matični broj)",
                    "Podatke o korišćenju uređaja koje iznajmljujete",
                    "Podatke o potrošnji i načinu korišćenja usluga"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-secondary-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">3. Kako koristimo vaše podatke</h2>
                <p className="text-secondary-light mb-4">Vaše podatke koristimo za:</p>
                <ul className="list-none space-y-3">
                  {[
                    "Pružanje usluga rentiranja i održavanja opreme",
                    "Komunikaciju vezanu za usluge i podršku",
                    "Obračun potrošnje i fakturisanje",
                    "Unapređenje naših usluga",
                    "Zakonske obaveze"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-secondary-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">4. Zaštita podataka</h2>
                <div className="bg-primary/5 rounded-xl p-6">
                  <p className="text-secondary-light leading-relaxed">
                    Primenjujemo tehničke i organizacione mere za zaštitu vaših podataka od neovlašćenog pristupa,
                    izmene, otkrivanja ili uništenja. Pristup podacima imaju samo ovlašćena lica koja su obavezana na čuvanje poverljivosti.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">5. Vaša prava</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Zatražite pristup vašim podacima",
                    "Ispravite netačne podatke",
                    "Zatražite brisanje podataka",
                    "Ograničite obradu podataka",
                    "Uložite prigovor na obradu",
                    "Prenesete podatke drugom rukovaocu"
                  ].map((right, index) => (
                    <div key={index} className="bg-white/50 rounded-lg p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-secondary-light">{right}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">6. Kontakt</h2>
                <div className="bg-white/50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary font-medium">Email</p>
                      <p className="text-primary">privacy@printerrent.rs</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-secondary font-medium">Telefon</p>
                      <p className="text-primary">+381 11 123 4567</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">7. Izmene politike privatnosti</h2>
                <div className="bg-accent/5 rounded-xl p-6">
                  <p className="text-secondary-light leading-relaxed">
                    Zadržavamo pravo da izmenimo ovu politiku privatnosti u bilo kom trenutku.
                    Sve izmene će biti objavljene na ovoj stranici sa datumom stupanja na snagu.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
