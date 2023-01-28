import './home.css';
import MainHeader from '../../components/main-header/MainHeader';
import Programs from '../../components/programs/Programs';
import Values from '../../components/values/Values';
import FaQs from '../../components/faqs/FaQs';
import Testimonials from '../../components/testimonials/Testimonials';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <>
            <MainHeader />
            <Programs />
            <Values /> 
            <FaQs />
            <Testimonials />
            <Footer />
        </>
    )
}

export default Home;