import Layout from "../components/Layout";
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
      <Layout>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-gray-100">
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <Image 
              src="/images/AboutMe.jpg"
              alt="About Me" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-10 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Über mich</h1>
            <p className="text-lg mb-6">
              Hallo, ich bin Nico, ein 29-jähriger Hobbyfotograf aus dem schönen Bern in der Schweiz. 
              Meine Leidenschaft gilt der Fotografie, besonders in den Bereichen Tierfotografie, Reisefotografie, 
              Portraits und Street Art. Die Kamera ist mein ständiger Begleiter, wenn ich die Welt erkunde, sei es 
              in urbanen Gassen oder in der freien Natur.
              <br /><br />
              Seit nunmehr 4 Jahren widme ich mich der Fotografie und arbeite ständig daran, meine Fähigkeiten zu verbessern. 
              Mit meiner Nikon Z6II und einer Auswahl verschiedener Objektive fange ich die Details ein, die das Besondere im 
              Alltäglichen zeigen. Zusätzlich nutze ich eine DJI-Drohne, um einzigartige Perspektiven aus der Luft zu schaffen 
              und so völlig neue Ansichten zu entdecken.
              <br /><br />
              Ob für besondere Events, Shootings oder individuelle Projekte – ich bin buchbar und freue mich darauf, 
              unvergessliche Momente festzuhalten. Jedes Foto ist für mich eine Gelegenheit, eine Geschichte zu erzählen – sei es der 
              spontane Ausdruck eines Menschen, die einzigartige Atmosphäre eines Ortes oder die faszinierende Schönheit 
              von Tieren in ihrer natürlichen Umgebung.
              <br /><br />
              Ich liebe es, die Welt aus unterschiedlichen Perspektiven zu sehen und bin stets bestrebt, mein Können 
              weiter zu verfeinern und mit anderen zu teilen.
            </p>

            <Link href="/contact">
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition duration-300">
                Kontakt aufnehmen
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
}
