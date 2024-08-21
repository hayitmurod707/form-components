import { Fragment, useState } from 'react';
import styled from 'styled-components';
import CreatableSelect from './components/CreatableSelect';
import CreditCardInput from './components/CreditCardInput';
// import Editor from './components/Editor';
import AutoComplete from './components/AutoComplete';
import Calendar from './components/Calendar/Calendar';
import DateInput from './components/DateInput';
import MultiSelect from './components/MultiSelect';
import OTPInput from './components/OTPInput';
import PINFLInput from './components/PINFLInput';
import PassportInput from './components/PassportInput';
import PasswordInput from './components/PasswordInput';
import PhoneInput from './components/PhoneInput';
import {
   RCSlider,
   ReactInputRange,
   ReactRange,
   ReactSlider,
} from './components/RangeInput';
import Select from './components/Select';
import SliderInput from './components/SliderInput';
import StarsInput from './components/StarsInput';
import SwitchInput from './components/SwitchInput';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import TimeInput from './components/TimeInput';
const StyledHeader = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & h1 {
      font-size: 32px;
      font-weight: 600;
      margin: 32px 0 0 0;
      text-align: center;
   }
   & p {
      font-size: 18px;
      font-weight: 500;
      margin: 24px 0 0 0;
      text-align: center;
      color: #768695;
      & a {
         align-items: center;
         background-color: #5254f1;
         border-radius: 10px;
         color: white;
         display: flex;
         font-size: 16px;
         justify-content: center;
         padding: 12px 24px;
         text-decoration: none;
      }
   }
`;
const StyledInputContent = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & .sub-title {
      font-size: 24px;
      font-weight: 600;
      margin: 24px 0 8px 0;
      width: 300px;
   }
   & .content {
      padding: 8px 0;
      width: 300px;
      & label {
         display: block;
         margin: 0 0 6px 0;
         font-weight: 500;
         font-size: 16px;
      }
   }
`;
const StyledOTPContent = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & .sub-title {
      font-size: 24px;
      font-weight: 600;
      margin: 24px 0 8px 0;
      width: 300px;
   }
   & .content {
      padding: 8px 0 24px 0;
      width: 300px;
   }
