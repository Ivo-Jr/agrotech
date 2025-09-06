import { Star } from "lucide-react";
import { testimonials } from "../../constants";

export const Testimony = () => {
  return (
    <section className="w-full px-6 py-16 text-center">
      <h2 className="font-bold text-green-600 text-[45px]">
        Impacto compartilhado
      </h2>
      <p className="text-gray-500 mt-2 text-[22px]">
        Cada alimento doado é um ato de amor que transforma vidas
      </p>

      <div className="w-full justify-center items-center mt-12 flex flex-row gap-16">
        {testimonials.map((testimony) => (
          <div
            key={testimony.nome}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-green-900 border w-[339px] h-[355px]"
          >
            <div className="flex flex-row items-center gap-5">
              <img
                src={testimony.image}
                alt={testimony.nome}
                className="w-16 h-16 rounded-full object-cover mb-4"
                />
              <h3 className="font-bold text-[19px]">{testimony.nome}</h3>
            </div>
            <p className="mt-3 text-[19px] w-[268px] leading-[24px]">
              {testimony.message}
            </p>
            <div className="flex text-yellow-500 my-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
