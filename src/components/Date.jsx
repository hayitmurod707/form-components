import { bool, func, object } from 'prop-types';
import { useState } from 'react';
import ReactSelect, { components } from 'react-select';
const Select = ({ isError, onChange, ref }) => {
   const [menuIsOpen, setMenuIsOpen] = useState(false);
   const [value, setValue] = useState('');
   const onInputChange = (value, { action }) => {
      if (action !== 'input-blur' && action !== 'menu-close') {
         const newValue = value.replace(/\D/g, '');
         const values = [...newValue];
         const zero = values[0] || '';
         const first = values[1] || '';
         const second = values[2] || '';
         const third = values[3] || '';
         const fourth = values[4] || '';
         let day = '';
         let month = '';
         let year = '';
         console.log(+(String(zero) + String(first)));
         if (+String(zero) > 4) {
            day = '0' + String(zero);
         } else if (+(String(zero) + String(first)) > 31) {
            day = '0' + String(zero);
            if (+(String(second) + String(third)) > 12) {
               month = '0' + String(second);
            } else {
               month = String(first) + String(second);
            }
         } else {
            day = String(zero) + String(first);
            if (+first > 2) {
               month = '0' + String(second);
            } else if (+(String(third) + String(second)) > 12) {
               month = '0' + String(second);
            } else {
               month = String(second) + String(third);
            }
         }
         const returnValue = `${day}-${month}-${year}`;
         console.log(returnValue);
         setValue(newValue);
      }
   };
   const Menu = props => {
      console.log(props);
      return (
         <components.Menu {...props}>
            <h1>Hello</h1>
         </components.Menu>
      );
   };
   const IndicatorsContainer = () => null;
   const SingleValue = () => null;
   return (
      <ReactSelect
         components={{ Menu, IndicatorsContainer, SingleValue }}
         inputValue={value}
         isClearable={false}
         isMulti={false}
         isSearchable={true}
         maxMenuHeight={230}
         menuIsOpen={menuIsOpen}
         menuPlacement='auto'
         menuPortalTarget={document.body}
         onInputChange={onInputChange}
         placeholder=''
         onMenuClose={() => {
            setMenuIsOpen(false);
         }}
         onMenuOpen={() => {
            setMenuIsOpen(true);
         }}
         styles={{
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
            valueContainer: styles => ({
               ...styles,
               display: 'flex',
               height: 46,
               padding: 0,
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
