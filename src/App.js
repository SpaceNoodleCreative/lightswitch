import React, { Component } from "react";
import bulb from "./img/bulb.png";
import { ThemeProvider } from "styled-components";
import * as sc from "./style";
import { Icon } from "react-icons-kit";
import { heart, code } from "react-icons-kit/fa";

const { theme, WrapperSc, GlowSc, CableSc, BulbSc, Footer, FooterIcon } = sc;

class App extends Component {
  state = {
    on: false,
    hovered: false
  };
  onClick = ev => {
    this.setState(state => ({ on: !state.on }));
  };
  onMouseEnter = ev => {
    this.setState({ hovered: true });
  };
  onMouseLeave = ev => {
    this.setState({ hovered: false });
  };
  render() {
    return (
      <ThemeProvider theme={this.state.on ? theme.on : theme.off}>
        <WrapperSc className={this.state.on && "on"}>
          <GlowSc
            onClick={this.onClick}
            className={
              (this.state.hovered ? "hovered" : "") +
              " " +
              (this.state.on ? "on" : "")
            }
          >
            <CableSc />
            <BulbSc
              src={bulb}
              alt="lightbulb"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
            />
          </GlowSc>
          <Footer>
            <div>
              Made with
              <a href="/" title="Back home">
                <FooterIcon>
                  <Icon size="1.5em" icon={heart} />
                </FooterIcon>
              </a>
              because of reasons
            </div>
            <a
              href="https://github.com/tomsyadvichuks/lightswitch"
              target="blank"
            >
              <FooterIcon>
                <Icon size="1.5em" icon={code} />
              </FooterIcon>
            </a>
          </Footer>
        </WrapperSc>
      </ThemeProvider>
    );
  }
}
export default App;
