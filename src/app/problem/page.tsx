'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels';
import { ProblemPanel, CodeEditor, AIInterviewerPanel } from '@/components/problem';
import { problems } from '@/data/problems';
import styles from '@/components/problem/Problem.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ProblemPage() {
  const problem = problems[0]; // Default to first problem
  const [code, setCode] = useState(problem.starterCode);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const callAI = async (conversationHistory: Message[]) => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code,
          problemTitle: problem.title,
          conversationHistory,
        }),
      });

      const data = await response.json();
      const aiMessage: Message = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, there was an error. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    // Clear previous conversation and start fresh
    setMessages([]);
    await callAI([]);
  };

  const handleSendMessage = async (userMessage: string) => {
    const newUserMessage: Message = { role: 'user', content: userMessage };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    await callAI(updatedMessages);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>CI</div>
          CodeInterview
        </Link>
        <div className={styles.navLinks}>
          <Link href="/problem" className={`${styles.navLink} ${styles.navLinkActive}`}>
            Problems
          </Link>
          <Link href="#" className={styles.navLink}>Progress</Link>
          <Link href="#" className={styles.navLink}>Patterns</Link>
        </div>
        <button className={styles.btn} style={{ padding: '8px 20px' }}>
          Sign In
        </button>
      </nav>

      {/* Main Layout */}
      <div className={styles.layout}>
        {/* Left Panel - Problem Description */}
        <ProblemPanel problem={problem} />

        {/* Right Panel - Editor + AI */}
        <div className={styles.editorPanel}>
          <PanelGroup orientation="vertical">
            {/* Code Editor - default 65%, min 30% */}
            <Panel defaultSize={65} minSize={30}>
              <CodeEditor
                initialCode={problem.starterCode}
                onChange={setCode}
              />
            </Panel>

            <PanelResizeHandle className={styles.resizeHandle} />

            {/* AI Panel - default 35%, min 15% */}
            <Panel defaultSize={35} minSize={15}>
              <AIInterviewerPanel
                messages={messages}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
              />
            </Panel>
          </PanelGroup>

          {/* Footer Actions - Always visible */}
          <div className={styles.footer}>
            <button className={styles.consoleToggle}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5"/>
                <line x1="12" y1="19" x2="20" y2="19"/>
              </svg>
              Console
            </button>
            <div className={styles.actionButtons}>
              <button className={`${styles.btn} ${styles.btnSecondary}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Run
              </button>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleSubmit}
                disabled={isLoading}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                </svg>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
