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
import { bool, func, string } from 'prop-types';
import { forwardRef, Fragment, memo, useState } from 'react';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/css';
import styled from 'styled-components';
const StyledColor = styled.div`
   background-color: #ffffff;
   border-radius: 14px;
   padding: 12px;
   box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
      0 1px 20px 0 rgba(13, 46, 105, 0.07);
   & .color-palette {
      width: 300px;
      & .rcp-root {
         background-color: transparent;
         & .rcp-body {
            padding: 10px 0 0 0;
         }
         & .rcp-field-input {
            background-color: transparent;
            border-radius: 6px;
            border: 1.5px solid #e1e1e1;
            color: #000000;
            font-size: 14px;
            font-weight: 500;
            outline: none;
            text-transform: uppercase;
            width: 100%;
            &:focus {
               border: 1.5px solid #3a79f3;
            }
         }
         & .rcp-field-label {
            color: #949494;
            font-size: 14px;
            font-weight: 500;
            margin: 2px 0 0 0;
         }
      }
   }
   & .color-input-actions {
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
   cursor: pointer;
   & .input {
      background-color: #ffffff;
      border-radius: 10px;
      border: 1.5px solid #e1e1e1;
      color: #000000;
      font-size: 17px;
      font-weight: 500;
      height: 46px;
      outline: none;
      padding-left: 46px;
      padding-right: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      user-select: none;
      &[data-error='true'] {
         border-color: #e41d32;
      }
      &[data-disabled='true'] {
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
      border-radius: 7px;
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      position: absolute;
      left: 16px;
      top: 11px;
      user-select: none;
      width: 24px;
   }
`;
const ColorInput = memo(
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
         const [color, setColor] = useColor(value);
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
         return (
            <Fragment>
               <StyledControl
                  {...getReferenceProps()}
                  ref={refs.setReference}
                  onFocus={onFocus}
               >
                  <div
                     className='indicator-content'
                     style={{ backgroundColor: color?.hex }}
                  ></div>
                  <div
                     className='input'
                     data-disabled={isDisabled}
                     data-error={isError}
                  >
                     {color?.hex}
                  </div>
               </StyledControl>
               {isOpen && (
                  <FloatingPortal id='floating-ui-portal'>
                     <FloatingFocusManager
                        context={context}
                        initialFocus={false}
                        modal={false}
                     >
                        <StyledColor
                           ref={refs.setFloating}
                           style={floatingStyles}
                           {...getFloatingProps()}
                        >
                           <div className='color-palette'>
                              <ColorPicker
                                 color={color}
                                 hideInput={['hsv']}
                                 onChange={value => {
                                    onChange(value?.hex);
                                    setColor(value);
                                 }}
                              />
                           </div>
                        </StyledColor>
                     </FloatingFocusManager>
                  </FloatingPortal>
               )}
            </Fragment>
         );
      },
      {}
   )
);
ColorInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   onChange: func,
   onFocus: func,
   placeholder: string,
   value: string,
};
export default ColorInput;