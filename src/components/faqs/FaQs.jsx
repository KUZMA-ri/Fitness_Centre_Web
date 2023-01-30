import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../../data';
import SectionHead from '../../components/section-head/SectionHead';
import FaQ from './FaQ';
import './faqs.css';

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
