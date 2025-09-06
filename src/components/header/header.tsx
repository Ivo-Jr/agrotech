import logoIcon from '../../assets/logo-icon.svg'
import phoneIcon from '../../assets/phone-icon.svg'
import userIcon from '../../assets/user-icon.svg'
import { SearchInput } from '../searchInput'

export function Header() {
  return (
    <header className="w-full top-0 left-0 z-50 bg-emerald-950">
        <div className="flex justify-between items-center max-w-[1920px] mx-auto py-4 px-8">

        <img src={logoIcon} alt="logo" />

        <nav className='px-10'>
          <ul className="flex items-center gap-8 text-slate-50 text-base">
            <li>HOME</li>
            <li>SOBRE NÓS</li>
            <li>COMO FUNCIONA</li>
            <li>FALE CONOSCO</li>
            <li>ÁREA DO USUÁRIO</li>
          </ul>
        </nav>

        <SearchInput onSearch={() => {}} />

        <div className="flex justify-between items-center w-full max-w-[254px] gap-1">
          <img src={phoneIcon} alt="icon-search" />

          <div className="flex gap-2">
            <img src={userIcon} alt="icon-user" />
            <button className="text-base bg-slate-300 rounded-[16px] px-3 py-1 font-extrabold text-emerald-950">DOAR AGORA</button>
          </div> 
        </div>
      </div>
    </header>
  )
}