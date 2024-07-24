import { bool, func, string } from 'prop-types';
import { forwardRef, memo } from 'react';
import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';
const StyledInput = styled.input`
   background-color: transparent;
   border-radius: 10px;
   border: 1.5px solid #e1e1e1;
   font-size: 17px;
   font-weight: 500;
   height: 48px;
   outline: none;
   padding-left: 17px;
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
const PassportInput = memo(
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
         <ReactInputMask
            data-error={isError}
            disabled={isDisabled}
            formatChars={{ a: '[a-zA-Z]', b: '[0-9]' }}
            mask='aa - bbbbbbb'
            maskChar=''
            onFocus={onFocus}
            placeholder={placeholder}
            ref={ref}
            type='text'
            value={value}
            onChange={e => {
               const value = String(e.target.value || '')
                  .toUpperCase()
                  .replace(/-/g, '')
                  .replace(/ /g, '');
               onChange(value);
            }}
         >
            {props => (
               <StyledInput {...props} disabled={isDisabled} ref={ref} />
            )}
         </ReactInputMask>
      ),
      {}
   )
);
PassportInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func,
   onFocus: func,
   placeholder: string,
   value: string,
};
export default PassportInput;
