import styled from 'styled-components';

const Buttondark = () => {
  return (
    <StyledWrapper>
      <button className='cust'>
        <span className="text">Login</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cust{
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
    width: fit-content;}
  button {
    position: relative;
    height: 46px;
    min-width: 140px;
    padding: 0;
    border: none;
    border-radius: 12px;
    background: rgba(10, 10, 20, 0.3);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.3),
      inset 1px 1px 3px rgba(255, 255, 255, 0.05);
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }

  button::before {
    content: "";
    position: absolute;
    inset: -2px;
    z-index: 0;
    background: linear-gradient(135deg, #00f2ff, #a092fe);
    border-radius: 14px;
    filter: blur(12px);
    opacity: 0;
    transition: opacity 0.4s ease;
    box-shadow:
      0 0 18px rgba(0, 208, 255, 0.5),
      0 0 10px rgba(160, 146, 254, 0.4) inset;
  }

  button:hover::before {
    opacity: 1;
  }

  button:active {
    transform: scale(0.95);
  }

  button span {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
  }

  button:hover span {
     background: linear-gradient(135deg, #7f00ff, #e100ff);
  box-shadow:
    0 0 18px rgba(241, 39, 17, 0.5),
    0 0 10px rgba(245, 175, 25, 0.4) inset;
  }
`;

export default Buttondark;
