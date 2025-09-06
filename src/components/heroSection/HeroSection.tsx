import banner from '../../assets/banner.png'

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-[1920px] mx-auto">
      <div className="absolute inset-0 -z-10">
        <img
          src={banner}
          alt="Prato saudável"
          className="w-[1920px] h-[963px] object-cover mx-auto"
        />
      </div>

      <div className="w-full max-w-7xl px-6 lg:px-[212px] lg:pt-[207px] flex flex-col lg:flex-row items-start justify-between h-[963px] z-10">
        <div className="flex flex-col items-start justify-start">

          <h1 className="text-5xl font-bold text-green-600 text-[90px] leading-tight">
            JUNTOS <br /> CONTRA <br /> A FOME
          </h1>
          <p className="mt-4 text-lg text-gray-800 text-[27px] font-medium">
            Conectando Solidariedade à <br /> Sustentabilidade
          </p>

          <button className="absolute top-[663px] left-[201px] text-[27px] py-[25px] px-[44px] h-[97px] border-none mt-6 border-2 font-semibold rounded-full hover:text-green-600 transition">
            TORNE-SE UM COLABORADOR
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full bg-gray-50 border-t pt-[30px]">
        <div className='flex flex-row justify-between items-center w-full max-w-[1028px]'>
          <p className='text-center'>Combatemos o <br /> desperdício e a fome</p>
          <p className='text-center border-b border-green-500 pb-[30px]'>Conectamos doadores às <br /> pessoas e instituições</p>
          <p className='text-center'>Transformamos excedentes em <br />esperança</p>
        </div>
      </div>

      <div className='bg-slate-200 w-full h-[2px]'></div>
    </section>
  )
}