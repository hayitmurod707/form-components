import { array, func } from 'prop-types';
import RangeSlider from 'react-slider';
import styled from 'styled-components';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 24px;
   justify-content: center;
   width: 100%;
   & .slider {
      border-radius: 3px;
      height: 5px;
      width: 100%;
   }
`;
const StyledThumb = styled.div`
   background-color: #ffffff;
   border-radius: 50%;
   box-shadow: #cacaca 0px 2px 8px;
   cursor: grab;
   height: 24px;
   outline: none;
   top: -10px;
   width: 24px;
   &:active {
      cursor: grabbing;
      & .value {
         align-items: center;
         bottom: 34px;
         display: flex;
         height: 24px;
         justify-content: center;
         left: 0px;
         position: absolute;
         width: 24px;
         &:before {
            background-color: #3a79f3;
            border-radius: 0 0 2px 0;
            bottom: -6px;
            content: '';
            height: 8px;
            position: absolute;
            transform: rotate(45deg);
            width: 8px;
            z-index: -1;
         }
         & div {
            align-items: center;
            background-color: #3a79f3;
            border-radius: 8px;
            color: #ffffff;
            display: flex;
            font-size: 15px;
            font-weight: 500;
            justify-content: center;
            padding: 5px 8px;
         }
      }
   }
   & .value {
      display: none;
   }
`;
const StyledTrack = styled.div`
   border-radius: 999px;
   bottom: 0;
   top: 0;
   &[data-active='active'] {
      background-color: #3a79f3;
   }
   &[data-active='inactive'] {
      background-color: #f6f6f6;
   }
`;
const defaultOptions = {
   defaultValue: [0, 100],
   minDistance: 1,
   renderThumb: (props, { valueNow }) => (
      <StyledThumb {...props} className={null}>
         <div className='value'>
            <div>{valueNow}</div>
         </div>
      </StyledThumb>
   ),
   renderTrack: (props, { index, value }) => (
      <StyledTrack
         {...props}
         className={null}
         index={index}
         data-active={
            index === 0 || index === value.length ? 'inactive' : 'active'
         }
      />
   ),
};
const ReactSlider = props => (
   <StyledElement>
      <RangeSlider {...defaultOptions} {...props} />
   </StyledElement>
);
ReactSlider.defaultProps = {
   value: [0, 100],
};
ReactSlider.propTypes = {
   onChange: func.isRequired,
   value: array.isRequired,
};
export default ReactSlider;
