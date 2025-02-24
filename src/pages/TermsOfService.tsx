import React from 'react';
import Navigation from '../components/Navigation';

const TermsOfService = () => {
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
                Uslovi Korišćenja
              </h1>
              <p className="text-xl text-secondary-light max-w-3xl mx-auto">
                Upoznajte se sa uslovima korišćenja naših usluga
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">1. Opšte odredbe</h2>
                <div className="bg-primary/5 rounded-xl p-6">
                  <p className="text-secondary-light leading-relaxed">
                    Ovi uslovi korišćenja regulišu prava i obaveze između PrintAndRent (u daljem tekstu: Pružalac usluga) 
                    i korisnika usluga rentiranja štampača i prateće opreme.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">2. Usluge</h2>
                <p className="text-secondary-light mb-4">Naše usluge obuhvataju:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Rentiranje štampača i fotokopir uređaja",
                    "Instalaciju i održavanje opreme",
                    "Tehničku podršku",
                    "Snabdevanje potrošnim materijalom",
                    "Servisiranje u slučaju kvara",
                    "Konsultacije i obuku"
                  ].map((service, index) => (
                    <div key={index} className="bg-white/50 rounded-lg p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-secondary-light">{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">3. Ugovorni odnos</h2>
                <div className="bg-accent/5 rounded-xl p-6">
                  <p className="text-secondary-light leading-relaxed">
                    Ugovorni odnos se zasniva potpisivanjem ugovora o rentiranju opreme. Minimalno trajanje ugovora je 12 meseci,
                    osim ako nije drugačije dogovoreno. Ugovor definiše sve specifične uslove korišćenja opreme.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">4. Obaveze korisnika</h2>
                <div className="space-y-3">
                  {[
                    "Koristiti opremu u skladu sa uputstvima za upotrebu",
                    "Omogućiti pristup opremi radi održavanja",
                    "Redovno izmirivati svoje finansijske obaveze",
                    "Prijaviti eventualne kvarove ili nepravilnosti u radu",
                    "Čuvati opremu od oštećenja"
                  ].map((obligation, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-secondary-light">{obligation}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">5. Obaveze pružaoca usluga</h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      title: "Isporuka i instalacija",
                      description: "Isporuka i instalacija opreme u dogovorenom roku"
                    },
                    {
                      title: "Održavanje",
                      description: "Redovno održavanje i servisiranje opreme"
                    },
                    {
                      title: "Brza reakcija",
                      description: "Reakcija na prijavljene kvarove u roku od 24 sata"
                    },
                    {
                      title: "Zamena opreme",
                      description: "Obezbeđivanje zamenske opreme u slučaju većeg kvara"
                    },
                    {
                      title: "Tehnička podrška",
                      description: "Dostupna tehnička podrška tokom radnog vremena"
                    }
                  ].map((obligation, index) => (
                    <div key={index} className="bg-white/50 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="font-medium text-secondary">{obligation.title}</h3>
                      </div>
                      <p className="text-secondary-light pl-11">{obligation.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">6. Cene i plaćanje</h2>
                <div className="bg-primary/5 rounded-xl p-6 space-y-4">
                  <p className="text-secondary-light leading-relaxed">
                    Cene usluga su definisane ugovorom. Fakturisanje se vrši mesečno na osnovu broja odštampanih strana
                    i fiksne naknade za rentiranje.
                  </p>
                  <div className="bg-white/50 rounded-lg p-4">
                    <h3 className="font-medium text-secondary mb-2">Način obračuna uključuje:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2 text-secondary-light">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Mesečnu naknadu za rentiranje</span>
                      </li>
                      <li className="flex items-center space-x-2 text-secondary-light">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Cenu po odštampanoj strani</span>
                      </li>
                      <li className="flex items-center space-x-2 text-secondary-light">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Dodatne usluge po potrebi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">7. Raskid ugovora</h2>
                <div className="bg-accent/5 rounded-xl p-6">
                  <p className="text-secondary-light leading-relaxed">
                    Ugovor se može raskinuti uz poštovanje otkaznog roka definisanog ugovorom. U slučaju nepoštovanja
                    ugovornih obaveza, druga strana ima pravo na jednostrani raskid ugovora.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-secondary mb-4">8. Završne odredbe</h2>
                <div className="bg-white/50 rounded-xl p-6">
                  <p className="text-secondary-light leading-relaxed">
                    Ovi uslovi korišćenja stupaju na snagu danom objavljivanja. Zadržavamo pravo izmene uslova korišćenja,
                    o čemu ćemo korisnike blagovremeno obavestiti.
                  </p>
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <p className="text-sm text-secondary-light">
                      Poslednje ažuriranje: {new Date().toLocaleDateString('sr-RS')}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfService;
