# ---------- Stage 1: Build using npm ----------
FROM node:18 AS builder

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Build the app (Vite build → dist folder)
RUN npm run build


# ---------- Stage 2: Serve using Nginx ----------
FROM nginx:alpine

# Copy build output to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]