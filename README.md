Botson.ai Operations Dashboard & AI Chat Assistant

This project is a full-stack web application that enables business operators to interact with operational data through a natural language AI chat assistant. Built with React, Node.js, Express, MongoDB, and Mistral/OpenAI API.

Setup Instructions

Clone the repository:

git clone https://github.com/your-username/botson-dashboard.git
cd botson-dashboard

Install dependencies:

For backend:

cd backend
npm install

For frontend:

cd ../frontend
npm install

Environment Variables:

Create .env files for both frontend and backend.

Backend .env:

MONGODB_URI=<your_mongodb_uri>
OPENAI_API_KEY=<your_openai_key> (or MISTRAL_API_KEY=<your_mistral_key>)
PORT=3001

Start the development servers:

Backend:

cd backend
npm run dev

Frontend:

cd ../frontend
npm start
