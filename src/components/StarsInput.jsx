import { bool, func, number, string } from 'prop-types';
import { memo } from 'react';
import ReactStars from 'react-stars';
import styled from 'styled-components';
const StyledStarsInput = styled.div`
   align-items: center;
   display: flex;
   height: 32px;
   & span + span {
      padding: 0 0 0 4px;
   }
`;
const StarsInput = memo(
   ({
      backgroundColor = '#ADADAD',
      color = '#ffd700',
      isDisabled = false,
      onChange,
      value = 0,
   }) => (
      <StyledStarsInput>
         <ReactStars
            color1={backgroundColor}
            color2={color}
            count={5}
            edit={!isDisabled && typeof onChange === 'function'}
            half={false}
            onChange={onChange}
            size={24}
            value={value}
         />
      </StyledStarsInput>
   )
);
StarsInput.propTypes = {
   backgroundColor: string,
   color: string,
   isDisabled: bool,
   onChange: func,
   value: number,
};
export default StarsInput;
