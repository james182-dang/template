import 'animate.css';
import './style.css';
import image1 from '../../assets/images/home/image1.jpg';

function Home() {

    return (
        <div className='home'>
            <div className='jumbotron'>
                <div className='row'>
                    <div className='jumbotronContent'>
                        <h1>Hello!</h1>

                        <h2>We're (company)</h2>

                        <h3>We provide (service)</h3>

                        <p>Here is where you can introduce your website and services
                           using a clean and sleek page that doesn't overwhelm the user.
                           Add an image, carousel, text, or anything else you'd like to display
                           on your websites home page.
                        </p>
                    </div>

                    <div className='jumbotronImg'>
                        <img src={image1} />
                    </div>    
                </div>    
            </div>
        </div>
    );
}

export default Home;