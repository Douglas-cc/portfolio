import '../App.css'
import { HiDownload } from 'react-icons/hi'

export function Hero() {
    return (
        <section className='bg-gradient-to-tr from-black to-gray-900 text-white'>
            <div className='container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row'>
                <div className='basis-1/2'>
                    <h1 className='mb-6'>
                        <span className='font-handwriting block text-3xl md:text-left'>Olá, me chamo</span>
                        <span className='font-headline text-5xl font-semibold'>Douglas</span>
                        <span className='font-headline text-5xl font-light text-blue-500'> Silva</span>
                    </h1>
                    <h2 className='font-semibold flex items-center gap-2 md:text-left'>
                        <div className='h-1 w-12 rounded-full bg-blue-500'></div>
                        Data Scientist | Machine Learning Engineer
                    </h2>
                    <p className='text-gray-400 my-6 md:text-left'>
                    Data Scientist apaixonado por desvendar insights ocultos e criar 
                    algoritmos poderosos para transformar dados em soluções inovadoras.
                    </p>
                    <div className='flex items-center gap-2 justify-center'>
                        <a href='#contact' className='underline font-bold text-white'>Fale Comigo</a>
                        <span className='italic text-gray-500'>ou</span>
                        <a href='https://drive.google.com/file/d/1mwxRZgdZMkp7uo2kwYruvNE3oWr-TRWP/view' 
                        className='button text-white flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
                            <HiDownload/>
                            Baixe meu CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}