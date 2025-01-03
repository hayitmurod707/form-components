import { number } from 'zod';
import Locale from './locale';
class NumberSchema extends Locale {
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
      const required = this.#init().int(this.number_errors.int);
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
      const required = this.#init().positive(this.number_errors.positive);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   nonpositive(isRequired = true) {
      const required = this.#init().nonpositive(this.number_errors.nonpositive);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   negative(isRequired = true) {
      const required = this.#init().negative(this.number_errors.negative);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   nonnegative(isRequired = true) {
      const required = this.#init().nonnegative(this.number_errors.nonnegative);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   divisible(value, isRequired = true) {
      const required = this.#init().multipleOf(value, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   finite(isRequired = true) {
      const required = this.#init().finite(this.number_errors.finite);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   safe(isRequired = true) {
      const required = this.#init().safe(this.number_errors.safe);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
}
export default NumberSchema;
