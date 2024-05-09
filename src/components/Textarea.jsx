import { bool, func, string } from 'prop-types';
import { forwardRef, memo } from 'react';
import styled from 'styled-components';
const StyledTextarea = styled.textarea`
   background-color: transparent;
   border-radius: 10px;
   border: 1.5px solid #e1e1e1;
   font-size: 17px;
   font-weight: 500;
   height: 100px;
   max-height: 200px;
   min-height: 80px;
   outline: none;
   padding: 10px 10px 10px 17px;
   resize: vertical;
   width: 100%;
   &[data-error='true'] {
      border: 1.5px solid #ff5749;
   }
   &:focus {
      border: 1.5px solid #5254f1;
   }
   &:disabled {
      border: 1.5px solid #e1e1e1;
      color: #717171;
   }
`;
const Textarea = memo(
   forwardRef(
      (
         {
            isDisabled = false,
            isError = false,
            onChange,
            onFocus,
            placeholder = '',
            value = '',
         },
         ref
      ) => (
         <StyledTextarea
            data-error={isError}
            disabled={isDisabled}
            onChange={e => onChange(e.target.value)}
            onFocus={onFocus}
            placeholder={placeholder}
            ref={ref}
            value={value}
         />
      ),
      {}
   )
);
Textarea.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func.isRequired,
   onFocus: func,
   placeholder: string,
   value: string.isRequired,
};
export default Textarea;
