import { useState } from 'react';
import styled from 'styled-components';
import ReactAceEditor from './ReactAceEditor';
const StyledEditor = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 50px 0;
   width: 100%;
   & .title {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 20px 0;
   }
   & .content {
      height: 500px;
      width: 800px;
   }
`;
const CodeEditor = () => {
   const [code, setCode] = useState('');
   const [language, setLanguage] = useState('javascript');
   const [theme, setTheme] = useState('monokai');
   const [fontSize, setFontSize] = useState(15);
   const languages = [
      'html',
      'css',
      'javascript',
      'typescript',
      'php',
      'python',
      'golang',
      'dart',
      'csharp',
      'c_cpp',
      'java',
      'ruby',
      'rust',
      'pascal',
      'haskell',
   ];
   const themes = [
      'monokai',
      'kuroir',
      'solarized_dark',
      'solarized_light',
      'terminal',
      'textmate',
      'twilight',
      'xcode',
   ];
   const fontSizes = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
   return (
      <StyledEditor>
         <h1 className='title'>Code Editor</h1>
         <div className='content'>
            <ReactAceEditor
               fontSize={fontSize}
               fontSizes={fontSizes}
               language={language}
               languages={languages}
               onChange={setCode}
               onChangeFontSize={setFontSize}
               onChangeLanguage={setLanguage}
               onChangeTheme={setTheme}
               theme={theme}
               themes={themes}
               value={code}
               onSubmit={() => {
                  console.log(code);
               }}
            />
         </div>
      </StyledEditor>
   );
};

export default CodeEditor;
