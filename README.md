## Laravel ReactJs

A Simple Todo App that allows a user to perform basic CRUD operations to a mysql database. Laravel on the back-end and React.js for the front-end.

-   User able to create a new task
-   User able to edit an existing task
-   User able to archive tasks
-   User able to permanently delete tasks
-   Two separate tabs, one containing current tasks and the other archived tasks
-   Ability to create a task and set a date for completion
-   Ability to search for a task based on its set completion date
-   Structured code as if its for a production setting
-   Laravel and React.js is preferred but you may use other languages.
-   Test-cases and test data ready

## Installation

### Laravel setup

`lavavel new laravel-react`

`composer require laravel/ui`

`php artisan ui bootstrip`

`php artisan ui react`

### Create database and test data

`create a new file named 'database.sqlite' in /database folder`

`php artisan make:migration`

`php artisan tinker`

`factory(App\Task::class, 30)->create();`

### Start Local Server

`php artisan serve`

### Reactjs Setup

`npm install`

`npm run watch`
