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
   input: styles => ({
      ...styles,
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '12px 0 12px 16px',
      margin: 0,
      input: {
         height: '100%',
         fontSize: '17px !important',
         fontWeight: '500 !important',
      },
   }),
   singleValue: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? '#717171' : '#212121',
      fontSize: 16,
      fontWeight: 500,
      left: 0,
      margin: 0,
      padding: '12px 0 12px 16px',
      position: 'absolute',
      top: 0,
   }),
   placeholder: styles => ({
      ...styles,
      color: '#717171',
      fontSize: 16,
      fontWeight: 500,
      left: 0,
      margin: 0,
      padding: '12px 8px 12px 16px',
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
   menuPortal: styles => ({ ...styles, zIndex: 9999 }),
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
         backgroundColor: '#5254f1',
         borderRadius: 3,
      },
   }),
   option: (styles, { isSelected, isDisabled, isFocused }) => ({
      ...styles,
      backgroundColor: isDisabled
         ? '#f7f8fc'
         : isSelected
         ? '#5254f1'
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
      fontSize: 16,
      fontWeight: 500,
      height: 46,
      overflow: 'hidden',
      padding: 12,
      textOverflow: 'ellipsis',
      transition: 200,
      transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
      whiteSpace: 'nowrap',
      width: '100%',
      ':hover': {
         backgroundColor: isDisabled
            ? '#f7f8fc'
            : isSelected
            ? '#5254f1'
            : 'rgba(82, 85, 241, 0.1)',
      },
   }),
};
const Select = ({
   isDisabled = false,
   isError = false,
   isSearchable = false,
   noOptionsMessage,
   options = [],
   placeholder = '',
   value = null,
   onChange,
   onFocus,
   ...props
}) => {
   const NoOptionsMessage =
      typeof noOptionsMessage === 'function'
         ? noOptionsMessage
         : () => "Ma'lumot topilmadi";
   return (
      <ReactSelect
         {...defaultOptions}
         {...props}
         isDisabled={isDisabled}
         isSearchable={isSearchable}
         noOptionsMessage={NoOptionsMessage}
         onChange={onChange}
         onFocus={onFocus}
         options={options}
         placeholder={placeholder}
         value={value}
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
   );
};
Select.propTypes = {
   isDisabled: bool,
   isError: bool,
   isSearchable: bool,
   noOptionsMessage: any,
   onChange: func,
   onFocus: func,
   options: array,
   placeholder: string,
   value: any,
};
export default Select;
