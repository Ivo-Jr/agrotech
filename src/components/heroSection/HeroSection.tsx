import banner from "../../assets/banner.png";

export const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="relative w-full h-[963px] max-h-[100vh] bg-gray-600 md:bg-transparent">
        <img
          src={banner}
          alt="Prato saudável"
          className="relative w-full h-full object-cover opacity-50 md:opacity-100"
        />

        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8
          text-center text-white p-4 
          md:p-8 md:items-start
        "
        >
          <div className="md:text-left xl:pl-[180px]">
            <h1
              className="text-5xl font-bold text-green-400 leading-tight text-shadow-md 
              lg:text-7xl lg:mt-10
              xl:text-8xl
            "
            >
              JUNTOS <br /> CONTRA <br /> A FOME
            </h1>
            <p
              className="mt-4 text-lg text-slate-900 font-medium text-shadow-sm 
              md:text-xl 
              lg:text-3xl
            "
            >
              Conectando Solidariedade à Sustentabilidade
            </p>
          </div>

          <button
            className="
            mt-8 px-8 py-3 text-base font-semibold text-white transition-transform duration-300 ease-in-out
            bg-green-600 rounded-full shadow-lg
            hover:bg-green-700 hover:scale-105
            md:px-5 md:py-4 md:text-lg
            lg:mt-[90px] lg:text-3xl lg:h-[97px]
            xl:ml-[170px]"
          >
            TORNE-SE UM COLABORADOR
          </button>
        </div>
      </div>

      <div className="flex w-full border-t py-8 mx-auto">
        <div
          className="flex w-full flex-col items-center justify-center gap-10 px-6 text-base md:text-xl
                  md:flex-row md:gap-16 lg:gap-32"
        >
          <p className="text-center">
            Combatemos o <br /> desperdício e a fome
          </p>

          <p
            className="relative text-center
                  md:before:content-['']
                  md:before:absolute
                  md:before:left-1/2
                  md:before:bottom-[-30px]
                  md:before:-translate-x-1/2
                  md:before:w-[240px]
                  md:before:h-[4px]
                  md:before:bg-green-500"
          >
            Conectamos doadores às <br /> pessoas e instituições
          </p>

          <p className="text-center">
            Transformamos excedentes em <br /> esperança
          </p>
        </div>
      </div>
    </section>
  );
};
