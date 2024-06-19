import { forwardRef } from 'react';
const Input = forwardRef(({ value, onChange, ...props }, ref) => {
   console.log(props);
   return (
      <input
         {...props}
         value={value}
         onChange={e => onChange(e.target.value)}
         options={{
            date: true,
            datePattern: ['d', 'm', 'Y'],
            delimiter: '-',
         }}
         inputMode='numeric'
         type='text'
         ref={ref}
      />
   );
});
export default Input;
