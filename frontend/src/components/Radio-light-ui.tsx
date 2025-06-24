import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Radiolight = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', img: '/images/home.png', path: '/' },
    { id: 'course', label: 'Course', img: '/images/course icon.png', path: '/course' },
    { id: 'blogs', label: 'Blogs', img: '/images/blogs.png', path: '/blogs' },
    { id: 'interview', label: 'Interview', img: '/images/interview.png', path: '/interview' },
    { id: 'practice', label: 'Practice', img: '/images/practice.png', path: '/practice' },
  ];

  const gradients: Record<string, string> = {
    home: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    course: 'linear-gradient(135deg, #f6d365, #fda085)',
    blogs: 'linear-gradient(135deg, #c1dfc4, #deecdd)',
    interview: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
    practice: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
  };

  const shadows: Record<string, string> = {
    home: '0 0 18px rgba(255, 154, 158, 0.5), 0 0 10px rgba(250, 208, 196, 0.4) inset',
    course: '0 0 18px rgba(246, 211, 101, 0.5), 0 0 10px rgba(253, 160, 133, 0.4) inset',
    blogs: '0 0 18px rgba(193, 223, 196, 0.5), 0 0 10px rgba(222, 236, 221, 0.4) inset',
    interview: '0 0 18px rgba(251, 194, 235, 0.5), 0 0 10px rgba(166, 193, 238, 0.4) inset',
    practice: '0 0 18px rgba(161, 196, 253, 0.5), 0 0 10px rgba(194, 233, 251, 0.4) inset',
  };

  const handleClick = (id: string, path: string) => {
    setSelected(id);
    navigate(path);
  };

  return (
    <StyledWrapper>
      <div className="glass-radio-group">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={selected === tab.id ? 'selected' : ''}
            onClick={() => handleClick(tab.id, tab.path)}
          >
            <img src={tab.img} alt={tab.label} />
            {tab.label}
          </button>
        ))}
        <div
          className="glass-glider"
          style={{
            transform: `translateX(${tabs.findIndex((t) => t.id === selected) * 100}%)`,
            background: gradients[selected],
            boxShadow: shadows[selected],
          }}
        />
      </div>
    </StyledWrapper>
  );
};

export default Radiolight;

const StyledWrapper = styled.div`
  .glass-radio-group {
    display: flex;
    position: relative;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: fit-content;
    height: 46px;
  }

  .glass-radio-group button {
    all: unset;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    font-size: 14px;
    padding: 0.8rem 1.6rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    cursor: pointer;
    color: black;
    z-index: 2;
    position: relative;
    transition: color 0.3s ease-in-out;
  }

  .glass-radio-group button.selected,
  .glass-radio-group button:hover {
    color: white;
  }

  .glass-radio-group button img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: calc(100% / 5);
    border-radius: 1rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }
`;
