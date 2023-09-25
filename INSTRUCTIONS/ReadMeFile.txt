Good Day, Here are the instruction to run my output. Please Inform me if its Unclear. 

Since the required version is Laravel 8, I installed a Xampp version that would be able to run Laravel 8.
Here's the Xampp Version Downlaod Link For reference: https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/7.3.0/xampp-win32-7.3.0-0-VC15-installer.exe/download


For the Back End (Laravel)
Step 1. Install Xammp and Run it.
Step 2. Type the URL localhost 8080(could vary depending on your default config)
Step 3. Click the phpMyAdmin in the tab(for me, the link looks like this -> http://localhost:8080/phpmyadmin/)
Step 4. To simulate my output, Creating a database called "laravel_react_app" is a neccesary 
	otherwise you would kindly need to tweak the config and .env file
Step 5. Go to the root directory of the project(for me it looks like this-> C:\Users\Jairo\Desktop\Test\Laravel-React_userMaintenance>)
Step 6: run the following command as follows
	First: composer install
	Second: php artisan migrate
	Third: php artisan serve


For the Front End(React)
Step 1. Go to the root directory of the project and locate the react folder(for me it looks like this -> C:\Users\Jairo\Desktop\Test\Laravel-React_userMaintenance\react>)
Step 2: run the following command as follows
	First: npm install
	Second: npm run dev


Typing the URL localhost:3000 
Should show my output.

If something is unclear Please refer to the Screenshoots I sent via Zip. credentials are included(.env)
I also sent the Screenshot of my output for initial checking.
Thank you and Hoping for you kind response. 
Have a Good Day!



<!-- This is my Laravel .env -->
<!-- 
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:l+EJgKcumHiv2BsjPmXn0zMkRnMiop627OHlhOhFJAI=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_react_app
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

 -->
