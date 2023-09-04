import '../App.css'
import { SiMusicbrainz } from 'react-icons/si';
import { IoMdAnalytics } from 'react-icons/io';
import { TbDeviceAnalytics } from 'react-icons/tb';


export function Services() {
  const services = [
      {
        title: "Modelagem Preditiva",
        description:"Implemente modelos de Machine Learning que tenham a capacidade de antecipar eventos futuros e adote uma abordagem proativa no planejamento de ações.",
        icon: <SiMusicbrainz className="h-12 w-12" />,
      },
      {
        title: "Self Service Analytics",
        description: "Desenvolva painéis de controle robustos que proporcionem valor tanto em operações quanto em estratégias, capacitando não apenas a área de negócios a utilizá-los de forma eficaz, mas também a compartilhar esse poder com outros setores.",
        icon: <TbDeviceAnalytics className="h-12 w-12" />,
      },
      {
        title: "Analise de Dados",
        description: "Adquira uma compreensão mais profunda dos padrões de comportamento e das interações entre os indicadores, obtendo uma perspectiva completa e abrangente do seu negócio.",
        icon: <IoMdAnalytics className="h-12 w-12" />,
      },
    ]
  
  return (
    <section className='container mx-auto my-12 max-w-4xl p-4'>
        <div className='p-4 text-center'>
            <p className='p-4 font-semibold uppercase text-blue-900'>
              Usamos Inteligência Artificial para alavancar o seu negócio
            </p>
            <h2 className='mb-2 font-bold text-blue-900'>
                <span className='mr-2 font-headline text-3xl'>Meus</span>
                <span className='font-handwriting text-4xl'>Serviços</span>
            </h2>
            <p className='text-sm text-gray-900'>
            Posso criar estratégias de gestão altamente eficazes para potencializar o seu negócio. 
            Ofereço uma ampla gama de soluções, incluindo análise de dados, modelos preditivos 
            e self-service analytics.
            </p>
        </div>
        <div className="mt-6 flex flex-col gap-2 md:flex-row">
          {services.map((service, index) => (
            <div className="basis-1/3 rounded-lg bg-blue-900 p-4 text-white" key={`service-${index}`}>
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
    </section>
  )
}
