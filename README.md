# 🚀 ProSync – Client Project Showcase Website

ProSync is a modern, responsive, animated portfolio/project showcase website built for client-based organizations or teams. It allows dynamic project uploads via an admin panel, image hosting using Cloudinary, and seamless performance using the MERN Stack.

---

## 🧠 Core Features

- 🖼️ Upload and showcase projects (name, description, image)
- 💾 Images stored securely on Cloudinary
- 🔒 Admin-protected upload panel
- 🎨 Animated, responsive UI with Framer Motion and GSAP
- 🔁 Smooth scrolling using HashLink
- ⚙️ Dynamic project rendering on frontend

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js
- Tailwind CSS
- React Router DOM (with `HashRouter`)
- Redux Toolkit (admin state)
- Framer Motion
- Toastify
- React Icons
- GSAP
- React Router HashLink

### 🔹 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Multer + multer-storage-cloudinary
- Cloudinary (for image uploads)
- dotenv + CORS

---

## 🔗 Deployed URLs

- 🌐 **Live Site**: https://prosync-website-1.onrender.com
- ⚙️ **Backend API**: https://prosync-website.onrender.com

---

## 🔐 Admin Panel Access

The website includes a protected admin panel for managing project uploads. Admins can log in and add new projects (with name, description, and image), which are immediately reflected on the homepage.

📍 **Access Admin Panel**  
To open the admin panel, use this URL format:




⚠️ **Important**:  
This project uses `HashRouter`. You **must include the `#` symbol** in the route (`/#/admin`).  
Direct routes like `/admin` (without `#`) will not work on deployed hosting like Render.

🧪 **Test Admin Credentials**

Password: Tanisha@0611


✨ **Admin Panel Features**

- 🔐 Secure login system using `localStorage`
- ⏱️ Auto-logout after session timeout
- 📤 Upload new projects (name + description + image)
- 📂 Images stored in Cloudinary under `ProSyncClients`
- 👁️ View uploaded projects instantly on homepage

🧭 **Admin Routes** (Must be accessed using `#`)
- `/#/admin` → Login page
- `/#/add-projects` → Upload new project
- `/#/add-clients` → Add clients
- `/#/view-contact-data` → View contact form submissions
- `/#/EnterPage` → Protected admin dashboard

🚫 Unauthorized users are auto-redirected to `/#/admin` if trying to access protected pages.

---

## 📸 Example Admin Workflow

1. Go to: (https://prosync-website-1.onrender.com/#/admin)
2. Login with provided credentials
3. Navigate to `/#/add-projects`
4. Fill the form with:
   - Project Image
   - Name
   - Description
5. Submit → See the new project appear on homepage instantly!

---

## 🌐 Folder Structure

```bash
prosync-website/
├── frontend/          # React frontend
│   ├── pages/
│   └── components/
├── backend/           # Node.js + Express API
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
