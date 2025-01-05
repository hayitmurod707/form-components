import { array } from 'zod';
import Locale from './locale';
class ArraySchema extends Locale {
   constructor(props) {
      super(props);
      this.min_error = {};
   }
   #init(type) {
      const value = array(type, { message: this.invalid_type_error });
      return value;
   }
   list(type, isRequired = true) {
      const optional = this.#init(type);
      const required = optional.min(1, { message: this.required_error });
      const validation = isRequired ? required : optional;
      return validation;
   }
   min(min) {
      const validation = this.#init().min(min, {
         message: 'Minimal limitdan kam',
      });
      return validation;
   }
   max(max) {
      const validation = this.#init().max(max, {
         message: "Maximal limitdan ko'p",
      });
      return validation;
   }
   length(length) {
      const validation = this.#init().length(length, {
         message: 'Berilgan qiymatga yetarli emas',
      });
      return validation;
   }
   range(min, max) {
      const validation = this.#init()
         .min(min, { message: 'Minimal limitdan kam' })
         .max(max, { message: "Maximal limitdan ko'p" });
      return validation;
   }
}
export default ArraySchema;
