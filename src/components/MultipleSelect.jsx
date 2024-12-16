import { array, bool, func, string } from 'prop-types';
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
const StyledMultiValue = styled.div`
   align-items: center;
   background-color: #f1f1f1;
   border-radius: 8px;
   cursor: default;
   display: flex;
   margin: 4px 4px 0 0;
   max-width: 100%;
   min-height: 38px;
   padding: 4px 7px 4px 10px;
   &[data-disabled='true'] {
      background-color: #ffffff;
      & .label {
         width: 100%;
      }
   }
   & .label {
      font-size: 16px;
      font-weight: 500;
      margin: 0 4px 0 0;
      white-space: pre-wrap;
      width: calc(100% - 25px);
   }
   & .remove {
      align-items: center;
      cursor: pointer;
      display: flex;
      height: 22px;
      justify-content: center;
      width: 22px;
   }
`;
const MultiValue = ({
   data: { label },
   isDisabled = false,
   removeProps: { onClick },
}) => (
   <StyledMultiValue data-disabled={isDisabled}>
      <div className='label'>{label}</div>
      {!isDisabled && (
         <div className='remove' onClick={onClick}>
            <svg fill='#949494' height='18' viewBox='0 0 20 20' width='18'>
               <path d='M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'></path>
            </svg>
         </div>
      )}
   </StyledMultiValue>
);
const IndicatorSeparator = () => null;
const defaultOptions = {
   components: { IndicatorSeparator, MultiValue, ClearIndicator },
   className: 'multiple-select-input',
   isMulti: true,
   maxMenuHeight: 250,
   menuPlacement: 'auto',
   menuPortalTarget: document.body,
};
const styles = {
   valueContainer: styles => ({
      ...styles,
      display: 'flex',
      flex: 'initial',
      flexWrap: 'wrap',
      minHeight: 45,
      overflow: 'auto',
      padding: '0 4px 4px 4px',
      width: 'calc(100% - 66px)',
   }),
   placeholder: styles => ({
      ...styles,
      color: '#717171',
      fontSize: 16,
      fontWeight: 500,
      height: '100%',
      left: 0,
      margin: 0,
      overflow: 'hidden',
      padding: '10px 0 10px 15px',
      position: 'absolute',
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap',
      width: '100%',
   }),
   input: (styles, { isDisabled, hasValue }) => ({
      ...styles,
      color: isDisabled ? '#717171' : '#212121',
      fontSize: 16,
      fontWeight: 500,
      height: 38,
      margin: `4px 0 0 ${hasValue ? 0 : 11}px`,
      maxWidth: '100%',
      overflow: 'hidden',
      padding: 0,
      visibility: 'visible',
      ':after': {
         maxWidth: '100%',
         overflow: 'hidden',
      },
   }),
   indicatorsContainer: styles => ({
      ...styles,
      justifyContent: 'flex-end',
      padding: '0 12px 0 8px',
      width: 66,
   }),
   dropdownIndicator: styles => ({
      ...styles,
      alignItems: 'center',
      color: '#949494',
      cursor: 'default',
      display: 'flex',
      height: 23,
      justifyContent: 'center',
      padding: 0,
      width: 23,
      ':hover': {
         color: '#949494',
      },
      svg: {
         height: 19,
         width: 19,
      },
   }),
   menuPortal: styles => ({ ...styles, zIndex: 9999 }),
   menu: styles => ({
      ...styles,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      border: 'none',
      margin: 0,
      overflow: 'hidden',
      padding: 0,
      boxShadow:
         '0 1px 20px 0 rgba(13, 46, 105, 0.07), 0 1px 20px 0 rgba(13, 46, 105, 0.07)',
   }),
   noOptionsMessage: styles => ({
      ...styles,
      color: 'rgb(37, 42, 59)',
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
   option: (styles, { isDisabled, isFocused }) => ({
      ...styles,
      backgroundColor: isDisabled
         ? '#f1f1f1'
         : isFocused
         ? 'rgba(82, 85, 241, 0.1)'
         : '#ffffff',
      borderRadius: 10,
      color: isDisabled ? '#696f85' : '#000000',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      fontSize: 16,
      fontWeight: 500,
      height: 48,
      overflow: 'hidden',
      padding: 12,
      textOverflow: 'ellipsis',
      transition: 200,
      whiteSpace: 'nowrap',
      width: '100%',
      ':hover': {
         backgroundColor: isDisabled
            ? '#f1f1f1'
            : isFocused
            ? 'rgba(82, 85, 241, 0.1)'
            : '#ffffff',
         color: isDisabled ? '#696f85' : '#000000',
      },
   }),
};
const MultipleSelect = memo(
   ({
      isDisabled = false,
      isError = false,
      isSearchable = true,
      noOptionsMessage = null,
      onChange,
      onFocus,
      options = [],
      placeholder = '',
      value = [],
   }) => {
      const NoOptionsMessage =
         typeof noOptionsMessage === 'function'
            ? noOptionsMessage
            : () => 'No data available';
      return (
         <ReactSelect
            {...defaultOptions}
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
               control: (styles, { isDisabled, isFocused }) => ({
                  ...styles,
                  backgroundColor: isDisabled ? '#f4f4f4' : '#ffffff',
                  borderRadius: 10,
                  boxShadow: 'none',
                  color: '#000000',
                  minHeight: 48,
                  outline: 'none',
                  padding: 0,
                  width: '100%',
                  cursor: isDisabled
                     ? 'default'
                     : isSearchable
                     ? 'text'
                     : 'pointer',
                  border: `1.5px solid ${
                     isError ? '#e41d32' : isFocused ? '#397af5' : '#e1e1e1'
                  }`,
                  ':hover': {
                     border: `1.5px solid ${
                        isError ? '#e41d32' : isFocused ? '#397af5' : '#e1e1e1'
                     }`,
                  },
               }),
            }}
         />
      );
   }
);
MultipleSelect.propTypes = {
   isDisabled: bool,
   isError: bool,
   isSearchable: bool,
   noOptionsMessage: func,
   onChange: func,
   onFocus: func,
   options: array,
   placeholder: string,
   value: array,
};
export default MultipleSelect;
