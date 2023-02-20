import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className='socials'>
                <div className='social'>
                    <a href='facebook.com' target={'_blank'}>
                    <img src={require('./fb.png')}  alt='Facebook'/>
                    </a>
                    
                </div>
                <div className='social'>
                    <a href='twiter.com' target={'_blank'}>
                        <img src={require('./tw.png')}  alt='Twitter'/>
                    </a>
                </div>
                <div className='social'> 
                    <a href='instagram.com' target={'_blank'}>
                        <img src={require('./ig.png')}  alt='Instagram'/>
                    </a>
                </div>
            </div>
            <div className='logo-container'>
                <div className='logo'>
                    <img src={require('./squadlogo.png')}  alt='Logo'/>
                </div>
            </div>
            <div className='developed'>
                Desenvolvido por <a href='https://github.com/jltrench' target={'_blank'} rel="noreferrer">João Lucca Trench.</a>
            </div>
        </footer>
    );
}

// ../../../public/images/fb.png