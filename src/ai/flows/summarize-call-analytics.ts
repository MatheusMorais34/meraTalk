'use server';

/**
 * @fileOverview Summarizes call analytics data to provide key insights and trends.
 *
 * - summarizeCallAnalytics - A function that summarizes call analytics data.
 * - SummarizeCallAnalyticsInput - The input type for the summarizeCallAnalytics function.
 * - SummarizeCallAnalyticsOutput - The return type for the summarizeCallAnalytics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCallAnalyticsInputSchema = z.object({
  callAnalyticsData: z
    .string()
    .describe('The call analytics data to summarize.  Should include metrics like call volume, average call duration, success rate, and common issues.'),
});
export type SummarizeCallAnalyticsInput = z.infer<typeof SummarizeCallAnalyticsInputSchema>;

const SummarizeCallAnalyticsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the key insights and trends from the call analytics data.'),
});
export type SummarizeCallAnalyticsOutput = z.infer<typeof SummarizeCallAnalyticsOutputSchema>;

export async function summarizeCallAnalytics(input: SummarizeCallAnalyticsInput): Promise<SummarizeCallAnalyticsOutput> {
  return summarizeCallAnalyticsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCallAnalyticsPrompt',
  input: {schema: SummarizeCallAnalyticsInputSchema},
  output: {schema: SummarizeCallAnalyticsOutputSchema},
  prompt: `You are an expert in call analytics.  You will be provided with call analytics data, and you will generate a concise summary of the key insights and trends.  Focus on providing actionable information that can help improve call performance.

Call Analytics Data:
{{{callAnalyticsData}}}`, 
});

const summarizeCallAnalyticsFlow = ai.defineFlow(
  {
    name: 'summarizeCallAnalyticsFlow',
    inputSchema: SummarizeCallAnalyticsInputSchema,
    outputSchema: SummarizeCallAnalyticsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
