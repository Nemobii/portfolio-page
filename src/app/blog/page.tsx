'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header isHome={false} />

      {/* Hauptinhalt */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 px-6 py-12">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Meine letzte Reise</h1>
          <p className="text-lg leading-7 text-gray-700">
            Auf meiner letzten Reise erkundete ich die faszinierenden Landschaften Tansanias und Sansibars. Diese Reise war ein unvergessliches Abenteuer, das uns in einige der beeindruckendsten Nationalparks Afrikas führte. Unsere Reise begann in den weltberühmten Nationalparks <strong>Serengeti</strong>, <strong>Tarangire</strong>, <strong>Lake Manyara</strong> und <strong>Arusha</strong>. Jeder Park hatte seine ganz eigene Atmosphäre und bot spektakuläre Naturerlebnisse.
          </p>
          <p className="text-lg leading-7 text-gray-700 mt-4">
            In der <strong>Serengeti</strong>, bekannt für die jährliche Wanderung der Gnus und Zebras, konnten wir riesige Herden beobachten und spannende Momente erleben, darunter Löwenrudel, die in der Savanne jagten, und Elefantenfamilien, die majestätisch durch die Ebenen zogen. Die <strong>Tarangire-Region</strong> beeindruckte uns mit ihren gigantischen Baobab-Bäumen und großen Elefantenherden, während der <strong>Lake Manyara Nationalpark</strong> mit seiner Vielfalt an Vögeln und den berühmten Baumlöwen eine einzigartige Landschaft bot. Im <strong>Arusha Nationalpark</strong>, eingerahmt vom majestätischen Mount Meru, konnten wir die dichten Wälder und die beeindruckenden Wasserfälle bewundern.
          </p>
          <p className="text-lg leading-7 text-gray-700 mt-4">
            Während der gesamten Reise wurden wir von unserem Guide <strong>Oliver</strong> begleitet, der nicht nur ein erfahrener Naturkenner, sondern auch ein hervorragender deutschsprachiger Reiseleiter war. Seine Leidenschaft und sein Wissen über die Tierwelt und die Kultur Tansanias machten jede Safari zu einem besonderen Erlebnis.
          </p>
          <p className="text-lg leading-7 text-gray-700 mt-4">
            Die Unterkünfte während der Reise waren ebenso beeindruckend wie die Landschaften selbst. Ein Highlight war die Übernachtung in der <strong>Manyara Best View Lodge</strong>, die direkt am Rande des berühmten Grabenbruchs lag und einen spektakulären Blick auf das Rift Valley und den Lake Manyara bot. Abende im Buschzelt mitten in der Serengeti brachten uns die Natur hautnah – die Geräusche der Wildnis in der Nacht und der klare Sternenhimmel waren ein Erlebnis, das wir nie vergessen werden.
          </p>
          <p className="text-lg leading-7 text-gray-700 mt-4">
            Zum Abschluss unserer Reise reisten wir nach <strong>Sansibar</strong>, wo wir an den traumhaften Stränden entspannten. Das kristallklare Wasser und die warmen Temperaturen boten den perfekten Kontrast zur Safari. Diese Reise hat mir nicht nur neue Perspektiven eröffnet, sondern auch einzigartige Momente für meine Fotografie ermöglicht – eine perfekte Mischung aus Abenteuer, Natur und Entspannung.
          </p>
          {/* Button */}
          <div className="mt-6 flex justify-center">
            <Link href="/portfolio/travel/tansania">
              <button className="bg-violet-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-violet-800 transition">
                Zu meinen letzten Reisen
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer isHome={false} />
    </div>
  );
};

export default BlogPage;
