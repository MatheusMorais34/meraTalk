
"use server";

import { generateReverseURAScript } from "@/ai/flows/generate-reverse-ura-script";
import { summarizeCallAnalytics } from "@/ai/flows/summarize-call-analytics";
import { z } from "zod";

const scriptSchema = z.object({
  prompt: z.string().min(10, { message: "O prompt deve ter pelo menos 10 caracteres." }),
});

export async function handleGenerateScript(prevState: any, formData: FormData) {
  try {
    const validatedFields = scriptSchema.safeParse({
      prompt: formData.get('prompt'),
    });

    if (!validatedFields.success) {
      return {
        message: 'error',
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }
    
    const result = await generateReverseURAScript({ prompt: validatedFields.data.prompt });
    return { message: "success", script: result.script };
  } catch (error) {
    console.error(error);
    return { message: "error", error: "Falha ao gerar o roteiro. Tente novamente." };
  }
}

export async function handleSummarizeAnalytics(analyticsData: string) {
  try {
    if (!analyticsData) {
      return { error: "Nenhum dado de análise fornecido." };
    }
    const result = await summarizeCallAnalytics({ callAnalyticsData: analyticsData });
    return { summary: result.summary };
  } catch (error) {
    console.error(error);
    return { error: "Falha ao resumir os dados. Tente novamente." };
  }
}
