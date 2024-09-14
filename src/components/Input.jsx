import { array, func, string } from 'prop-types';
import { useState } from 'react';
import Select from 'react-select/creatable';
import styled from 'styled-components';
const StyledInput = styled.div`
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
   & .placeholder {
      align-items: center;
      display: flex;
      font-size: 17px;
      font-weight: 500;
      height: 100%;
      left: 0;
      padding: 0 0 0 18px;
      position: absolute;
      top: 0;
      transition: 300ms;
      width: 100%;
      &[data-focus='true'] {
         font-size: 14px;
         height: 16px;
         top: -9px;
      }
      & span {
         background-color: white;
         border-radius: 2px;
         margin: 0 -3px;
         max-width: 100%;
         overflow: hidden;
         padding: 1px 3px;
         white-space: nowrap;
      }
   }
   & input {
      background-color: transparent;
      border-radius: 10px;
      border: none;
      font-size: 17px;
      font-weight: 500;
      height: 100%;
      left: 0;
      outline: none;
      padding: 0 0 0 18px;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 2;
      &:focus {
         & + div {
            color: #0071f2;
         }
      }
      & + div {
         color: #717171;
      }
   }
`;
const IndicatorSeparator = () => null;
const InputC = ({
   selectProps: { inputValue, placeholder, value },
   ...props
}) => (
   <StyledInput>
      <input {...props} />
      <div data-focus={!!inputValue || value?.focused} className='placeholder'>
         <span>{placeholder}</span>
      </div>
   </StyledInput>
);
const defaultOptions = {
   components: {
      DropdownIndicator: () => null,
      IndicatorSeparator,
      Menu: () => null,
      Input: InputC,
      Placeholder: () => null,
      SingleValue: () => null,
   },
   styles: {
      control: (styles, { isFocused }) => ({
         ...styles,
         backgroundColor: 'rgb(255, 255, 255)',
         border: isFocused ? '1.5px solid #0071f2' : '1.5px solid #e1e1e1',
         borderRadius: 10,
         boxShadow: 'none',
         color: 'rgb(37, 42, 59)',
         cursor: 'text',
         minHeight: 45,
         outline: 'none',
         padding: 0,
         width: '100%',
         ':hover': {
            border: isFocused ? '1.5px solid #0071f2' : '1.5px solid #e1e1e1',
         },
      }),
      valueContainer: styles => ({
         ...styles,
         display: 'flex',
         flex: 'initial',
         flexWrap: 'wrap',
         minHeight: 45,
         overflow: 'initial',
         padding: 0,
         width: 'calc(100% - 42px)',
      }),
      indicatorsContainer: styles => ({
         ...styles,
         height: 45,
         justifyContent: 'flex-start',
         padding: '0 8px',
         width: 42,
      }),
      clearIndicator: styles => ({
         ...styles,
         alignItems: 'center',
         backgroundColor: 'rgba(255, 0, 0, 0.7)',
         borderRadius: 11,
         color: 'rgb(255, 255, 255)',
         cursor: 'pointer',
         display: 'flex',
         height: 22,
         justifyContent: 'center',
         margin: 0,
         padding: 0,
         width: 22,
         svg: {
            height: 16,
            width: 16,
         },
         ':hover': {
            backgroundColor: 'rgb(255, 0, 0)',
            color: 'rgb(255, 255, 255)',
         },
      }),
   },
};
const Input = ({ onChange, placeholder = 'Email', value = [] }) => {
   const [focused, setFocused] = useState(false);
   return (
      <Select
         {...defaultOptions}
         inputValue={value}
         onBlur={() => setFocused(false)}
         onFocus={() => setFocused(true)}
         placeholder={placeholder}
         tabSelectsValue={false}
         value={{ focused }}
         onInputChange={(value, { action }) => {
            if (
               action !== 'input-blur' &&
               action !== 'menu-close' &&
               action !== 'set-value'
            ) {
               onChange(value);
            }
         }}
      />
   );
};
Input.propTypes = {
   onChange: func,
   placeholder: string,
   value: array,
};
export default Input;
