type Props = {
    children: React.ReactNode,
}

const Headline = ({ children }: Props) => {

    const dFlex = { display: "flex", alignItems: "center", justifyContent: "center" }
    const rect = { border: "1px solid #fff", padding: "5px 6vw", margin: "10px 0" }
    const headline = {
        textShadow: "0px 0px 5px #fff", textTransform: "uppercase", textAlign: "center", fontSize: "clamp(2rem, 2.5vw, 4rem)", fontStyle: "normal", fontWeight: "400", lineHeight: "normal"
    }

    return (
        <>
            <div style={{ ...dFlex }}>
                <div style={{ ...rect }}></div>
                <b>&nbsp; A MESSAGE FROM EARTH</b>
            </div>
            <h2 className="hoverable" style={{ ...headline }}>{children}</h2>
            <div style={{ ...dFlex }}>
                <b>A MESSAGE FROM EARTH &nbsp;</b>
                <div style={{ ...rect }}></div>
            </div>
        </>
    )
}

export default Headline