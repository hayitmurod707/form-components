import Input from 'cleave.js/react';
import { bool, func, object, string } from 'prop-types';
import { forwardRef, memo } from 'react';
import styled from 'styled-components';
const StyledInput = styled.div`
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
const DateInput = memo(
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
         <StyledInput>
            <Input
               data-error={isError}
               disabled={isDisabled}
               inputMode='numeric'
               onChange={e => onChange(e.target.value)}
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
                  date: true,
                  datePattern: ['d', 'm', 'Y'],
                  delimiter: '-',
               }}
            />
            <span className='dropdown' data-disabled={isDisabled}>
               <svg fill='none' height='20' viewBox='0 0 20 20' width='20'>
                  <path
                     d='M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5Z'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth='2'
                  />
               </svg>
            </span>
         </StyledInput>
      ),
      {}
   )
);
DateInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func.isRequired,
   onFocus: func,
   placeholder: string,
   value: object.isRequired,
};
export default DateInput;
