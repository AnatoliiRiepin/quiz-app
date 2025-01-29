import twitter from './../icons/twitter.svg';
import linkedIn from './../icons/linkedIn.svg';
import gitHub from './../icons/gitHub.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={twitter} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={gitHub} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={linkedIn} alt="Link" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;