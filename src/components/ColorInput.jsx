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
import { any, bool, func, string } from 'prop-types';
import { Fragment, memo, useMemo, useState } from 'react';
import {
   HexAlphaColorPicker,
   HslaColorPicker,
   HsvaColorPicker,
   RgbaColorPicker,
} from 'react-colorful';
import { IMaskInput } from 'react-imask';
import styled from 'styled-components';
export const hexToRgba = (hex = '') => {
   hex = hex.replace(/^#/, '');
   if (hex.length === 3 || hex.length === 4) {
      hex = hex
         .split('')
         .map(char => char + char)
         .join('');
   }
   const hasAlpha = hex.length === 8;
   const r = parseInt(hex.slice(0, 2), 16);
   const g = parseInt(hex.slice(2, 4), 16);
   const b = parseInt(hex.slice(4, 6), 16);
   const a = (hasAlpha ? parseInt(hex.slice(6, 8), 16) / 255 : 1).toFixed(3);
   const rgbaFormat = { r, g, b, a };
   return rgbaFormat;
};
export const rgbaToHex = ({ r = 0, g = 0, b = 0, a = 1 }) => {
   const toHex = value => {
      const hex = Math.round(value).toString(16).padStart(2, '0');
      return hex;
   };
   const newAlpha = isNaN(a) ? 1 : a;
   const alpha = toHex(newAlpha * 255);
   const hexFormat = `#${toHex(r)}${toHex(g)}${toHex(b)}${alpha}`;
   return hexFormat;
};
export const hslaToHex = ({ h = 0, s = 0, l = 0, a = 1 }) => {
   s /= 100;
   l /= 100;
   const k = n => (n + h / 30) % 12;
   const aVal = s * Math.min(l, 1 - l);
   const f = n => {
      const color =
         l - aVal * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return Math.round(255 * color);
   };
   const toHex = v => v.toString(16).padStart(2, '0');
   const r = f(0);
   const g = f(8);
   const b = f(4);
   const alpha = Math.round(a * 255);
   const hexFormat =
      '#' + toHex(r) + toHex(g) + toHex(b) + (a < 1 ? toHex(alpha) : '');
   return hexFormat;
};
export const hsvaToHex = ({ h = 0, s = 0, v = 0, a = 1 }) => {
   s /= 100;
   v /= 100;
   const c = v * s;
   const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
   const m = v - c;
   let r1, g1, b1;
   if (h < 60) [r1, g1, b1] = [c, x, 0];
   else if (h < 120) [r1, g1, b1] = [x, c, 0];
   else if (h < 180) [r1, g1, b1] = [0, c, x];
   else if (h < 240) [r1, g1, b1] = [0, x, c];
   else if (h < 300) [r1, g1, b1] = [x, 0, c];
   else [r1, g1, b1] = [c, 0, x];
   const r = Math.round((r1 + m) * 255);
   const g = Math.round((g1 + m) * 255);
   const b = Math.round((b1 + m) * 255);
   const alpha = Math.round(a * 255);
   const toHex = v => v.toString(16).padStart(2, '0');
   const hexFormat =
      '#' + toHex(r) + toHex(g) + toHex(b) + (a < 1 ? toHex(alpha) : '');
   return hexFormat;
};
const StyledColor = styled.div`
   background-color: #ffffff;
   border-radius: 14px;
   padding: 12px;
   box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
      0 1px 20px 0 rgba(13, 46, 105, 0.07);
   & .react-colorful {
      width: 300px;
      height: 220px;
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
`;
const StyledControl = styled.div`
   display: flex;
   height: 48;
   position: relative;
   width: 100%;
   & .single-input {
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
      &:focus-within {
         & .indicator-content {
            & div {
               border: 1.5px solid #3a79f3;
            }
         }
      }
   }
   & .color-input-container {
      background-color: #ffffff;
      border-radius: 10px;
      border: 1.5px solid #e1e1e1;
      display: flex;
      height: 48px;
      overflow: hidden;
      padding-right: 50px;
      width: 100%;
      &[data-disabled='true'] {
         background-color: #f4f4f4;
      }
      &[data-error='true'] {
         border: 1.5px solid #e41d32;
      }
      &:focus-within {
         border: 1.5px solid #3a79f3;
         & input {
            border: none;
         }
      }
      & input {
         border: none;
         color: #000000;
         font-size: 17px;
         font-weight: 500;
         height: 100%;
         outline: none;
         padding-left: 15px;
         width: 55px;
         &::placeholder {
            color: #717171;
         }
         &:disabled {
            color: #717171;
            cursor: default;
         }
         &:focus {
            border: none;
         }
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
      &[data-disabled='true'] {
         cursor: default;
      }
      &[data-disabled='false'] {
         &:hover {
            background-color: #f1f1f1;
         }
      }
      & div {
         border: 1.5px solid #e1e1e1;
         width: 22px;
         height: 22px;
         border-radius: 8px;
      }
   }
`;
const pickers = {
   hex: HexAlphaColorPicker,
   hsla: HslaColorPicker,
   hsva: HsvaColorPicker,
   rgba: RgbaColorPicker,
};
const inputs = {
   hex: [
      {
         mask: /^#[0-9a-fA-F]{0,8}$/,
         overwrite: false,
         transform: (value = '') => {
            const newValue =
               value?.length === 7 || value?.length === 9
                  ? value
                  : value?.length >= 4
                  ? value.slice(0, 4)
                  : '#000';
            return newValue;
         },
      },
   ],
   rgba: [
      {
         key: 'r',
         mask: Number,
         max: 255,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 'g',
         mask: Number,
         max: 255,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 'b',
         mask: Number,
         max: 255,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 'a',
         mask: Number,
         max: 1,
         min: 0,
         scale: 2,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
   ],
   hsva: [
      {
         key: 'h',
         mask: Number,
         max: 360,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 's',
         mask: Number,
         max: 100,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 'v',
         mask: Number,
         max: 100,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 'a',
         mask: Number,
         max: 1,
         min: 0,
         scale: 2,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
   ],
   hsla: [
      {
         key: 'h',
         mask: Number,
         max: 360,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 's',
         mask: Number,
         max: 100,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 'l',
         mask: Number,
         max: 100,
         min: 0,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
      {
         key: 'a',
         mask: Number,
         max: 1,
         min: 0,
         scale: 2,
         transform: value => +(value ? value : 0),
         unmask: true,
      },
   ],
};
const ColorInput = memo(
   ({
      isDisabled = false,
      isError = false,
      onChange,
      onFocus,
      placeholder = '',
      value,
      format = 'hex',
   }) => {
      // dropdown options
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
      // input options
      const memoizedInputs = useMemo(() => inputs?.[format], [format]);
      const MemoizedPicker = useMemo(() => pickers?.[format], [format]);
      const isHex = useMemo(
         () => memoizedInputs?.length === 1,
         [memoizedInputs]
      );
      const backgroundColor = useMemo(() => {
         const formatters = {
            hex: value => String(value || ''),
            hsla: value => hslaToHex(value),
            hsva: value => hsvaToHex(value),
            rgba: value => rgbaToHex(value),
         };
         const formatter = formatters?.[format];
         const backgroundColor = formatter(value);
         return backgroundColor;
      }, [value, format]);
      return (
         <Fragment>
            <StyledControl
               ref={refs.setReference}
               onFocus={onFocus}
               data-disabled={isDisabled}
               data-error={isError}
            >
               {isHex ? (
                  <IMaskInput
                     className='single-input'
                     data-error={isError}
                     disabled={isDisabled}
                     lazy={true}
                     mask='#HHHHHHHH'
                     onAccept={onChange}
                     overwrite={true}
                     placeholder={placeholder}
                     value={value}
                     definitions={{
                        H: /[0-9a-fA-F]/,
                     }}
                     onBlur={() => {
                        const newValue =
                           value?.length === 9
                              ? value
                              : value?.length >= 7
                              ? value.slice(0, 7)
                              : value?.length >= 4
                              ? value.slice(0, 4)
                              : '';
                        onChange(newValue);
                     }}
                  />
               ) : (
                  <div
                     className='color-input-container'
                     data-disabled={isDisabled}
                     data-error={isError}
                  >
                     {memoizedInputs.map(
                        ({ key, mask, max, min, unmask, transform }, index) => (
                           <IMaskInput
                              disabled={isDisabled}
                              key={key}
                              mask={mask}
                              max={max}
                              min={min}
                              name={`color-key-${key}`}
                              unmask={unmask}
                              value={`${value?.[key]}`}
                              onAccept={(keyValue, e) => {
                                 const element = e?.el?.input;
                                 const nextElement =
                                    element?.nextElementSibling;
                                 const prevElement =
                                    element?.previousElementSibling;
                                 const nextElementHasFocusable =
                                    +`${keyValue}0` > max &&
                                    index + 1 !== memoizedInputs?.length;
                                 const parsedValue = transform(keyValue);
                                 const prevElementHasFocusable =
                                    keyValue === '' && index !== 0;
                                 if (prevElementHasFocusable) {
                                    prevElement.focus();
                                 }
                                 if (nextElementHasFocusable) {
                                    nextElement.focus();
                                 }
                                 const newValue = {
                                    ...value,
                                    [key]: parsedValue,
                                 };
                                 onChange(newValue);
                              }}
                           />
                        )
                     )}
                  </div>
               )}
               <div
                  {...getReferenceProps()}
                  className='indicator-content'
                  data-disabled={isDisabled}
               >
                  <div style={{ backgroundColor }} />
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
                        {...getFloatingProps()}
                        ref={refs.setFloating}
                        style={floatingStyles}
                     >
                        <MemoizedPicker color={value} onChange={onChange} />
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
   value: any,
};
export default ColorInput;
