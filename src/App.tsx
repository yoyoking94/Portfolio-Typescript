import { useState } from "react"
/* ==== import scenes ==== */
import Home from "@/scenes/home"
import Navbar from "@/scenes/navbar"
import Competence from "@/scenes/competence";
import EduExp from "@/scenes/eduExp";
import Projects from "@/scenes/projects";
import Contact from "@/scenes/contact";
/* ==== import components ==== */
import CustomCursor from "@/components/CustomCursor";
/* ==== import types ==== */
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return (
    <>
      <CustomCursor />
      <Home setSelectedPage={setSelectedPage} />
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Competence setSelectedPage={setSelectedPage} />
      <EduExp setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </>
  )
}

export default App
