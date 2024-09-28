// app/api/generateMealPlan/route.js
import { NextRequest,NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const { healthCondition } = await request.json();

    const messages = [
      { role: 'system', content: 'You are an AI assistant that generates personalized meal plans based on health conditions, dietary preferences, and health goals.' },
      {
        role: 'user',
        content: `Generate a 7-day meal plan for someone with the health condition ${healthCondition}. Include breakfast, lunch, and dinner for each day.`
      }
    ];

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        // model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 600,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
      }
    );

    const mealPlan = response.data.choices[0].message.content;
    return NextResponse.json({ mealPlan });
  } catch (error) {
    console.error('Error generating meal plan:', error);
    return NextResponse.json({ error: 'Failed to generate meal plan' }, { status: 500 });
  }
}
