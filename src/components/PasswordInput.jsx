import { bool, func, string } from 'prop-types';
import { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
const StyledComponent = styled.div`
   position: relative;
   & input {
      background-color: transparent;
      border-radius: 10px;
      border: 1.5px solid #e1e1e1;
      font-size: 17px;
      font-weight: 500;
      height: 46px;
      outline: none;
      padding-left: 17px;
      padding-right: 44px;
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
         border: 1.5px solid #5254f1;
      }
      &:disabled {
         color: #717171;
      }
      &::placeholder {
         letter-spacing: initial;
      }
   }
   & .toggle {
      align-items: center;
      cursor: pointer;
      display: flex;
      height: 100%;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 0;
      width: 44px;
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
const PasswordInput = forwardRef(
   (
      { value, onChange, onFocus, placeholder, isDisabled, isError },
      incomingRef
   ) => {
      const [type, setType] = useState(false);
      const ref = useRef(null);
      return (
         <StyledComponent>
            <input
               data-error={isError}
               disabled={isDisabled}
               onFocus={onFocus}
               placeholder={placeholder}
               ref={incomingRef ? incomingRef : ref}
               type={type ? 'text' : 'password'}
               value={value}
               onChange={e => {
                  if (!isDisabled) {
                     onChange(e.target.value);
                  }
               }}
            />
            <div
               className='toggle'
               onClick={() => {
                  setType(!type);
                  if (incomingRef) {
                     incomingRef.current.focus();
                  } else {
                     ref.current.focus();
                  }
               }}
            >
               {type ? <Close /> : <Open />}
            </div>
         </StyledComponent>
      );
   }
);
PasswordInput.defaultProps = {
   isDisabled: false,
   isError: false,
   placeholder: '',
   value: '',
};
PasswordInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func.isRequired,
   onFocus: func,
   placeholder: string,
   value: string.isRequired,
};
export default PasswordInput;
