import './Hero.css'
const Hero = () => {
    return <div className="heroContainer">
        <video className='videoContainer' autoPlay muted loop playsInline>
            <source src="https://graff3d.com/wp-content/uploads/2022/10/headers-360.mp4" type="video/mp4" ></source>
        </video>
    </div>
}
export { Hero }