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
import { array, bool, func, string } from 'prop-types';
import { forwardRef, Fragment, memo, useMemo, useState } from 'react';
import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';
const prettyPhone = phone => {
   const checkedPhone = String(phone || '');
   const first = checkedPhone.slice(3, 5);
   const second = checkedPhone.slice(5, 8);
   const third = checkedPhone.slice(8, 10);
   const fourth = checkedPhone.slice(10, 12);
   const mainPhone = `+998 (${first}) ${second} ${third} ${fourth}`;
   return mainPhone;
};
const StyledPhones = styled.div`
   background-color: #ffffff;
   border-radius: 14px;
   min-width: 300px;
   padding: 10px;
   box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
      0 1px 20px 0 rgba(13, 46, 105, 0.07);
   & .add-phone {
      height: 44px;
      position: relative;
      width: 100%;
      & input {
         background-color: #ffffff;
         border-radius: 10px;
         border: 1px solid #e1e1e1;
         color: #000000;
         font-size: 17px;
         font-weight: 500;
         height: 44px;
         outline: none;
         padding-left: 11px;
         padding-right: 45px;
         width: 100%;
         &::placeholder {
            color: #717171;
         }
         &:focus {
            border: 1px solid #3a79f3;
         }
      }
      & button {
         align-items: center;
         background-color: transparent;
         border-radius: 50%;
         border: none;
         color: #888888;
         cursor: pointer;
         display: flex;
         height: 30px;
         justify-content: center;
         outline: none;
         padding: 0;
         position: absolute;
         right: 7px;
         top: 7px;
         width: 30px;
         &[data-valid='true'] {
            color: #00cc56;
         }
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
      display: flex;
      height: 36px;
      justify-content: center;
      position: absolute;
      right: 7px;
      top: 6px;
      user-select: none;
      width: 36px;
      &[data-disabled='false'] {
         cursor: pointer;
         &:hover {
            background-color: #f1f1f1;
         }
      }
   }
`;
const StyledPhone = styled.div`
   align-items: center;
   background-color: #f7f8fc;
   border-radius: 10px;
   display: flex;
   font-size: 17px;
   font-weight: 500;
   height: 46px;
   justify-content: space-between;
   margin: 0 0 8px 0;
   padding: 12px 8px 12px 12px;
   & .actions {
      align-items: center;
      display: flex;
      & .select-phone {
         align-items: center;
         background-color: transparent;
         border-radius: 50%;
         border: none;
         color: #00cc56;
         cursor: pointer;
         display: flex;
         height: 30px;
         justify-content: center;
         outline: none;
         padding: 0;
         width: 30px;
         & svg {
            display: block;
         }
      }
      & .remove-phone {
         align-items: center;
         background-color: transparent;
         border-radius: 50%;
         border: none;
         color: #ff4921;
         cursor: pointer;
         display: flex;
         height: 30px;
         justify-content: center;
         margin: 0 0 0 2px;
         outline: none;
         padding: 0;
         width: 30px;
      }
   }
`;
const Phone = memo(
   ({
      phone = '',
      phones = [],
      onChangePhones,
      onChangePhone,
      currentPhone = '',
   }) => {
      const prettyNumber = useMemo(
         () => prettyPhone(currentPhone),
         [currentPhone]
      );
      const hasPermission = useMemo(() => {
         const hasPermission = phone !== currentPhone;
         return hasPermission;
      }, [phone, currentPhone]);
      const change = () => {};
      const remove = () => {
         const newPhones = phones.filter(phone => phone !== currentPhone);
         onChangePhones(newPhones);
      };
      return (
         <StyledPhone>
            <div>{prettyNumber}</div>
            {hasPermission && (
               <div className='actions'>
                  <button className='select-phone' onClick={change}>
                     <svg
                        enableBackground='new 0 0 24 24'
                        height='30'
                        viewBox='0 0 24 24'
                        width='30'
                     >
                        <path
                           fill='currentColor'
                           d='M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.2,10.3l-4.8,4.8c-0.4,0.4-1,0.4-1.4,0l0,0l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l1.5,1.5l4.1-4.1c0.4-0.4,1-0.4,1.4,0C16.6,9.3,16.6,9.9,16.2,10.3z'
                        ></path>
                     </svg>
                  </button>
                  <button className='remove-phone' onClick={remove}>
                     <svg height='30' viewBox='0 0 24 24' width='30'>
                        <path fill='none' d='M0 0h24v24H0V0z'></path>
                        <path
                           fill='currentColor'
                           d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z'
                        ></path>
                     </svg>
                  </button>
               </div>
            )}
         </StyledPhone>
      );
   }
);
const PhonesInput = memo(
   forwardRef(
      (
         {
            isDisabled = false,
            isError = false,
            onChangePhone,
            onChangePhones,
            onFocus,
            phone = '',
            phones = [],
            placeholder = '',
         },
         ref
      ) => {
         const [newPhone, setNewPhone] = useState('');
         const [isOpen, setIsOpen] = useState(false);
         const { refs, floatingStyles, context } = useFloating({
            open: isOpen,
            whileElementsMounted: autoUpdate,
            onOpenChange: setIsOpen,
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
         const isValidPhone = useMemo(() => {
            const isValidPhone =
               newPhone?.length === 12 &&
               phone !== newPhone &&
               !phones.includes(newPhone);
            return isValidPhone;
         }, [newPhone, phones, phone]);
         const addPhone = e => {
            e.preventDefault();
            if (isValidPhone) {
               onChangePhones([...phones, newPhone]);
               setNewPhone('');
            }
         };
         return (
            <Fragment>
               <StyledControl ref={refs.setReference}>
                  <ReactInputMask
                     data-error={isError}
                     disabled={isDisabled}
                     formatChars={{ a: '[0-9]' }}
                     inputMode='numeric'
                     mask='+998 (aa) aaa aa aa'
                     maskChar=''
                     onFocus={onFocus}
                     placeholder={placeholder}
                     ref={ref}
                     type='text'
                     value={phone}
                     onChange={e => {
                        const value = e.target.value.replace(/\+|\)|\(| /g, '');
                        onChangePhone(value);
                     }}
                  >
                     {props => (
                        <input
                           {...props}
                           className='phones-input'
                           disabled={isDisabled}
                           ref={ref}
                        />
                     )}
                  </ReactInputMask>
                  <div
                     {...getReferenceProps()}
                     className='indicator-content'
                     data-disabled={isDisabled}
                  >
                     <svg
                        fill='currentColor'
                        height='20'
                        viewBox='0 0 20 20'
                        width='20'
                     >
                        <path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
                     </svg>
                  </div>
               </StyledControl>
               {isOpen && (
                  <FloatingPortal id='floating-ui-portal'>
                     <FloatingFocusManager
                        context={context}
                        initialFocus={false}
                        modal={false}
                     >
                        <StyledPhones
                           ref={refs.setFloating}
                           style={floatingStyles}
                           {...getFloatingProps()}
                        >
                           {!!phones?.length &&
                              phones.map((currentPhone, index) => (
                                 <Phone
                                    currentPhone={currentPhone}
                                    key={index}
                                    onChangePhone={onChangePhone}
                                    onChangePhones={onChangePhones}
                                    phone={phone}
                                    phones={phones}
                                 />
                              ))}
                           <form onSubmit={addPhone} className='add-phone'>
                              <ReactInputMask
                                 formatChars={{ a: '[0-9]' }}
                                 inputMode='numeric'
                                 mask='+998 (aa) aaa aa aa'
                                 maskChar=''
                                 placeholder='Добавить номер'
                                 type='text'
                                 value={newPhone}
                                 onChange={e => {
                                    const newPhone = e.target.value.replace(
                                       /\+|\)|\(| /g,
                                       ''
                                    );
                                    setNewPhone(newPhone);
                                 }}
                              >
                                 {props => <input {...props} />}
                              </ReactInputMask>
                              <button data-valid={isValidPhone} type='submit'>
                                 <svg
                                    enableBackground='new 0 0 24 24'
                                    height='30'
                                    viewBox='0 0 24 24'
                                    width='30'
                                 >
                                    <path
                                       fill='currentColor'
                                       d='M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.2,10.3l-4.8,4.8c-0.4,0.4-1,0.4-1.4,0l0,0l-2.2-2.2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l1.5,1.5l4.1-4.1c0.4-0.4,1-0.4,1.4,0C16.6,9.3,16.6,9.9,16.2,10.3z'
                                    ></path>
                                 </svg>
                              </button>
                           </form>
                        </StyledPhones>
                     </FloatingFocusManager>
                  </FloatingPortal>
               )}
            </Fragment>
         );
      },
      {}
   )
);
PhonesInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChangePhone: func,
   onChangePhones: func,
   onFocus: func,
   phone: string,
   phones: array,
   placeholder: string,
};
export default PhonesInput;
