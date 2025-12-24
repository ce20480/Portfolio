'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import styles from './Problem.module.css';

interface CodeEditorProps {
  initialCode: string;
  language?: string;
  onChange?: (code: string) => void;
}

export function CodeEditor({ initialCode, language = 'python', onChange }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  const handleChange = (value: string | undefined) => {
    const newCode = value || '';
    setCode(newCode);
    onChange?.(newCode);
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.editorHeader}>
        <select className={styles.languageSelect} defaultValue={language}>
          <option value="python">Python 3</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="java">Java</option>
        </select>
        <div className={styles.editorActions}>
          <button className={styles.iconBtn} title="Reset code">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
          </button>
        </div>
      </div>
      <Editor
        height="100%"
        defaultLanguage={language}
        value={code}
        onChange={handleChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          padding: { top: 16, bottom: 16 },
          automaticLayout: true,
        }}
      />
    </div>
  );
}
