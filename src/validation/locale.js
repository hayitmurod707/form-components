class Locale {
   constructor() {
      this.required_error = {
         uz: "Ushbu maydon bo'sh bo'lishi mumkin emas",
      };
      this.invalid_type_error = {
         uz: 'Yaroqsiz qiymat',
      };
      // string
      this.url_error = {
         uz: 'URL manzili yaroqsiz',
      };
      this.email_error = {
         uz: 'Elektron pochta manzili yaroqsiz',
      };
      this.color_error = {
         uz: 'Rang yaroqsiz',
      };
      this.phone_error = {
         uz: 'Telefon raqami yaroqsiz',
      };
      this.datetime_error = {
         uz: 'Sana va vaqt yaroqsiz',
      };
      this.date_error = {
         uz: 'Sana yaroqsiz',
      };
      this.time_error = {
         uz: 'Vaqt yaroqsiz',
      };
      this.card_number_error = {
         uz: 'Plastik karta karta raqami yaroqsiz',
      };
      this.passport_error = {
         uz: 'Passport yaroqsiz',
      };
      this.pinfl_error = {
         uz: 'Pinfl yaroqsiz',
      };
      this.inn_error = {
         uz: 'Inn yaroqsiz',
      };
      // number
      this.int_error = {
         uz: 'Ushbu maydon faqat butun qiymatni qabul qiladi',
      };
      this.positive_error = {
         uz: 'Ushbu maydon faqat noldan katta qiymatni qabul qiladi',
      };
      this.nonpositive_error = {
         uz: 'Ushbu maydon faqat nol va noldan kichik qiymatlarni qabul qiladi',
      };
      this.nonnegative_error = {
         uz: 'Ushbu maydon faqat nol va noldan katta qiymatni qabul qiladi',
      };
      this.negative_error = {
         uz: 'Ushbu maydon faqat noldan kichik qiymatni qabul qiladi',
      };
      this.finite_error = {
         uz: 'Ushbu maydon manfiy cheksiz yoki musbat cheksiz qiymatni qabul qilmaydi',
      };
      this.safe_error = {
         uz: 'Ushbu maydon Number.MIN_SAFE_INTEGER va Number.MAX_SAFE_INTEGER orasidagi qiymatlarni qabul qiladi',
      };
      // object
      // array
      // mixed
   }
}
export default Locale;
