import Projectitem from "./Projectitem"
import facebookImg from '../assets/facebook.jpg'
import netflixImg from '../assets/netflix.jpg'

const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] m-auto md:pl-20">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="text-center py-8">Lorem ipsum etc.</p>
            <div className="grid sm:grid-cols-2 gap-12">
                <Projectitem img={facebookImg} title='Facebook App' />
                <Projectitem img={netflixImg} title='Netflix App' />
            </div>
        </div>


    )
}

export default Projects