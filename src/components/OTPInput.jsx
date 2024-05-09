import { bool, func, number, string } from 'prop-types';
import { memo } from 'react';
import ReactOtpInput from 'react-otp-input';
import styled from 'styled-components';
const StyledElement = styled.div`
   & .react-otp-input {
   }
`;
const StyledInput = styled.input`
   border-radius: 10px;
   background-color: transparent;
   border: 1.5px solid #e1e1e1;
   font-size: 18px;
   font-weight: 600;
   height: 46px;
   margin: 0;
   outline: none;
   padding: 0;
   width: 40px !important;
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
   & + input {
      margin: 0 0 0 8px;
   }
`;
const OTPInput = memo(
   ({
      autoFocus = true,
      isDisabled = false,
      isError = false,
      length = 5,
      onChange,
      onFocus,
      placeholder = '',
      value = '',
   }) => (
      <StyledElement>
         <ReactOtpInput
            containerStyle='react-otp-input'
            numInputs={length}
            onChange={onChange}
            placeholder={placeholder}
            shouldAutoFocus={autoFocus}
            value={value}
            renderInput={props => (
               <StyledInput
                  {...props}
                  data-error={isError}
                  disabled={isDisabled}
                  onFocus={onFocus}
               />
            )}
         />
      </StyledElement>
   )
);
OTPInput.propTypes = {
   autoFocus: bool,
   isDisabled: bool,
   isError: bool,
   length: number,
   onChange: func.isRequired,
   onFocus: func,
   placeholder: string,
   value: string.isRequired,
};
export default OTPInput;
