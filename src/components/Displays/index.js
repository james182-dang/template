import DisplayItems from '../DisplayItems';
import './style.css';
import 'animate.css';

function Displays() {
    return (
        <section className='displays'>
            <div>
                <h1>Displays</h1>
                <p>Here you can display specific projects, achievements, or services, with images and links.</p>
                <DisplayItems />
            </div>
        </section>
    );
}

export default Displays;