import { bool, func } from 'prop-types';
import { useId } from 'react';
import styled from 'styled-components';
const StyledComponent = styled.div`
   border-radius: 14px;
   cursor: pointer;
   display: inline-block;
   height: 28px;
   overflow: hidden;
   width: 48px;
   position: relative;
   & input {
      height: 0;
      left: 0;
      position: absolute;
      top: 0;
      width: 0;
      visibility: hidden;
      &:checked {
         & + label {
            background-color: #3a79f3;
            & span {
               transform: translateX(100%);
            }
         }
      }
   }
   & label {
      background-color: #d1d5db;
      border-radius: 14px;
      cursor: pointer;
      display: block;
      height: 100%;
      padding: 4px;
      transition: background-color 400ms ease;
      width: 100%;
      &:hover {
         background-color: #b7bcc5;
      }
      & span {
         background-color: #ffffff;
         border-radius: 10px;
         display: block;
         height: 20px;
         transition: transform 400ms ease, background-color 400ms ease;
         width: 20px;
      }
   }
`;
const CheckboxInput = ({ checked, onChange }) => {
   const id = useId();
   return (
      <StyledComponent>
         <input
            checked={checked}
            id={id}
            type='checkbox'
            onChange={e => {
               onChange(e.target.checked);
            }}
         />
         <label htmlFor={id}>
            <span></span>
         </label>
      </StyledComponent>
   );
};
CheckboxInput.defaultProps = {
   checked: false,
};
CheckboxInput.propTypes = {
   checked: bool,
   onChange: func,
};
export default CheckboxInput;
