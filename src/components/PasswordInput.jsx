import { bool, func, string } from 'prop-types';
import { forwardRef, memo, useRef, useState } from 'react';
import styled from 'styled-components';
const StyledComponent = styled.div`
   position: relative;
   & input {
      background-color: #ffffff;
      border-radius: 10px;
      border: 1.5px solid #e1e1e1;
      color: #000000;
      font-size: 16px;
      font-weight: 500;
      height: 48px;
      outline: none;
      padding-left: 15px;
      padding-right: 45px;
      width: 100%;
      &[data-error='true'] {
         border: 1.5px solid #ff5749;
      }
      &[type='password'] {
         letter-spacing: 2px;
      }
      &[type='text'] {
         letter-spacing: initial;
      }
      &:focus {
         border: 1.5px solid #3a79f3;
      }
      &:disabled {
         background-color: #f4f4f4;
         color: #717171;
         cursor: default;
      }
      &::placeholder {
         letter-spacing: initial;
      }
   }
   & .toggle {
      align-items: center;
      border-radius: 20px;
      color: #808080;
      cursor: pointer;
      display: flex;
      height: 40px;
      justify-content: center;
      position: absolute;
      right: 5px;
      top: 4px;
      user-select: none;
      width: 40px;
      &[data-disabled='false'] {
         &:hover {
            background-color: #f1f1f1;
         }
      }
   }
`;
const Open = () => (
   <svg
      fill='none'
      height='20'
      stroke='#6E7892'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      width='20'
   >
      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
      <circle cx='12' cy='12' r='3'></circle>
   </svg>
);
const Close = () => (
   <svg
      fill='none'
      height='20'
      stroke='#6E7892'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      width='20'
   >
      <path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24'></path>
      <line x1='1' y1='1' x2='23' y2='23'></line>
   </svg>
);
const PasswordInput = memo(
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
         innerRef
      ) => {
         const [type, setType] = useState(false);
         const ref = useRef(null);
         const currentRef = innerRef ? innerRef : ref;
         return (
            <StyledComponent>
               <input
                  className='password-input'
                  data-error={isError}
                  disabled={isDisabled}
                  onChange={e => onChange(e.target.value)}
                  onFocus={onFocus}
                  placeholder={placeholder}
                  ref={currentRef}
                  type={type ? 'text' : 'password'}
                  value={value}
               />
               <div
                  className='toggle'
                  data-disabled={isDisabled}
                  onClick={() => {
                     setType(!type);
                     currentRef.current.focus();
                  }}
               >
                  {type ? <Close /> : <Open />}
               </div>
            </StyledComponent>
         );
      },
      {}
   )
);
PasswordInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func,
   onFocus: func,
   placeholder: string,
   value: string,
};
export default PasswordInput;
