cd /D "%~dp0"
cd ./frontend
call npm install
call npm run build
cd ../backend
call mvn package