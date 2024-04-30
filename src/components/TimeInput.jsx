import Input from 'cleave.js/react';
import { bool, func, string } from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';
const StyledInput = styled(Input)`
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
      border: 1.5px solid #ff5749;
   }
   &:disabled {
      color: #717171;
   }
   &:focus {
      border: 1.5px solid #5254f1;
   }
`;
const TextInput = forwardRef(
   ({ isError, isDisabled, onChange, onFocus, placeholder, value }, ref) => (
      <StyledInput
         data-error={isError}
         disabled={isDisabled}
         inputMode='numeric'
         onFocus={onFocus}
         placeholder={placeholder}
         type='text'
         value={value}
         htmlRef={inputNode => {
            if (!ref) {
               return;
            }
            if (typeof ref === 'function') {
               ref(inputNode);
            } else {
               ref.current = inputNode;
            }
         }}
         options={{
            time: true,
            timePattern: ['h', 'm', 's'],
         }}
         onChange={e => {
            if (!isDisabled) {
               onChange(e.target.value);
            }
         }}
      />
   )
);
TextInput.defaultProps = {
   isDisabled: false,
   isError: false,
   placeholder: '',
   value: '',
};
TextInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func.isRequired,
   onFocus: func,
   placeholder: string,
   value: string.isRequired,
};
export default TextInput;
