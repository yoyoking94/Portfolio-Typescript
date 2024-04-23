/* eslint-disable no-empty-pattern */
import './style.css'
import { SelectedPage } from "@/shared/types"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Projects = ({ }: Props) => {
    return (
        <section id='projects'>Projects</section>
    )
}

export default Projects