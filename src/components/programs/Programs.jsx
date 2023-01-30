import { Link } from 'react-router-dom';
import { FaCrown } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';
import { programs } from '../../data';
import Card from '../../UI/card/Card';
import SectionHead from '../section-head/SectionHead';
import './programs.css';

const Programs = () => {
    return (
        <section className='programs'>
            <div className="programs__container container">
                <SectionHead icon={<FaCrown />} title="Programs"/>
            <div className="programs__wrapper">
                {
                    programs.map(({id, icon, title, info, path}) => {
                        return(
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">Learn more  <AiFillCaretRight /></Link>
                            </Card>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Programs;