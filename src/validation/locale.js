class Locale {
   constructor() {
      this.required_error = {
         ru: 'Это поле не может быть пустым',
         uz: "Ushbu maydon bo'sh bo'lishi mumkin emas",
      };
      this.invalid_type_error = {
         ru: 'Неверное значение',
         uz: 'Yaroqsiz qiymat',
      };
   }
}
export default Locale;
