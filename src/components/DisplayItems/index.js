import { BsSun } from 'react-icons/bs';
import items from './items.json';
import './style.css';

function DisplayItems() {
    
    return (
        <div className='items row justify-content-center'>
            {
                items && items.length > 0 && items.map((item) =>
                <div className='item col-lg-5 col-md-11'>
                    <img src={require('../../assets/images/displays/' + item.image + '.png')} alt={item.title} className='image' />
                    <div className='item-info'>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className='icons'>
                            <i><a href={item.link} target='_blank'><BsSun /></a></i>    
                        </div>    
                    </div>
                </div>)
            }    
        </div>
    );
}

export default DisplayItems;