// app/api/generateMealPlan/route.ts
import { zodResponseFormat } from "openai/helpers/zod";
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { isValid, z } from "zod";

// Initialize OpenAI client
const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,  // Ensure the API key is securely stored
});

// Define the zod schema for the meal plan
const SingleDayMealSchema = z.object({
	breakfast: z.object({
		description: z.string(),
		nutrition: z.object({
			calories: z.string(),
			protein: z.string(),
			fats: z.string(),
			carbohydrates: z.string(),
		}),
	}),
	lunch: z.object({
		description: z.string(),
		nutrition: z.object({
			calories: z.string(),
			protein: z.string(),
			fats: z.string(),
			carbohydrates: z.string(),
		}),
	}),
	dinner: z.object({
		description: z.string(),
		nutrition: z.object({
			calories: z.string(),
			protein: z.string(),
			fats: z.string(),
			carbohydrates: z.string(),
		}),
	}),
});

const MealPlanSchema = z.object({
	isValid: z.boolean(),
	day1: SingleDayMealSchema,
	day2: SingleDayMealSchema,
	day3: SingleDayMealSchema,
	day4: SingleDayMealSchema,
	day5: SingleDayMealSchema,
	day6: SingleDayMealSchema,
	day7: SingleDayMealSchema,
});


// Define types for the request body
interface RequestBody {
	healthCondition: string;
}

// Define the POST handler with TypeScript types
export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		// Parse the request body
		const { healthCondition }: RequestBody = await request.json();

		// Define the chat messages
		const messages = [
			{
				role: 'system',
				content: `You are a nutrition expert AI. Your primary function is to validate health conditions and generate unique, personalized, non-repetitive 7-day meal plans based on valid health conditions. Each meal plan must have variety in ingredients, cuisines, and preparation methods to ensure no meal is repeated. Every meal plan must include nutritional values for calories, protein, fats, and carbohydrates. If the health condition provided is not recognized or invalid, you must return "null".`,
			},
			{
				role: 'user',
				content: `Validate if the health condition "${healthCondition}" is recognized. If the health condition is not valid, return "null".`,
			},
			{
				role: 'user',
				content: `If the health condition is valid, generate a varied, balanced, and non-repetitive 7-day meal plan for someone with the health condition "${healthCondition}". Each day should include unique meals for breakfast, lunch, and dinner, ensuring that ingredients are not reused across the 7 days. Each meal should contain a description and its full nutritional breakdown, including calories, protein (in grams), fats (in grams), and carbohydrates (in grams).`
			}
		];


		// Send the request to OpenAI
		const response = await openai.beta.chat.completions.parse({
			model: 'gpt-4o-2024-08-06',
			messages: messages,
			response_format: zodResponseFormat(MealPlanSchema, "mealPlan"),  // Validate the response using zod schema
			max_tokens: 1000,
			temperature: 0.7,
		});


		const mealPlan = response.choices[0].message.parsed;  // Use the parsed message from zodResponseFormat

		// @ts-ignore
		if (!mealPlan.isValid) {
			// Handle invalid health condition
			console.error('Invalid health condition provided');
			return NextResponse.json({ error: 'Invalid health condition' }, { status: 400 });
		} else {
			// Handle valid meal plan
			return NextResponse.json({ mealPlan });
		}
		
		
	} catch (error) {
		console.error('Error generating meal plan:', error);
		return NextResponse.json(
			{ error: 'Failed to generate meal plan' },
			{ status: 500 }
		);
	}
}
