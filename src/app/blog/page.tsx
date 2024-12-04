'use client';
import Layout from "../components/Layout";
import Link from 'next/link';

const BlogPage = () => {
  const content = [
    {
      title: "Meine letzte Reise",
      content: (
        <>
          <p className="text-lg leading-7 text-gray-700">
            Auf meiner letzten Reise erkundete ich die faszinierenden Landschaften Tansanias und Sansibars. Diese Reise war ein unvergessliches Abenteuer, das uns in einige der beeindruckendsten Nationalparks Afrikas führte. Unsere Reise begann in den weltberühmten Nationalparks <strong>Serengeti</strong>, <strong>Tarangire</strong>, <strong>Lake Manyara</strong> und <strong>Arusha</strong>. Jeder Park hatte seine ganz eigene Atmosphäre und bot spektakuläre Naturerlebnisse.
          </p>
          <p className="text-lg leading-7 text-gray-700 mt-4">
            In der <strong>Serengeti</strong>, bekannt für die jährliche Wanderung der Gnus und Zebras, konnten wir riesige Herden beobachten und spannende Momente erleben, darunter Löwenrudel, die in der Savanne jagten, und Elefantenfamilien, die majestätisch durch die Ebenen zogen.
          </p>
        </>
      ),
    },
    {
      title: "Die Nationalparks",
      content: (
        <>
          <p className="text-lg leading-7 text-gray-700">
            Die <strong>Tarangire-Region</strong> beeindruckte uns mit ihren gigantischen Baobab-Bäumen und großen Elefantenherden, während der <strong>Lake Manyara Nationalpark</strong> mit seiner Vielfalt an Vögeln und den berühmten Baumlöwen eine einzigartige Landschaft bot. Im <strong>Arusha Nationalpark</strong>, eingerahmt vom majestätischen Mount Meru, konnten wir die dichten Wälder und die beeindruckenden Wasserfälle bewundern.
          </p>
          <p className="text-lg leading-7 text-gray-700 mt-4">
            Während der gesamten Reise wurden wir von unserem Guide <strong>Oliver</strong> begleitet, der nicht nur ein erfahrener Naturkenner, sondern auch ein hervorragender deutschsprachiger Reiseleiter war.
          </p>
        </>
      ),
    },
    {
      title: "Sansibar und der Abschluss",
      content: (
        <>
          <p className="text-lg leading-7 text-gray-700">
            Zum Abschluss unserer Reise reisten wir nach <strong>Sansibar</strong>, wo wir an den traumhaften Stränden entspannten. Das kristallklare Wasser und die warmen Temperaturen boten den perfekten Kontrast zur Safari. Diese Reise hat mir nicht nur neue Perspektiven eröffnet, sondern auch einzigartige Momente für meine Fotografie ermöglicht – eine perfekte Mischung aus Abenteuer, Natur und Entspannung.
          </p>
        </>
      ),
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl w-full">
            {content.map((section, index) => (
              <div key={index} className="mb-8">
                <h1 className="text-3xl font-bold text-center mb-6">
                  {section.title}
                </h1>
                {section.content}
              </div>
            ))}
            <div className="text-center">
              <Link href="/portfolio/travel/tansania">
                <button className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors">
                  Zu den Fotos meiner letzten Reise
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
