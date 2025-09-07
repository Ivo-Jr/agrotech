import { Categories } from '../components/categories'
import { HeroSection } from '../components/heroSection'
import { About } from '../components/about'
import { CategoriaCard } from '../components/categoriaCard'
import { Testimony } from '../components/testimony'
import { categoriasCard } from '../constants'
import { TalkToUs } from '../components/talkToUs'
import { Divisor } from '../components/divisor'
import { ColaboradorCTA } from '../components/colaboratorCTA'

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Divisor width="w-full" marginTop="mt-0" marginBottom="mb-6" />
      <About />
      <Categories />
      <div className="flex justify-center items-center flex-col gap-14 w-full py-36 px-6  xl:flex-row xl:gap-5">
        {categoriasCard.map((card) => (
          <CategoriaCard
            key={card.titulo}
            titulo={card.titulo}
            imagem={card.imagem}
          />
        ))}
      </div>
      <Testimony />
      <TalkToUs />
      <Divisor width="w-1/2" marginTop="mt-4" marginBottom="mb-6" />
      <ColaboradorCTA />
    </div>
  )
}