import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Tentang Saya" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Nama saya Nawaf Naofal sering dipanggil Nawaf dan saya adalah anak ke 2 dari 3 bersaudara, saya berasal dari Subang, Hobi saya adalah bermain game. Dan saya ingin membanggakan kedua orangtua .'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Saya adalah mahasiswa Politeknik Pos Indonesia dan saya mengambil jurusan D4 Teknik Informatika karena jurusan ini memiliki prospek kerja yang bagus. Gaji yang ditawarkan untuk para pekerja di bidang ini pun tergolong tinggi, bahkan untuk seorang fresh graduate.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Sekilas tentang saya jika ada yang ingin ditanyakan bisa kontak saya untuk informasi lebih lanjut. Terimakasih.'}
                </p>
                
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
