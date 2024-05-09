import { func, number, object } from 'prop-types';
import Slider from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styled from 'styled-components';
const StyledElement = styled.div`
   & .input-range {
      height: 24px;
      & .input-range__label--max,
      & .input-range__label--min {
         display: none;
      }
      & .input-range__track--background {
         background-color: #f6f6f6;
         height: 5px;
         transition: none;
         & .input-range__track--active {
            background-color: #3a79f3;
            height: 5px;
            transition: none;
         }
         & .input-range__slider-container {
            transition: none;
            & .input-range__slider {
               background-color: #ffffff;
               border: none;
               box-shadow: #cacaca 0px 2px 8px !important;
               top: -1px;
               &:active {
                  transform: scale(1);
               }
               &:focus {
                  box-shadow: none;
               }
            }
         }
      }
   }
`;
const ReactInputRange = ({
   formatLabel = value => value,
   maxValue = 100,
   minValue = 0,
   step = 1,
   value = { min: 0, max: 100 },
   ...props
}) => (
   <StyledElement>
      <Slider
         {...props}
         formatLabel={formatLabel}
         maxValue={maxValue}
         minValue={minValue}
         step={step}
         value={value}
      />
   </StyledElement>
);
ReactInputRange.propTypes = {
   formatLabel: func,
   maxValue: number,
   minValue: number,
   onChange: func,
   step: number,
   value: object,
};
export default ReactInputRange;
