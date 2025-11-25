'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating reverse URA call scripts.
 *
 * The flow takes a prompt as input and returns a generated call script.
 *
 * @file
 * @exports generateReverseURAScript
 * @exports GenerateReverseURAScriptInput
 * @exports GenerateReverseURAScriptOutput
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReverseURAScriptInputSchema = z.object({
  prompt: z.string().describe('A prompt to generate the reverse URA call script.'),
});
export type GenerateReverseURAScriptInput = z.infer<typeof GenerateReverseURAScriptInputSchema>;

const GenerateReverseURAScriptOutputSchema = z.object({
  script: z.string().describe('The generated reverse URA call script.'),
});
export type GenerateReverseURAScriptOutput = z.infer<typeof GenerateReverseURAScriptOutputSchema>;

export async function generateReverseURAScript(input: GenerateReverseURAScriptInput): Promise<GenerateReverseURAScriptOutput> {
  return generateReverseURAScriptFlow(input);
}

const generateReverseURAScriptPrompt = ai.definePrompt({
  name: 'generateReverseURAScriptPrompt',
  input: {schema: GenerateReverseURAScriptInputSchema},
  output: {schema: GenerateReverseURAScriptOutputSchema},
  prompt: `You are an expert in generating reverse URA call scripts.

  Based on the following prompt, generate a reverse URA call script:

  Prompt: {{{prompt}}}

  Script:`, // Ensure proper Handlebars syntax
});

const generateReverseURAScriptFlow = ai.defineFlow(
  {
    name: 'generateReverseURAScriptFlow',
    inputSchema: GenerateReverseURAScriptInputSchema,
    outputSchema: GenerateReverseURAScriptOutputSchema,
  },
  async input => {
    const {output} = await generateReverseURAScriptPrompt(input);
    return output!;
  }
);
