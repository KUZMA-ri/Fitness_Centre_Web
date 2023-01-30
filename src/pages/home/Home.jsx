import MainHeader from '../../components/main-header/MainHeader';
import Programs from '../../components/programs/Programs';
import Values from '../../components/values/Values';
import FaQs from '../../components/faqs/FaQs';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <MainHeader />
            <Programs />
            <Values /> 
            <FaQs />
            <Testimonials />
        </>
    )
}

export default Home;