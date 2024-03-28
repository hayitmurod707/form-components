import { Fragment, useState } from 'react';
import styled from 'styled-components';
import CreatableSelect from './components/CreatableSelect';
import CreditCardInput from './components/CreditCardInput';
// import Editor from './components/Editor';
import OTPInput from './components/OTPInput';
import PassportInput from './components/PassportInput';
import PasswordInput from './components/PasswordInput';
import PhoneInput from './components/PhoneInput';
import SearchInput from './components/SearchInput';
import Select from './components/Select';
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
const StyledEditorContent = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & .sub-title {
      font-size: 24px;
      font-weight: 600;
      margin: 24px 0 8px 0;
      width: 700px;
   }
   & .content {
      padding: 8px 0 24px 0;
      width: 700px;
   }
`;
const App = () => {
   const [passport, setPassport] = useState('');
   const [password, setPassword] = useState('');
   const [phone, setPhone] = useState('');
   const [creditCard, setCreditCard] = useState('');
   const [text, setText] = useState('');
   const [comment, setComment] = useState('');
   const [OTP, setOTP] = useState('');
   const [info, setInfo] = useState('');
   const [time, setTime] = useState('');
   const [select, setSelect] = useState(null);
   const [search, setSearch] = useState('');
   const [loading, setLoading] = useState(false);
   const [checked, setChecked] = useState(false);
   const [creatableOptions, setCreatableOptions] = useState([]);
   const onChange = value => {
      const search = typeof value?.label === 'string' ? value.label : value;
      setSearch(search);
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 100);
   };
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
               <label>Text input</label>
               <TextInput
                  onChange={setText}
                  placeholder='Enter some text'
                  value={text}
               />
            </div>
            <div className='content'>
               <label>Passport input</label>
               <PassportInput
                  onChange={setPassport}
                  placeholder='Enter passport serial number'
                  value={passport}
               />
            </div>
            <div className='content'>
               <label>Password input</label>
               <PasswordInput
                  onChange={setPassword}
                  placeholder='Enter strong password'
                  value={password}
               />
            </div>
            <div className='content'>
               <label>Phone input</label>
               <PhoneInput
                  onChange={setPhone}
                  placeholder='Enter phone number'
                  value={phone}
               />
            </div>
            <div className='content'>
               <label>Credit card input</label>
               <CreditCardInput
                  onChange={setCreditCard}
                  placeholder='Enter credit card number'
                  value={creditCard}
               />
            </div>
            <div className='content'>
               <label>Time input</label>
               <TimeInput
                  onChange={setTime}
                  placeholder='Enter time'
                  value={time}
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
               <label>Search input</label>
               <SearchInput
                  isLoading={loading}
                  onChange={onChange}
                  placeholder='Search option'
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
               <label>Textarea</label>
               <Textarea
                  onChange={setComment}
                  placeholder='Enter comment'
                  value={comment}
               />
            </div>
         </StyledInputContent>
         <StyledOTPContent>
            <h2 className='sub-title'>OTP input</h2>
            <div className='content'>
               <OTPInput value={OTP} onChange={setOTP} />
            </div>
         </StyledOTPContent>
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
