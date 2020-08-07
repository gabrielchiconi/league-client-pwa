import { createGlobalStyle } from 'styled-components'
import colors from '../../assets/theme/colors'

export const GlobalStyle = createGlobalStyle`
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
      font-size: 13px;
      font-family: Timeless;
  }

  body {
      background-color: ${colors.black};
      background-image: url(https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/gamemodeassets/classic_sru/img/parties-background.jpg);
      background-position: bottom left;
  }
`
