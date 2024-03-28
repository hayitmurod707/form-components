import Input from 'cleave.js/react';
import moment from 'moment';
import { bool, func, object } from 'prop-types';
import { Fragment, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
const StyledControl = styled.div`
   border-radius: 10px;
   height: 44px;
   position: relative;
   width: 100%;
   & input {
      background-color: transparent;
      border-radius: 10px;
      border: 1.5px solid #e1e1e1;
      color: #3c3c3c;
      font-size: 16px;
      font-weight: 500;
      height: 44px;
      outline: none;
      padding-left: 15px;
      width: 100%;
      &[data-error='true'] {
         border-color: #e41d32;
      }
      &:focus {
         border: 1.5px solid #3a79f3;
         & + .dropdown {
            color: #3a79f3;
         }
      }
      &:disabled {
         color: #717171;
      }
   }
   & .dropdown {
      align-items: center;
      color: #949494;
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      position: absolute;
      right: 12px;
      top: 10px;
      width: 24px;
      &[data-disabled='true'] {
         cursor: default;
      }
   }
`;
const StyledCalendar = styled.div`
   border-radius: 16px;
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
   margin: 0;
   width: 300px;
   padding: 10px;
   & .react-calendar {
      border: none;
      width: 280px !important;
      & .react-calendar__navigation {
         display: flex;
         margin: 0;
         & button {
            background-color: #f4f4f4;
            border-radius: 12px;
            border: none;
            color: #717171;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            height: 40px;
            min-width: 40px;
            outline: none;
            padding: 0;
            &:hover,
            &:focus {
               background-color: #3a79f3;
               color: #ffffff;
               cursor: pointer;
            }
            &[disabled] {
               color: #717171;
               cursor: not-allowed;
               &:hover,
               &:focus {
                  background-color: #f4f4f4;
                  color: #717171;
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
            font-size: 15px;
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
            font-size: 15px;
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
               background: #3a79f3;
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
               background-color: #3a79f3;
               color: #ffffff;
            }
         }
         & .react-calendar__tile--now {
            background: #00cc56;
            color: #ffffff;
            &:hover {
               background-color: #3a79f3;
            }
         }
         & .react-calendar__tile--hasActive,
         & .react-calendar__tile--active {
            background-color: #3a79f3;
            color: #ffffff;
            &:hover {
               background-color: #3a79f3;
               color: #ffffff;
            }
         }
      }
   }
`;
const Dropdown = () => (
   <svg fill='none' height='20' viewBox='0 0 20 20' width='20'>
      <path
         d='M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V5.83333C17.5 4.91286 16.7538 4.16667 15.8333 4.16667H4.16667C3.24619 4.16667 2.5 4.91286 2.5 5.83333V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5Z'
         stroke='currentColor'
         strokeLinecap='round'
         strokeLinejoin='round'
         strokeWidth='2'
      />
   </svg>
);
const NextLabel = () => (
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
const PrevLabel = () => (
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
const DateInput = ({
   isDisabled,
   isError,
   maxDate,
   minDate,
   onChange,
   onFocus,
   value,
}) => {
   const initialValue = moment(value).format('DD-MM-YYYY');
   const [date, setDate] = useState(initialValue);
   const language = 'uz';
   const days = locale?.days[language];
   const months = locale?.months[language];
   return (
      <Fragment>
         <StyledControl
            onClick={() => {
               if (!isDisabled && typeof onFocus === 'function') {
                  onFocus();
               }
            }}
         >
            <Input
               data-error={isError}
               disabled={isDisabled}
               value={date}
               options={{
                  date: true,
                  datePattern: ['d', 'm', 'Y'],
                  delimiter: '-',
               }}
               onBlur={() => {
                  setDate(initialValue);
               }}
               onChange={e => {
                  const date = e.target.value;
                  const value = date.split('-');
                  const day = parseInt(value[0] ? value[0] : 0);
                  const month = parseInt(value[1] ? value[1] - 1 : 0);
                  const year = parseInt(value[2] || 0);
                  const incomingValue = new Date(year, month, day);
                  const parsedValue =
                     incomingValue.getTime() < minDate.getTime()
                        ? minDate
                        : incomingValue.getTime() > maxDate.getTime()
                        ? maxDate
                        : incomingValue;
                  onChange(parsedValue);
                  setDate(date);
               }}
            />
            <span className='dropdown' data-disabled={isDisabled}>
               <Dropdown />
            </span>
         </StyledControl>
         <StyledCalendar>
            <Calendar
               formatMonth={(_, date) => months[date?.getMonth()]}
               formatShortWeekday={(_, date) => days[date?.getDay()]}
               maxDate={maxDate}
               minDate={minDate}
               next2Label={null}
               nextLabel={<NextLabel />}
               prev2Label={null}
               prevLabel={<PrevLabel />}
               value={value}
               navigationLabel={({ view, label, date }) =>
                  view === 'month'
                     ? `${months[date?.getMonth()]} ${date?.getFullYear()}`
                     : label
               }
               onChange={(date, e) => {
                  setDate(moment(date).format('DD-MM-YYYY'));
                  onChange(date);
               }}
            />
         </StyledCalendar>
      </Fragment>
   );
};
DateInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   maxDate: object,
   minDate: object,
   onChange: func.isRequired,
   onFocus: func,
   value: object.isRequired,
};
DateInput.defaultProps = {
   isDisabled: false,
   isError: false,
   maxDate: new Date('2200-01-01'),
   minDate: new Date('1970-01-01'),
   value: new Date(),
};
export default DateInput;
