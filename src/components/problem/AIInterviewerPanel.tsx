'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Problem.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIInterviewerPanelProps {
  messages: Message[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
}

export function AIInterviewerPanel({ messages, isLoading, onSendMessage }: AIInterviewerPanelProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  if (messages.length === 0 && !isLoading) {
    return (
      <div className={styles.aiPanel}>
        <div className={styles.aiPanelEmpty}>
          <div className={styles.aiAvatar}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
          </div>
          <p>Submit your solution to start the interview</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.aiPanel}>
      <div className={styles.chatContainer}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${styles.chatMessage} ${msg.role === 'user' ? styles.chatMessageUser : styles.chatMessageAi}`}
          >
            {msg.role === 'assistant' && (
              <div className={styles.aiAvatarSmall}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
            )}
            <div className={`${styles.chatBubble} ${msg.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleAi}`}>
              {msg.role === 'assistant' ? (
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.chatMessage} ${styles.chatMessageAi}`}>
            <div className={styles.aiAvatarSmall}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </div>
            <div className={`${styles.chatBubble} ${styles.chatBubbleAi}`}>
              <div className={styles.aiLoading}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length > 0 && (
        <form onSubmit={handleSubmit} className={styles.chatInputForm}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            className={styles.chatInput}
            disabled={isLoading}
          />
          <button
            type="submit"
            className={styles.chatSendBtn}
            disabled={!input.trim() || isLoading}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}
