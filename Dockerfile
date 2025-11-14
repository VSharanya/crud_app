FROM node:18

WORKDIR /app

# Copy backend files
COPY backend ./backend

# Install backend dependencies
RUN cd backend && npm install

# Copy frontend folder directly into /app/frontend
COPY frontend ./frontend

EXPOSE 3000

CMD ["node", "backend/server.js"]
