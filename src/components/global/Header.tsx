import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../assets/theme/colors'
import LeagueIcon from '../../assets/images/league-icon.png'
import { BaseButton } from '../shared/BaseButton'
import { Bell } from '@styled-icons/boxicons-solid/Bell'

const MainNavigation = styled.nav`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  height: 100%;
`

const MainNavLinkStyle = styled(BaseButton)<{ active?: boolean }>`
  padding: 0 1.2em;
  background: none;
  border: none;
  font-family: inherit;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  color: ${({ active }) => active ? colors.white : colors.shinyGold};
  position: relative;
  cursor: pointer;
  transition: color 400ms ease;

  &:hover {
    color: ${colors.white};
  }

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

  &::after {
    content: ' ';
    transition: all 800ms ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: radial-gradient(circle at bottom, #FFF3, transparent 25%);
    border-bottom: transparent 1px solid;
    border-image: linear-gradient(to left, transparent 15%, #FFFA, transparent 85%) 1;
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }

  ${({ active }) => active && `
    &::before {
        opacity: 1;
    }
  `}
`

const MainNavLinkArrowStyle = styled.div<{ active?: boolean }>`
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  position: absolute;
  top: 0;
  left: calc(50% - 15px);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid ${colors.darkGold};

  &::before {
    content: ' ';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid ${colors.shinyGold};
    mask-image: linear-gradient(to bottom, transparent, black);
  }

  &::after {
    content: ' ';
    position: absolute;
    top: -15px;
    left: -11px;
    width: 0;
    height: 0;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-top: 11px solid ${colors.bluishBlack};
    z-index: 1;
  }

  > div {
      position: absolute;
      top: -16px;
      left: -6px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid ${colors.darkGold};
      z-index: 2;

      &::before {
          content: ' ';
          position: absolute;
          top: -6px;
          left: -4px;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${colors.bluishBlack};
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

const LOBBY_BUTTON_HEIGHT = '3em'
const INNER_BORDER_COLOR = colors.blue
const INNER_BORDER_COLOR_HOVER = colors.lightBlue
const LobbyButtonStyle = styled(BaseButton)`
  position: relative;
  border: ${colors.darkGold} 1px solid;
  background-color: ${colors.black};
  margin-top: auto;
  margin-bottom: auto;
  height: ${LOBBY_BUTTON_HEIGHT};
  width: 11em;
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
          border-color: ${INNER_BORDER_COLOR_HOVER};
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
      width: calc(${LOBBY_BUTTON_HEIGHT} + 2px);
      height: calc(${LOBBY_BUTTON_HEIGHT} + 2px);
      position: absolute;
      top: -6px;
      left: -21px;
      background-color: ${colors.bluishBlack};
      border: ${INNER_BORDER_COLOR} 2px solid;
      transition: all 300ms ease;
    }
  }

  .inner-frame {
    background-color: ${colors.black};
    border: ${INNER_BORDER_COLOR} 2px solid;
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
  width: ${LOBBY_BUTTON_HEIGHT};
  height: ${LOBBY_BUTTON_HEIGHT};
  left: calc((-${LOBBY_BUTTON_HEIGHT} / 2) + 2px);
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

const HeaderStyle = styled.header`
  height: 80px;
  border-top: ${colors.darkGold} 2px solid;
  border-bottom: ${colors.gray} 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
`

enum Tab {
  START,
  TFT,
  CLASH,
}

const PlayerIconOuterBorder = styled.div`
  border-radius: 50%;
  border: ${colors.darkGold} 2px solid;
  width: 58px;
  height: 58px;
  background-color: ${colors.blue};
  position: relative;
  box-shadow: inset ${colors.bluishBlack} 0 0 3px 1px;
  cursor: pointer;

  &:hover {
    border-color: ${colors.gold};
    &::before {
      border-color: ${colors.shinyGold};
    }

    .inner-border {
      border-color: ${colors.gold};
      &::before {
        border-color: ${colors.shinyGold};
      }
    }
  }

  &::before {
    content: ' ';
    border-radius: 50%;
    border: ${colors.gold} 2px solid;
    width: 54px;
    height: 54px;
    position: absolute;
    top: -2px;
    left: -2px;
    mask-image: linear-gradient(to bottom, black -10%, transparent 60%);
  }

  .inner-border {
    border-radius: 50%;
    border: ${colors.darkGold} 1px solid;
    width: 48px;
    height: 48px;
    box-shadow: inset #000 0 0 4px 3px;
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 24px);

    &::before {
      content: ' ';
      border-radius: 50%;
      border: ${colors.gold} 1px solid;
      width: 46px;
      height: 46px;
      position: absolute;
      top: -1px;
      left: -1px;
      mask-image: linear-gradient(to bottom, black -10%, transparent 60%);
    }
  }
`

const PlayerIconImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
`

function PlayerIcon () {
  return (
    <PlayerIconOuterBorder>
      <PlayerIconImage
        src='https://2.bp.blogspot.com/-RHIPvFu6YEE/XNsenODKYAI/AAAAAAABS5U/Zua0A_dnnmQV2a0-MSQw_H7XYkgwt5z4QCLcBGAs/s200/4154.jpg'
        alt='Player icon'
      />
      <div className='inner-border' />
    </PlayerIconOuterBorder>
  )
}

const PlayerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  height: 100%;

  > * {
    margin: 0 .5em;
  }
`

const PlayerName = styled.div`
  font-size: 1.1em;
  font-weight: bold;
  color: ${colors.white};
`

const PlayerStatusBadge = styled.div`
  color: limegreen;

  &::before {
    content: ' ';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 4px;
    border-radius: 50%;
    background-color: darkgreen;
    box-shadow: inset 0 0 4px 1px limegreen;
  }
`

const NotificationsIcon = styled(Bell)`
  color: ${colors.gray};
  width: 20px;
`

function PlayerInfo () {
  return (
    <PlayerInfoContainer>
      <PlayerIcon />
      <div>
        <PlayerName>
          Splitinator
        </PlayerName>
        <PlayerStatusBadge>
          Online
        </PlayerStatusBadge>
      </div>
      <NotificationsIcon />
    </PlayerInfoContainer>
  )
}

export function Header (): React.ReactElement {
  const [activeTab, setActiveTab] = useState(Tab.START)

  return (
    <HeaderStyle>
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
      <div style={{ flexGrow: 1 }}></div>
      <PlayerInfo />
    </HeaderStyle>
  )
}
