import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import zod from 'zod';
export const useValidate = schema => {
   const { t } = useTranslation('validation');
   const [errors, setErrors] = useState({});
   const memoizedErrors = useMemo(() => {
      const isObject = errors !== null && typeof errors === 'object';
      const newObject = isObject ? errors : {};
      const keys = Object.keys(newObject);
      const memoizedErrors = keys.reduce((total, key) => {
         total[key] = t(key);
         return total;
      }, {});
      return memoizedErrors;
   }, [errors, t]);
   const clearErrors = () => setErrors({});
   const validate = (onSuccess, onError, data) => {
      const result = schema.safeParse(data);
      if (result?.success) {
         onSuccess(result?.data);
      } else {
         const errors = result?.error?.errors;
         const isObject = typeof data === 'object' && data;
         const keys = isObject ? Object.keys(data) : [];
         const errorsList = Array.isArray(errors) ? errors : [];
         const reduce = (total, key) => {
            const find = error => {
               const path = error?.path;
               const newPath = Array.isArray(path) ? path : [];
               const isError = newPath.includes(key);
               return isError;
            };
            const error = errorsList.find(find);
            const message = error?.message || '';
            total[key] = message;
            return total;
         };
         const newErrors = keys.reduce(reduce, {});
         setErrors(newErrors);
         onError(newErrors);
      }
   };
   return {
      clearErrors,
      errors: memoizedErrors,
      validate,
      setErrors,
   };
};
// validation string schema examples common data types
export const stringSchema = zod.object({
   // required text
   requiredText: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' }),

   // optional text
   optionalText: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .optional()
      .or(zod.literal('')),

   // required url
   requiredURL: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .url({ message: 'invalid_url' }),

   // optional url
   optionalURL: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .url({ message: 'invalid_url' })
      .optional()
      .or(zod.literal('')),

   // required email
   requiredEmail: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .email({ message: 'invalid_email' }),

   // optional email
   optionalEmail: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .email({ message: 'invalid_email' })
      .optional()
      .or(zod.literal('')),

   // required color
   requiredColor: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{6}/, {
         message: 'invalid_color',
      }),

   // optional color
   optionalColor: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{6}/, {
         message: 'invalid_color',
      })
      .optional()
      .or(zod.literal('')),

   // required phone
   requiredPhone: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/998\d{9}/, {
         message: 'invalid_phone',
      }),

   // optional phone
   optionalPhone: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/998\d{9}/, {
         message: 'invalid_phone',
      })
      .optional()
      .or(zod.literal('')),

   // required datetime
   requiredDatetime: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .datetime({
         local: true,
         message: 'invalid_datetime',
      }),

   // optional datetime
   optionalDatetime: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .datetime({
         local: true,
         message: 'invalid_datetime',
      })
      .optional()
      .or(zod.literal('')),

   // required date
   requiredDate: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .date({ message: 'invalid_date' }),

   // optional date
   optionalDate: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .date({ message: 'invalid_date' })
      .optional()
      .or(zod.literal('')),

   // required time
   requiredTime: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .time({ message: 'invalid_time' }),

   // optional Time
   optionalTime: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .time({ message: 'invalid_time' })
      .optional()
      .or(zod.literal('')),

   // required card number
   requiredCardNumber: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{16}/, { message: 'invalid_card_number' }),

   // optional card number
   optionalCardNumber: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{16}/, { message: 'invalid_card_number' })
      .optional()
      .or(zod.literal('')),

   // required passport
   requiredPassport: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/[A-Za-z]{2}\d{7}/, { message: 'invalid_passport' }),

   // optional passport
   optionalPassport: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/[A-Za-z]{2}\d{7}/, { message: 'invalid_passport' })
      .optional()
      .or(zod.literal('')),

   // required pinfl
   requiredPinfl: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{14}/, { message: 'invalid_pinfl' }),

   // optional pinfl
   optionalPinfl: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{14}/, { message: 'invalid_pinfl' })
      .optional()
      .or(zod.literal('')),

   // required inn
   requiredINN: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{9}/, { message: 'invalid_inn' }),

   // optional inn
   optionalINN: zod
      .string({
         required_error: 'required_error',
         invalid_type_error: 'invalid_type_error',
      })
      .min(1, { message: 'required_error' })
      .regex(/\d{9}/, { message: 'invalid_inn' })
      .optional()
      .or(zod.literal('')),
});
// validation object schema examples common data types
export const objectSchema = zod.object({
   requiredObject: zod.object(),
});
// validation array schema examples common data types
export const arraySchema = zod.object({});
// validation mixed schema examples common data types
export const mixedSchema = zod.object({
   // role
   role: zod.enum(['admin', 'user']),
   // gender
   gender: zod.enum(['man', 'woman']),
   // status
   status: zod.boolean({
      required_error: 'required_error',
      invalid_type_error: 'invalid_type_error',
   }),
   // nullable
   nullable: zod.nullable(),
   // nan
   nan: zod.nan({
      invalid_type_error: 'invalid_type_error',
      required_error: 'required_error',
   }),
});
// validation number schema examples common data types
export const numberSchema = zod.object({
   // float number
   float: zod.number({
      invalid_type_error: 'invalid_type_error',
      required_error: 'required_error',
   }),
   // int number
   int: zod
      .number({
         invalid_type_error: 'invalid_type_error',
         required_error: 'required_error',
      })
      .int(''),
});
// validation date schema examples common data types
export const dateSchema = zod.object({});
