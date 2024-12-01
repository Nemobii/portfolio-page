import Layout from "../components/Layout";
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          {/* Hauptcontainer */}
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-12 max-w-5xl w-full">
            {/* Bildbereich */}
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
              <Image 
                src="/portfolio-page/images/AboutMe.jpg"
                alt="About Me" 
                width={500} 
                height={500} 
                className="rounded-full object-cover shadow-md"
              />
            </div>

            {/* Textbereich */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h1 className="text-4xl font-bold mb-6">Hallo, ich bin Nico</h1>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Ich bin ein leidenschaftlicher Hobbyfotograf aus Bern, Schweiz. Meine Spezialgebiete
                sind Tierfotografie, Reisefotografie, Portraits und Street Art. Seit 4 Jahren
                widme ich mich der Kunst, Momente einzufangen und Geschichten durch Bilder zu
                erzählen. Meine Nikon Z6II und meine DJI-Drohne sind meine Werkzeuge, um die Welt
                aus neuen Perspektiven zu erkunden.
                <br /><br />
                Ob für Events, individuelle Projekte oder Shootings – ich freue mich, unvergessliche
                Augenblicke festzuhalten. Für mich ist jedes Foto eine Gelegenheit, die Einzigartigkeit
                eines Moments zu verewigen.
              </p>

              {/* Kontakt-Link */}
              <Link
                href="/contact"
                className="bg-transparent border border-red-500 text-red-500 px-6 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
}
