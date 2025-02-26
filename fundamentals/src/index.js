import OpenAI from "openai";
const main = async () => {
    const prompt = "write a haiku about ai"
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content":prompt },
  ],
});

completion.then((result) => console.log(result.choices[0].message));
}

main()