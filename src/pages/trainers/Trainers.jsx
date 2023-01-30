import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { trainers } from '../../data';
import HeaderImage from '../../images/header_bg_5.jpg';
import Header from '../../components/header/Header';
import Trainer from '../../components/trainer/Trainer';
import './trainers.css';

const Trainers = () => {
    return (
        <> 
            <Header title="Our Trainers" image={HeaderImage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ab aut eius officiis corrupti a laborum culpa magnam quae sed neque hic nesciunt natus ex, consectetur possimus explicabo repellat totam.
            </Header>
            <section className='trainers'>
                <div className="container trainers__container">
                    {
                        trainers.map(({id, image, name, job, socials}) => {
                            return (
                                <Trainer key={id} image={image} name={name} job={job} socials={
                                    [
                                        {icon: <BsInstagram />, link: socials[0]},
                                        {icon: <AiOutlineTwitter />, link: socials[1]},
                                        {icon: <FaFacebookF />, link: socials[2]},
                                        {icon: <FaLinkedinIn />, link: socials[3]},
                                    ]
                                } />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Trainers;