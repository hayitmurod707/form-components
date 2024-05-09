import 'ace-builds/src-noconflict/ace';
// import 'ace-builds/src-noconflict/mode-c_cpp';
// import 'ace-builds/src-noconflict/mode-csharp';
// import 'ace-builds/src-noconflict/mode-css';
// import 'ace-builds/src-noconflict/mode-dart';
// import 'ace-builds/src-noconflict/mode-golang';
// import 'ace-builds/src-noconflict/mode-haskell';
// import 'ace-builds/src-noconflict/mode-html';
// import 'ace-builds/src-noconflict/mode-java';
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/mode-pascal';
// import 'ace-builds/src-noconflict/mode-php';
// import 'ace-builds/src-noconflict/mode-python';
// import 'ace-builds/src-noconflict/mode-ruby';
// import 'ace-builds/src-noconflict/mode-rust';
// import 'ace-builds/src-noconflict/mode-typescript';
// import 'ace-builds/src-noconflict/theme-github';
// import 'ace-builds/src-noconflict/theme-kuroir';
// import 'ace-builds/src-noconflict/theme-monokai';
// import 'ace-builds/src-noconflict/theme-solarized_dark';
// import 'ace-builds/src-noconflict/theme-solarized_light';
// import 'ace-builds/src-noconflict/theme-terminal';
// import 'ace-builds/src-noconflict/theme-textmate';
// import 'ace-builds/src-noconflict/theme-tomorrow';
// import 'ace-builds/src-noconflict/theme-twilight';
// import 'ace-builds/src-noconflict/theme-xcode';
import { array, bool, func, string } from 'prop-types';
import ReactAce from 'react-ace';
import ReactSelect, { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
const StyledElement = styled.div`
   border-radius: 16px;
   box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
      0 1px 20px 0 rgba(13, 46, 105, 0.07);
   height: 100%;
   overflow: hidden;
   width: 100%;
   & .editor-header {
      display: flex;
      flex-wrap: wrap;
      height: 48px;
      padding: 0 6px 6px 6px;
      & .editor-menu {
         margin: 6px 6px 0 0;
      }
      & .editor-run {
         margin: 6px 0 0 0;
         & button {
            background-color: #0163f7;
            border-radius: 12px;
            border: none;
            color: rgb(255, 255, 255);
            cursor: pointer;
            font-size: 16px;
            height: 42px;
            outline: none;
            padding: 0 16px;
         }
      }
   }
   & .editor-body {
      height: calc(100% - 54px);
   }
`;
const getOptions = ({ language, theme }) => ({
   defaultValue: '',
   enableBasicAutocompletion: true,
   enableLiveAutocompletion: true,
   enableSnippets: true,
   highlightActiveLine: true,
   name: 'editor',
   placeholder: '',
   showGutter: true,
   showPrintMargin: true,
   tabSize: 3,
   wrapEnabled: true,
   editorProps: {
      $blockScrolling: true,
   },
   setOptions: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
      mode: language?.value,
      showLineNumbers: true,
      tabSize: 3,
      theme: theme?.value,
   },
   style: {
      height: '400px',
      width: '100%',
   },
});
const IndicatorSeparator = () => null;
const animation = keyframes`
	0% {
		opacity: 0.1;
		transform: scale(0.6);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
`;
const StyledMenu = styled.div`
   & .react-select-menu {
      animation: ${animation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background-color: rgb(255, 255, 255);
      box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
         0 1px 20px 0 rgba(13, 46, 105, 0.07);
      border-radius: 12px;
      border: none;
      margin: 0;
      min-width: 100%;
      overflow: hidden;
      padding: 0;
      transform-origin: top;
      width: initial;
   }
`;
const Menu = props => (
   <StyledMenu>
      <components.Menu {...props} className='react-select-menu'>
         {props?.children}
      </components.Menu>
   </StyledMenu>
);
const selectOptions = {
   components: { IndicatorSeparator, Menu },
   isClearable: false,
   isMulti: false,
   isSearchable: false,
   maxMenuHeight: 250,
   menuPortalTarget: document.body,
   styles: {
      option: (styles, { isSelected, isDisabled, isFocused }) => ({
         ...styles,
         backgroundColor: isDisabled
            ? 'rgb(247, 248, 252)'
            : isSelected
            ? '#0163f7'
            : isFocused
            ? 'rgba(82, 85, 241, 0.1)'
            : 'rgb(255, 255, 255)',
         borderRadius: 10,
         color: isDisabled
            ? 'rgb(105, 111, 133)'
            : isSelected
            ? 'rgb(255, 255, 255)'
            : isFocused
            ? 'rgb(37, 42, 59)'
            : 'rgb(37, 42, 59)',
         cursor: isDisabled ? 'not-allowed' : 'pointer',
         fontSize: 15,
         height: 40,
         overflow: 'hidden',
         padding: '12px',
         textOverflow: 'ellipsis',
         whiteSpace: 'nowrap',
         width: '100%',
         ':hover': {
            backgroundColor: isDisabled
               ? 'rgb(247, 248, 252)'
               : isSelected
               ? '#0163f7'
               : 'rgba(82, 85, 241, 0.1)',
         },
      }),
      singleValue: styles => ({
         ...styles,
         color: 'rgb(37, 42, 59)',
         margin: 0,
      }),
      control: styles => ({
         ...styles,
         backgroundColor: '#f5f5f5',
         border: 'none',
         borderRadius: 12,
         boxShadow: 'none',
         color: 'black',
         cursor: 'pointer',
         height: 42,
         outline: 'none',
         padding: 0,
         width: '100%',
         ':hover': {
            border: 'none',
         },
      }),
      menuPortal: styles => ({ ...styles, zIndex: 9999 }),
      menu: styles => ({
         ...styles,
         backgroundColor: 'rgb(245, 245, 245)',
         border: 'none',
         borderRadius: 12,
         margin: 0,
         overflow: 'hidden',
         padding: 0,
         zIndex: 10,
      }),
      menuList: styles => ({
         ...styles,
         padding: 5,
         '::-webkit-scrollbar': {
            width: 6,
         },
         '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
         },
         '::-webkit-scrollbar-thumb': {
            backgroundColor: '#0163f7',
            borderRadius: 3,
         },
      }),
      indicatorSeparator: styles => ({
         ...styles,
         display: 'none',
      }),
      dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => ({
         ...styles,
         alignItems: 'center',
         color: 'rgb(37, 42, 59)',
         display: 'flex',
         height: '100%',
         margin: '0 10px 0 0',
         padding: 0,
         transform: `rotate(${menuIsOpen ? '180deg' : '0'})`,
         transformOrigin: 'center',
         transition: '0.4s',
         width: 15,
         ':hover': {
            color: 'rgb(37, 42, 59)',
         },
      }),
      indicatorsContainer: styles => ({ ...styles, overflow: 'hidden' }),
      valueContainer: styles => ({
         ...styles,
         display: 'flex',
         fontSize: 15,
         height: '100%',
         padding: 12,
      }),
   },
};
const __languages = [
   { label: 'Html', value: 'html' },
   { label: 'CSS', value: 'css' },
   { label: 'Javascript', value: 'javascript' },
   { label: 'Typescript', value: 'typescript' },
   { label: 'PHP 7', value: 'php' },
   { label: 'Python', value: 'python' },
   { label: 'Go', value: 'golang' },
   { label: 'Dart', value: 'dart' },
   { label: 'C#', value: 'csharp' },
   { label: 'C/C++', value: 'c_cpp' },
   { label: 'Java', value: 'java' },
   { label: 'Ruby', value: 'ruby' },
   { label: 'Rust', value: 'rust' },
   { label: 'Pascal', value: 'pascal' },
   { label: 'Haskell', value: 'haskell' },
];
const __themes = [
   {
      label: 'Monokai',
      value: 'monokai',
   },
   {
      label: 'Kuroir',
      value: 'kuroir',
   },
   {
      label: 'Solarized Dark',
      value: 'solarized_dark',
   },
   {
      label: 'Solarized Light',
      value: 'solarized_light',
   },
   {
      label: 'Terminal',
      value: 'terminal',
   },
   {
      label: 'Textmate',
      value: 'textmate',
   },
   {
      label: 'Twilight',
      value: 'twilight',
   },
   {
      label: 'Xcode',
      value: 'xcode',
   },
];
const __fontSizes = [
   {
      label: '12px',
      value: 12,
   },
   {
      label: '13px',
      value: 13,
   },
   {
      label: '14px',
      value: 14,
   },
   {
      label: '15px',
      value: 15,
   },
   {
      label: '16px',
      value: 16,
   },
   {
      label: '17px',
      value: 17,
   },
   {
      label: '18px',
      value: 18,
   },
   {
      label: '19px',
      value: 19,
   },
   {
      label: '20px',
      value: 20,
   },
   {
      label: '21px',
      value: 21,
   },
   {
      label: '22px',
      value: 22,
   },
];
const ReactAceEditor = ({
   fontSize,
   fontSizes,
   isDisabled = false,
   language = 'javascript',
   languages = [],
   onChange,
   onChangeFontSize,
   onChangeLanguage,
   onChangeTheme,
   onFocus,
   onSubmit,
   theme,
   themes,
   value = '',
}) => {
   const newLanguages = __languages.filter(language =>
      languages.includes(language?.value)
   );
   const newLanguage = newLanguages.find(
      __language => __language?.value === language
   );
   const newThemes = __themes.filter(theme => themes.includes(theme?.value));
   const newTheme = newThemes.find(__theme => __theme?.value === theme);
   const newFontSizes = __fontSizes.filter(fontSize =>
      fontSizes.includes(fontSize?.value)
   );
   const newFontSize = newFontSizes.find(
      __fontSize => __fontSize?.value === fontSize
   );
   return (
      <StyledElement>
         <div className='editor-header'>
            <div className='editor-menu'>
               <ReactSelect
                  {...selectOptions}
                  isDisabled={isDisabled}
                  options={newThemes}
                  value={newTheme}
                  onChange={theme => {
                     onChangeTheme(theme?.value);
                  }}
               />
            </div>
            <div className='editor-menu'>
               <ReactSelect
                  {...selectOptions}
                  isDisabled={isDisabled}
                  options={newFontSizes}
                  value={newFontSize}
                  onChange={fontSize => {
                     onChangeFontSize(fontSize?.value);
                  }}
               />
            </div>
            <div className='editor-menu'>
               <ReactSelect
                  {...selectOptions}
                  isDisabled={isDisabled}
                  options={newLanguages}
                  value={newLanguage}
                  onChange={language => {
                     onChangeLanguage(language?.value);
                  }}
               />
            </div>
            <div className='editor-run'>
               <button onClick={onSubmit}>Run</button>
            </div>
         </div>
         <div className='editor-body'>
            <ReactAce
               {...getOptions({ theme: newTheme, language: newLanguage })}
               fontSize={newFontSize?.value}
               mode={newLanguage?.value}
               onChange={onChange}
               onFocus={onFocus}
               readOnly={isDisabled}
               style={{ height: '100%', width: '100%' }}
               theme={newTheme?.value}
               value={value}
            />
         </div>
      </StyledElement>
   );
};
ReactAceEditor.propTypes = {
   isDisabled: bool,
   language: string,
   languages: array,
   onChange: func,
   onFocus: func,
   onSubmit: func,
   onChangeLanguage: func,
   value: string,
};
export default ReactAceEditor;
