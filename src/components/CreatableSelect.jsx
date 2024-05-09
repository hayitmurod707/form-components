import { array, func, string } from 'prop-types';
import { useState } from 'react';
import Select from 'react-select/creatable';
import styled from 'styled-components';
const StyledMultiValue = styled.div`
   align-items: center;
   background-color: rgb(239, 240, 243);
   border-radius: 8px;
   display: flex;
   margin: 2px 0 2px 5px;
   max-width: 100%;
   min-height: 29px;
   padding: 4px 7px;
   & .text {
      font-size: 17px;
      font-weight: 500;
      line-height: 135%;
      margin: 0 6px 0 0;
      white-space: pre-wrap;
      width: calc(100% - 25px);
   }
   & .remove {
      align-items: center;
      background-color: rgba(255, 0, 0, 0.7);
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      height: 19px;
      justify-content: center;
      width: 19px;
      &:hover {
         background-color: rgb(255, 0, 0);
      }
   }
`;
const MultiValue = ({ data: { label }, removeProps: { onClick } }) => (
   <StyledMultiValue>
      <div className='text'>{label}</div>
      <div className='remove' onClick={onClick}>
         <svg
            fill='rgb(255, 255, 255)'
            height='14'
            viewBox='0 0 20 20'
            width='14'
         >
            <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
         </svg>
      </div>
   </StyledMultiValue>
);
const IndicatorSeparator = () => null;
const defaultOptions = {
   components: {
      DropdownIndicator: () => null,
      IndicatorSeparator,
      Menu: () => null,
      MultiValue,
   },
   isMulti: true,
   isClearable: true,
   styles: {
      control: (styles, { isFocused }) => ({
         ...styles,
         backgroundColor: 'rgb(255, 255, 255)',
         border: isFocused ? '1.5px solid #0071f2' : '1.5px solid #e1e1e1',
         borderRadius: 10,
         boxShadow: 'none',
         color: 'rgb(37, 42, 59)',
         cursor: 'text',
         minHeight: 44,
         outline: 'none',
         padding: 0,
         width: '100%',
         ':hover': {
            border: isFocused ? '1.5px solid #0071f2' : '1.5px solid #e1e1e1',
         },
      }),
      placeholder: styles => ({
         ...styles,
         alignItems: 'center',
         color: '#717171',
         display: 'flex',
         fontSize: 17,
         fontWeight: 500,
         height: 44,
         left: 0,
         padding: '0 0 0 16px',
         position: 'absolute',
         top: 0,
         width: 'calc(100% - 42px)',
      }),
      input: (styles, { hasValue, isDisabled }) => ({
         ...styles,
         color: isDisabled ? '#717171' : '#212121',
         fontSize: 17,
         fontWeight: 500,
         height: 40,
         margin: '0 2px',
         padding: hasValue ? '0 0 0 2px' : '0 0 0 16px',
      }),
      valueContainer: styles => ({
         ...styles,
         display: 'flex',
         flex: 'initial',
         flexWrap: 'wrap',
         minHeight: 40,
         overflow: 'auto',
         padding: '2px 0',
         width: 'calc(100% - 42px)',
      }),
      indicatorsContainer: styles => ({
         ...styles,
         height: 42,
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
const CreatableSelect = ({
   onChange,
   placeholder = 'Create option',
   value = [],
}) => {
   const [inputValue, setInputValue] = useState('');
   const onKeyDown = e => {
      if (inputValue && (e.key === 'Enter' || e.key === 'Tab')) {
         const newValue = [
            ...value,
            { label: inputValue, value: value.length },
         ];
         onChange(newValue);
         setInputValue('');
         e.preventDefault();
         e.stopPropagation();
      }
   };
   return (
      <Select
         {...defaultOptions}
         inputValue={inputValue}
         onChange={onChange}
         onKeyDown={onKeyDown}
         placeholder={placeholder}
         value={value}
         onInputChange={(value, { action }) => {
            if (action !== 'input-blur' && action !== 'menu-close') {
               setInputValue(value);
            }
         }}
      />
   );
};
CreatableSelect.propTypes = {
   onChange: func,
   placeholder: string,
   value: array,
};
export default CreatableSelect;
