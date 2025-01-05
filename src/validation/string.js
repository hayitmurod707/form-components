import { literal, string } from 'zod';
import Locale from './locale';
class StringSchema extends Locale {
   constructor(props) {
      super(props);
      this.min_error = {};
   }
   #init() {
      const { invalid_type_error, required_error } = this;
      const value = string({
         required_error,
         invalid_type_error,
      }).min(1, { message: required_error });
      return value;
   }
   #optional(value) {
      const optional = value.optional().or(literal(''));
      return optional;
   }
   text(isRequired = true) {
      const text = this.#init()
         .describe('Any string validation')
         .min(1, { message: this.required_error });
      const validation = isRequired ? text : this.#optional(text);
      return validation;
   }
   url(isRequired = true) {
      const url = this.#init()
         .describe('URL validation')
         .url({
            message: {
               ru: 'URL-адрес недействителен',
               uz: 'URL manzili yaroqsiz',
            },
         });
      const validation = isRequired ? url : this.#optional(url);
      return validation;
   }
   email(isRequired = true) {
      const email = this.#init()
         .describe('Email validation')
         .email({
            message: {
               ru: 'Email недействителен',
               uz: 'Elektron pochta manzili yaroqsiz',
            },
         });
      const validation = isRequired ? email : this.#optional(email);
      return validation;
   }
   color(isRequired = true) {
      const color = this.#init()
         .describe('Color validation')
         .regex(/\d{6}/, {
            message: {
               ru: 'Цвет недействителен',
               uz: 'Rang yaroqsiz',
            },
         });
      const validation = isRequired ? color : this.#optional(color);
      return validation;
   }
   phone(isRequired = true) {
      // with + symbol \+998\d{9}
      const phone = this.#init()
         .describe(
            'Uzbekistan phone number validation get only numbers and phone number length must be 12. Example: 998123456789'
         )
         .regex(/998\d{9}/, {
            message: {
               ru: 'Номер телефона недействителен',
               uz: 'Telefon raqami yaroqsiz',
            },
         });
      const validation = isRequired ? phone : this.#optional(phone);
      return validation;
   }
   datetime(isRequired = true) {
      const datetime = this.#init()
         .describe('Datetime validation. Example: 2024-12-31T12:34:56')
         .datetime({
            local: true,
            message: {
               ru: 'Дата и время недействительны',
               uz: 'Sana va vaqt yaroqsiz',
            },
         });
      const validation = isRequired ? datetime : this.#optional(datetime);
      return validation;
   }
   date(isRequired = true) {
      const date = this.#init()
         .describe('Date validation. Example: 2024-12-31')
         .date({
            ru: 'Дата недействительна',
            uz: 'Sana yaroqsiz',
         });
      const validation = isRequired ? date : this.#optional(date);
      return validation;
   }
   time(isRequired = true) {
      const time = this.#init()
         .describe('Time validation. Example: 12:34:56')
         .time({
            ru: 'Время недействительно',
            uz: 'Vaqt yaroqsiz',
         });
      const validation = isRequired ? time : this.#optional(time);
      return validation;
   }
   card_number(isRequired = true) {
      const cardNumber = this.#init()
         .describe(
            'Card number validation get only numbers and card number length must be 16. Example: 1234567812345678'
         )
         .regex(/\d{16}/, {
            message: {
               ru: 'Номер карты недействителен',
               uz: 'Plastik karta raqami yaroqsiz',
            },
         });
      const validation = isRequired ? cardNumber : this.#optional(cardNumber);
      return validation;
   }
   passport(isRequired = true) {
      const passport = this.#init()
         .describe(
            'Uzbekistan Passport validation get only letters, numbers and Passport length must be 9. Example: AA1234567'
         )
         .regex(/[A-Za-z]{2}\d{7}/, {
            message: {
               ru: 'Паспорт недействителен',
               uz: 'Passport yaroqsiz',
            },
         });
      const validation = isRequired ? passport : this.#optional(passport);
      return validation;
   }
   pinfl(isRequired = true) {
      const pinfl = this.#init()
         .describe(
            'Uzbekistan PINFL validation get only numbers and PINFL length must be 14. Example: 12345678901234'
         )
         .regex(/\d{14}/, {
            message: {
               ru: 'Пинфл недействителен',
               uz: 'Pinfl yaroqsiz',
            },
         });
      const validation = isRequired ? pinfl : this.#optional(pinfl);
      return validation;
   }
   inn(isRequired = true) {
      const inn = this.#init()
         .describe(
            'Uzbekistan INN validation get only numbers and INN length must be 9. Example: 123456789'
         )
         .regex(/\d{9}/, {
            message: {
               ru: 'СТИР недействительна',
               uz: 'Inn yaroqsiz',
            },
         });
      const validation = isRequired ? inn : this.#optional(inn);
      return validation;
   }
}
export default StringSchema;
