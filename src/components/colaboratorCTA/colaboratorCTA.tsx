import checkImg from '../../assets/check-icon.svg'

export const ColaboradorCTA = () => {
  return (
    <section className="w-full px-6 pt-16 pb-72 text-center">
      <h2 className="text-[35px] font-bold text-green-950">
        Você pode fazer parte dessa mudança!
      </h2>
      <h3 className="font-semibold text-[35px] text-green-600">
        Torne-se um colaborador!
      </h3>

      <p className="text-gray-700 mt-6 w-[1147px] mx-auto text-[22px]">
        A transformação começa com ações concretas. Ao se tornar um colaborador,
        você não apenas contribui com alimentos, mas também com esperança,
        dignidade e um futuro melhor para quem mais precisa.
      </p>
      <p className="text-gray-700 mt-11 w-[1464px] text-[22px] mx-auto">
        Cada gesto de solidariedade fortalece nossa rede de apoio e amplia o
        impacto de nossas ações. Seja como doador, voluntário ou parceiro
        institucional, sua participação é fundamental para construirmos juntos
        uma comunidade mais justa e solidária. Junte-se a nós e faça a
        diferença!
      </p>

      <div className="mt-10">
        <button className="bg-green-950 text-green-500 font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-green-900 transition">
          Cadastre-se agora e se torne um colaborador
        </button>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-row items-center gap-3">
          <img src={checkImg} alt="check-icon" />
          <p className="text-gray-500 mt-2 font-[22px]">
            Redução do desperdício
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <img src={checkImg} alt="check-icon" />
          <p className="text-gray-500 mt-2 font-[22px]">
            Sustentabilidade
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <img src={checkImg} alt="check-icon" />
          <p className="text-gray-500 mt-2 font-[22px]">
            Segurança Alimentar
          </p>
        </div>
      </div>

      <p className="text-gray-500 mt-10 w-[1192px] text-[22px] mx-auto">
        Nessa área, você tem acesso a todas as ferramentas para contribuir com
        um mundo mais justo e sustentável. <br /> Gerencie suas doações, acompanhe os
        alimentos recebidos ou doados e veja como, juntos, estamos construindo
        um futuro sem fome e com menos desperdício!
      </p>
    </section>
  );
}
