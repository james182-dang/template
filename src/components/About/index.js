import Carousel, { CarouselItem } from '../Carousel';
import './style.css';
import 'animate.css';

function About() {
    
    return (
        <div className='about'>
            <h2>About You</h2>
            <Carousel>
                <CarouselItem>Place images here.</CarouselItem>
                <CarouselItem>Hover to Pause.</CarouselItem>
                <CarouselItem>Add features like controls!</CarouselItem>
            </Carousel>

            <p className='aboutText'>
                Here's where you can explain more about yourself or your company
                and a broad overview of your products or services. If you need a portfolio,
                you can go into more detail about yourself here, while featuring some images of you
                or your work. If you need a company website, you can feature images
                displaying your work culture or projects. Need a website for a specific product?
                Display your best shots here while giving some extra details about what it is
                you're offering.    
            </p>
        </div>
    );
}

export default About;