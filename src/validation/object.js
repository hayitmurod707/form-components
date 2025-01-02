import { literal, number } from 'zod';
const required_error = 'required_error';
const invalid_type_error = 'invalid_type_error';
class ObjectSchema {
   #init() {
      const value = number({
         required_error,
         invalid_type_error,
      });
      return value;
   }
   #optional(value) {
      const optional = value.optional().or(literal(''));
      return optional;
   }
   text(isRequired = true) {
      const text = this.#init().min(1, { message: required_error });
      const validation = isRequired ? text : this.#optional(text);
      return validation;
   }
}
export default ObjectSchema;
