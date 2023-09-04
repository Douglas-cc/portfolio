import { FaQuoteLeft } from "react-icons/fa"

export function Frase() {
  return (
    <section className="container mx-auto max-w-4xl p-4 py-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-gray-800">
            O que Especialistas estão falando sobre
          </span>
          <span className="font-handwriting text-4xl text-blue-800">
            AI
          </span>
        </h2>
      </div>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
          É difícil pensar em uma grande indústria que não será transformada pela inteligência artificial. 
          Isso inclui saúde, educação, meios de transporte, varejo, comunicações e agricultura. Existem 
          caminhos surpreendentemente claros para a IA fazer uma grande diferença em todas essas indústrias.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://hai.stanford.edu/sites/default/files/styles/person_big/public/person/bio-images/Aurum-Speakers-Bureau-Andrew-Ng.jpg?itok=mTWW2mfy"
            alt="Andrew Ng"
          />
          <div className="flex items-center divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">Andrew Ng</div>
            <div className="pl-3 text-sm font-light text-gray-500">
                Cientista da Computação, empreendedor e Cofundador Google Brain
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}