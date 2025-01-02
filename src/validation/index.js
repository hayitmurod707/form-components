import zod, { object } from 'zod';
import ArraySchema from './array';
import Locale from './locale';
import MixedSchema from './mixed';
import NumberSchema from './number';
import ObjectSchema from './object';
import StringSchema from './string';
class Validation extends Locale {
   constructor() {
      super();
      this.array = new ArraySchema();
      this.mixed = new MixedSchema();
      this.number = new NumberSchema();
      this.object = new ObjectSchema();
      this.string = new StringSchema();
      this.zod = zod;
   }
   #getErrors(result, data) {
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
      const returnErrors = keys.reduce(reduce, {});
      return returnErrors;
   }
   validate({ schema, data, onSuccess = () => {}, onError = () => {} }) {
      const result = object(schema).safeParse(data);
      if (result?.success) {
         onSuccess(result?.data);
      } else {
         const errors = this.#getErrors(result, data);
         onError(errors);
      }
   }
}
const validation = new Validation();
export default validation;
