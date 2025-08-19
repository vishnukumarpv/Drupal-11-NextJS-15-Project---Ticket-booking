# Football Ticket Booking System 🎟️⚽

A **sample project** built with **Drupal 11 (backend)** and **Next.js 15 (frontend)** to demonstrate a decoupled architecture for learning purposes.  
The project simulates a **Football Ticket Booking System**, including a custom entity, RESTful API endpoints, and a React-based UI.

---

## 🚀 Tech Stack

- **Backend (Drupal 11)**
  - Custom entity: `Booking` (stores ticket booking data)
  - Custom RESTful API (Drupal normalizers & routes)
  - JSON:API & REST module integrations
  - Composer-based setup (`web/` as docroot)

- **Frontend (Next.js 15)**
  - React 19 + App Router
  - Tailwind CSS for styling
  - Redux Toolkit for state management
  - Fetches booking/match data via API from Drupal backend

---

## 📂 Project Structure

```
project-root/
│
├── web/                 # Drupal 11 docroot
│   ├── core/            # Drupal core (ignored in git)
│   ├── modules/
│   │   ├── contrib/     # Contrib modules
│   │   └── custom/      # Custom modules (Booking, API, etc.)
│   └── themes/          # Custom & contrib themes
│
├── nextjs-app/          # Next.js 15 frontend
│   ├── app/             # App Router structure
│   ├── components/      # React components
│   ├── store/           # Redux store
│   └── styles/          # Tailwind CSS setup
│
├── composer.json        # Drupal dependencies
├── package.json         # Next.js dependencies
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repo


### 2. Backend (Drupal 11)
```bash
composer install
ddev start   # or Lando/Docker if preferred
ddev composer install
ddev drush site:install
```

- Enable required modules:
  ```bash
  ddev drush en jsonapi rest booking
  ```
- Import config & set permissions if provided.

### 3. Frontend (Next.js 15)
```bash
cd nextjs-app
npm install
npm run dev
```

- The app will start on [http://localhost:3000](http://localhost:3000).
- Make sure the Drupal backend API is reachable (adjust `.env`).

---

## 🎯 Learning Goals

This project is created as a **learning exercise** to explore:

- Building **custom entities** in Drupal 11  
- Exposing entities via **REST & JSON:API**  
- Normalizing Drupal entities for frontend use  
- Building a **Next.js 15 frontend** with state management  
- Integrating Tailwind CSS for UI design  
- Handling API requests & rendering dynamic data  

---

## 📝 Notes

- This project is **not production ready**.  
- Intended for **educational purposes only**.  
- Contributions, issues, and suggestions are welcome!  

---

## 📜 License

MIT License – free to use and modify for learning.