🚀 ProSync – Client Project Showcase Website
ProSync is a modern, responsive, animated portfolio/project showcase website for a client-based organization or team. It supports dynamic project uploads via an admin panel, image hosting using Cloudinary, and is built using the MERN Stack.

🟢 Live Site: https://prosync-website-1.onrender.com
🟣 Backend API: https://prosync-website.onrender.com

🛠️ Tech Stack
🔹 Frontend
React.js

Tailwind CSS

React Router DOM

Framer Motion (animations)

Redux Toolkit (admin state)

React Icons

Toastify (notifications)

GSAP

HashLink (smooth scrolling)

🔹 Backend
Node.js + Express.js

MongoDB + Mongoose

Multer + Cloudinary (via multer-storage-cloudinary)

dotenv + CORS

🔐 Admin Panel
✨ Used to upload new projects with image, name, and description.

Credentials
Username: Tanisha

Password: Tanisha@0611

🔒 The admin panel is protected using localStorage and auto-logout based on a timestamp expiration.

If a non-admin tries to access /addproject, they will be redirected to /admin.

🧩 Core Features
🖼️ Upload and showcase projects (name + description + image)

💾 Images stored securely on Cloudinary

🔒 Admin-protected upload page

🎨 Animated, responsive UI

⚙️ Dynamic project rendering on frontend

🔁 Smooth page scroll with HashLink

🌐 Folder Structure
bash
Copy
Edit
prosync-website/
├── frontend/       # React frontend
│   └── pages/
│   └── components/
├── backend/        # Node.js + Express API
│   └── routes/
│   └── models/
│   └── middleware/
│   └── server.js
💻 Run Locally
🔹 1. Clone the Project
bash
Copy
Edit
git clone https://github.com/your-username/prosync-website.git
cd prosync-website
🔹 2. Setup Backend
bash
Copy
Edit
cd backend
npm install
Create .env file
env
Copy
Edit
PORT=8000
ATLASDB_URL=your_mongodb_url
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
bash
Copy
Edit
npm run dev
➡️ Runs at: http://localhost:8000

🔹 3. Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
➡️ Runs at: http://localhost:3000

🔗 Deployed URLs
Module	Link
🌐 Frontend	https://prosync-client.onrender.com
⚙️ Backend API	https://prosync-api.onrender.com

📸 Example Admin Workflow
Go to /admin

Login using:

Username: Tanisha

Password: Tanisha@0611

Access /addproject form

Upload a new project with:

Image

Project Name

Project Description

See the new project auto-rendered on homepage.

📌 Notes
All uploaded images are stored in Cloudinary under the folder ProSyncClients

Backend is deployed on Render

Clean, elegant responsive UI built using Tailwind CSS

Admin session automatically expires after time limit
