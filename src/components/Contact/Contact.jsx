import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, kontak } = contact;

  return (
    <section id="contact">
      <Container>
        
        <Title title="Kontak" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Apakah ada yang ingin ditanyakan?'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={kontak || ''}
            >
              {btn || "Chat Saya!"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
