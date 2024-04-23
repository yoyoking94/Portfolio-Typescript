/* eslint-disable no-empty-pattern */
import { SelectedPage } from '@/shared/types'
import './style.css'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Competences = ({ }: Props) => {
    return (
        <section id='competences'>
            <span className="hoverable">Competences</span>
        </section>
    )
}
export default Competences