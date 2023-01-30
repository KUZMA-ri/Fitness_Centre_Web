import { MdEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import HeaderImage from '../../images/header_bg_2.jpg';
import Header from '../../components/header/Header';
import './contact.css';

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet illo pariatur error dolores suscipit laborum excepturi ea quae, doloremque tenetur itaque.
            </Header>
            <section className='contact'>
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="mailto:support@maryna_kuzmiankova@mail.ru" target="_blank" rel="noreferrer nooperer"><MdEmail /></a>
                        <a href="https://www.linkedin.com/in/marina-kuzmiankova-b03736248/" target="_blank" rel="noreferrer nooperer"><AiOutlineLinkedin /></a>
                        <a href="https://github.com/KUZMA-ri" target="_blank" rel="noreferrer nooperer"><AiFillGithub /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact