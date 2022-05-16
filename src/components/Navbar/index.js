import './style.css';

function Navbar(props) {

    return (
        <header className='flex-wrap'>
            <h1>
                <a href='#home' onClick={() => props.setCurrentDisplay('Home')}>Homepage</a>
            </h1>

            <nav className='d-flex flex-wrap'>
                <ul className='d-flex justify-content-between mb-0'>
                    <li>
                        <a href='#about' onClick={() => props.setCurrentDisplay('About')}>About</a>    
                    </li>
                    <li>
                        <a href='#displays' onClick={() => props.setCurrentDisplay('Displays')}>Displays</a>    
                    </li>    
                    <li>
                        <a href='#links' onClick={() => props.setCurrentDisplay('Links')}>Links</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={() => props.setCurrentDisplay('Contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;