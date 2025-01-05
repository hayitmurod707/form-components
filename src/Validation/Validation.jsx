import { useState } from 'react';
import styled from 'styled-components';
import TextInput from '../components/TextInput';
import v from '../validation';
const StyledValidation = styled.form`
   display: flex;
   align-items: center;
   flex-direction: column;
   & .input-content {
      width: 400px;
      margin: 20px 0;
   }
   & button {
      background-color: #3a79f3;
      border-radius: 10px;
      border: none;
      color: #ffffff;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
      height: 48px;
      outline: none;
      padding: 0 20px;
   }
`;
const Validation = () => {
   const [value, onChange] = useState('');
   const validate = e => {
      e.preventDefault();
      const schema = {
         required: v.array.list(v.number.float()),
         optional: v.array.list(v.number.float(), false),
      };
      const data = {
         required: [1],
         optional: [],
      };
      const options = {
         data,
         onError: errors => console.log(errors),
         onSuccess: () => console.log('success'),
         schema,
      };
      v.validate(options);
   };
   return (
      <StyledValidation onSubmit={validate}>
         <div className='input-content'>
            <TextInput value={value} onChange={onChange} />
         </div>
         <button type='submit'>Validate</button>
      </StyledValidation>
   );
};
export default Validation;
