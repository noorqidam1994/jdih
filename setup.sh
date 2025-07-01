#!/bin/bash

echo "🚀 JDIH Application Setup Script"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"

# Check if MySQL is installed
if ! command -v mysql &> /dev/null; then
    echo "📦 Installing MySQL..."
    brew install mysql
    brew services start mysql
    echo "✅ MySQL installed and started"
else
    echo "✅ MySQL is already installed"
fi

# Navigate to src directory
cd src

# Install dependencies
echo "📦 Installing npm dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp env.example .env
    echo "✅ .env file created. Please edit it with your database credentials."
else
    echo "✅ .env file already exists"
fi

# Create database
echo "🗄️  Setting up database..."
mysql -u root -e "CREATE DATABASE IF NOT EXISTS jdih CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Import database schema if db_jdih.sql exists
if [ -f src/db_jdih.sql ]; then
    echo "📥 Importing database schema..."
    mysql -u root jdih < src/db_jdih.sql
    echo "✅ Database schema imported"
else
    echo "⚠️  src/db_jdih.sql not found. Please import the database schema manually."
fi

# Create file directories
echo "📁 Creating file directories..."
mkdir -p /tmp/jdih-files/{uploads,Putusanpengadilan,Monografihukum,Artikelhukum,Galeri,e_book,Abstrak,source,filekontak}

echo "✅ Setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Edit src/.env file with your database password"
echo "2. Update NEXT_APP_JDIH_PATH in .env to point to your file directory"
echo "3. Run 'cd src && npm run dev' to start the development server"
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "📚 For detailed instructions, see SETUP.md" 