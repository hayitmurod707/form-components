import { any, bool, func, string } from 'prop-types';
import { memo, useEffect, useState } from 'react';
import ReactSelect, { components } from 'react-select';
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
      padding: 0 0 0 16px;
      width: calc(100% - 66px);
      & input {
         opacity: 1 !important;
         min-width: 100% !important;
         max-width: 100% !important;
         display: flex;
      }
   }
   & .indicator-content {
      align-items: center;
      display: flex;
      height: 45px;
      justify-content: flex-end;
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
   const inputValue = props?.selectProps?.inputValue;
   const isDisabled = props?.isDisabled;
   const isFocused = props?.isFocused;
   const isLoading = props?.selectProps?.isLoading;
   const onChange = props?.selectProps?.onInputChange;
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
               ) : inputValue && !isDisabled ? (
                  <div className='clear-button'>
                     <button
                        onClick={() => {
                           onChange('', { action: 'set-value' });
                        }}
                        type='button'
                        data-focused={isFocused}
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
const defaultProps = {
   filterOption: option => option,
   isClearable: true,
   isMulti: false,
   isSearchable: true,
   maxMenuHeight: 230,
   menuPlacement: 'auto',
   menuPortalTarget: document.body,
   value: null,
   components: {
      Control,
      IndicatorsContainer: () => null,
      Menu,
   },
};
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
      color: '#717171',
      fontSize: 16,
      fontWeight: 500,
      left: 0,
      margin: 0,
      maxWidth: '100%',
      overflow: 'hidden',
      padding: '13px 8px 13px 0',
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
      height: '100%',
      left: 0,
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      visibility: 'visible',
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
};
const AutoComplete = memo(
   ({
      getResponse,
      getUrl,
      isDisabled = false,
      isError = false,
      noOptionsMessage = null,
      onChange,
      onFocus,
      placeholder = '',
      value = null,
   }) => {
      const [loading, setLoading] = useState(false);
      const [options, setOptions] = useState([
         {
            label: 'Option 1',
            value: 1,
         },
         {
            label: 'Option 2',
            value: 2,
         },
         {
            label: 'Option 3',
            value: 3,
         },
         {
            label: 'Option 4',
            value: 4,
         },
      ]);
      const debouncedSearch = useDebouncedCallback(async search => {
         await setLoading(false);
         // const url = getUrl(search);
         // telemarketingAPI({ url })
         //    .then(response => setOptions(getResponse(response)))
         //    .catch(() => setOptions([]))
         //    .finally(() => setLoading(false));
      }, 300);
      const onInputChange = (option, { action }) => {
         if (action !== 'input-blur' && action !== 'menu-close') {
            onChange(option);
         }
      };
      const NoOptionsMessage =
         typeof noOptionsMessage === 'function'
            ? noOptionsMessage
            : () => 'No data available';
      useEffect(() => {
         if (!isDisabled) {
            const search = typeof value === 'string' ? value : value?.label;
            debouncedSearch(search);
         }
      }, [value, debouncedSearch, isDisabled]);
      return (
         <ReactSelect
            {...defaultProps}
            inputValue={typeof value === 'string' ? value : value?.label}
            isDisabled={isDisabled}
            isLoading={loading}
            noOptionsMessage={NoOptionsMessage}
            onChange={onChange}
            onFocus={onFocus}
            onInputChange={onInputChange}
            options={options}
            placeholder={placeholder}
            styles={{
               ...styles,
               option: (styles, { isDisabled, isFocused, data }) => ({
                  ...styles,
                  borderRadius: 10,
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
                     : data?.value === value?.value
                     ? '#3a79f3'
                     : isFocused
                     ? 'rgba(82, 85, 241, 0.1)'
                     : '#ffffff',
                  color: isDisabled
                     ? '#696f85'
                     : data?.value === value?.value
                     ? '#ffffff'
                     : isFocused
                     ? '#252a3b'
                     : '#252a3b',
                  ':hover': {
                     backgroundColor: isDisabled
                        ? '#f1f1f1'
                        : data?.value === value?.value
                        ? '#3a79f3'
                        : 'rgba(82, 85, 241, 0.1)',
                  },
               }),
               control: (styles, { isFocused, isDisabled }) => ({
                  ...styles,
                  backgroundColor: isDisabled ? '#f4f4f4' : '#ffffff',
                  borderRadius: 10,
                  boxShadow: 'none',
                  color: 'rgb(37, 42, 59)',
                  cursor: isDisabled ? 'default' : 'text',
                  height: 48,
                  minHeight: 48,
                  minWidth: 100,
                  outline: 'none',
                  padding: 0,
                  width: '100%',
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
AutoComplete.propTypes = {
   getResponse: func,
   getUrl: func,
   isDisabled: bool,
   isError: bool,
   noOptionsMessage: any,
   onChange: func,
   onFocus: func,
   placeholder: string,
   value: any,
};
export default AutoComplete;
