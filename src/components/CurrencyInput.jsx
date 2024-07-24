import CleaveInput from 'cleave.js/react';
import { bool, func, string } from 'prop-types';
import { forwardRef, memo } from 'react';
import styled from 'styled-components';
const StyledInput = styled(CleaveInput)`
   background-color: transparent;
   border-radius: 10px;
   border: 1.5px solid #e1e1e1;
   font-size: 17px;
   font-weight: 500;
   height: 48px;
   outline: none;
   padding-left: 15px;
   width: 100%;
   &[data-error='true'] {
      border-color: #e41d32;
   }
   &:disabled {
      background-color: #f4f4f4;
      color: #717171;
      cursor: default;
   }
   &:focus {
      border: 1.5px solid #3a79f3;
   }
`;
const CurrencyInput = memo(
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
         <StyledInput
            data-error={isError}
            disabled={isDisabled}
            inputMode='numeric'
            onChange={e => onChange(e.target.value.replace(/ /g, ''))}
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
               delimiter: ' ',
               numeral: true,
               numeralThousandsGroupStyle: 'thousand',
            }}
         />
      ),
      {}
   )
);
CurrencyInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func,
   onFocus: func,
   placeholder: string,
   value: string,
};
export default CurrencyInput;
