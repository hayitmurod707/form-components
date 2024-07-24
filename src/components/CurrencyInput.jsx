import CleaveInput from 'cleave.js/react';
import { bool, func, string } from 'prop-types';
import { memo } from 'react';
import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';
const StyledInput = styled(CleaveInput)`
   background-color: transparent;
   border-radius: 10px;
   border: none;
   display: flex;
   font-size: 17px;
   font-weight: 500;
   height: 100%;
   max-width: 100% !important;
   min-width: 100% !important;
   opacity: 1 !important;
   outline: none;
   padding-left: 16px;
   width: 100%;
`;
const StyledControl = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
`;
const StyledSlider = styled.input`
   appearance: none;
   bottom: -2px;
   cursor: pointer;
   height: 4px;
   left: 5px;
   margin: 0;
   max-width: 700px;
   position: absolute;
   width: calc(100% - 10px);
   -webkit-appearance: none;
   accent-color: #5254f1;
   background-color: #e1e1e1;
   &:focus {
      outline: none;
   }
   &::-webkit-slider-runnable-track {
      border-radius: 2px;
      height: 4px;
      color: #5254f1;
      width: 100%;
   }
   &::-webkit-slider-thumb {
      appearance: none;
      background-color: #5254f1;
      border-radius: 100%;
      border: none;
      height: 20px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: background-color 150ms;
      width: 20px;
   }
   &::-webkit-range-progress {
      background-color: #5254f1;
   }
   &::-moz-range-thumb {
      appearance: none;
      background-color: #5254f1;
      border-radius: 100%;
      border: 0;
      height: 20px;
      margin: 0;
      transition: background-color 150ms;
      width: 20px;
   }
   &::-moz-range-track,
   &::-moz-range-progress {
      background-color: #e1e1e1;
      border-radius: 2px;
      height: 4px;
      width: 100%;
   }
   &::-moz-range-progress {
      background-color: #5254f1;
   }
   &::-ms-track {
      background-color: transparent;
      border: 0;
      color: transparent;
      height: 4px;
      width: 100%;
   }
   &::-ms-fill-lower {
      background-color: #5254f1;
   }
   &::-ms-fill-upper {
      background-color: #5254f1;
   }
   &::-ms-thumb {
      appearance: none;
      background-color: #5254f1;
      border-radius: 100%;
      border: 0;
      box-shadow: none;
      height: 32px;
      margin: 0;
      top: 0;
      transition: background-color 150ms;
      width: 32px;
   }
`;
const Control = props => (
   <components.Control {...props}>
      <StyledControl>{props?.children}</StyledControl>
      <StyledSlider
         max='10000000'
         min='0'
         step='1000'
         type='range'
         value={props?.selectProps?.inputValue}
         onChange={e =>
            props?.selectProps?.onInputChange(e.target.value, {
               action: 'input-change',
            })
         }
      />
   </components.Control>
);
const Input = ({
   isDisabled = false,
   onBlur,
   onChange,
   onFocus,
   placeholder = '',
   value = '',
}) => (
   <StyledInput
      disabled={isDisabled}
      inputMode='numeric'
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      type='text'
      value={value}
      options={{
         delimiter: ' ',
         numeral: true,
         numeralThousandsGroupStyle: 'thousand',
      }}
   />
);
const styles = {
   container: styles => ({
      ...styles,
      height: 48,
      width: '100%',
   }),
   valueContainer: styles => ({
      ...styles,
      display: 'flex',
      height: 45,
      padding: 0,
   }),
   placeholder: styles => ({
      ...styles,
      alignItems: 'center',
      color: '#717171',
      display: 'flex',
      fontSize: 17,
      fontWeight: 500,
      height: '100%',
      left: 0,
      margin: 0,
      padding: '0 8px 0 0',
      position: 'absolute',
      top: 0,
   }),
};
const CurrencyInput = memo(
   ({
      isDisabled = false,
      isError = false,
      onChange,
      onFocus,
      placeholder = '',
      value = '',
   }) => (
      <ReactSelect
         inputValue={value}
         isDisabled={isDisabled}
         isSearchable={true}
         onFocus={onFocus}
         placeholder={placeholder}
         onInputChange={(value, { action }) => {
            console.log(value);
            if (action !== 'input-blur' && action !== 'menu-close') {
               onChange(value.replace(/ /g, ''));
            }
         }}
         components={{
            Control,
            IndicatorsContainer: () => null,
            Input,
            Menu: () => null,
            MenuList: () => null,
         }}
         styles={{
            ...styles,
            control: (styles, { isFocused }) => ({
               ...styles,
               backgroundColor: '#ffffff',
               border: `1.5px solid ${
                  isError ? '#e41d32' : isFocused ? '#397af5' : '#e1e1e1'
               }`,
               borderRadius: 10,
               boxShadow: 'none',
               color: 'rgb(37, 42, 59)',
               cursor: 'text',
               height: 48,
               minHeight: 48,
               minWidth: 100,
               outline: 'none',
               padding: 0,
               width: '100%',
               ':hover': {
                  border: `1.5px solid ${
                     isError ? '#e41d32' : isFocused ? '#397af5' : '#e1e1e1'
                  }`,
               },
            }),
         }}
      />
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
