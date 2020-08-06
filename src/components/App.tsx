import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../assets/theme/colors'
import LeagueIcon from '../assets/images/league-icon.png'

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  html,
  body,
  #app {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
  }

  #app {
      font-size: 18px;
      font-weight: 600;
      font-family: Timeless;
  }

  body {
      background-color: $color-black;
      background-image: url(https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/gamemodeassets/classic_sru/img/parties-background.jpg);
      background-position: bottom left;
  }
`

const Header = styled.header`
  height: 12%;
  border-top: ${colors.gold} 2px solid;
  border-bottom: ${colors.gray} 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const MainNavigation = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  height: 100%;
`

const BaseButton = styled.button`
  &,
  &:active,
  &:focus {
    outline: none;
  }
`

const MainNavLinkStyle = styled(BaseButton)<{ active?: boolean }>`
  padding: 0 1em;
  margin: 0 .25em;
  background: none;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  font-size: .8em;
  display: flex;
  align-items: center;
  color: ${colors.white};
  position: relative;
  cursor: pointer;

  &::before {
      content: ' ';
      transition: all 400ms ease;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: linear-gradient(to bottom, transparent, #FFFFFF22)
  }

  ${({ active }) => active ? '' : '&:hover {'}
      &::before {
          opacity: 1;
      }
  ${({ active }) => active ? '' : '}'}
`

const MainNavLinkArrowStyle = styled.div<{ active?: boolean }>`
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  position: absolute;
  top: 0;
  left: calc(50% - 12px);
  width: 0;
  height: 0;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 16px solid ${colors.gold};

  &::before {
      content: ' ';
      position: absolute;
      top: -16px;
      left: -11px;
      width: 0;
      height: 0;
      border-left: 11px solid transparent;
      border-right: 11px solid transparent;
      border-top: 13px solid ${colors.bluishBlack};
  }

  > div {
      position: absolute;
      top: -16px;
      left: -6px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 7px solid ${colors.gold};

      &::before {
          content: ' ';
          position: absolute;
          top: -8px;
          left: -4px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid ${colors.bluishBlack};
      }
  }
`

function MainNavLinkArrow (props) {
  return (
    <MainNavLinkArrowStyle {...props}>
      <div />
    </MainNavLinkArrowStyle>
  )
}

const LobbyButtonStyle = styled(BaseButton)`
  position: relative;
  border: ${colors.gold} 1px solid;
  background-color: ${colors.black};
  margin-top: auto;
  margin-bottom: auto;
  height: 44px;
  width: 12em;
  padding-left: 2em;
  margin-left: 32px;
  margin-right: 10px;
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: bold;
  font-family: Timeless;
  cursor: pointer;

  &:hover {
      .outer-frame::before,
      .inner-frame {
          border-color: ${colors.lightBlue};
      }
  }

  .outer-frame {
    border: ${colors.bluishBlack} 3px solid;
    overflow: hidden;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: stretch;
    justify-content: stretch;
    height: 100%;
    width: 100%;
    transition: all 300ms ease;

    &::before {
      content: ' ';
      display: block;
      border-radius: 50%;
      width: 46px;
      height: 46px;
      position: absolute;
      top: -6px;
      left: -21px;
      background-color: ${colors.bluishBlack};
      border: ${colors.gray} 2px solid;
      transition: all 300ms ease;
    }
  }

  .inner-frame {
    background-color: ${colors.black};
    border: ${colors.gray} 2px solid;
    flex-grow: 1;
    padding-left: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    letter-spacing: 1px;
    transition: all 300ms ease;
  }
`

function LobbyButton ({ children }) {
  return (
    <LobbyButtonStyle>
      <span className='outer-frame'>
        <span className='inner-frame'>
          {children}
        </span>
      </span>
      <Logo />
    </LobbyButtonStyle>
  )
}

const LogoStyle = styled.img`
  width: 44px;
  height: 44px;
  left: -18px;
  top: -1px;
  position: absolute;
`

function Logo () {
  return (
    <LogoStyle src={LeagueIcon} alt='League of Legends' />
  )
}

function MainNavLink ({ children, active = false, onClick }) {
  return (
    <MainNavLinkStyle onClick={onClick} active={active}>
      {children}
      <MainNavLinkArrow active={active} />
    </MainNavLinkStyle>
  )
}

enum Tab {
  START,
  TFT,
  CLASH,
}

export function App (): React.ReactElement {
  const [activeTab, setActiveTab] = useState(Tab.START)

  return (
    <>
      <GlobalStyle />
      <Header>
        <MainNavigation>
          <LobbyButton>
            Play
          </LobbyButton>
          <MainNavLink onClick={() => setActiveTab(Tab.START)} active={activeTab === Tab.START}>
            Start
          </MainNavLink>
          <MainNavLink onClick={() => setActiveTab(Tab.TFT)} active={activeTab === Tab.TFT}>
            TFT
          </MainNavLink>
          <MainNavLink onClick={() => setActiveTab(Tab.CLASH)} active={activeTab === Tab.CLASH}>
            Clash
          </MainNavLink>
        </MainNavigation>
      </Header>
    </>
  )
}
