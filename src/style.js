import styled from "styled-components";

export const theme = {
  on: {
    bg: "orange",
    main: "rgba(0,0,0,.3)",
    glow: "radial-gradient(white, transparent 50%)"
  },
  off: {
    bg: "black",
    main: "rgba(254,254,254,.15)",
    glow: "radial-gradient(rgba(254, 254, 254, 0.15), transparent 50%)"
  }
};

export const WrapperSc = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.main};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: sans-serif;
  text-align: center;
  transition: background 0.2s;
`;
export const GlowSc = styled.div`
  background: ${props => props.theme.glow};
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  transition: transform 0.2s, background 1s;
  &.hovered {
    transform: translateY(0.5em);
  }
  &:active {
    transform: translateY(2em);
  }
  cursor: pointer;
`;
export const CableSc = styled.div`
  width: 2px;
  background: black;
  position: absolute;
  top: 0;
  bottom: 50%;
  left: 50%;
  margin-top: -5em;
  margin-bottom: 3.8em;
  margin-top: -2em;
`;
export const BulbSc = styled.img`
  width: 10em;
  max-width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
`;
export const Footer = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em 1em 1em 2em;
  color: ${props => props.theme.main};
  font-size: 75%;
  display: flex;
  justify-content: space-between;
`;
export const FooterIcon = styled.span`
  color: #8a16cf;
  opacity: 0.5;
  margin: 0 0.5em;
  display: inline-block;
  vertical-align: middle;
`;
