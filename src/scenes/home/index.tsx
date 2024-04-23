/* eslint-disable no-empty-pattern */

import './style.css'
import Button from '@/components/Button';
import Headline from '@/components/Headline';
import ScrollDown from '@/components/ScrollDown';
import { SelectedPage } from '@/shared/types';

import { FaGithub, FaCodepen, FaStackOverflow, FaLinkedinIn } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function Home({ }: Props) {

    const separation = { margin: "50px", width: "40 vw", height: "1px" }

    return (
        <section className='home' id='home'>
            <Headline>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Hello there :)")
                            .pauseFor(500)
                            .deleteChars(21)
                            .start();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Headline>
            <hr style={{ ...separation }} />
            <div className='homeLink'>
                <Button redirect={"https://github.com/yoyoking94"}><FaGithub /></Button>
                <Button redirect={"https://codepen.io/yoyoking94"}><FaCodepen /></Button>
                <Button redirect={"https://stackoverflow.com/users/16032045/yoyoking94"}><FaStackOverflow /></Button>
                <Button redirect={"https://fr.linkedin.com/in/yovish-moonesamy-53247b183"}><FaLinkedinIn /></Button>
            </div>
            <ScrollDown></ScrollDown>
        </section >
    )
}

export default Home