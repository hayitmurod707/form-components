import { func, object } from 'prop-types';
import DateInput from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './Input';
const DatePicker = ({ value = new Date(), onChange }) => {
   return (
      <div>
         <DateInput
            onChange={onChange}
            portalId='date-input-portal'
            selected={value}
            showPopperArrow={false}
            customInput={<Input />}
         />
      </div>
   );
};
DatePicker.propTypes = {
   onChange: func,
   value: object,
};
export default DatePicker;
