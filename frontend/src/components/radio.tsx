import styled from 'styled-components';
import { useTheme } from '../Hooks/useTheme';

const Radio = () => {
  const theme = useTheme();
  const homeImg=theme === 'dark' ? '/images/home-light.png':'/images/home.png';
  const course = theme === 'dark'?'/images/course icon-light.png':'/images/course icon.png';
  const blog= theme === 'dark'?'/images/blogs-light.png':'/images/blogs.png';
  const interview= theme === 'dark'?'/images/interview-light.png':'/images/interview.png';
  return (

    <StyledWrapper>
      <div className="glass-radio-group">
        <input
          defaultChecked
          id="glass-home"
          name="plan"
          type="radio"
        />
        <label htmlFor="glass-home">
  <img src={homeImg} alt="Home"/>
  Home
</label>

        <input
          id="glass-course"
          name="plan"
          type="radio"
        />
        <label htmlFor="glass-course">
          <img src={course} alt="course"/>Course</label>

        <input
          id="glass-blogs"
          name="plan"
          type="radio"
        />
        <label htmlFor="glass-blogs">
        <img src={blog} alt="blog" />
        Blogs</label>
        <input
          id="glass-interview"
          name="plan"
          type="radio"
        />
        <label htmlFor="glass-interview">
          <img src={interview} alt="interview" />
          Interview</label>

        <div className="glass-glider" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .glass-radio-group {
    --bg: rgba(255, 255, 255, 0.06);
    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: fit-content;
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    font-size: 14px;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
  }
  .glass-radio-group label img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

  .glass-radio-group label:hover {
    color: white;
  }

  .glass-radio-group input:checked + label {
    color: #fff;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: calc(100% / 4); /* 4 buttons now */
    border-radius: 1rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }

  /* Glider Transforms */
  #glass-home:checked ~ .glass-glider {
    transform: translateX(0%);
    background: linear-gradient(135deg, #00c9ff, #92fe9d);
    box-shadow: 0 0 18px rgba(0, 255, 123, 0.5),
                0 0 10px rgba(0, 153, 255, 0.4) inset;
  }

  #glass-course:checked ~ .glass-glider {
    transform: translateX(100%);
    background: linear-gradient(135deg, #b60000fe, #5900ff);
    box-shadow: 0 0 18px rgba(228, 1, 1, 0.575),
                0 0 10px rgba(103, 87, 246, 0.781) inset;
  }

  #glass-blogs:checked ~ .glass-glider {
    transform: translateX(200%);
    background: linear-gradient(135deg, #b60000fe, #5900ff);
    box-shadow: 0 0 18px rgba(228, 1, 1, 0.575),
                0 0 10px rgba(103, 87, 246, 0.781) inset;
  }

  #glass-interview:checked ~ .glass-glider {
    transform: translateX(300%);
    background: linear-gradient(135deg, #b60000fe, #5900ff);
    box-shadow: 0 0 18px rgba(228, 1, 1, 0.575),
                0 0 10px rgba(103, 87, 246, 0.781) inset;
  }
`;

export default Radio;
