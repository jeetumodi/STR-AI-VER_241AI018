import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="glass-radio-group">
        <div className="home-tab">Home</div>

        <input defaultChecked id="glass-course" name="plan" type="radio" />
        <label htmlFor="glass-course">Course</label>

        <input id="glass-blogs" name="plan" type="radio" />
        <label htmlFor="glass-blogs">Blogs</label>

        <input id="glass-interview" name="plan" type="radio" />
        <label htmlFor="glass-interview">Interview</label>

        <div className="glass-glider" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .glass-radio-group {
    --bg: rgba(255, 255, 255, 0.06);
    --text: #e5e5e5;

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

  .glass-radio-group label,
  .glass-radio-group .home-tab {
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

  .glass-radio-group label:hover,
  .glass-radio-group .home-tab:hover {
    color: white;
  }

  .glass-radio-group input:checked + label {
    color: #fff;
  }

  .glass-radio-group .home-tab {
    pointer-events: auto;
    background: transparent;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text);
    min-width: 80px;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 80px; /* Width of home-tab */
    width: calc(100% / 4); /* 3 options + 1 home-tab = 4 total slots */
    border-radius: 1rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }

  /* Course */
  #glass-course:checked ~ .glass-glider {
    transform: translateX(40%);
    background: linear-gradient(135deg, #b60000fe, #5900ff);
    box-shadow: 0 0 18px rgba(228, 1, 1, 0.575),
                0 0 10px rgba(103, 87, 246, 0.781) inset;
  }

  /* Blogs */
  #glass-blogs:checked ~ .glass-glider {
    transform: translateX(140%);
    background: linear-gradient(135deg, #b60000fe, #5900ff);
    box-shadow: 0 0 18px rgba(228, 1, 1, 0.575),
                0 0 10px rgba(103, 87, 246, 0.781) inset;
  }

  /* Interview */
  #glass-interview:checked ~ .glass-glider {
    transform: translateX(240%);
    background: linear-gradient(135deg, #b60000fe, #5900ff);
    box-shadow: 0 0 18px rgba(228, 1, 1, 0.575),
                0 0 10px rgba(103, 87, 246, 0.781) inset;
  }
`;

export default Radio;
