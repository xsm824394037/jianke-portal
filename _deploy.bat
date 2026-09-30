@echo off
set GIT=D:\软件下载\Git\cmd\git.exe
cd /d D:\down\jianke-portal
"%GIT%" add -A
"%GIT%" -c user.name=xsm824394037 -c user.email=xsm824394037@gmail.com commit -m "init: 建科洁净供应链平台静态网站"
echo COMMIT_EXIT=%ERRORLEVEL%