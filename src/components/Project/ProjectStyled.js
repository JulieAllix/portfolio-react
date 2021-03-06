import styled from 'styled-components';
import theme from 'src/styles/theme';

const ProjectStyled = styled.div`
    transition: .6s;

    &:hover {
      transform: scale(1.05);
      transition: .6s;
    }
    .project {
      border: 2px solid lightgrey;
      background-color: #eee;
      padding: .5em;
      /* 
      height: 470px;
      width: 450px;
      */
      margin: 1em 3em;
      box-sizing: content-box;
    }
    .project-picture {
      border: 1px solid lightgrey;
      background-color: white;
      height: 400px;
      width: 430px;
    }
    .image {
      height: 400px;
      width: 430px;
    }
    .project-name {
      width: 100%;
      text-align: center;
      /* padding: .7em; */
      font-size: 1.9em;
      font-family: ${theme.titleFont};
      color: ${theme.colorTwo};
      font-weight: bold;
    }
    .grocereaz {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        border: 2px solid ${theme.colorOne};
        .project-name {
          color: #eee;
        }
        .project-picture {
          border: 1px solid ${theme.colorOne};;
        }
      }
    }
    .breakFree {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        border: 2px solid ${theme.colorOne};
        .project-name {
          color: #eee;
        }
        .project-picture {
          border: 1px solid ${theme.colorOne};;
        }
      }
    }
    .portfolio {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        border: 2px solid ${theme.colorOne};
        .project-name {
          color: #eee;
        }
        .project-picture {
          border: 1px solid ${theme.colorOne};;
        }
      }
    }
    .studyCards {
      &.highlighted--project{
        background-color: ${theme.colorOne};
        border: 2px solid ${theme.colorOne};
        .project-name {
          color: #eee;
        }
        .project-picture {
          border: 1px solid ${theme.colorOne};;
        }
      }
    }
    
    @media only screen and (min-width: 1470px) {
      /*
      .project {
        height: 370px;
         width: 340px; 
      }
      */
      .project-picture {
        height: 300px;
        width: 320px;
      }
      .image {
        height: 300px;
        width: 320px;
      }
  }
`;

export default ProjectStyled;
