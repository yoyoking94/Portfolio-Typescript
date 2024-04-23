/* eslint-disable no-empty-pattern */
import "./style.css"
import { SelectedPage } from '@/shared/types'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Contact({ }: Props) {
    return (
        <section id="contact">Contact</section>
    )
}

export default Contact