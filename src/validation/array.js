import { array } from 'zod';
const required_error = 'required_error';
const invalid_type_error = 'invalid_type_error';
class ArraySchema {
   #init(type) {
      const value = array(type, { message: invalid_type_error });
      return value;
   }
   #nonempty(value) {
      const optional = value.min(1, { message: required_error });
      return optional;
   }
   list(type, nonempty = true) {
      const list = this.#init(type);
      const validation = nonempty ? this.#nonempty(list) : list;
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
