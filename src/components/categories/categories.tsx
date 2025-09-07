import heartIcon from '../../assets/heart-icon.svg';
import { categories } from '../../constants';
import tomateImg from '../../assets/tomato.svg'


export const Categories = () => {
  return (
    <section className="w-full max-w-[1920px] mx-auto py-12 text-center">
      <div className='flex flex-col items-center justify-center w-full 
        md:items-start 
        xl:pl-[200px] 
      '>
        <div className="flex items-center flex-col xl:items-start">
          <h2 className="text-3xl lg:text-[45px] font-bold text-green-600">
            Categorias em Destaque
          </h2>
          <p className="text-gray-500  mt-2 text-base md:text-[22px]">
            Descubra as categorias que fazem a diferença. Alimentos essenciais para
            quem mais precisa!
          </p>
        </div>

        <div className="relative flex items-center mt-[100px] max-w-[100vw] w-full px-3 overflow-auto">
          <div className="flex flex-row items-end gap-4 h-[320px] w-full overflow-auto p-5">
            {categories.map((category => (
              <div key={category.nome} className="flex justify-center">
                <div className="relative w-[226px] h-[219px] flex justify-endgap-[25px] justify-end px-[20px] py-[35px] bg-white rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_7px_rgba(0,0,0,0.05)] p-4 flex-col items-center">
                  <img
                    src={category.imagem}
                    alt="tomate image"
                    className="absolute top-[-65px] w-[138px] h-[138px] object-contain mb-3"
                  />
                  <h3 className="font-semibold text-[30px]">{category.nome}</h3>
                  <div className="flex gap-3 mt-4">
                    <button className="bg-[#246552] text-white text-[24px] rounded-[12px] px-[30px] shadow hover:bg-green-800 transition">
                      coletar
                    </button>
                    <button>
                      <img src={heartIcon} alt="heart icon" />
                    </button>
                  </div>
                </div>
              </div>
            )))}


          </div>
        </div>
      </div>
    </section>
  );
}
