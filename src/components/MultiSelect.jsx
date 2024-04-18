import { array, bool, func, string } from 'prop-types';
import ReactSelect, { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
// active color #5254f1
// multiValue color rgb(239, 240, 243)
// placeholder color rgb(105, 111, 133)
// remove color rgb(255, 0, 0)
// text color rgb(37, 42, 59)
// white color rgb(255, 255, 255)
const StyledMultiValue = styled.div`
   align-items: center;
   background-color: rgb(239, 240, 243);
   border-radius: 8px;
   display: flex;
   margin: 2.5px 0 2.5px 5px;
   max-width: 100%;
   min-height: 24px;
   padding: 4px 7px;
   & .label {
      font-size: 15px;
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
      <div className='label'>{label}</div>
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
const animation = keyframes`
	0% {
		opacity: 0.1;
		transform: scale(0.6);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
`;
const StyledMenu = styled.div`
   & .react-select-menu {
      animation: ${animation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      border: none;
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
      margin: 0;
      overflow: hidden;
      padding: 5;
      transform-origin: top;
   }
`;
const Menu = props => (
   <StyledMenu>
      <components.Menu {...props} className='react-select-menu'>
         {props?.children}
      </components.Menu>
   </StyledMenu>
);
const IndicatorSeparator = () => null;
const defaultOptions = {
   components: { IndicatorSeparator, MultiValue, Menu },
   isMulti: true,
   isSearchable: false,
   maxMenuHeight: 230,
   styles: {
      control: styles => ({
         ...styles,
         backgroundColor: 'rgb(255, 255, 255)',
         border: '1px solid rgb(226, 228, 234)',
         borderRadius: 10,
         boxShadow: 'none',
         color: 'rgb(37, 42, 59)',
         cursor: 'pointer',
         minHeight: 44,
         outline: 'none',
         padding: 0,
         width: '100%',
         ':hover': {
            border: '1px solid rgb(226, 228, 234)',
         },
      }),
      placeholder: styles => ({
         ...styles,
         color: 'rgb(105, 111, 133)',
         fontSize: 15,
         fontWeight: 500,
         margin: '0 0 0 15px',
      }),
      valueContainer: styles => ({
         ...styles,
         display: 'flex',
         flex: 'initial',
         flexWrap: 'wrap',
         overflow: 'auto',
         padding: '2.5px 0',
         width: 'calc(100% - 66px)',
      }),
      menuList: styles => ({
         ...styles,
         padding: 5,
         '::-webkit-scrollbar': {
            width: 6,
         },
         '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
         },
         '::-webkit-scrollbar-thumb': {
            backgroundColor: '#5254f1',
            borderRadius: 3,
         },
      }),
      option: (styles, { isDisabled, isFocused }) => ({
         ...styles,
         backgroundColor: isDisabled
            ? 'rgb(247, 248, 252)'
            : isFocused
            ? 'rgba(82, 85, 241, 0.1)'
            : 'rgb(255, 255, 255)',
         borderRadius: 8,
         color: isDisabled
            ? 'rgb(105, 111, 133)'
            : isFocused
            ? 'rgb(37, 42, 59)'
            : 'rgb(37, 42, 59)',
         cursor: isDisabled ? 'not-allowed' : 'pointer',
         fontSize: 15,
         fontWeight: 500,
         height: 44,
         overflow: 'hidden',
         padding: '13px 16px',
         textOverflow: 'ellipsis',
         whiteSpace: 'nowrap',
         width: '100%',
         ':hover': {
            backgroundColor: isDisabled
               ? 'rgb(128, 128, 128)'
               : 'rgba(82, 85, 241, 0.1)',
            color: 'rgb(37, 42, 59)',
         },
      }),
      noOptionsMessage: styles => ({
         ...styles,
         color: 'rgb(37, 42, 59)',
         cursor: 'not-allowed',
         fontSize: 15,
         fontWeight: 500,
         height: 34,
         padding: '9px 16px',
         textAlign: 'left',
         width: '100%',
      }),
      indicatorsContainer: styles => ({
         ...styles,
         justifyContent: 'flex-end',
         padding: '0 8px',
         width: 66,
      }),
      clearIndicator: styles => ({
         ...styles,
         alignItems: 'center',
         backgroundColor: 'rgba(255, 0, 0, 0.7)',
         borderRadius: 11,
         color: 'rgb(255, 255, 255)',
         display: 'flex',
         height: 22,
         justifyContent: 'center',
         margin: '0 6px 0 0',
         padding: 0,
         width: 22,
         svg: {
            width: 15,
         },
         ':hover': {
            backgroundColor: 'rgb(255, 0, 0)',
            color: 'rgb(255, 255, 255)',
         },
      }),
      dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
         ...styles,
         alignItems: 'center',
         backgroundColor: '#5254f1',
         borderRadius: 11,
         color: 'rgb(255, 255, 255)',
         display: 'flex',
         height: 22,
         justifyContent: 'center',
         margin: 0,
         padding: 0,
         transform: `rotate(${menuIsOpen ? '180deg' : 0})`,
         transformOrigin: 'center',
         transition: '0.4s transform',
         width: 22,
         svg: {
            width: 16,
         },
         ':hover': {
            color: 'rgb(255, 255, 255)',
         },
      }),
   },
};
const MultipleSelect = props => <ReactSelect {...defaultOptions} {...props} />;
MultipleSelect.defaultProps = {
   isDisabled: false,
   noOptionsMessage: () => 'No options',
   options: [],
   placeholder: 'Select options',
   value: [],
};
MultipleSelect.propTypes = {
   isDisabled: bool,
   noOptionsMessage: func,
   onChange: func.isRequired,
   options: array,
   placeholder: string,
   value: array,
};
export default MultipleSelect;
