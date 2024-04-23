import './style.css'
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

    const links = { color: "white" }
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

    if (lowerCasePage === String("educations")) {
        page = "Educations & Experiences"
    }

    return (
        <AnchorLink className={`${selectedPage === lowerCasePage} ? "active" : ""`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)} style={{ ...links }}>
            {page}
        </AnchorLink>
    )
}

export default Link