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
      // string
      this.string_errors = {
         url: {
            ru: 'URL-адрес недействителен',
            uz: 'URL manzili yaroqsiz',
         },
         email: {
            ru: 'Email недействителен',
            uz: 'Elektron pochta manzili yaroqsiz',
         },
         color: {
            ru: 'Цвет недействителен',
            uz: 'Rang yaroqsiz',
         },
         phone: {
            ru: 'Номер телефона недействителен',
            uz: 'Telefon raqami yaroqsiz',
         },
         datetime: {
            ru: 'Дата и время недействительны',
            uz: 'Sana va vaqt yaroqsiz',
         },
         date: {
            ru: 'Дата недействительна',
            uz: 'Sana yaroqsiz',
         },
         time: {
            ru: 'Время недействительно',
            uz: 'Vaqt yaroqsiz',
         },
         card_number: {
            ru: 'Номер карты недействителен',
            uz: 'Plastik karta raqami yaroqsiz',
         },
         passport: {
            ru: 'Паспорт недействителен',
            uz: 'Passport yaroqsiz',
         },
         pinfl: {
            ru: 'Пинфл недействителен',
            uz: 'Pinfl yaroqsiz',
         },
         inn: {
            ru: 'СТИР недействительна',
            uz: 'Inn yaroqsiz',
         },
      };
      // number
      this.number_errors = {
         int: {
            ru: 'Это поле принимает только целочисленное значение',
            uz: 'Ushbu maydon faqat butun qiymatni qabul qiladi',
         },
         positive: {
            uz: 'Ushbu maydon faqat noldan katta qiymatni qabul qiladi',
            ru: 'Это поле принимает только значение больше нуля',
         },
         nonpositive: {
            ru: 'Это поле принимает только значения ноль и меньше нуля',
            uz: 'Ushbu maydon faqat nol va noldan kichik qiymatlarni qabul qiladi',
         },
         nonnegative: {
            ru: 'Это поле принимает только ноль и больше нуля.',
            uz: 'Ushbu maydon faqat nol va noldan katta qiymatni qabul qiladi',
         },
         negative: {
            ru: 'Это поле принимает только значение меньше нуля',
            uz: 'Ushbu maydon faqat noldan kichik qiymatni qabul qiladi',
         },
         finite: {
            ru: 'Это поле не принимает отрицательную бесконечность или положительную бесконечность',
            uz: 'Ushbu maydon manfiy cheksiz yoki musbat cheksiz qiymatni qabul qilmaydi',
         },
         safe: {
            uz: 'Ushbu maydon Number.MIN_SAFE_INTEGER va Number.MAX_SAFE_INTEGER orasidagi qiymatlarni qabul qiladi',
            ru: 'Это поле принимает значения между Number.MIN_SAFE_INTEGER и Number.MAX_SAFE_INTEGER',
         },
      };
      // object
      this.object_errors = {};
      // array
      this.array_errors = {};
      // mixed
      this.mixed_errors = {};
   }
}
export default Locale;
