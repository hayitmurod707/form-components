import { any, array, bool, func, string } from 'prop-types';
import { memo } from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';
const StyledClearIndicator = styled.div`
   align-items: center;
   cursor: pointer;
   display: flex;
   height: 23px;
   justify-content: center;
   width: 23px;
`;
const ClearIndicator = props => (
   <StyledClearIndicator onClick={props.clearValue}>
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
   </StyledClearIndicator>
);
const defaultOptions = {
   components: { IndicatorSeparator: () => null, ClearIndicator },
   isMulti: false,
   maxMenuHeight: 230,
   menuPlacement: 'auto',
   menuPortalTarget: document.body,
};
const styles = {
   valueContainer: styles => ({
      ...styles,
      display: 'flex',
      height: 44,
      padding: '13px 0 13px 15px',
   }),
   singleValue: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? '#717171' : '#000000',
      fontSize: 16,
      fontWeight: 500,
      margin: 0,
      position: 'absolute',
      left: 0,
      top: 0,
      height: 44,
      padding: '12px 8px 12px 16px',
   }),
   placeholder: styles => ({
      ...styles,
      color: '#717171',
      fontSize: 16,
      fontWeight: 500,
      left: 0,
      margin: 0,
      maxWidth: '100%',
      overflow: 'hidden',
      padding: '12px 8px 12px 16px',
      position: 'absolute',
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap',
   }),
   input: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? '#717171' : '#000000',
      fontSize: 16,
      fontWeight: 500,
      left: 14,
      position: 'absolute',
      top: 8,
   }),
   indicatorsContainer: styles => ({ ...styles, padding: '0 12px 0 8px' }),
   dropdownIndicator: styles => ({
      ...styles,
      alignItems: 'center',
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
      margin: 0,
      overflow: 'hidden',
      padding: 0,
      boxShadow:
         '0 1px 20px 0 rgba(13, 46, 105, 0.07), 0 1px 20px 0 rgba(13, 46, 105, 0.07)',
   }),
   noOptionsMessage: styles => ({
      ...styles,
      color: '#000000',
      cursor: 'default',
      fontSize: 16,
      fontWeight: 500,
      height: 44,
      padding: 12,
      textAlign: 'left',
      width: '100%',
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
         backgroundColor: '#3a79f3',
         borderRadius: 3,
      },
   }),
   option: (styles, { isSelected, isDisabled, isFocused }) => ({
      ...styles,
      borderRadius: 10,
      color: isDisabled ? '#696f85' : isSelected ? '#ffffff' : '#000000',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      fontSize: 16,
      fontWeight: 500,
      height: 44,
      overflow: 'hidden',
      padding: '11px 12px',
      textOverflow: 'ellipsis',
      transition: 200,
      whiteSpace: 'nowrap',
      width: '100%',
      backgroundColor: isDisabled
         ? '#f1f1f1'
         : isSelected
         ? '#3a79f3'
         : isFocused
         ? 'rgba(82, 85, 241, 0.1)'
         : '#ffffff',
      ':hover': {
         backgroundColor: isDisabled
            ? '#f1f1f1'
            : isSelected
            ? '#3a79f3'
            : 'rgba(82, 85, 241, 0.1)',
      },
   }),
};
const Select = memo(
   ({
      isClearable = true,
      isDisabled = false,
      isError = false,
      isSearchable = true,
      noOptionsMessage = null,
      onChange,
      onFocus,
      options = [],
      placeholder = '',
      value = null,
   }) => {
      const NoOptionsMessage = noOptionsMessage
         ? noOptionsMessage
         : () => 'No data';
      return (
         <ReactSelect
            {...defaultOptions}
            isClearable={isClearable}
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
               control: (styles, { isFocused, isDisabled }) => ({
                  ...styles,
                  backgroundColor: isDisabled ? '#f4f4f4' : '#ffffff',
                  borderRadius: 10,
                  boxShadow: 'none',
                  color: '#000000',
                  height: 48,
                  minHeight: 48,
                  minWidth: 100,
                  outline: 'none',
                  padding: 0,
                  width: '100%',
                  cursor: isDisabled
                     ? 'default'
                     : isSearchable
                     ? 'text'
                     : 'pointer',
                  border: `1.5px solid ${
                     isError ? '#e41d32' : isFocused ? '#3a79f3' : '#e1e1e1'
                  }`,
                  ':hover': {
                     border: `1.5px solid ${
                        isError ? '#e41d32' : isFocused ? '#3a79f3' : '#e1e1e1'
                     }`,
                  },
               }),
            }}
         />
      );
   }
);
Select.propTypes = {
   isClearable: bool,
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
