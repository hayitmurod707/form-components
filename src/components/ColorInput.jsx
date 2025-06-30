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
import { Fragment, memo, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import styled from 'styled-components';
// export const hexToRgba = (hex = '') => {
//    hex = hex.replace(/^#/, '');
//    if (hex.length === 3 || hex.length === 4) {
//       hex = hex
//          .split('')
//          .map(char => char + char)
//          .join('');
//    }
//    const hasAlpha = hex.length === 8;
//    const r = parseInt(hex.slice(0, 2), 16);
//    const g = parseInt(hex.slice(2, 4), 16);
//    const b = parseInt(hex.slice(4, 6), 16);
//    const a = (hasAlpha ? parseInt(hex.slice(6, 8), 16) / 255 : 1).toFixed(3);
//    const newValue = { r, g, b, a };
//    return newValue;
// };
// export const rgbaToHex = ({ r, g, b, a = 1 }) => {
//    const toHex = value => {
//       const hex = Math.round(value).toString(16).padStart(2, '0');
//       return hex;
//    };
//    const newAlpha = isNaN(a) ? 1 : a;
//    const alpha = toHex(newAlpha * 255);
//    const newValue = `#${toHex(r)}${toHex(g)}${toHex(b)}${alpha}`;
//    return newValue;
// };
const StyledColor = styled.div`
   background-color: #ffffff;
   border-radius: 14px;
   padding: 12px;
   box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
      0 1px 20px 0 rgba(13, 46, 105, 0.07);
   & .color-palette {
      width: 300px;
      & .react-colorful {
         width: 100%;
         & .react-colorful__saturation {
            border-bottom: none;
            border-radius: 12px;
            cursor: all-scroll;
            margin: 0 0 12px 0;
         }
         & .react-colorful__hue {
            border-radius: 8px;
            cursor: ew-resize;
            height: 12px;
            margin: 0 0 12px 0;
         }
         & .react-colorful__alpha {
            border-radius: 8px;
            cursor: ew-resize;
            height: 12px;
         }
         & .react-colorful__saturation-pointer,
         & .react-colorful__hue-pointer,
         & .react-colorful__alpha-pointer {
            height: 20px;
            width: 20px;
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
const StyledControl = styled.button`
   align-items: center;
   background-color: #ffffff;
   border-radius: 10px;
   border: 1.5px solid #e1e1e1;
   cursor: pointer;
   display: flex;
   height: 48px;
   outline: none;
   padding: 0 16px;
   position: relative;
   user-select: none;
   width: 100%;
   &[data-error='true'] {
      border-color: #e41d32;
   }
   &[data-disabled='true'] {
      background-color: #f4f4f4;
      color: #717171;
      cursor: default;
   }
   &:focus,
   &[data-focused='true'] {
      border: 1.5px solid #3a79f3;
   }
   & .indicator {
      align-items: center;
      background-color: #ff0000;
      border-radius: 7px;
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      user-select: none;
      width: 24px;
   }
   & .value {
      align-items: center;
      color: #000000;
      display: flex;
      font-size: 17px;
      font-weight: 500;
      padding-left: 10px;
      width: calc(100% - 24px);
   }
`;
const ColorInput = memo(
   ({
      isDisabled = false,
      isError = false,
      onChange,
      onFocus,
      placeholder = '',
      value = '',
   }) => {
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
               data-disabled={isDisabled}
               data-error={isError}
            >
               <div className='indicator' style={{ backgroundColor: value }} />
               <div className='value'>{value}</div>
            </StyledControl>
            {isOpen && (
               <FloatingPortal id='floating-ui-portal'>
                  <FloatingFocusManager
                     context={context}
                     initialFocus={false}
                     modal={false}
                  >
                     <StyledColor
                        {...getFloatingProps()}
                        ref={refs.setFloating}
                        style={floatingStyles}
                     >
                        <div className='color-palette'>
                           <HexAlphaColorPicker
                              color={value}
                              onChange={value => {
                                 onChange(value);
                              }}
                           />
                        </div>
                     </StyledColor>
                  </FloatingFocusManager>
               </FloatingPortal>
            )}
         </Fragment>
      );
   }
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
