
const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api/v1";

export interface ChatResponse {
    success: boolean;
    message: string;
    data: {
        question: string;
        answer: string;
    };
}

export async function askAI(
    question: string
): Promise<ChatResponse> {
    const response = await fetch(`${API_URL}/ai/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.message || "Failed to generate AI response"
        );
    }

    return result as ChatResponse;
}
