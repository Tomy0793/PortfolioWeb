import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import "../Certifications/Certifications.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"

const certificationsData = [
  {
    id: 'cert-1',
    certificateImage: require('../../images/Content/certificate-english.png'),
    badgeImage: require('../../images/Content/english-badge.png'),
    skillsImage: require('../../images/Content/js-bagde.png'),
  },
  {
    id: 'cert-2',
    certificateImage: require('../../images/Content/certificate-html.png'),
    badgeImage: require('../../images/Content/html-badge.png'),
    skillsImage: require('../../images/Content/js-bagde.png'),
  },
  {
    id: 'cert-3',
    certificateImage: require('../../images/Content/certificate-js.png'),
    badgeImage: require('../../images/Content/js-bagde.png'),
    skillsImage: require('../../images/Content/js-bagde.png'),
  },
  {
    id: 'cert-4',
    certificateImage: require('../../images/Content/certificate-react.png'),
    badgeImage: require('../../images/Content/react-badge.png'),
    skillsImage: require('../../images/Content/js-bagde.png'),
  },
];

const Certifications = () => {
  const [content, setContentVisible] = useState(false);
  const [showCertificate, setShowCertificate] = useState(null);

  useEffect(() => {
    const visible = setTimeout(() => {
      setContentVisible(true);
    }, 6000);

    return () => clearTimeout(visible);
  }, []);

  const hoverCert = (id) => {
    setShowCertificate(id);
    console.log('pasando por el certificado');
  };

  const isCertHovered = (id) => showCertificate === id;

  const handleReset = () => {
    setShowCertificate(null);
  };

  return (
    <div className="principal-container">
      <Loader />
      {content && (
        <>
          {certificationsData.map(({ id, certificateImage, badgeImage, skillsImage }) => (
            <div
              key={id}
              className="certification-container"
              id={id}
              onClick={() => hoverCert(id)}
              style={{
                transform: isCertHovered(id) ? 'scale(1.5)' : 'scale(1)',
                marginTop: isCertHovered(id) ? '113px' : '30px',
                transition: 'transform 0.3s ease-in-out, border 0.3s ease-in-out, margin 0.3s ease-in-out',
                zIndex: isCertHovered(id) ? '2' : '1',
                marginLeft: isCertHovered(id) ? (id === 'cert-1' ? '0px' : '0px') : '0px',
                marginRight: isCertHovered(id) ? (id === 'cert-4' ? '0px' : '0px') : '0px',
              }}
            >
              <img className="img-cert" src={certificateImage} alt="certificate" />
              <img className="img-badge" src={badgeImage} alt="badge" />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Certifications;