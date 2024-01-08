@echo off
REM This script will install the necessary packages and run the development server

IF NOT EXIST "node_modules\next" (
    echo Installing Next.js...
    npm install next
)

IF NOT EXIST "node_modules" (
    echo Installing packages...
    npm install
) ELSE (
    echo Packages are already installed.
)

echo Running the development server...
npm run dev

echo Opening http://localhost:3000 in your default browser...
start http://localhost:3000

echo Press Ctrl+C to exit

pause