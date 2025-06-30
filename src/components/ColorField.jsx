import { useEffect, useMemo, useState } from 'react';
import { IMaskInput } from 'react-imask';
import styled from 'styled-components';
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
      font-family: 'Gilroy' !important;
      font-size: 16px;
      font-weight: 500;
      height: 48px;
      outline: none;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
      &::placeholder {
         color: #717171;
      }
      &[data-error='true'] {
         border: 1.5px solid #e41d32;
      }
      &:focus {
         border: 1.5px solid #3a79f3;
      }
      &:disabled {
         background-color: #f4f4f4;
         color: #717171;
         cursor: default;
      }
   }
`;
const ColorInputUniversal = ({ onChange, value }) => {
   const [format, setFormat] = useState('hex');
   const options = useMemo(() => {
      const options = [
         {
            value: 'hex',
            inputs: [
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
         },
         {
            keys: ['r', 'g', 'b', 'a'],
            value: 'rgba',
            inputs: [
               {
                  key: 'r',
                  mask: Number,
                  max: 255,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 'g',
                  mask: Number,
                  max: 255,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 'b',
                  mask: Number,
                  max: 255,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 'a',
                  mask: Number,
                  max: 1,
                  min: 0,
                  scale: 2,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
            ],
         },
         {
            keys: ['h', 's', 'v', 'a'],
            value: 'hsva',
            inputs: [
               {
                  key: 'h',
                  mask: Number,
                  max: 360,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 's',
                  mask: Number,
                  max: 100,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 'l',
                  mask: Number,
                  max: 100,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 'a',
                  mask: Number,
                  max: 1,
                  min: 0,
                  scale: 2,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
            ],
         },
         {
            keys: ['h', 's', 'l', 'a'],
            value: 'hsla',
            inputs: [
               {
                  key: 'h',
                  mask: Number,
                  max: 360,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 's',
                  mask: Number,
                  max: 100,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 'v',
                  mask: Number,
                  max: 100,
                  min: 0,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
               {
                  key: 'a',
                  mask: Number,
                  max: 1,
                  min: 0,
                  scale: 2,
                  transform: value => (value ? value : 0),
                  unmask: true,
               },
            ],
         },
      ];
      return options;
   }, []);
   const currentFormat = useMemo(() => {
      const currentFormat = options.find(option => option?.value === format);
      return currentFormat;
   }, [options, format]);
   useEffect(() => {
      const valueKeys = Object.keys(value || {});
      const newFormat = options.find(option => {
         const optionKeys = Array.isArray(option?.keys) ? option?.keys : [];
         const isEvery = optionKeys.every(option => valueKeys.includes(option));
         return isEvery;
      })?.value;
      const format =
         typeof value === 'object' && value !== null ? newFormat : 'hex';
      console.log(format);
      setFormat(format);
   }, [value, options]);
   return (
      <div className='mb-6 p-4 border rounded'>
         <label className='block text-sm font-medium mb-1'>
            Select Format:
         </label>
         <button
            onClick={() => {
               const newFormat =
                  format === 'hex'
                     ? 'rgba'
                     : format === 'rgba'
                     ? 'hsva'
                     : format === 'hsva'
                     ? 'hsla'
                     : 'hex';
               setFormat(newFormat);
            }}
         >
            Up
         </button>
         <button
            onClick={() => {
               const newFormat =
                  format === 'hex'
                     ? 'hsla'
                     : format === 'hsla'
                     ? 'hsva'
                     : format === 'hsva'
                     ? 'rgba'
                     : 'hex';
               setFormat(newFormat);
            }}
         >
            Down
         </button>
         <div style={{ display: 'flex' }}>
            {currentFormat?.inputs?.length === 1 ? (
               <StyledControl>
                  <IMaskInput
                     {...currentFormat?.inputs?.[0]}
                     placeholder={
                        currentFormat?.inputs?.length === 1
                           ? '#000000'
                           : currentFormat?.inputs?.[0]?.key
                     }
                     onBlur={() => {}}
                  />
               </StyledControl>
            ) : (
               currentFormat?.inputs.map(input => (
                  <div>
                     <IMaskInput
                        {...input}
                        placeholder={
                           currentFormat?.inputs?.length === 1
                              ? '#000000'
                              : input?.key
                        }
                        onBlur={() => {}}
                     />
                  </div>
               ))
            )}
         </div>
      </div>
   );
};
export default ColorInputUniversal;
