import { NextRequest, NextResponse } from 'next/server';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { code, problemTitle, conversationHistory } = await request.json();

    if (!code || !problemTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const systemPrompt = `You are a senior engineer at Google conducting a coding interview for "${problemTitle}".

The candidate's code:
\`\`\`python
${code}
\`\`\`

YOUR INTERVIEWING STYLE:
1. NEVER point out bugs or issues directly
2. Use the Socratic method - ask questions that help THEM discover problems
3. Start by understanding their approach before probing
4. Build on their explanations with follow-up questions
5. Be genuinely curious, not interrogative

QUESTION TYPES (use these, not direct hints):
- "Can you walk me through what happens when [specific input]?"
- "What's your thinking behind [specific code choice]?"
- "What would this return if [edge case]?"
- "Can you trace through the code with [example]?"

NEVER SAY things like:
- "Shouldn't you use X instead?"
- "There's a bug on line Y"
- "You should return Z"
- "I notice you're doing X wrong"

Keep responses to 2-3 sentences. Sound like a real person having a conversation.`;

    const initialPrompt = `This is the start of the interview. Ask the candidate to walk you through their approach at a high level. Don't dive into specifics yet - understand their thinking first. One question only.`;

    // Build messages array
    const messages: Array<{ role: string; content: string }> = [
      { role: 'system', content: systemPrompt }
    ];

    // If there's conversation history, add it
    if (conversationHistory && conversationHistory.length > 0) {
      for (const msg of conversationHistory as Message[]) {
        messages.push({
          role: msg.role,
          content: msg.content
        });
      }
    } else {
      // Initial submission - ask first question
      messages.push({ role: 'user', content: initialPrompt });
    }

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('DeepSeek API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || 'No response generated';

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Interview API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
