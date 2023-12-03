import OpenAI, { Configuration, OpenAIApi } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function (req, res) {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: generatePrompt(req.body.animal),
    max_tokens: 7,
    temperature: 0,
  });
  res.status(200).json({ result: completion.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}