import '../App.css'
import { HiArrowTopRightOnSquare } from "react-icons/hi2"


export function Projetos() {
  const projects = [
      {
        title: "Classificador de Risco de Crédito",
        description: "[BETA] Projeto End to End de aprovação de score de cartão de credito",
        image:"https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        link: "https://github.com/Douglas-cc/clf_credit_risk",
        colSpan: "col-span-1",
      },
      {
        title: "Classificador de Instrumentos Músicais",
        description: "Usando Machine Learning para classificar Instrumentos Músicais",
        image:"https://images.unsplash.com/photo-1556379118-7034d926d258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
        link: "https://github.com/Douglas-cc/detected_instruments",
        colSpan: "col-span-1 md:col-span-2",
      },
      {
        title: "Otimização de Preços de pacotes hospitalares",
        description: "Redestribuição de preco de venda de pacotes cirurgicos",
        image:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: "https://github.com/Douglas-cc/otm_portes",
        colSpan: "col-span-1",
      },
      {
        title: "Otimizador de lucro em corridas de cavalos",
        description: "Com base nas chances de vitória e no preço inicial",
        image:"https://www.royal-horse.com/wp-content/uploads/2022/01/GALOP.jpg",
        link: "https://github.com/Douglas-cc/horse_racing/tree/main",
        colSpan: "col-span-1",
      },
      {
        title: "Análise de dados Violencia contra a mulher",
        description: "Analise de dados de Violencia contra a mulher do estado de Minas Gerais",
        image: "https://abori.com.br/wp-content/uploads/2020/04/sydney-sims-fZ2hMpHIrbI-unsplash-scaled-2558x1440.jpg",
        link: "https://github.com/Douglas-cc/viol-mullher-bh",
        colSpan: "col-span-1",
      },
    ]

  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
      <div className='container m-auto max-w-1xl p-1 py-12'>
        <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
            <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-white">
              Alguns dos projetos pessoais que já realizei
              ao longo da minha trajetória como Data Scientist.
            </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
            <div key={index}
            className={`group relative h-60 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
            style={{ backgroundImage: `url('${project.image}')`}}
            >
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center 
            rounded-lg bg-blue-900 text-white opacity-0 transition-opacity group-hover:opacity-100">
              <h4 className="font-headline text-lg font-semibold">
                {project.title}
              </h4>
              <p className=" mb-4 text-sm">{project.description}</p>
              <a href={project.link} target="_blank">
                <HiArrowTopRightOnSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

