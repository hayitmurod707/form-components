import CleaveInput from 'cleave.js/react';
import { bool, func, string } from 'prop-types';
import { memo, useState } from 'react';
import Calendar from 'react-calendar';
import ReactSelect, { components } from 'react-select';
import styled from 'styled-components';
const StyledInput = styled(CleaveInput)`
   background-color: transparent;
   border-radius: 10px;
   border: none;
   font-size: 17px;
   font-weight: 500;
   height: 45px;
   outline: none;
   padding: 0;
`;
const StyledControl = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   & .inner-content {
      height: 100%;
      padding: 0 0 0 16px;
      width: calc(100% - 45px);
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
      height: 45px;
      justify-content: flex-end;
      padding: 0 12px;
      width: 45px;
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
const StyledCalendar = styled.div`
   background-color: #ffffff;
   border-radius: 14px;
   padding: 10px;
   & .react-calendar {
      border: none;
      width: 280px !important;
      & .react-calendar__navigation {
         display: flex;
         margin: 0;
         & button {
            background-color: #f6f7f9;
            border-radius: 12px;
            border: none;
            color: rgb(105, 111, 133);
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            height: 40px;
            min-width: 40px;
            outline: none;
            padding: 0;
            &:hover,
            &:focus {
               background-color: #5254f1;
               color: #ffffff;
               cursor: pointer;
            }
            &[disabled] {
               color: rgb(105, 111, 133);
               cursor: not-allowed;
               &:hover,
               &:focus {
                  background-color: #f6f7f9;
                  color: rgb(105, 111, 133);
               }
            }
         }
         & .react-calendar__navigation__next-button {
            margin: 0 0 0 5px;
            & svg {
               margin: 2px 0 0 2px;
            }
         }
         & .react-calendar__navigation__prev-button {
            margin: 0 5px 0 0;
            & svg {
               margin: 2px 2px 0 0;
            }
         }
      }
      & .react-calendar__viewContainer {
         & button {
            align-items: center;
            background-color: transparent;
            border: none;
            cursor: pointer;
            display: flex;
            flex-basis: initial !important;
            font-size: 14px;
            font-weight: 500;
            justify-content: center;
            &[disabled] {
               background-color: transparent !important;
               color: rgb(105, 111, 133) !important;
               cursor: not-allowed;
            }
         }
         & .react-calendar__month-view__weekdays__weekday {
            align-items: center;
            color: rgb(105, 111, 133);
            cursor: default;
            display: flex;
            flex-basis: initial !important;
            font-size: 14px;
            font-weight: 500;
            height: 40px;
            justify-content: center;
            padding: 0;
            text-transform: lowercase;
            text-transform: capitalize;
            width: 40px;
            & abbr {
               text-decoration: none !important;
               overflow: hidden;
            }
         }
         & .react-calendar__month-view__days__day {
            border-radius: 19px;
            height: 38px;
            justify-content: center;
            margin: 1px;
            width: 38px;
            &:hover {
               color: #ffffff;
               background: #5254f1;
            }
         }
         & .react-calendar__month-view__days__day--neighboringMonth {
            color: rgb(105, 111, 133);
         }
         & .react-calendar__month-view__days__day--weekend {
            color: #ff0000;
         }
         & .react-calendar__year-view__months__month,
         & .react-calendar__decade-view__years__year,
         & .react-calendar__century-view__decades__decade {
            border-radius: 8px;
            height: 35px;
            margin: 10px 0;
            padding: 0 !important;
            width: calc(100% / 3);
            &:hover {
               background-color: #5254f1;
               color: #ffffff;
            }
         }
         & .react-calendar__tile--now {
            background: #008000;
            color: #ffffff;
            &:hover {
               background-color: #5254f1;
            }
         }
         & .react-calendar__tile--hasActive,
         & .react-calendar__tile--active {
            background-color: #5254f1;
            color: #ffffff;
            &:hover {
               background-color: #5254f1;
               color: #ffffff;
            }
         }
      }
   }
`;
const Control = props => {
   const children = props?.children;
   return (
      <components.Control {...props}>
         <StyledControl>
            <div className='inner-content'>{children}</div>
            <div className='indicator-content'>
               <div className='dropdown-button'>
                  <svg fill='none' height='20' viewBox='0 0 20 20' width='20'>
                     <path
                        d='M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5Z'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                     />
                  </svg>
               </div>
            </div>
         </StyledControl>
      </components.Control>
   );
};
const Input = ({
   isDisabled = false,
   onBlur,
   onChange,
   onFocus,
   placeholder = '',
   value = '',
}) => (
   <StyledInput
      disabled={isDisabled}
      inputMode='numeric'
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      type='text'
      value={value}
      options={{
         date: true,
         datePattern: ['d', 'm', 'Y'],
         delimiter: '-',
      }}
   />
);
const NextIcon = () => (
   <svg width='15' height='15' viewBox='0 0 18 18' fill='none'>
      <path
         d='M6.375 3.75L11.625 9L6.375 14.25'
         stroke='currentColor'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth='2'
      />
   </svg>
);
const PrevIcon = () => (
   <svg width='14' height='14' viewBox='0 0 18 18' fill='none'>
      <path
         d='M11.625 14.25L6.375 9L11.625 3.75'
         stroke='currentColor'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth='2'
      />
   </svg>
);
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
   menu: styles => ({
      ...styles,
      backgroundColor: '#ffffff',
      border: 'none',
      borderRadius: 12,
      boxShadow:
         '0 1px 20px 0 rgba(13, 46, 105, 0.07), 0 1px 20px 0 rgba(13, 46, 105, 0.07)',
      left: 'calc(50% - 150px)',
      margin: 0,
      maxWidth: 300,
      minWidth: 300,
      overflow: 'hidden',
      padding: 0,
   }),
   menuPortal: styles => ({
      ...styles,
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
   }),
};
const locale = {
   months: {
      ru: [
         'Январь',
         'Февраль',
         'Март',
         'Апреля',
         'Май',
         'Июнь',
         'Июль',
         'Август',
         'Сентябрь',
         'Октябрь',
         'Ноябрь',
         'Декабрь',
      ],
      uz: [
         'Yanvar',
         'Fevral',
         'Mart',
         'Aprel',
         'May',
         'Iyun',
         'Iyul',
         'Avgust',
         'Sentyabr',
         'Oktyabr',
         'Noyabr',
         'Dekabr',
      ],
   },
   days: {
      ru: ['Во', 'По', 'Вт', 'Ср', 'Че', 'Пя', 'Су'],
      uz: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
   },
};
const DateInput = memo(
   ({
      isDisabled = false,
      isError = false,
      onChange,
      onFocus,
      placeholder = '',
      value = '',
   }) => {
      const [calendar, setCalendar] = useState(new Date());
      const [menuIsOpen, setMenuOpen] = useState(false);
      const language = 'ru';
      const days = locale?.days[language];
      const months = locale?.months[language];
      const Menu = props => (
         <components.Menu {...props}>
            <div>
               <StyledCalendar>
                  <Calendar
                     formatMonth={(_, date) => months[date?.getMonth()]}
                     formatShortWeekday={(_, date) => days[date?.getDay()]}
                     next2Label={null}
                     nextLabel={<NextIcon />}
                     prev2Label={null}
                     prevLabel={<PrevIcon />}
                     value={calendar}
                     navigationLabel={({ view, label, date }) =>
                        view === 'month'
                           ? `${
                                months[date?.getMonth()]
                             } ${date?.getFullYear()}`
                           : label
                     }
                     onChange={calendar => {
                        setCalendar(calendar);
                        const date = String(calendar.getDate() || '').padStart(
                           2,
                           '0'
                        );
                        const month = String(
                           calendar.getMonth() + 1 || ''
                        ).padStart(2, '0');
                        const year = String(
                           calendar.getFullYear() || ''
                        ).padStart(2, '0');
                        onChange(date + month + year);
                        setMenuOpen(false);
                     }}
                  />
               </StyledCalendar>
            </div>
         </components.Menu>
      );
      const onInputChange = (value, { action }) => {
         if (action !== 'input-blur' && action !== 'menu-close') {
            onChange(value);
         }
      };
      return (
         <ReactSelect
            inputValue={value}
            isDisabled={isDisabled}
            isSearchable={true}
            maxMenuHeight={230}
            menuIsOpen={menuIsOpen}
            menuPlacement='auto'
            menuPortalTarget={document.body}
            onFocus={onFocus}
            onInputChange={onInputChange}
            onMenuClose={() => setMenuOpen(false)}
            onMenuOpen={() => setMenuOpen(true)}
            placeholder={placeholder}
            components={{
               Control,
               IndicatorsContainer: () => null,
               Input,
               Menu,
               MenuList: () => null,
            }}
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
   }
);
DateInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func,
   onFocus: func,
   placeholder: string,
   value: string,
};
export default DateInput;
