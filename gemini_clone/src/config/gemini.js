
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyA4AgWPoYherJLR4lt0qUqPOrMJ2mHINz8";

async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            {
                role: "user",
                parts: [{ text: "why cant i get code ?" }],
            },
            {
                role: "model",
                parts: [{ text: "## Understanding the Issue: Why You Can't Get Code\n\nThere could be several reasons why you're having trouble getting code. To help pinpoint the problem, I'd need some more information:\n\n**1. Context:**\n\n* **What kind of code are you trying to get?** (e.g., source code for a specific software, code examples for learning, generated code from an AI tool)\n* **Where are you trying to get the code from?** (e.g., a website, a code repository like GitHub, an API)\n* **What steps have you taken so far?** (e.g., searched online, used specific tools or platforms)\n\n**2. Potential Issues:**\n\nHere are some possible reasons why you might be facing difficulties:\n\n* **Access restrictions:** The code might be private, requiring specific permissions or authentication to access.\n* **Technical problems:** There could be issues with the website, platform, or tool you're using.\n* **Search difficulties:** You might not be using the right keywords or searching in the correct places.\n* **Understanding gaps:** The code might require specific knowledge or context to understand and use.\n\n**3. Troubleshooting:**\n\nOnce we have a clearer understanding of the situation, we can explore solutions together. Here are some general tips:\n\n* **Double-check the source:** Ensure you're looking in the correct place and that the code is publicly available.\n* **Verify your access:** If necessary, create accounts or obtain required permissions.\n* **Try different search terms or platforms:** Explore alternative sources and use more specific keywords.\n* **Seek help from communities or forums:** Ask questions and get assistance from other developers.\n* **Break down the problem:** If facing technical issues, try to isolate the cause and seek solutions online or from support channels.\n\n**Remember, the more details you provide, the better I can assist you in getting the code you need.**" }],
            },
        ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    console.log(response.text());
}

export default runChat;