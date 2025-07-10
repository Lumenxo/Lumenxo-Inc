import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const services = [
  {
    emoji: '🏢',
    title: 'Administration',
    desc: 'We strategically integrate corporate responsibility into our core operations, ensuring our expertise supports sustainable and efficient business practices.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '💻',
    title: 'Application Development',
    desc: 'Our skilled developers craft robust, scalable, and intuitive applications across platforms using modern technologies and standards.',
    bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '🌐',
    title: 'Web Design',
    desc: 'We build modern, responsive, and user-centric websites with seamless navigation and brand-aligned interfaces.',
    bgImage: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '📈',
    title: 'Digital Marketing',
    desc: 'Boost your brand online with SEO, social media, content marketing, paid ads, email outreach, and analytics.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '🧩',
    title: 'WordPress Development',
    desc: 'We deliver SEO-friendly, custom WordPress websites — from themes to plugins, aligned with your business goals.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    emoji: '⚙️',
    title: 'Backend Development',
    desc: 'Ensure performance with secure APIs, optimized databases, smooth integrations, and scalable backend logic.',
    bgImage: 'https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

const ServicesFlipCardsWithBackground = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="header">
          <h2>Our Services</h2>
          <p>
            At LumenXo Software Pvt. Ltd., we blend innovation, strategy, and technology to deliver high-impact solutions.
            Our services are designed to empower brands, startups, and enterprises in their digital journey.
          </p>
        </div>

        <div className="cards mb-10">
          {services.map((service, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-card-inner">
                <div 
                  className="flip-card-front"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <span className="emoji">{service.emoji}</span>
                  <p className="title">{service.title}</p>
                </div>
                <div 
                  className="flip-card-back"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${service.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <p className="desc">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          className="get-services-btn"
          to="/Services"
        >
          Get Services →
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 1rem;
  min-height: 100vh;
  background: zinc;

  .content {
    max-width: 1200px;
    margin: auto;
    text-align: center;
  }

  .header {
    max-width: 700px;
    margin: 0 auto 3rem auto;
  }

  .header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.75rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header p {
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.6;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .flip-card {
    width: 280px;
    height: 320px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    backface-visibility: hidden;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.1);
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  .flip-card-front {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(139, 92, 246, 0.9));
  }

  .flip-card-back {
    background: linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(55, 65, 81, 0.95));
  }

  .emoji {
    font-size: 3rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 0.5rem;
    text-align: center;
    line-height: 1.3;
  }

  .desc {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    padding: 0 0.5rem;
    text-align: center;
    font-weight: 400;
  }

  .get-services-btn {
    margin-top: 3rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .get-services-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  }

  .get-services-btn:active {
    transform: translateY(-1px) scale(1.02);
  }

  @media (max-width: 768px) {
    .flip-card {
      width: 260px;
      height: 300px;
    }
    
    .header h2 {
      font-size: 2rem;
    }
    
    .cards {
      gap: 1.5rem;
    }
  }
`;

export default ServicesFlipCardsWithBackground;
