import { bool, func, number, string } from 'prop-types';
import { memo } from 'react';
import RangeSlider from 'react-slider';
import styled from 'styled-components';
const StyledRangeSlider = styled(RangeSlider)`
   border-radius: 3px;
   bottom: -3px;
   height: 4px;
   left: 8px;
   position: absolute !important;
   width: calc(100% - 16px);
`;
const StyledThumb = styled.div`
   background-color: #5254f1;
   border-radius: 50%;
   cursor: grab;
   height: 20px;
   outline: none;
   top: -9px;
   width: 20px;
   &:active {
      cursor: grabbing;
   }
`;
const StyledTrack = styled.div`
   border-radius: 999px;
   bottom: 0;
   top: 0;
   &[data-active='active'] {
      background-color: #5254f1;
   }
   &[data-active='inactive'] {
      background-color: transparent;
   }
`;
const renderThumb = props => <StyledThumb {...props} className={null} />;
const renderTrack = (props, { index, value }) => (
   <StyledTrack
      {...props}
      className={null}
      index={index}
      data-active={
         index === 0 || index === value.length ? 'active' : 'inactive'
      }
   />
);
const StyledInput = styled.input`
   background-color: transparent;
   border-radius: 10px;
   border: 1.5px solid #e1e1e1;
   font-size: 16px;
   font-weight: 500;
   height: 48px;
   outline: none;
   padding-left: 15px;
   width: 100%;
   &[data-error='true'] {
      border-color: #e41d32;
   }
   &:disabled {
      background-color: #f4f4f4;
      color: #717171;
      cursor: default;
   }
   &:focus {
      border: 1.5px solid #5254f1;
   }
`;
const StyledSliderInput = styled.div`
   display: flex;
   height: 46px;
   position: relative;
   width: 100%;
`;
const SliderInput = memo(
   ({
      isDisabled = false,
      isError = false,
      max = 100,
      min = 0,
      onChange,
      onFocus,
      placeholder = '',
      step = 1,
      value = 0,
   }) => (
      <StyledSliderInput>
         <StyledInput
            data-error={isError}
            disabled={isDisabled}
            inputMode='numeric'
            onFocus={onFocus}
            placeholder={placeholder}
            type='text'
            value={String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            onChange={async e => {
               const value =
                  (await +e.target.value.replace(/[^0-9]/g, '')) || 0;
               const newValue = value > max ? max : value < min ? min : value;
               onChange(newValue);
            }}
         />
         <StyledRangeSlider
            defaultValue={[value]}
            disabled={isDisabled}
            max={max}
            min={min}
            minDistance={1}
            onChange={onChange}
            renderThumb={renderThumb}
            renderTrack={renderTrack}
            step={step}
            value={[value]}
         />
      </StyledSliderInput>
   )
);
SliderInput.propTypes = {
   isDisabled: bool,
   isError: bool,
   max: number,
   min: number,
   onChange: func,
   onFocus: func,
   placeholder: string,
   step: number,
   value: number,
};
export default SliderInput;
