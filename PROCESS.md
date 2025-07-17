Architecture & Key Design Choices

Frontend: React + Axios

Backend: Node.js + Express

Database: MongoDB (with Mongoose ODM)

AI: Initially OpenAI, then Mistral for cost-free integration

Modular structure:

backend/routes/assistant.js handles AI → Mongo translation and execution.

frontend/components/ChatBox.jsx sends user prompts to backend and displays results.

AI Prompts & Iterations

Asked the AI to return raw MongoDB commands .

{
  "operation": "aggregate",
  "pipeline": [...]
}

or

{
  "operation": "find",
  "filter": { ... },
  "projection": { ... },
  "limit": 10
}

Final Prompt Highlights:


Use readable field names from the Log schema.

Use of AI Tools:

  ChatGPT:
  
    Brainstormed safe execution architecture.
    
    Refined MongoDB query schemas.
  
  Mistral API:
  
    Switched to Mistral for cost reasons.
    
    Handled formatting and prompt adaptation to match its expected style.
    
