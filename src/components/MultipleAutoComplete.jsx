import { array, bool, func, string } from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactSelect, { components } from 'react-select';
import { telemarketingAPI } from 'services/api';
import styled, { keyframes } from 'styled-components';
import { useDebouncedCallback } from 'use-debounce';
const animation1 = keyframes`
   0% {
      clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
   }
   50% {
      clip-path: polygon(
         0% 0%,
         0% 100%,
         0% 100%,
         50% 50%,
         100% 0%,
         100% 0%,
         0% 0%
      );
   }
   100% {
      clip-path: polygon(
         0% 0%,
         0% 100%,
         100% 100%,
         50% 50%,
         100% 100%,
         100% 0%,
         0% 0%
      );
   }
`;
const animation2 = keyframes`
   to {
      transform: rotate(1turn);
   }
`;
const StyledControl = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   & .inner-content {
      height: 100%;
      width: calc(100% - 66px);
      & input {
         opacity: 1 !important;
         min-width: 100% !important;
         max-width: 100% !important;
         display: flex;
      }
   }
   & .indicator-content {
      display: flex;
      height: 100%;
      justify-content: flex-end;
      margin: auto 0;
      padding: 0 12px 0 8px;
      width: 66px;
      & .loading-content {
         align-items: center;
         display: flex;
         height: 23px;
         justify-content: center;
         width: 23px;
         & .loading {
            height: 23px;
            width: 23px;
            & div {
               animation: ${animation1} 0.7s linear alternate infinite,
                  ${animation2} 0.3s linear infinite;
               border-radius: 50%;
               border: 2px solid #3a79f3;
               box-sizing: border-box;
               height: 23px;
               width: 23px;
            }
         }
      }
      & .clear-button {
         align-items: center;
         display: flex;
         height: 23px;
         justify-content: center;
         width: 23px;
         & button {
            align-items: center;
            background-color: transparent;
            border-radius: 50%;
            border: none;
            color: #808080;
            cursor: pointer;
            display: flex;
            height: 23px;
            justify-content: center;
            outline: none;
            padding: 0;
            width: 23px;
         }
      }
      & .dropdown-button {
         align-items: center;
         background-color: transparent;
         color: #808080;
         cursor: pointer;
         display: flex;
         height: 23px;
         justify-content: center;
         width: 23px;
      }
   }
