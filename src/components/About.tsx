import '../App.css'


export function About() {
    return (
        <section className='container mx-auto my-4 max-w-5xl p-4'>
            <div className='relative p-4 text-center'>
                <h2 className='text-blue-900 relative'>
                    <span className='mr-2 font-headline text-3xl'>Sobre</span>
                    <span className='font-handwriting text-4xl'>Mim</span>
                </h2>
                <p className='text-gray-900 my-6 md:text-center mx-auto max-w-3xl'>
                  Trabalhei em Empresas relevantes no Mercado Brasileiro em projetos
                  de grande impacto no negocio desde criação de pepiline de dados na aws, analises de dados e
                  modelagem preditiva e desenvolvimento de APIs para consumir modelos de machine learning.
                </p>
                <div className='absolute left-1/2 top-3 z-0 w-10 rounded-lg bg-blue-100/40'></div>
            </div>
            <div className='mx-auto mt-20 max-w-lg'>
                <div className='relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48'>
                <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Douglas silva 
              </span>
            </p>
            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                  Github:
                  </td>
                  <td>
                    <a href="https://github.com/Douglas-cc" className="underline hover:text-blue-800">
                      Acompanhe
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                  linkedin:
                  </td>
                  <td>
                    <a href="https://www.linkedin.com/in/douglas-silva-708890ab/" className="underline hover:text-blue-800">
                      Siga-me
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    ID Lattes:
                  </td>
                  <td>
                    <a
                      href="http://lattes.cnpq.br/2532281193329996"
                      className="underline hover:text-blue-800"
                    >
                    2532281193329996
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            <div className="absolute -left-2 -top-4 md:-top-12 md:h-72 md:w-56 h-24 w-20 rounded-lg bg-gray-600 bg-cover
            bg-[url(https://avatars.githubusercontent.com/u/47650453?s=400&u=6ac5479614c265c9e39f2a175f03568f868755a5&v=4)]
            bg-center md:-left-12"></div>
            </div>
            </div>
        </section>
    )
}