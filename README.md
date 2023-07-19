## How to run ##
You are here => You just download the file.

- In the app folder, you can see the app code (test_app_1.html).

For running this code and see the  page in the browser we need the running server:
Start server:
`npx start`

You will see message:
> test-project-cypress@1.0.0 start
> tiny-server
============= start ============

After that, you cannot use this terminal anymore (it already runs a server), but we still need to make Cypress work. 

Open git bash, go to the folder with downloaded project (use 'cd' command,you need to go to test app folder) and start Cypress: 
`npx cypress open`

The Cypress will open in the new window

- File - cypress/integration/test_app_1.spec includes test scripts
- File - cypress/support/testApp1.js includes selectors