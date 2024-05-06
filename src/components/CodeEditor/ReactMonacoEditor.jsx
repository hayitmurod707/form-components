import { bool, func, string } from 'prop-types';
import { useRef, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import ReactSelect, { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
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
const getOptions = ({ fontSize, isDisabled }) => {
   return {
      selectOnLineNumbers: true,
      fontSize,
      readOnly: isDisabled,
      scrollbar: {
         horizontal: 'visible',
         horizontalScrollbarSize: 12,
         useShadows: true,
         vertical: 'visible',
         verticalScrollbarSize: 12,
      },
   };
};
const ReactMonacoEditor = ({
   value,
   onChange,
   isDisabled,
   onSubmit,
   language,
   setLanguage,
   languages,
}) => {
   const ref = useRef(null);
   const [themes] = useState([
      {
         label: 'Visual Studio Dark',
         value: 'vs-dark',
      },
      {
         label: 'Visual Studio Light',
         value: 'vs-light',
      },
      {
         label: 'High Contrast Black',
         value: 'hc-black',
      },
      {
         label: 'High Contrast Light',
         value: 'hc-light',
      },
   ]);
   const [theme, setTheme] = useState({
      label: 'Visual Studio Dark',
      value: 'vs-dark',
   });
   const [fontSizes] = useState([
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
   ]);
   const [fontSize, setFontSize] = useState({
      label: '15px',
      value: 15,
   });
   const onChangeTheme = value => {
      const defaultTheme = JSON.parse(localStorage.getItem('editor-theme'));
      const theme = value
         ? value
         : defaultTheme
         ? defaultTheme
         : {
              label: 'Monokai',
              value: 'monokai',
           };
      setTheme(theme);
      localStorage.setItem('editor-theme', JSON.stringify(theme));
   };
   const onChangeFontSize = value => {
      const defaultFontSize = JSON.parse(
         localStorage.getItem('editor-font-size')
      );
      const fontSize = value
         ? value
         : defaultFontSize
         ? defaultFontSize
         : {
              label: '15px',
              value: 15,
           };
      setFontSize(fontSize);
      localStorage.setItem('editor-font-size', JSON.stringify(fontSize));
   };
   const onChangeLanguage = value => {
      const defaultTheme = JSON.parse(localStorage.getItem('editor-language'));
      const language = value
         ? value
         : defaultTheme
         ? defaultTheme
         : {
              id: 1,
              label: 'Javascript',
              value: 'javascript',
           };
      setLanguage(language);
      localStorage.setItem('editor-language', JSON.stringify(language));
   };
   return (
      <StyledElement>
         <div className='editor-header'>
            <div className='editor-menu'>
               <ReactSelect
                  {...selectOptions}
                  isDisabled={isDisabled}
                  onChange={onChangeTheme}
                  options={themes}
                  value={theme}
               />
            </div>
            <div className='editor-menu'>
               <ReactSelect
                  {...selectOptions}
                  isDisabled={isDisabled}
                  onChange={onChangeFontSize}
                  options={fontSizes}
                  value={fontSize}
               />
            </div>
            <div className='editor-menu'>
               <ReactSelect
                  {...selectOptions}
                  isDisabled={isDisabled}
                  onChange={onChangeLanguage}
                  options={languages}
                  value={language}
               />
            </div>
            <div className='editor-run'>
               <button onClick={onSubmit}>Run</button>
            </div>
         </div>
         <div className='editor-body'>
            <MonacoEditor
               ref={ref}
               language={language?.value}
               onChange={onChange}
               options={getOptions({ fontSize: fontSize?.value, isDisabled })}
               theme={theme?.value}
               value={value}
               editorWillMount={editor => {
                  // console.log(editor);
                  editor.languages.register({ id: language?.value });
               }}
               editorDidMount={(editor, monaco) => {
                  console.log(editor, monaco, language.value);
                  monaco.editor.setModelLanguage(
                     editor.getModel(),
                     language.value
                  );
                  // monaco.languages.onLanguage = (...rest) => {
                  //    console.log(rest);
                  // };
               }}
            />
         </div>
      </StyledElement>
   );
};
ReactMonacoEditor.defaultProps = {
   isDisabled: false,
   languages: [],
   value: '',
   language: {
      id: 1,
      label: 'Html',
      value: 'html',
   },
};
ReactMonacoEditor.propTypes = {
   isDisabled: bool,
   onChange: func.isRequired,
   onSubmit: func,
   value: string,
   setLanguage: func.isRequired,
};
export default ReactMonacoEditor;
