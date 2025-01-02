import { boolean, nan, nullable, enum as zodEnum } from 'zod';
const required_error = 'required_error';
const invalid_type_error = 'invalid_type_error';
class MixedSchema {
   boolean(isRequired = true) {
      const required = boolean({ required_error, invalid_type_error });
      const optional = boolean({ invalid_type_error }).optional();
      const validation = isRequired ? required : optional;
      return validation;
   }
   nan(isRequired = true) {
      const required = nan({ required_error, invalid_type_error });
      const optional = nan({ invalid_type_error }).optional();
      const validation = isRequired ? required : optional;
      return validation;
   }
   enum(types) {
      const validation = zodEnum(types);
      return validation;
   }
   nullable(type) {
      const validation = nullable(type);
      return validation;
   }
}
export default MixedSchema;
