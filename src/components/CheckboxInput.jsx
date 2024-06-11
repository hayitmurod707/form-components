import { bool, func, string } from 'prop-types';
import { forwardRef, memo, useId } from 'react';
import styled from 'styled-components';
const StyledInput = styled.input`
   appearance: none;
   background-color: transparent;
   border-radius: 6px;
   border: 2px solid #ff2e00;
   cursor: pointer;
   height: 24px;
   margin: -2px 10px 0 0;
   min-width: 24px;
   opacity: 1;
   padding: 0;
   position: relative;
   width: 24px;
   &:focus {
      outline: none;
   }
   &:checked {
      background-color: #ff2e00;
      border: 2px solid #ff2e00;
      &:before {
         left: 2px;
         top: 11px;
         transform: rotate(44deg);
         width: 8px;
      }
      &:after {
         left: 5px;
         top: 8px;
         transform: rotate(-55deg);
         width: 14px;
      }
   }
   &:before {
      background-color: var(--white);
      content: '';
      height: 2px;
      position: absolute;
   }
   &:after {
      background-color: var(--white);
      content: '';
      height: 2px;
      position: absolute;
   }
`;
const CheckboxInput = memo(
   forwardRef(
      (
         { checked = false, id: innerId = '', isDisabled = false, onChange },
         ref
      ) => {
         const id = useId();
         return (
            <StyledInput
               checked={checked}
               disabled={isDisabled}
               id={innerId || id}
               onChange={e => onChange(e.target.checked)}
               ref={ref}
               type='checkbox'
            />
         );
      },
      {}
   )
);
CheckboxInput.propTypes = {
   checked: bool,
   id: string,
   isDisabled: bool,
   onChange: func,
};
export default CheckboxInput;
