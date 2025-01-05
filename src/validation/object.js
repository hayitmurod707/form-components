import { literal, number } from 'zod';
import Locale from './locale';
class ObjectSchema extends Locale {
   constructor(props) {
      super(props);
      this.min_error = {};
   }
   #init() {
      const { required_error, invalid_type_error } = this;
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
      const text = this.#init().min(1, { message: this.required_error });
      const validation = isRequired ? text : this.#optional(text);
      return validation;
   }
}
export default ObjectSchema;
