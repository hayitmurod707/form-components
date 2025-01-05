import { number } from 'zod';
import Locale from './locale';
class NumberSchema extends Locale {
   constructor(props) {
      super(props);
      this.min_error = {};
   }
   #init() {
      const { required_error, invalid_type_error } = this;
      const value = number({ required_error, invalid_type_error });
      return value;
   }
   #optional(value) {
      return value.optional();
   }
   float(isRequired = true) {
      const required = this.#init();
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   int(isRequired = true) {
      const required = this.#init().int({
         ru: 'Это поле принимает только целочисленное значение',
         uz: 'Ushbu maydon faqat butun qiymatni qabul qiladi',
      });
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   great(value, isRequired = true) {
      const required = this.#init().gt(value, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   min(value, isRequired = true) {
      const required = this.#init().gte(value, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   less(value, isRequired = true) {
      const required = this.#init().lt(value, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   max(value, isRequired = true) {
      const required = this.#init().lte(value, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   range(min, max, isRequired = true) {
      const required = this.#init()
         .gte(min, 'invalid_type_error')
         .lte(max, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   interval(min, max, isRequired = true) {
      const required = this.#init()
         .gt(min, 'invalid_type_error')
         .lt(max, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   positive(isRequired = true) {
      const required = this.#init().positive({
         uz: 'Ushbu maydon faqat noldan katta qiymatni qabul qiladi',
         ru: 'Это поле принимает только значение больше нуля',
      });
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   nonpositive(isRequired = true) {
      const required = this.#init().nonpositive({
         ru: 'Это поле принимает только значения ноль и меньше нуля',
         uz: 'Ushbu maydon faqat nol va noldan kichik qiymatlarni qabul qiladi',
      });
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   negative(isRequired = true) {
      const required = this.#init().negative({
         ru: 'Это поле принимает только значение меньше нуля',
         uz: 'Ushbu maydon faqat noldan kichik qiymatni qabul qiladi',
      });
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   nonnegative(isRequired = true) {
      const required = this.#init().nonnegative({
         ru: 'Это поле принимает только ноль и больше нуля.',
         uz: 'Ushbu maydon faqat nol va noldan katta qiymatni qabul qiladi',
      });
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   divisible(value, isRequired = true) {
      const required = this.#init().multipleOf(value, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   finite(isRequired = true) {
      const required = this.#init().finite({
         ru: 'Это поле не принимает отрицательную бесконечность или положительную бесконечность',
         uz: 'Ushbu maydon manfiy cheksiz yoki musbat cheksiz qiymatni qabul qilmaydi',
      });
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   safe(isRequired = true) {
      const required = this.#init().safe({
         uz: 'Ushbu maydon Number.MIN_SAFE_INTEGER va Number.MAX_SAFE_INTEGER orasidagi qiymatlarni qabul qiladi',
         ru: 'Это поле принимает значения между Number.MIN_SAFE_INTEGER и Number.MAX_SAFE_INTEGER',
      });
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
}
export default NumberSchema;
