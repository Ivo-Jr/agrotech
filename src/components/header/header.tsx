import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoIcon from '../../assets/logo-icon.svg'
import phoneIcon from '../../assets/phone-icon.svg'
import userIcon from '../../assets/user-icon.svg'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full top-0 left-0 z-50 bg-emerald-950 text-white">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto py-4 px-6 lg:px-8">

        <img src={logoIcon} alt="logo" />

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-base font-semibold">
            <li className="hover:text-emerald-300 transition">HOME</li>
            <li className="hover:text-emerald-300 transition">SOBRE NÓS</li>
            <li className="hover:text-emerald-300 transition">COMO FUNCIONA</li>
            <li className="hover:text-emerald-300 transition">FALE CONOSCO</li>
            <li className="hover:text-emerald-300 transition">ÁREA DO USUÁRIO</li>
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <img src={phoneIcon} alt="Telefone" className="w-6 h-6" />
          <div className="flex items-center gap-2">
            <img src={userIcon} alt="Usuário" className="w-6 h-6" />
            <button className="text-sm bg-slate-300 rounded-[16px] px-4 py-1 font-extrabold text-emerald-950 hover:bg-white transition">
              DOAR AGORA
            </button>
          </div>
        </div>

        <button
          className="block lg:hidden z-50"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`fixed top-0 left-0 h-screen w-full bg-emerald-950 text-white transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:hidden
      `}>
        <div className="flex flex-col items-center justify-center gap-6 mt-24 text-xl font-semibold">
          <a href="#" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>SOBRE NÓS</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>COMO FUNCIONA</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>FALE CONOSCO</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>ÁREA DO USUÁRIO</a>

          <div className="flex items-center gap-3 mt-6">
            <img src={phoneIcon} alt="Telefone" className="w-6 h-6" />
            <img src={userIcon} alt="Usuário" className="w-6 h-6" />
            <button className="text-sm bg-slate-300 rounded-[16px] px-4 py-1 font-extrabold text-emerald-950 hover:bg-white transition">
              DOAR AGORA
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
