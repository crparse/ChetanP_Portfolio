/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export async function* streamAI(message: string, history: any[] = []) {
  try {
    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history })
    });

    if (!response.ok) {
      throw new Error("SERVER_PROTOCOL_ERROR");
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("No reader available");

    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      yield decoder.decode(value);
    }
  } catch (error) {
    console.error("AI Client Error:", error);
    yield "PROTOCOL_ERROR: Connection to Intelligence Core interrupted. Neural pathways are saturated. Please refresh or simplify the query.";
  }
}
