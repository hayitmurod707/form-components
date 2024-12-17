import {
   autoUpdate,
   flip,
   FloatingFocusManager,
   FloatingPortal,
   offset,
   shift,
   useClick,
   useDismiss,
   useFloating,
   useInteractions,
   useRole,
} from '@floating-ui/react';
import CleaveInput from 'cleave.js/react';
import { bool, func, string } from 'prop-types';
import { forwardRef, Fragment, memo, useState } from 'react';
import Calendar from 'react-calendar';
// import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
const StyledCalendar = styled.div`
   background-color: #ffffff;
   border-radius: 14px;
   padding: 12px;
   box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
      0 1px 20px 0 rgba(13, 46, 105, 0.07);
   & .react-calendar {
      border: none;
      width: 280px !important;
      & .react-calendar__navigation {
         display: flex;
         margin: 0;
         & button {
            align-items: center;
            background-color: #f6f7f9;
            border-radius: 12px;
            border: none;
            color: #696f85;
            cursor: pointer;
            display: flex;
            font-size: 15px;
            font-weight: 500;
            height: 40px;
            justify-content: center;
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
               color: #696f85;
               cursor: not-allowed;
               &:hover,
               &:focus {
                  background-color: #f6f7f9;
                  color: #696f85;
               }
            }
         }
         & .react-calendar__navigation__next-button {
            margin: 0 0 0 8px;
            & svg {
               margin: 2px 0 0 2px;
            }
         }
         & .react-calendar__navigation__prev-button {
            margin: 0 8px 0 0;
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
               color: #696f85 !important;
               cursor: not-allowed;
            }
         }
         & .react-calendar__month-view__weekdays__weekday {
            align-items: center;
            color: #696f85;
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
               background: #3a79f3;
            }
         }
         & .react-calendar__month-view__days__day--neighboringMonth {
            color: #696f85;
         }
         & .react-calendar__month-view__days__day--weekend {
            color: #ff4921;
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
   & .date-input-actions {
      display: flex;
      justify-content: space-between;
      padding: 6px 0 0 0;
      & .clear {
         background-color: #f4f4f4;
         border-radius: 10px;
         border: none;
         color: #717171;
         cursor: pointer;
         font-size: 15px;
         font-weight: 500;
         height: 36px;
         width: calc(50% - 5px);
      }
      & .save {
         background-color: #3a79f3;
         border-radius: 10px;
         border: none;
         color: #ffffff;
         cursor: pointer;
         font-size: 15px;
         font-weight: 500;
         height: 36px;
         width: calc(50% - 5px);
      }
   }
`;
const StyledControl = styled.div`
   display: flex;
   height: 48;
   position: relative;
   width: 100%;
   & input {
      background-color: #ffffff;
      border-radius: 10px;
      border: 1.5px solid #e1e1e1;
      color: #000000;
      font-size: 17px;
      font-weight: 500;
      height: 48px;
      outline: none;
      padding-left: 15px;
      padding-right: 45px;
      width: 100%;
      &::placeholder {
         color: #717171;
      }
      &[data-error='true'] {
         border-color: #e41d32;
      }
      &:disabled {
         background-color: #f4f4f4;
         color: #717171;
         cursor: default;
      }
      &:focus {
         border: 1.5px solid #3a79f3;
      }
   }
   & .indicator-content {
      align-items: center;
      background-color: transparent;
      border-radius: 20px;
      color: #808080;
      cursor: pointer;
      display: flex;
      height: 40px;
      justify-content: center;
      position: absolute;
      right: 5px;
      top: 4px;
      user-select: none;
      width: 40px;
      &[data-disabled='false'] {
         &:hover {
            background-color: #f1f1f1;
         }
      }
   }
`;
const DownIcon = () => (
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
const locales = {
   ru: {
      clear: 'Очистить',
      days: ['Во', 'По', 'Вт', 'Ср', 'Че', 'Пя', 'Су'],
      done: 'Готово',
      months: [
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
   },
   uz: {
      clear: "O'chirish",
      days: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
      done: 'Tayyor',
      months: [
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
};
const DateInput = memo(
   forwardRef(
      (
         {
            isDisabled = false,
            isError = false,
            onChange,
            onFocus,
            placeholder = '',
            value = '',
         },
         ref
      ) => {
         // const { i18n } = useTranslation();
         // const language = i18n?.language;
         const language = 'uz';
         const currentLocale = locales?.[language];
         const days = currentLocale?.days;
         const months = currentLocale?.months;
         const [view, setView] = useState('month');
         const [calendar, setCalendar] = useState(new Date());
         const [isOpen, setIsOpen] = useState(false);
         const { refs, floatingStyles, context } = useFloating({
            open: isOpen,
            whileElementsMounted: autoUpdate,
            onOpenChange: open => {
               const calendar =
                  value?.length === 10
                     ? new Date(value.split('-').reverse().join())
                     : new Date();
               setCalendar(calendar);
               setIsOpen(open);
            },
            middleware: [
               offset(0),
               flip({ fallbackAxisSideDirection: 'end' }),
               shift(),
            ],
         });
         const click = useClick(context, { enabled: !isDisabled });
         const dismiss = useDismiss(context);
         const role = useRole(context);
         const { getReferenceProps, getFloatingProps } = useInteractions([
            click,
            dismiss,
            role,
         ]);
         const inputProps = {
            'data-error': isError,
            className: 'date-input',
            disabled: isDisabled,
            inputMode: 'numeric',
            onChange,
            onFocus,
            placeholder,
            ref,
            type: 'text',
            value,
            options: {
               date: true,
               datePattern: ['d', 'm', 'Y'],
               delimiter: '-',
            },
         };
         const iconProps = {
            ...getReferenceProps(),
            'data-disabled': isDisabled,
            className: 'indicator-content',
         };
         const calendarProps = {
            formatMonth: (_, date) => months[date?.getMonth()],
            formatShortWeekday: (_, date) => days[date?.getDay()],
            next2Label: null,
            nextLabel: <NextIcon />,
            onChange: setCalendar,
            onViewChange: ({ view }) => setView(view),
            prev2Label: null,
            prevLabel: <PrevIcon />,
            value: calendar,
            view,
            navigationLabel: ({ view, label, date }) => {
               const navigationLabel =
                  view === 'month'
                     ? `${months[date?.getMonth()]} ${date?.getFullYear()}`
                     : label;
               return navigationLabel;
            },
         };
         const onClose = () => {
            onChange('');
            setIsOpen(false);
         };
         const onSelect = () => {
            const date = String(calendar.getDate()).padStart(2, '0');
            const month = String(calendar.getMonth() + 1).padStart(2, '0');
            const year = String(calendar.getFullYear()).padStart(2, '0');
            const value = `${date}-${month}-${year}`;
            onChange(value);
            setIsOpen(false);
         };
         return (
            <Fragment>
               <StyledControl ref={refs.setReference}>
                  <CleaveInput {...inputProps} />
                  <div {...iconProps}>
                     <DownIcon />
                  </div>
               </StyledControl>
               {isOpen && (
                  <FloatingPortal id='floating-ui-portal'>
                     <FloatingFocusManager
                        context={context}
                        initialFocus={false}
                        modal={false}
                     >
                        <StyledCalendar
                           ref={refs.setFloating}
                           style={floatingStyles}
                           {...getFloatingProps()}
                        >
                           <Calendar {...calendarProps} />
                           {view === 'month' && (
                              <div className='date-input-actions'>
                                 <button className='clear' onClick={onClose}>
                                    {currentLocale?.clear}
                                 </button>
                                 <button className='save' onClick={onSelect}>
                                    {currentLocale?.done}
                                 </button>
                              </div>
                           )}
                        </StyledCalendar>
                     </FloatingFocusManager>
                  </FloatingPortal>
               )}
            </Fragment>
         );
      },
      {}
   )
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
