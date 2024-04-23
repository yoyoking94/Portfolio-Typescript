import '@/scenes/home/style.css'

const ScrollDown = () => {
    return (
        <div className='scroll hoverable'>
            <div className='scrolldown' onClick={() => window.location.href = '#competences'}>
                <div className="chevrons">
                    <div className='chevrondown'></div>
                    <div className='chevrondown'></div>
                </div>
            </div >
        </div>
    )
}

export default ScrollDown