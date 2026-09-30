@echo off
set GIT=D:\软件下载\Git\cmd\git.exe
cd /d D:\down\jianke-portal
"%GIT%" status --short
"%GIT%" add -A
"%GIT%" -c user.name=xsm824394037 -c user.email=xsm824394037@gmail.com commit -m "chore: remove deployment scripts with sensitive tokens"
"%GIT%" push origin main
echo ALL_DONE_EXIT=%ERRORLEVEL%