`;
// const StyledEditorContent = styled.div`
//    align-items: center;
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//    width: 100%;
//    & .sub-title {
//       font-size: 24px;
//       font-weight: 600;
//       margin: 24px 0 8px 0;
//       width: 700px;
//    }
//    & .content {
//       padding: 8px 0 24px 0;
//       width: 700px;
//    }
// `;
const App = () => {
   const [passport, setPassport] = useState('');
   const [password, setPassword] = useState('');
   const [pinfl, setPinfl] = useState('');
   const [phone, setPhone] = useState('');
   const [creditCard, setCreditCard] = useState('');
   const [text, setText] = useState('');
   const [comment, setComment] = useState('');
   const [OTP, setOTP] = useState('');
   // const [info, setInfo] = useState('');
   const [time, setTime] = useState('');
   const [date, setDate] = useState('');
   const [select, setSelect] = useState(null);
   const [search, setSearch] = useState('');
   const [rating, setRating] = useState(0);
   const [loading, setLoading] = useState(false);
   const [checked, setChecked] = useState(false);
   const [creatableOptions, setCreatableOptions] = useState([]);
   const [range, setRange] = useState([20, 40, 60, 80]);
   const [val, setVal] = useState({ min: 30, max: 80 });
   const [value, setValue] = useState([]);
   const [currency, setCurrency] = useState('');
   return (
      <Fragment>
         <StyledHeader>
            <h1>Form components</h1>
            <p>Form components for react application</p>
            <p>
               <a
                  href='https://github.com/hayitmurod707/form-components'
                  rel='noreferrer'
                  target='_blank'
               >
                  Github repository
               </a>
            </p>
         </StyledHeader>
         <StyledInputContent>
            <h2 className='sub-title'>Inputs</h2>
            <div className='content'>
               <label>Stars input</label>
               <StarsInput value={rating} onChange={setRating} />
            </div>
            <div className='content'>
               <label>Slider input</label>
               <SliderInput
                  max={100}
                  min={0}
                  onChange={setCurrency}
                  value={currency}
               />
            </div>
            <div className='content'>
               <label>Date input</label>
               <DateInput value={date} onChange={setDate} />
            </div>
            <div className='content'>
               <label>Text input</label>
               <TextInput onChange={setText} value={text} />
            </div>
            <div className='content'>
               <label>Phone input</label>
               <PhoneInput onChange={setPhone} value={phone} />
            </div>
            <div className='content'>
               <label>Credit card input</label>
               <CreditCardInput onChange={setCreditCard} value={creditCard} />
            </div>
            <div className='content'>
               <label>Passport input</label>
               <PassportInput onChange={setPassport} value={passport} />
            </div>
            <div className='content'>
               <label>Pinfl input</label>
               <PINFLInput onChange={setPinfl} value={pinfl} />
            </div>
            <div className='content'>
               <label>Password input</label>
               <PasswordInput onChange={setPassword} value={password} />
            </div>
            <div className='content'>
               <label>Time input</label>
               <TimeInput onChange={setTime} value={time} />
            </div>
            <div className='content'>
               <label>Textarea</label>
               <Textarea onChange={setComment} value={comment} />
            </div>
            <div className='content'>
               <label>Multi Select</label>
               <MultiSelect
                  options={[
                     { value: 1, label: 'Option 1' },
                     { value: 2, label: 'Option 2' },
                     { value: 3, label: 'Option 3' },
                     { value: 4, label: 'Option 4' },
                     { value: 5, label: 'Option 5' },
                     { value: 6, label: 'Option 6' },
                     { value: 7, label: 'Option 7' },
                  ]}
                  onChange={setValue}
                  value={value}
               />
            </div>
            <div className='content'>
               <label>Creatable select</label>
               <CreatableSelect
                  onChange={setCreatableOptions}
                  value={creatableOptions}
                  placeholder='Create option'
               />
            </div>
            <div className='content'>
               <label>Select</label>
               <Select
                  onChange={setSelect}
                  placeholder='Select option'
                  value={select}
                  options={[
                     {
                        label: 'Option 1',
                        value: 1,
                     },
                     {
                        label: 'Option 2',
                        value: 2,
                     },
                     {
                        label: 'Option 3',
                        value: 3,
                     },
                     {
                        label: 'Option 4',
                        value: 4,
                     },
                  ]}
               />
            </div>
            <div className='content'>
               <label>AutoComplete</label>
               <AutoComplete
                  isLoading={loading}
                  onChange={setSearch}
                  placeholder='Search option'
                  setLoading={setLoading}
                  value={search}
                  options={[
                     {
                        label: 'Option 1',
                        value: 1,
                     },
                     {
                        label: 'Option 2',
                        value: 2,
                     },
                     {
                        label: 'Option 3',
                        value: 3,
                     },
                     {
                        label: 'Option 4',
                        value: 4,
                     },
                  ]}
               />
            </div>
            <div className='content'>
               <label>Switch input</label>
               <SwitchInput onChange={setChecked} checked={checked} />
            </div>
            <div className='content'>
               <label>ReactSlider</label>
               <ReactSlider onChange={setRange} value={range} />
            </div>
            <div className='content'>
               <label>ReactRange</label>
               <ReactRange onChange={setRange} value={range} />
            </div>
            <div className='content'>
               <label>RCSlider</label>
               <RCSlider onChange={setRange} value={range} />
            </div>
            <div className='content'>
               <label>ReactInputRange</label>
               <ReactInputRange onChange={setVal} value={val} />
            </div>
         </StyledInputContent>
         <StyledOTPContent>
            <h2 className='sub-title'>OTP input</h2>
            <div className='content'>
               <OTPInput autoFocus={false} onChange={setOTP} value={OTP} />
            </div>
         </StyledOTPContent>
         <Calendar />
         {/* <StyledEditorContent>
            <h2 className='sub-title'>Editor</h2>
            <div className='content'>
               <Editor value={info} onChange={setInfo} />
            </div>
         </StyledEditorContent> */}
      </Fragment>
   );
};
export default App;
