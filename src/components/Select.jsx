import { any, array, bool, func, string } from 'prop-types';
import ReactSelect from 'react-select';
import styled from 'styled-components';
const StyledClearValue = styled.div`
   align-items: center;
   display: flex;
   height: 23px;
   justify-content: center;
   margin: '1px 0 0 0';
   width: 23px;
`;
const ClearIndicator = props => (
   <StyledClearValue onClick={props.clearValue}>
      <svg fill='none' height='16' viewBox='0 0 16 16' width='16'>
         <path
            d='M12 4L4 12'
            stroke='#949494'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
         />
         <path
            d='M4 4L12 12'
            stroke='#949494'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
         />
      </svg>
   </StyledClearValue>
);
const defaultOptions = {
   components: { IndicatorSeparator: () => null, ClearIndicator },
   isClearable: true,
   isMulti: false,
   isSearchable: false,
   maxMenuHeight: 230,
   menuPlacement: 'auto',
   menuPortalTarget: document.body,
};
const styles = {
   valueContainer: styles => ({
      ...styles,
      display: 'flex',
      height: 42,
      padding: '13px 0 13px 16px',
   }),
   singleValue: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? '#717171' : '#212121',
      fontSize: 17,
      fontWeight: 500,
      left: 0,
      margin: 0,
      padding: '10px 0 10px 16px',
      position: 'absolute',
      top: 0,
   }),
   placeholder: styles => ({
      ...styles,
      color: '#717171',
      fontSize: 17,
      fontWeight: 500,
      left: 0,
      margin: 0,
      padding: '10px 8px 10px 16px',
      position: 'absolute',
      top: 0,
   }),
   indicatorsContainer: styles => ({ ...styles, padding: '0 12px 0 8px' }),
   dropdownIndicator: styles => ({
      ...styles,
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: 12,
      color: '#949494',
      display: 'flex',
      height: 23,
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      width: 23,
      ':hover': {
         color: '#949494',
      },
      svg: {
         width: 18,
      },
   }),
   menu: styles => ({
      ...styles,
      backgroundColor: '#ffffff',
      border: 'none',
      borderRadius: 12,
      boxShadow:
         '0 1px 20px 0 rgba(13, 46, 105, 0.07), 0 1px 20px 0 rgba(13, 46, 105, 0.07)',
      margin: 0,
      overflow: 'hidden',
      padding: 0,
   }),
   menuPortal: styles => ({ ...styles, zIndex: 9999 }),
   menuList: styles => ({
      ...styles,
      padding: 5,
      '::-webkit-scrollbar': {
         padding: '0 5px 0 0',
         width: 6,
      },
      '::-webkit-scrollbar-track': {
         backgroundColor: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
         backgroundColor: '#3a79f3',
         borderRadius: 3,
      },
   }),
   option: (styles, { isSelected, isDisabled, isFocused }) => ({
      ...styles,
      backgroundColor: isDisabled
         ? '#f7f8fc'
         : isSelected
         ? '#3a79f3'
         : isFocused
         ? 'rgba(82, 85, 241, 0.1)'
         : '#ffffff',
      borderRadius: 10,
      color: isDisabled
         ? '#696f85'
         : isSelected
         ? '#ffffff'
         : isFocused
         ? '#252a3b'
         : '#252a3b',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      fontSize: 17,
      fontWeight: 500,
      height: 44,
      overflow: 'hidden',
      padding: '11px 12px',
      textOverflow: 'ellipsis',
      transition: 200,
      transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
      whiteSpace: 'nowrap',
      width: '100%',
      ':hover': {
         backgroundColor: isDisabled
            ? '#f7f8fc'
            : isSelected
            ? '#3a79f3'
            : 'rgba(82, 85, 241, 0.1)',
      },
   }),
   noOptionsMessage: styles => ({
      ...styles,
      color: 'rgb(37, 42, 59)',
      cursor: 'not-allowed',
      fontSize: 17,
      fontWeight: 500,
      height: 44,
      padding: '10px 12px',
      textAlign: 'left',
      width: '100%',
   }),
};
const Select = ({ noOptionsMessage, isError, ...props }) => {
   const NoOptionsMessage =
      typeof noOptionsMessage === 'function'
         ? noOptionsMessage
         : () => "Ma'lumot topilmadi";
   return (
      <ReactSelect
         {...defaultOptions}
         {...props}
         noOptionsMessage={NoOptionsMessage}
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
               cursor: 'pointer',
               height: 46,
               minHeight: 46,
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
   );
};
Select.defaultProps = {
   isDisabled: false,
   isError: false,
   noOptionsMessage: null,
   options: [],
   placeholder: '',
   value: null,
};
Select.propTypes = {
   isDisabled: bool,
   isError: bool,
   noOptionsMessage: any,
   onChange: func,
   onFocus: func,
   options: array,
   placeholder: string,
   value: any,
};
export default Select;
