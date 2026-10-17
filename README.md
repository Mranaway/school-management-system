# School Management System

This repository contains a starter school management system built with:

- Backend: Node.js + TypeScript + Express
- ORM: Prisma (SQLite by default)
- Frontend: React + Vite + TypeScript
- UI: Tailwind CSS
- Auth: JWT + bcrypt

Features included in this starter:
- Users (admin/teacher/student) authentication (JWT)
- Students CRUD
- Classes CRUD (assign students/teachers)
- Attendance and Grades models and basic REST endpoints
- Prisma schema + seed script with sample data
- Dockerfile and .devcontainer for VS Code
- CSV import/export endpoints (placeholder)

Quick start (development):

1. Clone the repo
   git clone https://github.com/Mranaway/school-management-system.git
2. Install dependencies for server and client
   cd school-management-system/server && npm install
   cd ../client && npm install
3. Setup env (see server/.env.example)
4. Run Prisma migrate and seed (server)
   npx prisma generate
   npx prisma db push
   NODE_ENV=development npx ts-node-dev --respawn --transpile-only src/seed.ts
5. Start server
   npm run dev (from server)
6. Start client
   npm run dev (from client)

You can also download a ZIP of the repository from GitHub: https://github.com/Mranaway/school-management-system/archive/refs/heads/main.zip
