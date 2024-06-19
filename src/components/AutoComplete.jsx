import { any, array, bool, func, string } from 'prop-types';
import { memo } from 'react';
import ReactSelect, { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
const animation1 = keyframes`
   0% {
      clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
   }
   50% {
      clip-path: polygon( 0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0% );
   }
   100% {
      clip-path: polygon( 0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0% );
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
   & .search-button {
      align-items: center;
      background-color: transparent;
      color: #808080;
      cursor: text;
      display: flex;
      height: 44px;
      justify-content: center;
      width: 46px;
      & svg {
         transition: 100ms;
         margin: 0 0 0 4px;
         & g {
            stroke: '#949494';
         }
      }
   }
   & .inner-content {
      height: 100%;
      padding: 0 0 0 16px;
      width: calc(100% - 66px);
      & input {
         display: flex;
         max-width: 100% !important;
         min-width: 100% !important;
         opacity: 1 !important;
      }
   }
   & .indicator-content {
      align-items: center;
      display: flex;
      height: 44px;
      justify-content: flex-end;
      padding: 0 12px 0 8px;
      width: 66px;
      & .clear-loading {
         align-items: center;
         display: flex;
         height: 23px;
         justify-content: center;
         margin: 0 6px 0 0;
         min-width: 20px;
         width: 20px;
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
            margin: 0;
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
               <div className='clear-loading'>
                  {isLoading && !isDisabled ? (
                     <div className='loading'>
                        <div></div>
                     </div>
                  ) : inputValue && !isDisabled ? (
                     <button
                        type='button'
                        data-focused={isFocused}
                        onClick={() => {
                           onChange('', { action: 'set-value' });
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
                  ) : null}
               </div>
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
const defaultOptions = {
   components: {
      Control,
      IndicatorsContainer: () => null,
      Menu,
   },
   filterOption: option => option,
   isClearable: true,
   isMulti: false,
   isSearchable: true,
   maxMenuHeight: 230,
   menuPlacement: 'auto',
   menuPortalTarget: document.body,
};
const styles = {
   container: styles => ({
      ...styles,
      height: 46,
      width: '100%',
   }),
   valueContainer: styles => ({
      ...styles,
      display: 'flex',
      height: 44,
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
   input: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled ? '#717171' : '#212121',
      fontSize: 17,
      fontWeight: 500,
      height: '100%',
      left: 0,
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      visibility: 'visible',
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
const AutoComplete = memo(
   ({
      isDisabled = false,
      isError = false,
      isLoading = false,
      noOptionsMessage = null,
      onChange,
      options = [],
      placeholder = '',
      setLoading,
      value = null,
      ...props
   }) => {
      const NoOptionsMessage =
         typeof noOptionsMessage === 'function'
            ? noOptionsMessage
            : () => "Ma'lumot topilmadi";
      const onInputChange = (option, { action }) => {
         if (action !== 'input-blur' && action !== 'menu-close') {
            const search =
               typeof option?.label === 'string' ? option.label : value;
            onChange(search);
         }
      };
      return (
         <ReactSelect
            {...defaultOptions}
            {...props}
            inputValue={typeof value === 'string' ? value : value?.label}
            isDisabled={isDisabled}
            isLoading={isLoading}
            noOptionsMessage={NoOptionsMessage}
            onChange={onChange}
            onInputChange={onInputChange}
            options={options}
            placeholder={placeholder}
            value={null}
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
   }
);
AutoComplete.propTypes = {
   isDisabled: bool,
   isError: bool,
   isLoading: bool,
   noOptionsMessage: any,
   onChange: func,
   onFocus: func,
   options: array,
   placeholder: string,
   setLoading: func,
   value: any,
};
export default AutoComplete;
