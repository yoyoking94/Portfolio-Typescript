/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './style.css'
import { SelectedPage } from '@/shared/types'
import Link from './Link'
import logo from "@/assets/yovish-space-logo-white.svg"
import Burger from '@/components/Burger'

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul className="hoverable">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Competences" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Educations" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </ul>
            <Burger />
        </nav>
    )
}

export default Navbar