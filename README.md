# Dutch Speech App

This project provides a minimal mobile-first Dutch language learning app focused on spoken fluency and pronunciation. It contains a React Native frontend and an Express backend. Speech recognition and feedback are mocked to keep the example simple.

## Project Structure

```
frontend/       React Native app
  components/   Reusable components
  screens/      App screens
  assets/       Static assets (audio)
  App.js        Entry point
backend/        Node.js backend
  routes/       API routes
  services/     Speech processing services
  server.js     Express server
models/         Example phrases and audio references
utils/          Utility helpers
```

## Setup

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Run the app with Expo:
   ```bash
   npm start
   ```

### Backend

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

The frontend expects the backend to run on port `3001`. Update the URL in the frontend if needed.

## Notes

- Replace the mock implementation in `backend/services/speechService.js` with real API calls to Google Speech API or OpenAI Whisper.
- The project uses placeholder audio files and simple UI components. Expand as needed.
