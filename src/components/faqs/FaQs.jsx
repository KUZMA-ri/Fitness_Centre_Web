import './faqs.css';
import SectionHead from '../../components/section-head/SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../../data';
import FaQ from './FaQ';

const FaQs = () => {
    return (
        <section className='faqs'>
            <div className="container faqs__container">
                <SectionHead icon = {<FaQuestion/>} title="FaQs"/>
                <div className="faqs__wrapper">
                    {
                        faqs.map(({id, question, answer}) => {
                            return <FaQ key={id} question={question} answer={answer}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FaQs;
