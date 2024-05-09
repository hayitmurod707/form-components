import { bool, func } from 'prop-types';
import { forwardRef, memo, useId } from 'react';
import styled from 'styled-components';
const StyledComponent = styled.div`
   border-radius: 14px;
   cursor: pointer;
   display: inline-block;
   height: 28px;
   overflow: hidden;
   position: relative;
   width: 48px;
   & input {
      display: none;
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
const SwitchInput = memo(
   forwardRef(({ checked = false, isDisabled = false, onChange }, ref) => {
      const id = useId();
      return (
         <StyledComponent>
            <input
               checked={checked}
               disabled={isDisabled}
               id={id}
               onChange={e => onChange(e.target.checked)}
               ref={ref}
               type='checkbox'
            />
            <label htmlFor={id}>
               <span></span>
            </label>
         </StyledComponent>
      );
   }, {})
);
SwitchInput.propTypes = {
   checked: bool,
   isDisabled: bool,
   onChange: func,
};
export default SwitchInput;
