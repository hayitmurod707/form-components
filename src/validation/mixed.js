import { boolean, nan, nullable, enum as zodEnum } from 'zod';
import Locale from './locale';
class MixedSchema extends Locale {
   constructor(props) {
      super(props);
      this.min_error = {};
   }
   enum(types) {
      const validation = zodEnum(types);
      return validation;
   }
   boolean(isRequired = true) {
      const { required_error, invalid_type_error } = this;
      const required = boolean({ required_error, invalid_type_error });
      const validation = isRequired ? required : required.optional();
      return validation;
   }
   nullable(type) {
      const validation = nullable(type);
      return validation;
   }
   nan(isRequired = true) {
      const { required_error, invalid_type_error } = this;
      const required = nan({ required_error, invalid_type_error });
      const validation = isRequired ? required : required.optional();
      return validation;
   }
}
export default MixedSchema;
