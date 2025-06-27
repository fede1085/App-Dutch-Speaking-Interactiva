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




## 🚀 Iniciar Proyecto – App Dutch Speech

Proyecto dividido en dos partes:

- `backend/`: servidor Express en Node.js
- `frontend/`: app React Native con Expo

---

### 🧱 Requisitos

- Node.js instalado
- Expo CLI (`npm install -g expo-cli`)
- Yarn o npm
- Tener Git y Visual Studio Code

---

### ▶️ Iniciar Backend

```bash
cd backend
npm install
npm run dev


Corre en http://localhost:3001
Usa Express para manejar rutas:
GET / (test)
POST /speech (procesar audio)

cd frontend
npm install
npx expo start

Abre QR para probar en app Expo Go (en tu móvil)
Corre en http://localhost:19000
Usa React Native con estructura de carpetas para componentes



🧠 Notas
Siempre iniciar dos terminales: una para backend, otra para frontend.
Usar npm run dev (o nodemon) para autorecarga en el backend.
App Expo puede abrir en navegador, Android o iOS.




-------



### 🛠️ Agregar cosas nuevas

#### ➕ Endpoint nuevo (Backend)

```bash
# dentro de backend/
routes/
  └── nuevo.js  # crear archivo de ruta

# en app.js
const nuevo = require('./routes/nuevo');
app.use('/nuevo', nuevo);



➕ Componente nuevo (Frontend)
bash
Copy
Edit
# dentro de frontend/
components/
  └── MiComponente.js  # crear componente

# en pantalla (ej: Home.js)
import MiComponente from '../components/MiComponente';



💾 Guardar cambios (Git)
bash
Copy
Edit
git add .
git commit -m "Tu mensaje"
git push