# JDIH (Jaringan Dokumentasi dan Informasi Hukum) Setup Guide

## Overview
This is a Next.js application for managing legal documents and information for the Indonesian Ministry of State Secretariat.

## Prerequisites

### 1. Node.js and npm
- Node.js v18 or higher
- npm v8 or higher

### 2. MySQL Database
- MySQL 8.0 or higher
- Create a database named `jdih`

### 3. File System
- Ensure you have a directory for storing legal documents (PDFs, images, etc.)

## Installation Steps

### 1. Clone and Navigate
```bash
cd src
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Copy the example environment file:
```bash
cp env.example .env
```

Edit `.env` file with your configuration:
```env
# Database Configuration
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_DATABASE=jdih
DB_PORT=3306

# Application Configuration
NODE_ENV=development
PORT=3000

# Next.js Configuration
NEXT_APP_DOMAIN=http://localhost:3000
NEXT_APP_JDIH_PATH=/absolute/path/to/your/jdih/files/

# Firebase Configuration (optional)
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id

# Security
TOKEN_SECRET=your_secret_token_here
```

### 4. Database Setup
1. Create MySQL database:
```sql
CREATE DATABASE jdih CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Import the database schema:
```bash
mysql -u root -p jdih < db_jdih.sql
```

**Note:** The database file is located in the `src/` directory and contains complete schema and sample data.

### 5. File Directory Setup
Create the following directory structure for file storage:
```
/path/to/your/jdih/files/
├── uploads/           # Legal documents
├── Putusanpengadilan/ # Court decisions
├── Monografihukum/    # Legal monographs
├── Artikelhukum/      # Legal articles
├── Galeri/           # Gallery images
├── e_book/           # E-books
├── Abstrak/          # Abstracts
├── source/           # Source files
└── filekontak/       # Contact form files
```

### 6. Run the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm run build
npm run start
```

#### Using Docker
```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build and run manually
docker build -t jdih-app .
docker run -p 3000:3000 jdih-app
```

## Application Structure

### Key Directories
- `/pages/api/` - API endpoints
- `/pages/` - Next.js pages
- `/components/` - React components
- `/public/` - Static assets
- `/lib/` - Utility libraries

### Main Features
1. **Legal Document Management** - Upload and manage legal documents
2. **Court Decisions** - Manage court decisions and rulings
3. **Legal Monographs** - Academic legal writings
4. **Legal Articles** - News and articles
5. **Gallery** - Image management
6. **E-books** - Digital book management
7. **Statistics** - Charts and analytics
8. **Contact Forms** - User inquiries

### API Endpoints
- `/api/hukumproduk/` - Legal products
- `/api/putusan/` - Court decisions
- `/api/monografi/` - Legal monographs
- `/api/artikelhukum/` - Legal articles
- `/api/galeri/` - Gallery
- `/api/ebook/` - E-books

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify MySQL is running
   - Check database credentials in `.env`
   - Ensure database `jdih` exists

2. **File Upload Issues**
   - Check `NEXT_APP_JDIH_PATH` in `.env`
   - Ensure directory permissions are correct
   - Verify directory structure exists

3. **Port Already in Use**
   - Change `PORT` in `.env` file
   - Or kill process using port 3000

4. **Build Errors**
   - Clear `.next` directory: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

### Development Tips

1. **Hot Reload**: The development server supports hot reloading
2. **API Testing**: Use tools like Postman to test API endpoints
3. **Database**: Use MySQL Workbench or phpMyAdmin for database management
4. **Logs**: Check console output for detailed error messages

## Production Deployment

### Environment Variables for Production
```env
NODE_ENV=production
NEXT_APP_DOMAIN=https://your-domain.com
NEXT_APP_JDIH_PATH=/var/www/jdih/files/
```

### Security Considerations
1. Change default database password
2. Use strong `TOKEN_SECRET`
3. Configure proper file permissions
4. Set up SSL/TLS certificates
5. Configure firewall rules

## Support

For issues and questions:
1. Check the console logs
2. Verify all prerequisites are met
3. Ensure proper file permissions
4. Review environment configuration 