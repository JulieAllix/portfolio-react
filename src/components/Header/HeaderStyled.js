import styled from 'styled-components';
import theme from 'src/styles/theme';


const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100vw;
  border: 1px solid lightgrey;

  .julie {
    font-family: ${theme.julieFont};
    font-size: 2.3em;
    margin: auto .5em;
    color: ${theme.colorOne};
    width: 100%;
    text-align: center;
  }
  .burger-menu {
    display: block;
    margin-right: 1em;
  }
  .menu {
    display: none;
  }

  @media only screen and (min-width: 650px) {
    .julie {
      text-align: left;
    }
    .burger-menu {
      display: none;
    }
    .menu {
      display: flex;
      flex-direction: row;
      font-family: ${theme.contentFont};
      margin: auto 1em;
      position: relative;
    }
    .menu-link {
      margin: auto .5em;
      cursor: pointer;
      font-size: 1.3em;
    }
    .dropdown {
      position: absolute;
      top: 1.7em;
      left: .2em;
    }
    .dropdown-item {
      font-size: 1.3em;
      margin-top: .5em;
      margin-left: .3em;
    }

    .grocereaz {
      transform: translateX(1000px);
      transition: .6s;
      &.projects--open{
        display: flex;
        transform: translateX(0);
      }
    }
    .break-free {
      transform: translateX(1000px);
      transition: .7s;
      &.projects--open{
        display: flex;
        transform: translateX(0);
      }
    }
    .study-cards {
      transform: translateX(1000px);
      transition: .8s;
      &.projects--open{
        display: flex;
        transform: translateX(0);
      }
    }

  }
`;

export default HeaderStyled;
