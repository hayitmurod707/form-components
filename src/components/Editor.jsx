import { Editor as Tinymce } from '@tinymce/tinymce-react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import 'tinymce';
import tinymce from 'tinymce';
import 'tinymce/icons/default';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/help';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/wordcount';
import contentCss from 'tinymce/skins/content/default/content.min.css';
import contentUICss from 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/themes/silver';
const StyledElement = styled.div`
   & .tox-tinymce {
      border-radius: 12px;
      border: 1px solid #cccccc;
      height: 450px !important;
   }
   & .tox {
      & .tox-editor-header {
         z-index: initial;
         & button {
            font-family: 'Gilroy', sans-serif !important;
         }
         & .tox-mbtn {
            cursor: pointer;
            &:hover {
               background: #f7f8fc !important;
            }
         }
         & .tox-mbtn--active {
            background: #f7f8fc !important;
         }
         & .tox-mbtn__select-label {
            color: #696f85;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
         }
         & .tox-toolbar__group {
            border: none !important;
         }
      }
      & .tox-tbtn--bespoke {
         & .tox-tbtn__select-label {
            color: #696f85;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            width: initial !important;
         }
      }
      & .tox-tbtn--enabled {
         background: #f7f8fc;
      }
      & .tox-tbtn {
         cursor: pointer !important;
         &:hover {
            background: #f7f8fc;
         }
         & svg {
            fill: #696f85 !important;
         }
      }
      & .tox-statusbar {
         display: none;
      }
   }
   & .wrs_tickContainer {
      display: none !important;
   }
`;
const init = {
   content_css: false,
   height: 450,
   menubar: 'file edit view insert format table tools help',
   paste_as_text: true,
   plugins:
      'paste codesample advlist autolink link image lists charmap anchor spellchecker searchreplace wordcount code fullscreen insertdatetime media nonbreaking table template help',
   skin: false,
   toolbar_mode: 'wrap',
   toolbar: [
      {
         items: ['undo', 'redo'],
         name: 'history',
      },
      {
         items: ['fontselect'],
         name: 'fontselect',
      },
      {
         className: 'fontsizeselect',
         items: ['fontsizeselect'],
         name: 'fontsizeselect',
      },
      {
         items: ['bold', 'italic', 'underline', 'strikethrough'],
         name: 'formatting',
      },
      {
         items: ['outdent', 'indent'],
         name: 'indentation',
      },
      {
         items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'],
         name: 'alignment',
      },
      {
         items: ['numlist', 'bullist', 'checklist'],
         name: 'list',
      },
      {
         items: ['table'],
         name: 'table',
      },
      {
         items: [
            'forecolor',
            'backcolor',
            'casechange',
            'permanentpen',
            'formatpainter',
            'removeformat',
         ],
         name: 'colors',
      },
      {
         items: ['subscript', 'superscript'],
         name: 'math',
      },
      {
         items: ['tiny_mce_wiris_formulaEditor'],
         name: 'viris-math',
      },
      {
         items: ['tiny_mce_wiris_formulaEditorChemistry'],
         name: 'viris-chem',
      },
      {
         items: ['charmap'],
         name: 'chars',
      },
      {
         items: ['image', 'link'],
         name: 'file',
      },
   ],
};
const uz = {
   Redo: 'Bekor qilish',
   Undo: 'Orqaga qaytarish',
   Cut: 'Kesib olish',
   Copy: 'Nusxa olish',
   Paste: 'Qo\u2018yish',
   'Select all': 'Barchasini belgilash',
   'New document': 'Yangi hujjat',
   Ok: 'Bajarish',
   Cancel: 'Bekor qilish',
   'Visual aids': 'Ko\u2018rgazmali o\u2018quv qurollar',
   Bold: "Yo'g'on",
   Italic: 'Yotiq',
   Underline: 'Tagi chizilgan',
   Strikethrough: "O'chirilgan yozuv",
   Superscript: 'Yuqori yozuv',
   Subscript: 'Quyi yozuv',
   'Clear formatting': 'Formatlashni tozalash',
   'Align left': 'Chapga tekislash',
   'Align center': 'Markazga tekislash',
   'Align right': "O'ngga tekislash",
   Justify: 'Ikki tomondan tekislash',
   'Bullet list': 'Nuqtali ro\u2018yxat',
   'Numbered list': 'Raqamli ro\u2018yxat',
   'Decrease indent': 'Satr boshini kamaytirish',
   'Increase indent': 'Satr boshini oshirish',
   Close: 'Yopish',
   Formats: 'Formatlar',
   "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":
      'Sizning brauzeringiz buferga to\u2018g\u2018ridan-to\u2018g\u2018ri kirish qo\u2018llab-quvvatlamaydi. O\u2018rniga klaviaturaning Ctrl+X/C/V qisqartirishlarni foydalaning.',
   Headers: 'Sarlavhalar',
   'Header 1': 'Sarlavha 1',
   'Header 2': 'Sarlavha 2',
   'Header 3': 'Sarlavha 3',
   'Header 4': 'Sarlavha 4',
   'Header 5': 'Sarlavha 5',
   'Header 6': 'Sarlavha 6',
   Headings: 'Sarlavhalar',
   'Heading 1': 'Sarlavha 1',
   'Heading 2': 'Sarlavha 2',
   'Heading 3': 'Sarlavha 3',
   'Heading 4': 'Sarlavha 4',
   'Heading 5': 'Sarlavha 5',
   'Heading 6': 'Sarlavha 6',
   Div: 'Div',
   Pre: 'Pre',
   Code: 'Kod',
   Paragraph: 'Paragraf',
   Blockquote: 'Matn blok parchasi',
   Inline: 'Bir qator ketma-ketlikda',
   Blocks: 'Bloklar',
   'Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.':
      "Qo'shish oddiy matn rejimida amalga oshiriladi. Ushbu hususiyatni o'chirmaguningizcha, kontent oddiy matn sifatida qo'shiladi.",
   'Font Family': 'Srift turi',
   'Font Sizes': 'Shrift kattaligi',
   Class: 'Klass',
   'Browse for an image': 'Rasmni yuklash',
   OR: 'YOKI',
   'Drop an image here': "Bu erga rasmni olib o'ting",
   Upload: 'Yuklash',
   Block: 'Blok',
   Align: 'Saflamoq',
   Default: 'Standart',
   Circle: 'Doira',
   Disc: 'Disk',
   Square: 'Kvadrat',
   'Lower Alpha': 'Kichik lotincha',
   'Lower Greek': 'Pastki yunon',
   'Lower Roman': 'Kichik kirilcha',
   'Upper Alpha': 'Katta lotincha',
   'Upper Roman': 'Katta kirilcha',
   Anchor: 'Langar',
   Name: 'Nomi',
   Id: 'Id',
   'Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.':
      "Id faqat harf bilan boshlanishi lozim, o'z ichiga faqat harflar, sonlar, tire, nuqtalar, pastgi chiziqlardan iborat bo'lishi mumkin",
   'You have unsaved changes are you sure you want to navigate away?':
      "Sizda saqlanmagan o'zgartirishlar bor. Boshqa yerga chiqib ketish uchun ishonchingiz komilmi?",
   'Restore last draft': 'Oxirgi ',
   'Special character': 'Maxsus belgilar',
   'Source code': 'Manba kodi',
   'Insert/Edit code sample': "Kod namunasini qo'shish / tahrirlash",
   Language: 'Til',
   'Code sample': 'Kod namunasi',
   Color: 'Rang',
   R: 'R',
   G: 'G',
   B: 'B',
   'Left to right': "Chapdan o'ngga",
   'Right to left': "O'ngdan chapga",
   Emoticons: 'Hissiyot ikonkalari',
   'Document properties': 'Hujjatning xususiyatlari',
   Title: 'Nomi',
   Keywords: "Kalit so'zlar",
   Description: 'Tavsif',
   Robots: 'Robotlar',
   Author: 'Muallif',
   Encoding: 'Kodlash',
   Fullscreen: 'Butun ekran rejimi',
   Action: 'Harakat',
   Shortcut: 'Yorliq',
   Help: 'Yordam',
   Address: 'Manzil',
   'Focus to menubar': "Menubarga e'tibor qaratish",
   'Focus to toolbar': "Vositalar paneliga e'tibor qaratish",
   'Focus to element path': "Elementlar manziliga e'tibor qaratish",
   'Focus to contextual toolbar':
      "Kontekstli vositalar paneliga e'tibor qaratish",
   'Insert link (if link plugin activated)':
      "Havolani qo'shish (havola plagini o'rnatilgan bo'lsa)",
   'Save (if save plugin activated)':
      "Saqlash (saqlash plagini o'rnatilgan bo'lsa)",
   'Find (if searchreplace plugin activated)':
      "Qidirish (qidirish plagini o'rnatilgan bo'lsa)",
   'Plugins installed ({0}):': "O'rnatilgan plaginlar ({0})",
   'Premium plugins:': 'Premium plaginlar:',
   'Learn more...': "Batafsil ma'lumot...",
   'You are using {0}': 'Siz {0} ishlatmoqdasiz',
   Plugins: 'Plaginlar',
   'Handy Shortcuts': 'Foydalanadigan yorliqlar',
   'Horizontal line': 'Gorizontal chiziq',
   'Insert/edit image': "Rasmni qo'shish / tahrirlash",
   'Image description': 'Rasm tavsifi',
   Source: 'Manba',
   Dimensions: "O'lchamlari",
   'Constrain proportions': 'Nisbatlarni cheklash',
   General: 'Umumiy',
   Advanced: "Ilg'or",
   Style: 'Uslub',
   'Vertical space': "Vertikal o'lchov",
   'Horizontal space': "Gorizontal o'lchov",
   Border: 'Chegara',
   'Insert image': "Rasm qo'shish",
   Image: 'Rasm',
   'Image list': "Rasmlar ro'yhati",
   'Rotate counterclockwise': "Soatga qarshi yo'nalishda aylantirish",
   'Rotate clockwise': "Soat yo'nalishda aylantirish",
   'Flip vertically': "Vertikal o'girish",
   'Flip horizontally': "Gorizontal o'girish",
   'Edit image': 'Rasmni tahrirlash',
   'Image options': 'Rasm imkoniyatlari',
   'Zoom in': 'Yaqinlashtirish',
   'Zoom out': 'Uzoqlashtirish',
   Crop: 'Kesib olish',
   Resize: "O'lchamini o'zgartirish",
   Orientation: 'Orientatsiya',
   Brightness: 'Yorqinligi',
   Sharpen: 'Keskinligi',
   Contrast: 'Ravshanligi',
   'Color levels': 'Rang sathi',
   Gamma: 'Gamma',
   Invert: "Ranglarni ag'darish",
   Apply: "Qo'llash",
   Back: 'Ortga qaytish',
   'Insert date/time': "Kun / vaqtni qo'shish",
   'Date/time': 'Kun/vaqt',
   'Insert link': "Havola qo'shish",
   'Insert/edit link': "Havola qo'shish / tahrirlash",
   'Text to display': "Ko'rsatiladigan matn",
   Url: 'URL',
   Target: 'Nishon',
   None: 'Hech bir',
   'New window': 'Yangi oyna',
   'Remove link': 'Havolani olib tashlash',
   Anchors: 'Langarlar',
   Link: 'Havola',
   'Paste or type a link': 'Havolani joylashtirish yoki kiritish',
   'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?':
      'Siz kiritgan URL elektron pochta manziliga oxshayapti. "mailto:" prefiksi qo\'shilsinmi?',
   'The URL you entered seems to be an external link. Do you want to add the required http:// prefix?':
      'Siz kiritgan URL tashqi havolaga oxshayapti. "http://" prefiksi qo\'shilsinmi?',
   'Link list': "Havolalar ro'yhati",
   'Insert video': "Video qo'shish",
   'Insert/edit video': "Videoni qo'shish / tahrirlash",
   'Insert/edit media': "Media qo'shish / tahrirlash",
   'Alternative source': 'Muqobil manba',
   Poster: 'Poster',
   'Paste your embed code below:': 'Kodni quyiga joylashtiring:',
   Embed: 'Ichiga olgan',
   Media: 'Media',
   'Nonbreaking space': "Buzilmas bo'sh joy",
   'Page break': 'Yangi bet',
   'Paste as text': "Tekst qo'shish",
   Preview: "Tahrirni avvaldan ko'rish",
   Print: 'Chop etish',
   Save: 'Saqlash',
   Find: 'Qidirish',
   'Replace with': 'bilan almashtirish',
   Replace: 'Almashtirish',
   'Replace all': 'Barchasini almashtirish',
   Prev: 'Avvalgisi',
   Next: 'Keyingisi',
   'Find and replace': 'Topib almashtirish',
   'Could not find the specified string.': 'Belgilangan satr topilmadi.',
   'Match case': "O'xshashliklar",
   'Whole words': "Butun so'z",
   Spellcheck: 'Imloni tekshirish',
   Ignore: "E'tiborsiz qoldirish",
   'Ignore all': "Barchasini e'tiborsiz qoldirish",
   Finish: 'Tugatish',
   'Add to Dictionary': "Lug'atga qo'shish",
   'Insert table': "Jadvalni qo'shish",
   'Table properties': 'Jadval xususiyatlari',
   'Delete table': "Jadvalni o'chirib tashlash",
   Cell: 'Katak',
   Row: 'Satr',
   Column: 'Ustun',
   'Cell properties': 'Katak hususiyatlari',
   'Merge cells': 'Kataklarni birlashtirish',
   'Split cell': "Kataklarni bo'lish",
   'Insert row before': "Yuqorisiga satr qo'shish",
   'Insert row after': "Ketidan satr qo'shish",
   'Delete row': 'Satrni olib tashlash',
   'Row properties': 'Satr hususiyatlari',
   'Cut row': 'Satrni kesib olish',
   'Copy row': "Satrdan nusxa ko'chirish",
   'Paste row before': 'Yuqorisiga satrni joylashtirish',
   'Paste row after': 'Ketidan satrni joylashtirish',
   'Insert column before': "Ustunni oldi tomoniga qo'shish",
   'Insert column after': "Ustunni ketidan qo'shish",
   'Delete column': 'Ustunni olib tashlash',
   Cols: 'Ustunlar',
   Rows: 'Satrlar',
   Width: 'Kengligi',
   Height: 'Balandligi',
   'Cell spacing': 'Kataklar orasi',
   'Cell padding': "Kataklar chegarasidan bo'sh joy",
   Caption: 'Taglavha',
   Left: 'Chapga',
   Center: 'Markazga',
   Right: "O'ngga",
   'Cell type': 'Katak turi',
   Scope: 'Muhit',
   Alignment: 'Tekislash',
   'H Align': 'Gorizontal tekislash',
   'V Align': 'Vertikal tekislash',
   Top: 'Yuqoriga',
   Middle: 'Markaziga',
   Bottom: 'Tagiga',
   'Header cell': 'Sarlavha katagi',
   'Row group': 'Satrlar guruhi',
   'Column group': 'Ustunlar guruhi',
   'Row type': 'Satr turi',
   Header: 'Sarlavha',
   Body: 'Tanasi',
   Footer: 'Tag qismi',
   'Border color': 'Chegara rangi',
   'Insert template': "Andozani qo'shish",
   Templates: 'Andozalar',
   Template: 'Andoza',
   'Text color': 'Matn rangi',
   'Background color': 'Orqa fon rangi',
   'Custom...': "O'zgacha...",
   'Custom color': "O'zgacha rang",
   'No color': 'Rangsiz',
   'Table of Contents': 'Mundarija',
   'Show blocks': "Bloklarni ko'rsatish",
   'Show invisible characters': "Ko'rinmas belgilarni ko'rsatish",
   'Words: {0}': "So'zlar soni: {0}",
   '{0} words': '{0} so`z',
   File: 'Fayl',
   Edit: 'Tahrirlash',
   Insert: "Qo'shish",
   View: "Ko'rish",
   Format: 'Shakllar',
   Table: 'Jadval',
   Tools: 'Vositalar',
   'Powered by {0}': '{0} bilan ishlaydi',
   'Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help':
      'Murakkab matn maydoni. Menyu uchun ALT-F9 tugmalarini bosing. Vositalar paneli uchun ALT-F10 tugmasini bosing. Yordamni chaqirish uchun ALT-0-ni bosing',
};
const ru = {
   Redo: '\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c',
   Undo: '\u0412\u0435\u0440\u043d\u0443\u0442\u044c',
   Cut: '\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c',
   Copy: '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c',
   Paste: '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c',
   'Select all':
      '\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0432\u0441\u0435',
   'New document':
      '\u041d\u043e\u0432\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442',
   Ok: '\u041e\u043a',
   Cancel: '\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c',
   'Visual aids':
      '\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0443\u0440\u044b',
   Bold: '\u041f\u043e\u043b\u0443\u0436\u0438\u0440\u043d\u044b\u0439',
   Italic: '\u041a\u0443\u0440\u0441\u0438\u0432',
   Underline:
      '\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439',
   Strikethrough:
      '\u0417\u0430\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439',
   Superscript:
      '\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441',
   Subscript:
      '\u041d\u0438\u0436\u043d\u0438\u0439 \u0438\u043d\u0434\u0435\u043a\u0441',
   'Clear formatting':
      '\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442',
   'Align left':
      '\u041f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e',
   'Align center': '\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443',
   'Align right':
      '\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e',
   Justify: '\u041f\u043e \u0448\u0438\u0440\u0438\u043d\u0435',
   'Bullet list':
      '\u041c\u0430\u0440\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a',
   'Numbered list':
      '\u041d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a',
   'Decrease indent':
      '\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f',
   'Increase indent':
      '\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f',
   Close: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c',
   Formats: '\u0424\u043e\u0440\u043c\u0430\u0442',
   "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":
      '\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u0440\u044f\u043c\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0435\u043d\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448: Ctrl+X/C/V.',
   Headers: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438',
   'Header 1': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1',
   'Header 2': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2',
   'Header 3': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3',
   'Header 4': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4',
   'Header 5': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 5',
   'Header 6': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 6',
   Headings: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438',
   'Heading 1': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 1',
   'Heading 2': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 2',
   'Heading 3': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 3',
   'Heading 4': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 4',
   'Heading 5': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 5',
   'Heading 6': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a 6',
   Preformatted:
      '\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435',
   Div: '\u0411\u043b\u043e\u043a',
   Pre: '\u041f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435',
   Code: '\u041a\u043e\u0434',
   Paragraph: '\u041f\u0430\u0440\u0430\u0433\u0440\u0430\u0444',
   Blockquote: '\u0426\u0438\u0442\u0430\u0442\u0430',
   Inline: '\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435',
   Blocks: '\u0411\u043b\u043e\u043a\u0438',
   'Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.':
      '\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043f\u043e\u043a\u0430 \u043d\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u0443\u044e \u043e\u043f\u0446\u0438\u044e.',
   'Font Family': '\u0428\u0440\u0438\u0444\u0442',
   'Font Sizes':
      '\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430',
   Class: '\u041a\u043b\u0430\u0441\u0441',
   'Browse for an image':
      '\u0412\u044b\u0431\u043e\u0440 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f',
   OR: '\u0418\u041b\u0418',
   'Drop an image here':
      '\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441\u044e\u0434\u0430',
   Upload: '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c',
   Block: '\u0411\u043b\u043e\u043a',
   Align: '\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435',
   Default:
      '\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439',
   Circle: '\u041e\u043a\u0440\u0443\u0436\u043d\u043e\u0441\u0442\u0438',
   Disc: '\u041a\u0440\u0443\u0433\u0438',
   Square: '\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u044b',
   'Lower Alpha':
      '\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b',
   'Lower Greek':
      '\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0433\u0440\u0435\u0447\u0435\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b',
   'Lower Roman':
      '\u0421\u0442\u0440\u043e\u0447\u043d\u044b\u0435 \u0440\u0438\u043c\u0441\u043a\u0438\u0435 \u0446\u0438\u0444\u0440\u044b',
   'Upper Alpha':
      '\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0431\u0443\u043a\u0432\u044b',
   'Upper Roman':
      '\u0417\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u0440\u0438\u043c\u0441\u043a\u0438\u0435 \u0446\u0438\u0444\u0440\u044b',
   Anchor: '\u042f\u043a\u043e\u0440\u044c',
   Name: '\u0418\u043c\u044f',
   Id: 'Id',
   'Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.':
      'Id \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u0431\u0443\u043a\u0432\u044b, \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0431\u0443\u043a\u0432\u044b, \u0446\u0438\u0444\u0440\u044b, \u0442\u0438\u0440\u0435, \u0442\u043e\u0447\u043a\u0438, \u0434\u0432\u043e\u0435\u0442\u043e\u0447\u0438\u044f \u0438\u043b\u0438 \u043f\u043e\u0434\u0447\u0435\u0440\u043a\u0438\u0432\u0430\u043d\u0438\u044f.',
   'You have unsaved changes are you sure you want to navigate away?':
      '\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f. \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0439\u0442\u0438?',
   'Restore last draft':
      '\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430',
   'Special character':
      '\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b',
   'Source code':
      '\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434',
   'Insert/Edit code sample':
      '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c/\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430',
   Language: '\u042f\u0437\u044b\u043a',
   'Code sample':
      '\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430',
   Color: '\u0426\u0432\u0435\u0442',
   R: 'R',
   G: 'G',
   B: 'B',
   'Left to right':
      '\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e',
   'Right to left':
      '\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043f\u0440\u0430\u0432\u0430 \u043d\u0430\u043b\u0435\u0432\u043e',
   Emoticons:
      '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043c\u0430\u0439\u043b',
   'Document properties':
      '\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430',
   Title: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
   Keywords:
      '\u041a\u043b\u044e\u0447\u0438\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430',
   Description: '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435',
   Robots: '\u0420\u043e\u0431\u043e\u0442\u044b',
   Author: '\u0410\u0432\u0442\u043e\u0440',
   Encoding: '\u041a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430',
   Fullscreen:
      '\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c',
   Action: '\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435',
   Shortcut: '\u042f\u0440\u043b\u044b\u043a',
   Help: '\u041f\u043e\u043c\u043e\u0449\u044c',
   Address: '\u0410\u0434\u0440\u0435\u0441',
   'Focus to menubar':
      '\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u0438 \u043c\u0435\u043d\u044e',
   'Focus to toolbar':
      '\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432',
   'Focus to element path':
      '\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0435 \u043f\u0443\u0442\u0438',
   'Focus to contextual toolbar':
      '\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432',
   'Insert link (if link plugin activated)':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 (\u0435\u0441\u043b\u0438 \u043f\u043b\u0430\u0433\u0438\u043d link \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d)',
   'Save (if save plugin activated)':
      '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c (\u0435\u0441\u043b\u0438 \u043f\u043b\u0430\u0433\u0438\u043d save \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d)',
   'Find (if searchreplace plugin activated)':
      '\u041d\u0430\u0439\u0442\u0438 (\u0435\u0441\u043b\u0438 \u043f\u043b\u0430\u0433\u0438\u043d searchreplace \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d)',
   'Plugins installed ({0}):':
      '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043b\u0430\u0433\u0438\u043d\u044b ({0}):',
   'Premium plugins:':
      '\u041f\u0440\u0435\u043c\u0438\u0443\u043c \u043f\u043b\u0430\u0433\u0438\u043d\u044b:',
   'Learn more...':
      '\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435...',
   'You are using {0}':
      '\u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 {0}',
   Plugins: '\u041f\u043b\u0430\u0433\u0438\u043d\u044b',
   'Handy Shortcuts':
      '\u0413\u043e\u0440\u044f\u0447\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438',
   'Horizontal line':
      '\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f',
   'Insert/edit image':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435',
   'Image description':
      '\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f',
   Source: '\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a',
   Dimensions: '\u0420\u0430\u0437\u043c\u0435\u0440',
   'Constrain proportions':
      '\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u043f\u0440\u043e\u043f\u043e\u0440\u0446\u0438\u0438',
   General: '\u041e\u0431\u0449\u0435\u0435',
   Advanced:
      '\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435',
   Style: '\u0421\u0442\u0438\u043b\u044c',
   'Vertical space':
      '\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b',
   'Horizontal space':
      '\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b',
   Border: '\u0420\u0430\u043c\u043a\u0430',
   'Insert image':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435',
   Image: '\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f',
   'Image list':
      '\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439',
   'Rotate counterclockwise':
      '\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0440\u043e\u0442\u0438\u0432 \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0435\u043b\u043a\u0438',
   'Rotate clockwise':
      '\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u043e \u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0435\u043b\u043a\u0435',
   'Flip vertically':
      '\u041e\u0442\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438',
   'Flip horizontally':
      '\u041e\u0442\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438',
   'Edit image':
      '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435',
   'Image options':
      '\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f',
   'Zoom in': '\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c',
   'Zoom out': '\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u044c',
   Crop: '\u041e\u0431\u0440\u0435\u0437\u0430\u0442\u044c',
   Resize:
      '\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440',
   Orientation: '\u041e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f',
   Brightness: '\u042f\u0440\u043a\u043e\u0441\u0442\u044c',
   Sharpen: '\u0427\u0435\u0442\u043a\u043e\u0441\u0442\u044c',
   Contrast: '\u041a\u043e\u043d\u0442\u0440\u0430\u0441\u0442',
   'Color levels':
      '\u0426\u0432\u0435\u0442\u043e\u0432\u044b\u0435 \u0443\u0440\u043e\u0432\u043d\u0438',
   Gamma: '\u0413\u0430\u043c\u043c\u0430',
   Invert: '\u0418\u043d\u0432\u0435\u0440\u0441\u0438\u044f',
   Apply: '\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c',
   Back: '\u041d\u0430\u0437\u0430\u0434',
   'Insert date/time':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0434\u0430\u0442\u0443/\u0432\u0440\u0435\u043c\u044f',
   'Date/time': '\u0414\u0430\u0442\u0430/\u0432\u0440\u0435\u043c\u044f',
   'Insert link':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
   'Insert/edit link':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
   'Text to display':
      '\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0442\u0435\u043a\u0441\u0442',
   Url: '\u0410\u0434\u0440\u0435\u0441 \u0441\u0441\u044b\u043b\u043a\u0438',
   Target:
      '\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
   None: '\u041d\u0435\u0442',
   'New window':
      '\u0412 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435',
   'Remove link':
      '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443',
   Anchors: '\u042f\u043a\u043e\u0440\u044f',
   Link: '\u0421\u0441\u044b\u043b\u043a\u0430',
   'Paste or type a link':
      '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043b\u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443',
   'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?':
      '\u0412\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0439 URL \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u043c \u0430\u0434\u0440\u0435\u0441\u043e\u043c \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b. \u0412\u044b \u0436\u0435\u043b\u0430\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u00abmailto:\u00bb?',
   'The URL you entered seems to be an external link. Do you want to add the required http:// prefix?':
      '\u0412\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0439 URL \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0441\u044b\u043b\u043a\u043e\u0439. \u0412\u044b \u0436\u0435\u043b\u0430\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u00abhttp://\u00bb?',
   'Link list':
      '\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0441\u044b\u043b\u043e\u043a',
   'Insert video':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e',
   'Insert/edit video':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e',
   'Insert/edit media':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0438\u0434\u0435\u043e',
   'Alternative source':
      '\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a',
   Poster: '\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435',
   'Paste your embed code below:':
      '\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432\u0430\u0448 \u043a\u043e\u0434 \u043d\u0438\u0436\u0435:',
   Embed: '\u041a\u043e\u0434 \u0434\u043b\u044f \u0432\u0441\u0442\u0430\u0432\u043a\u0438',
   Media: '\u0412\u0438\u0434\u0435\u043e',
   'Nonbreaking space':
      '\u041d\u0435\u0440\u0430\u0437\u0440\u044b\u0432\u043d\u044b\u0439 \u043f\u0440\u043e\u0431\u0435\u043b',
   'Page break':
      '\u0420\u0430\u0437\u0440\u044b\u0432 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b',
   'Paste as text':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u043a \u0442\u0435\u043a\u0441\u0442',
   Preview:
      '\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440',
   Print: '\u041f\u0435\u0447\u0430\u0442\u044c',
   Save: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
   Find: '\u041d\u0430\u0439\u0442\u0438',
   'Replace with':
      '\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430',
   Replace: '\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c',
   'Replace all':
      '\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435',
   Prev: '\u0412\u0432\u0435\u0440\u0445',
   Next: '\u0412\u043d\u0438\u0437',
   'Find and replace':
      '\u041f\u043e\u0438\u0441\u043a \u0438 \u0437\u0430\u043c\u0435\u043d\u0430',
   'Could not find the specified string.':
      '\u0417\u0430\u0434\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430',
   'Match case':
      '\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440',
   'Whole words':
      '\u0421\u043b\u043e\u0432\u043e \u0446\u0435\u043b\u0438\u043a\u043e\u043c',
   Spellcheck:
      '\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0430\u0432\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435',
   Ignore:
      '\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c',
   'Ignore all':
      '\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0441\u0435',
   Finish: '\u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c',
   'Add to Dictionary':
      '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u043b\u043e\u0432\u0430\u0440\u044c',
   'Insert table':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443',
   'Table properties':
      '\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b',
   'Delete table':
      '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0443',
   Cell: '\u042f\u0447\u0435\u0439\u043a\u0430',
   Row: '\u0421\u0442\u0440\u043e\u043a\u0430',
   Column: '\u0421\u0442\u043e\u043b\u0431\u0435\u0446',
   'Cell properties':
      '\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044f\u0447\u0435\u0439\u043a\u0438',
   'Merge cells':
      '\u041e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438',
   'Split cell':
      '\u0420\u0430\u0437\u0431\u0438\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0443',
   'Insert row before':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0441\u0442\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u0432\u0435\u0440\u0445\u0443',
   'Insert row after':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0443\u0441\u0442\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u043d\u0438\u0437\u0443',
   'Delete row':
      '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443',
   'Row properties':
      '\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0442\u0440\u043e\u043a\u0438',
   'Cut row':
      '\u0412\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443',
   'Copy row':
      '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443',
   'Paste row before':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u0432\u0435\u0440\u0445\u0443',
   'Paste row after':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u043d\u0438\u0437\u0443',
   'Insert column before':
      '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043b\u0435\u0432\u0430',
   'Insert column after':
      '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043f\u0440\u0430\u0432\u0430',
   'Delete column':
      '\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0435\u0446',
   Cols: '\u0421\u0442\u043e\u043b\u0431\u0446\u044b',
   Rows: '\u0421\u0442\u0440\u043e\u043a\u0438',
   Width: '\u0428\u0438\u0440\u0438\u043d\u0430',
   Height: '\u0412\u044b\u0441\u043e\u0442\u0430',
   'Cell spacing':
      '\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043e\u0442\u0441\u0442\u0443\u043f',
   'Cell padding':
      '\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u043e\u0442\u0441\u0442\u0443\u043f',
   Caption: '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
   Left: '\u041f\u043e \u043b\u0435\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e',
   Center: '\u041f\u043e \u0446\u0435\u043d\u0442\u0440\u0443',
   Right: '\u041f\u043e \u043f\u0440\u0430\u0432\u043e\u043c\u0443 \u043a\u0440\u0430\u044e',
   'Cell type': '\u0422\u0438\u043f \u044f\u0447\u0435\u0439\u043a\u0438',
   Scope: 'Scope',
   Alignment:
      '\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435',
   'H Align':
      '\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435',
   'V Align':
      '\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435',
   Top: '\u041f\u043e \u0432\u0435\u0440\u0445\u0443',
   Middle: '\u041f\u043e \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435',
   Bottom: '\u041f\u043e \u043d\u0438\u0437\u0443',
   'Header cell': '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
   'Row group':
      '\u0413\u0440\u0443\u043f\u043f\u0430 \u0441\u0442\u0440\u043e\u043a',
   'Column group':
      '\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u043e\u043b\u043e\u043d\u043e\u043a',
   'Row type': '\u0422\u0438\u043f \u0441\u0442\u0440\u043e\u043a\u0438',
   Header: '\u0428\u0430\u043f\u043a\u0430',
   Body: '\u0422\u0435\u043b\u043e',
   Footer: '\u041d\u0438\u0437',
   'Border color': '\u0426\u0432\u0435\u0442 \u0440\u0430\u043c\u043a\u0438',
   'Insert template':
      '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d',
   Templates: '\u0428\u0430\u0431\u043b\u043e\u043d\u044b',
   Template: '\u0428\u0430\u0431\u043b\u043e\u043d',
   'Text color':
      '\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430',
   'Background color': '\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430',
   'Custom...': '\u0412\u044b\u0431\u0440\u0430\u0442\u044c\u2026',
   'Custom color':
      '\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0446\u0432\u0435\u0442',
   'No color': '\u0411\u0435\u0437 \u0446\u0432\u0435\u0442\u0430',
   'Table of Contents':
      '\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435',
   'Show blocks':
      '\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0431\u043b\u043e\u043a\u0438',
   'Show invisible characters':
      '\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b',
   'Words: {0}':
      '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0432: {0}',
   '{0} words': '\u0441\u043b\u043e\u0432: {0}',
   File: '\u0424\u0430\u0439\u043b',
   Edit: '\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c',
   Insert: '\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c',
   View: '\u0412\u0438\u0434',
   Format: '\u0424\u043e\u0440\u043c\u0430\u0442',
   Table: '\u0422\u0430\u0431\u043b\u0438\u0446\u0430',
   Tools: '\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b',
   'Powered by {0}':
      '\u041f\u0440\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0435 {0}',
   'Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help':
      '\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 ALT-F9 \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043c\u0435\u043d\u044e, ALT-F10 \u043f\u0430\u043d\u0435\u043b\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432, ALT-0 \u0434\u043b\u044f \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u043e\u043c\u043e\u0449\u0438.',
};
const en = {
   Redo: 'Redo',
   Undo: 'Undo',
   Cut: 'Cut',
   Copy: 'Copy',
   Paste: 'Paste',
   'Select all': 'Select all',
   'New document': 'New document',
   Ok: 'Ok',
   Cancel: 'Cancel',
   'Visual aids': 'Visual aids',
   Bold: 'Bold',
   Italic: 'Italic',
   Underline: 'Underline',
   Strikethrough: 'Strike-through',
   Superscript: 'Superscript',
   Subscript: 'Subscript',
   'Clear formatting': 'Clear formatting',
   'Align left': 'Align left',
   'Align center': 'Align centre',
   'Align right': 'Align right',
   Justify: 'Justify',
   'Bullet list': 'Bullet list',
   'Numbered list': 'Numbered list',
   'Decrease indent': 'Decrease indent',
   'Increase indent': 'Increase indent',
   Close: 'Close',
   Formats: 'Formats',
   "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":
      "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.",
   Headers: 'Headers',
   'Header 1': 'Header 1',
   'Header 2': 'Header 2',
   'Header 3': 'Header 3',
   'Header 4': 'Header 4',
   'Header 5': 'Header 5',
   'Header 6': 'Header 6',
   Headings: 'Headings',
   'Heading 1': 'Heading 1',
   'Heading 2': 'Heading 2',
   'Heading 3': 'Heading 3',
   'Heading 4': 'Heading 4',
   'Heading 5': 'Heading 5',
   'Heading 6': 'Heading 6',
   Preformatted: 'Preformatted',
   Div: 'Div',
   Pre: 'Pre',
   Code: 'Code',
   Paragraph: 'Paragraph',
   Blockquote: 'Blockquote',
   Inline: 'Inline',
   Blocks: 'Blocks',
   'Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.':
      'Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.',
   'Font Family': 'Font Family',
   'Font Sizes': 'Font Sizes',
   Class: 'Class',
   'Browse for an image': 'Browse for an image',
   OR: 'OR',
   'Drop an image here': 'Drop an image here',
   Upload: 'Upload',
   Block: 'Block',
   Align: 'Align',
   Default: 'Default',
   Circle: 'Circle',
   Disc: 'Disc',
   Square: 'Square',
   'Lower Alpha': 'Lower Alpha',
   'Lower Greek': 'Lower Greek',
   'Lower Roman': 'Lower Roman',
   'Upper Alpha': 'Upper Alpha',
   'Upper Roman': 'Upper Roman',
   Anchor: 'Anchor',
   Name: 'Name',
   Id: 'ID',
   'Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.':
      'ID should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.',
   'You have unsaved changes are you sure you want to navigate away?':
      'You have unsaved changes are you sure you want to navigate away?',
   'Restore last draft': 'Restore last draft',
   'Special character': 'Special character',
   'Source code': 'Source code',
   'Insert/Edit code sample': 'Insert/Edit code sample',
   Language: 'Language',
   'Code sample': 'Code sample',
   Color: 'Colour',
   R: 'R',
   G: 'G',
   B: 'B',
   'Left to right': 'Left to right',
   'Right to left': 'Right to left',
   Emoticons: 'Emoticons',
   'Document properties': 'Document properties',
   Title: 'Title',
   Keywords: 'Keywords',
   Description: 'Description',
   Robots: 'Robots',
   Author: 'Author',
   Encoding: 'Encoding',
   Fullscreen: 'Full-screen',
   Action: 'Action',
   Shortcut: 'Shortcut',
   Help: 'Help',
   Address: 'Address',
   'Focus to menubar': 'Focus to menubar',
   'Focus to toolbar': 'Focus to toolbar',
   'Focus to element path': 'Focus to element path',
   'Focus to contextual toolbar': 'Focus to contextual toolbar',
   'Insert link (if link plugin activated)':
      'Insert link (if link plugin activated)',
   'Save (if save plugin activated)': 'Save (if save plugin activated)',
   'Find (if searchreplace plugin activated)':
      'Find (if searchreplace plugin activated)',
   'Plugins installed ({0}):': 'Plugins installed ({0}):',
   'Premium plugins:': 'Premium plugins:',
   'Learn more...': 'Learn more...',
   'You are using {0}': 'You are using {0}',
   Plugins: 'Plugins',
   'Handy Shortcuts': 'Handy Shortcuts',
   'Horizontal line': 'Horizontal line',
   'Insert/edit image': 'Insert/edit image',
   'Image description': 'Image description',
   Source: 'Source',
   Dimensions: 'Dimensions',
   'Constrain proportions': 'Constrain proportions',
   General: 'General',
   Advanced: 'Advanced',
   Style: 'Style',
   'Vertical space': 'Vertical space',
   'Horizontal space': 'Horizontal space',
   Border: 'Border',
   'Insert image': 'Insert image',
   Image: 'Image',
   'Image list': 'Image list',
   'Rotate counterclockwise': 'Rotate counterclockwise',
   'Rotate clockwise': 'Rotate clockwise',
   'Flip vertically': 'Flip vertically',
   'Flip horizontally': 'Flip horizontally',
   'Edit image': 'Edit image',
   'Image options': 'Image options',
   'Zoom in': 'Zoom in',
   'Zoom out': 'Zoom out',
   Crop: 'Crop',
   Resize: 'Resize',
   Orientation: 'Orientation',
   Brightness: 'Brightness',
   Sharpen: 'Sharpen',
   Contrast: 'Contrast',
   'Color levels': 'Colour levels',
   Gamma: 'Gamma',
   Invert: 'Invert',
   Apply: 'Apply',
   Back: 'Back',
   'Insert date/time': 'Insert date/time',
   'Date/time': 'Date/time',
   'Insert link': 'Insert link',
   'Insert/edit link': 'Insert/edit link',
   'Text to display': 'Text to display',
   Url: 'URL',
   Target: 'Target',
   None: 'None',
   'New window': 'New window',
   'Remove link': 'Remove link',
   Anchors: 'Anchors',
   Link: 'Link',
   'Paste or type a link': 'Paste or type a link',
   'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?':
      'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?',
   'The URL you entered seems to be an external link. Do you want to add the required http:// prefix?':
      'The URL you entered seems to be an external link. Do you want to add the required http:// prefix?',
   'Link list': 'Link list',
   'Insert video': 'Insert video',
   'Insert/edit video': 'Insert/edit video',
   'Insert/edit media': 'Insert/edit media',
   'Alternative source': 'Alternative source',
   Poster: 'Poster',
   'Paste your embed code below:': 'Paste your embed code below:',
   Embed: 'Embed',
   Media: 'Media',
   'Nonbreaking space': 'Non-breaking space',
   'Page break': 'Page break',
   'Paste as text': 'Paste as text',
   Preview: 'Preview',
   Print: 'Print',
   Save: 'Save',
   Find: 'Find',
   'Replace with': 'Replace with',
   Replace: 'Replace',
   'Replace all': 'Replace all',
   Prev: 'Prev',
   Next: 'Next',
   'Find and replace': 'Find and replace',
   'Could not find the specified string.':
      'Could not find the specified string.',
   'Match case': 'Match case',
   'Whole words': 'Whole words',
   Spellcheck: 'Spell-check',
   Ignore: 'Ignore',
   'Ignore all': 'Ignore all',
   Finish: 'Finish',
   'Add to Dictionary': 'Add to Dictionary',
   'Insert table': 'Insert table',
   'Table properties': 'Table properties',
   'Delete table': 'Delete table',
   Cell: 'Cell',
   Row: 'Row',
   Column: 'Column',
   'Cell properties': 'Cell properties',
   'Merge cells': 'Merge cells',
   'Split cell': 'Split cell',
   'Insert row before': 'Insert row before',
   'Insert row after': 'Insert row after',
   'Delete row': 'Delete row',
   'Row properties': 'Row properties',
   'Cut row': 'Cut row',
   'Copy row': 'Copy row',
   'Paste row before': 'Paste row before',
   'Paste row after': 'Paste row after',
   'Insert column before': 'Insert column before',
   'Insert column after': 'Insert column after',
   'Delete column': 'Delete column',
   Cols: 'Cols',
   Rows: 'Rows',
   Width: 'Width',
   Height: 'Height',
   'Cell spacing': 'Cell spacing',
   'Cell padding': 'Cell padding',
   Caption: 'Caption',
   Left: 'Left',
   Center: 'Centre',
   Right: 'Right',
   'Cell type': 'Cell type',
   Scope: 'Scope',
   Alignment: 'Alignment',
   'H Align': 'H Align',
   'V Align': 'V Align',
   Top: 'Top',
   Middle: 'Middle',
   Bottom: 'Bottom',
   'Header cell': 'Header cell',
   'Row group': 'Row group',
   'Column group': 'Column group',
   'Row type': 'Row type',
   Header: 'Header',
   Body: 'Body',
   Footer: 'Footer',
   'Border color': 'Border colour',
   'Insert template': 'Insert template',
   Templates: 'Templates',
   Template: 'Template',
   'Text color': 'Text colour',
   'Background color': 'Background colour',
   'Custom...': 'Custom...',
   'Custom color': 'Custom colour',
   'No color': 'No colour',
   'Table of Contents': 'Table of Contents',
   'Show blocks': 'Show blocks',
   'Show invisible characters': 'Show invisible characters',
   'Words: {0}': 'Words: {0}',
   '{0} words': '{0} words',
   File: 'File',
   Edit: 'Edit',
   Insert: 'Insert',
   View: 'View',
   Format: 'Format',
   Table: 'Table',
   Tools: 'Tools',
   'Powered by {0}': 'Powered by {0}',
   'Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help':
      'Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help',
};
tinymce.addI18n('en', en);
tinymce.addI18n('ru', ru);
tinymce.addI18n('uz', uz);
const Editor = ({ setValue, value = '', onFocus }) => (
   <StyledElement>
      <Tinymce
         init={{
            ...init,
            content_style: [contentCss, contentUICss].join('\n'),
            language: 'en',
         }}
         onEditorChange={setValue}
         onFocus={onFocus}
         value={value}
      />
   </StyledElement>
);
Editor.propTypes = {
   onFocus: func,
   setValue: func,
   value: string,
};
export default Editor;
