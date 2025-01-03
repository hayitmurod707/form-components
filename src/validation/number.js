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
      const { int_error } = this;
      const required = this.#init().int(int_error);
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
      const { positive_error } = this;
      const required = this.#init().positive(positive_error);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   nonpositive(isRequired = true) {
      const { nonpositive_error } = this;
      const required = this.#init().nonpositive(nonpositive_error);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   negative(isRequired = true) {
      const { negative_error } = this;
      const required = this.#init().negative(negative_error);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   nonnegative(isRequired = true) {
      const { nonnegative_error } = this;
      const required = this.#init().nonnegative(nonnegative_error);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   divisible(value, isRequired = true) {
      const required = this.#init().multipleOf(value, 'invalid_type_error');
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   finite(isRequired = true) {
      const { finite_error } = this;
      const required = this.#init().finite(finite_error);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
   safe(isRequired = true) {
      const { safe_error } = this;
      const required = this.#init().safe(safe_error);
      const validation = isRequired ? required : this.#optional(required);
      return validation;
   }
}
export default NumberSchema;
