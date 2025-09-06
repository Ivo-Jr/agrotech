import logoIcon from '../../assets/logo-icon.svg'

export function Footer() {
  return (
    <footer className="w-full py-5 bottom-0 left-0 z-50 bg-emerald-950">
      <div className="flex flex-col justify-between items-center max-w-[1920px] mx-auto py-4 px-8 gap-4">
        <div className="flex justify-center items-center w-[102px] h-[102px]">
          <img src={logoIcon} alt="logo" className="w-full h-full" />
        </div>
        <p className="text-green-500 text-xl font-bold">
          FoodLink
        </p>
        <span className="text-green-200 text-xl font-bold">
          @2025 FoodLink - Projeto FIAP
        </span>
      </div>
    </footer>
  )
}