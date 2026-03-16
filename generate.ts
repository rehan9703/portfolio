import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateAndSave(prompt: string, filename: string) {
    try {
        console.log(`Generating ${filename}...`);
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: prompt,
        });
        
        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                const base64Data = part.inlineData.data;
                fs.writeFileSync(filename, Buffer.from(base64Data, 'base64'));
                console.log(`Successfully saved ${filename}`);
                return;
            }
        }
        console.log(`No image data found for ${filename}`);
    } catch (e) {
        console.error(`Failed to generate ${filename}:`, e);
    }
}

async function main() {
    await generateAndSave('A person wearing a black hoodie with a cap, face completely obscured in shadow, dark hacker aesthetic, isolated on a pure white background, high contrast, professional studio photography, portrait', './public/hero-pic.png');
    await generateAndSave('A person wearing a black hoodie, hand covering their face, face in shadow, dark hacker aesthetic, isolated on a pure white background, high contrast, professional studio photography, portrait', './public/about-pic.png');
}

main();
