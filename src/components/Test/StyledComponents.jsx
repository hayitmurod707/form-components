import styled from 'styled-components';
export const StyledInput = styled.div`
   border-radius: 10px;
   height: 46px;
   position: relative;
   width: 100%;
   & input {
      background-color: transparent;
      border-radius: 10px;
      border: 1.5px solid #e1e1e1;
      font-size: 17px;
      font-weight: 500;
      height: 46px;
      outline: none;
      padding-left: 17px;
      width: 100%;
      &[data-error='true'] {
         border: 1.5px solid #e41d32;
      }
      &:focus {
         border: 1.5px solid #3a79f3;
         & + .dropdown {
            color: #3a79f3;
         }
      }
      &:disabled {
         border: 1.5px solid #e1e1e1;
         color: #717171;
      }
   }
   & .dropdown {
      align-items: center;
      color: #949494;
      display: flex;
      height: 24px;
      justify-content: center;
      position: absolute;
      right: 12px;
      top: 10px;
      width: 24px;
   }
`;
