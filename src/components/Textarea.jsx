import { bool, func, string } from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';
const StyledTextarea = styled.textarea`
   background-color: transparent;
   border-radius: 10px;
   border: 1.5px solid #e1e1e1;
   font-size: 17px;
   font-weight: 500;
   height: 100px;
   outline: none;
   padding: 10px 10px 10px 17px;
   resize: vertical;
   width: 100%;
   max-height: 200px;
   min-height: 80px;
   margin: 0;
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
const Textarea = forwardRef(
   ({ isError, isDisabled, onChange, onFocus, placeholder, value }, ref) => (
      <StyledTextarea
         data-error={isError}
         disabled={isDisabled}
         onFocus={onFocus}
         placeholder={placeholder}
         ref={ref}
         value={value}
         onChange={e => {
            if (!isDisabled) {
               onChange(e.target.value);
            }
         }}
      />
   )
);
Textarea.defaultProps = {
   isDisabled: false,
   isError: false,
   placeholder: '',
   value: '',
};
Textarea.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func.isRequired,
   onFocus: func,
   placeholder: string,
   value: string.isRequired,
};
export default Textarea;
