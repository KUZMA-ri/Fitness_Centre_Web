import HeaderImage from '../../images/header_bg_3.jpg';
import Header from '../../components/header/Header';
import './gallery.css';

const Gallery = () => {
const galleryLength = 15;
const images = [];
for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
}

    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum enim aliquam veritatis asperiores beatae blanditiis cumque mollitia labore inventore sapiente.
            </Header>
            <section className='gallery'>
                <div className="container gallery__container">
                    {
                        images.map((image, index) => {
                            return (
                                <article key={index}>
                                    <img src={image} alt={`Gallery image ${index + 1}`} />
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Gallery;