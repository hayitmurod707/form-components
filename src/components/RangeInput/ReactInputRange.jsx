import { func, number, shape } from 'prop-types';
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
const defaultOptions = {
   formatLabel: value => value,
   maxValue: 100,
   minValue: 0,
   step: 1,
};
const ReactInputRange = props => (
   <StyledElement>
      <Slider {...defaultOptions} {...props} />
   </StyledElement>
);
ReactInputRange.defaultProps = {
   value: { min: 0, max: 100 },
};
ReactInputRange.propTypes = {
   onChange: func.isRequired,
   value: shape({ min: number.isRequired, max: number.isRequired }).isRequired,
};
export default ReactInputRange;
