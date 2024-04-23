/* eslint-disable no-empty-pattern */
import { SelectedPage } from "@/shared/types"
import './style.css'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const EduExp = ({ }: Props) => {
    return (
        <section id="educations">Educations & Experiences</section>
    )
}

export default EduExp