`;
const Control = props => {
   const children = props?.children;
   const hasValue = props?.hasValue;
   const isDisabled = props?.isDisabled;
   const isFocused = props?.isFocused;
   const isLoading = props?.selectProps?.isLoading;
   const onChange = props?.selectProps?.onChange;
   return (
      <components.Control {...props}>
         <StyledControl>
            <div className='inner-content'>{children}</div>
            <div className='indicator-content'>
               {isLoading && !isDisabled ? (
                  <div className='loading-content'>
                     <div className='loading'>
                        <div></div>
                     </div>
                  </div>
               ) : hasValue && !isDisabled ? (
                  <div className='clear-button'>
                     <button
                        type='button'
                        data-focused={isFocused}
                        onClick={() => {
                           onChange([], { action: 'set-value' });
                        }}
                     >
                        <svg
                           fill='none'
                           height='16'
                           viewBox='0 0 16 16'
                           width='16'
                        >
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
                     </button>
                  </div>
               ) : null}
               <div className='dropdown-button'>
                  <svg height='18' width='18' viewBox='0 0 20 20'>
                     <path
                        fill='#949494'
                        d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'
                     ></path>
                  </svg>
               </div>
            </div>
         </StyledControl>
      </components.Control>
   );
};
const Menu = ({ isLoading, children, ...props }) =>
   !isLoading && <components.Menu {...props}>{children}</components.Menu>;
const StyledMultiValue = styled.div`
   align-items: center;
   background-color: #f1f1f1;
   border-radius: 8px;
   cursor: default;
   display: flex;
   margin: 4px 4px 0 0;
   max-width: 100%;
   min-height: 36px;
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
   removeProps: { onClick },
   isDisabled = false,
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
const defaultOptions = {
   className: 'multiple-auto-complete-input',
   components: { Control, IndicatorsContainer: () => null, Menu, MultiValue },
   filterOption: option => option,
   isClearable: true,
   isMulti: true,
   isSearchable: true,
   maxMenuHeight: 230,
   menuPlacement: 'auto',
   menuPortalTarget: document.body,
};
const styles = {
   valueContainer: styles => ({
      ...styles,
      display: 'flex',
      flex: 'initial',
      flexWrap: 'wrap',
      minHeight: 43,
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
      height: 36,
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
   // indicatorsContainer: styles => ({
   //    ...styles,
   //    justifyContent: 'flex-end',
   //    padding: '0 12px 0 8px',
   //    width: 66,
   // }),
   // dropdownIndicator: styles => ({
   //    ...styles,
   //    alignItems: 'center',
   //    color: '#949494',
   //    cursor: 'default',
   //    display: 'flex',
   //    height: 23,
   //    justifyContent: 'center',
   //    padding: 0,
   //    width: 23,
   //    ':hover': {
   //       color: '#949494',
   //    },
   //    svg: {
   //       height: 19,
   //       width: 19,
   //    },
   // }),
   menu: styles => ({
      ...styles,
      backgroundColor: '#ffffff',
      borderRadius: 12,
      border: 'none',
      margin: 0,
      overflow: 'hidden',
      padding: 0,
      boxShadow:
         '0 1px 20px 0 rgba(13, 46, 105, 0.07), 0 1px 20px 0 rgba(13, 46, 105, 0.07)',
   }),
   menuPortal: styles => ({ ...styles, zIndex: 9999 }),
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
   noOptionsMessage: styles => ({
      ...styles,
      color: 'rgb(37, 42, 59)',
      cursor: 'default',
      fontSize: 16,
      fontWeight: 500,
      height: 40,
      padding: '10px 12px',
      textAlign: 'left',
      width: '100%',
   }),
   option: (styles, { isDisabled, isFocused }) => ({
      ...styles,
      backgroundColor: isDisabled
         ? '#f7f8fc'
         : isFocused
         ? '#f1f1f1'
         : '#ffffff',
      borderRadius: 10,
      color: isDisabled ? '#696f85' : isFocused ? '#252a3b' : '#252a3b',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      fontSize: 16,
      fontWeight: 500,
      height: 44,
      overflow: 'hidden',
      padding: '11px 12px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      transition: 200,
      width: '100%',
      ':hover': {
         backgroundColor: isDisabled ? '#808080' : '#f1f1f1',
         color: 'rgb(37, 42, 59)',
      },
   }),
};
const MultipleAutoComplete = memo(
   ({
      getResponse,
      getUrl,
      isDisabled = false,
      isError = false,
      noOptionsMessage = null,
      onChange,
      onFocus,
      placeholder = '',
      value = [],
   }) => {
      const { t } = useTranslation('components');
      const [loading, setLoading] = useState(false);
      const [options, setOptions] = useState([]);
      const [inputValue, onInputChange] = useState('');
      const NoOptionsMessage =
         typeof noOptionsMessage === 'function'
            ? noOptionsMessage
            : () => t('no-data');
      const debouncedSearch = useDebouncedCallback(async search => {
         await setLoading(true);
         const url = getUrl(search);
         telemarketingAPI({ url })
            .then(response => setOptions(getResponse(response)))
            .catch(() => setOptions([]))
            .finally(() => setLoading(false));
      }, 300);
      useEffect(() => {
         debouncedSearch(inputValue);
      }, [inputValue, debouncedSearch]);
      return (
         <ReactSelect
            {...defaultOptions}
            inputValue={inputValue}
            isDisabled={isDisabled}
            isLoading={loading}
            noOptionsMessage={NoOptionsMessage}
            onChange={onChange}
            onFocus={onFocus}
            onInputChange={onInputChange}
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
                  minHeight: 46,
                  outline: 'none',
                  padding: 0,
                  width: '100%',
                  cursor: isDisabled ? 'default' : 'text',
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
MultipleAutoComplete.propTypes = {
   isDisabled: bool,
   noOptionsMessage: func,
   onChange: func,
   options: array,
   placeholder: string,
   value: array,
};
export default MultipleAutoComplete;
