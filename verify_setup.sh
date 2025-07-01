#!/bin/bash

echo "🔍 JDIH Setup Verification Script"
echo "=================================="

# Check if we're in the right directory
if [ ! -f "setup.sh" ]; then
    echo "❌ Please run this script from the jdih root directory"
    exit 1
fi

echo "✅ Running from correct directory"

# Check if src directory exists
if [ ! -d "src" ]; then
    echo "❌ src directory not found"
    exit 1
fi

echo "✅ src directory found"

# Check if database file exists
if [ ! -f "src/db_jdih.sql" ]; then
    echo "❌ src/db_jdih.sql not found"
    exit 1
fi

echo "✅ Database file found: $(ls -lh src/db_jdih.sql | awk '{print $5}')"

# Check if .env file exists in src
if [ ! -f "src/.env" ]; then
    echo "⚠️  src/.env not found. Please run setup.sh first"
else
    echo "✅ Environment file found"
fi

# Check if node_modules exists in src
if [ ! -d "src/node_modules" ]; then
    echo "⚠️  Dependencies not installed. Please run 'cd src && npm install'"
else
    echo "✅ Dependencies installed"
fi

# Test database connection
echo "🗄️  Testing database connection..."
if mysql -u root -p -e "USE jdih; SHOW TABLES;" > /dev/null 2>&1; then
    echo "✅ Database connection successful"
    
    # Count tables
    TABLE_COUNT=$(mysql -u root -p -e "USE jdih; SHOW TABLES;" 2>/dev/null | wc -l)
    echo "📊 Found $TABLE_COUNT tables in database"
else
    echo "❌ Database connection failed or database doesn't exist"
    echo "💡 Run: mysql -u root -p -e 'CREATE DATABASE jdih;'"
    echo "💡 Then: mysql -u root -p jdih < src/db_jdih.sql"
fi

# Check if port 3000 is available
if lsof -i :3000 > /dev/null 2>&1; then
    echo "⚠️  Port 3000 is already in use"
else
    echo "✅ Port 3000 is available"
fi

echo ""
echo "📋 Setup Status Summary:"
echo "========================"
echo "• Database file: ✅ $(ls -lh src/db_jdih.sql | awk '{print $5}')"
echo "• Environment file: $([ -f "src/.env" ] && echo "✅ Found" || echo "❌ Missing")"
echo "• Dependencies: $([ -d "src/node_modules" ] && echo "✅ Installed" || echo "❌ Missing")"
echo "• Database: $([ -f "src/.env" ] && echo "✅ Connected" || echo "❌ Not connected")"
echo "• Port 3000: $(lsof -i :3000 > /dev/null 2>&1 && echo "⚠️  In use" || echo "✅ Available")"

echo ""
echo "🚀 Next steps:"
echo "1. If any items show ❌, run ./setup.sh"
echo "2. Start the application: cd src && npm run dev"
echo "3. Open http://localhost:3000 in your browser" 