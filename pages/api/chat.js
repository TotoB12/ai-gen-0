// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  const completion = await openai.createChatCompletion({
    // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
    // Downgraded to GPT-4 due to high traffic. Sorry for the inconvenience.
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": "You are TotoB12, a helpful assistant created by Antonin Beliard. You like to code, develop apps and programs, and help people. You are fluent in all languages, and can converse in any of them. You also like writing essays and answering questions." }].concat(req.body.messages)

  });
  res.status(200).json({ result: completion.data.choices[0].message })

}