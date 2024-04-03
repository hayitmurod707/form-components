import Input from 'cleave.js/react';
import { bool, func, object } from 'prop-types';
import { useState } from 'react';
import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';
const StyledInput = styled(Input)`
   background-color: transparent;
   border-radius: 10px;
   border: 1.5px solid #e1e1e1;
   font-size: 17px;
   font-weight: 500;
   height: 46px;
   outline: none;
   padding-left: 17px;
   width: 100%;
   &[data-error='true'] {
      border: 1.5px solid #ff5749;
   }
   &:disabled {
      color: #717171;
   }
   &:focus {
      border: 1.5px solid #5254f1;
   }
`;
const Select = ({ isError, onChange, placeholder, ref, ...props }) => {
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   const Menu = props => {
      console.log(props);
      return (
         <components.Menu {...props}>
            <h1>Hello</h1>
         </components.Menu>
      );
   };
   const Input = props => {
      console.log(props);
      const { isDisabled, innerRef } = props;
      const {
         className, // not listed in commonProps documentation, needs to be removed to allow Emotion to generate classNames
         clearValue,
         cx,
         getStyles,
         getClassNames,
         getValue,
         hasValue,
         isMulti,
         isRtl,
         options, // not listed in commonProps documentation
         selectOption,
         selectProps,
         setValue,
         theme,
         ...innerProps
      } = props;
      return (
         <StyledInput
            data-error={isError}
            disabled={isDisabled}
            // ref={innerRef}
            placeholder=''
            type='text'
            {...innerProps}
            htmlRef={inputNode => {
               if (!innerRef) {
                  return;
               }
               if (typeof innerRef === 'function') {
                  innerRef(inputNode);
               } else {
                  innerRef.current = inputNode;
               }
            }}
            options={{
               time: true,
               timePattern: ['h', 'm', 's'],
            }}
            onChange={e => {
               if (!isDisabled) {
                  onChange(e.target.value);
               }
            }}
            {...props}
         />
      );
   };
   const IndicatorsContainer = () => null;
   const SingleValue = () => null;
   return (
      <ReactSelect
         {...props}
         components={{ Input, Menu, IndicatorsContainer, SingleValue }}
         isClearable={false}
         isMulti={false}
         isSearchable={true}
         maxMenuHeight={230}
         menuPlacement='auto'
         menuIsOpen={menuIsOpen}
         menuPortalTarget={document.body}
         onMenuClose={() => {
            setMenuIsOpen(false);
         }}
         onMenuOpen={() => {
            setMenuIsOpen(true);
         }}
         styles={{
            control: styles => ({
               ...styles,
               backgroundColor: '#ffffff',
               border: 'none',
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
                  border: 'none',
               },
            }),
            valueContainer: styles => ({
               ...styles,
               display: 'flex',
               height: 46,
               padding: 0,
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
            menuPortal: styles => ({ ...styles, zIndex: 9999 }),
         }}
      />
   );
};
Select.defaultProps = {
   isDisabled: false,
   isError: false,
   maxDate: new Date('2200-01-01'),
   minDate: new Date('1970-01-01'),
   value: new Date(),
};
Select.propTypes = {
   isDisabled: bool,
   isError: bool,
   maxDate: object,
   minDate: object,
   onChange: func.isRequired,
   onFocus: func,
   value: object.isRequired,
};
export default Select;
