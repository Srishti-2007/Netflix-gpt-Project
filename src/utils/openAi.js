import OpenAI from "openai";
import { OpenAi_key } from "./constants";

const openai = new OpenAI({
  apiKey: OpenAi_key,
  dangerouslyAllowBrowser: true,
});

export default openai;