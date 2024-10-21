// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* En-tête */}
      <header className="w-full bg-white shadow">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">
            Mon Projet Finance
          </a>
          <div>
            <a href="#" className="text-gray-800 hover:text-blue-600 mx-4">
              Accueil
            </a>
            <a href="#features" className="text-gray-800 hover:text-blue-600 mx-4">
              Fonctionnalités
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 mx-4">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Contenu principal */}
      <main className="flex-1 container mx-auto px-6 py-16 text-center">
        <Image
          src="/images/finance-illustration.svg"
          alt="image d'illustration"
          width={600}
          height={400}
          className="mx-auto"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
          Gérez vos finances personnelles facilement
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          Suivez vos dépenses, gérez vos épargnes et atteignez vos objectifs financiers avec notre application intuitive.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 transition duration-300"
        >
          Commencer dès maintenant
        </a>
      </main>

      {/* Section Fonctionnalités */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Fonctionnalités Clés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/images/depense.svg"
                alt="Suivi des dépenses"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Suivi des dépenses</h3>
              <p className="text-gray-600">
                Gardez un œil sur vos dépenses fixes et variables avec une interface claire et intuitive.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/epargne.svg"
                alt="Gestion des épargnes"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Gestion des épargnes</h3>
              <p className="text-gray-600">
                Créez des objectifs d&apos;épargne et suivez votre progression pour atteindre vos projets.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/report.svg"
                alt="Rapports détaillés"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Rapports détaillés</h3>
              <p className="text-gray-600">
                Obtenez des rapports mensuels détaillés pour une meilleure analyse de vos finances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="w-full bg-white shadow">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          © {new Date().getFullYear()} Mon Projet Finance. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
