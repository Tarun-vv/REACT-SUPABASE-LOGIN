# Tech stacks : React Query, React Router, React Hook Form, Supabase

## STEPS:

1. Make login, signin and main page files
2. Install libraries
3. Create routes
4. Set up react query -> use v4 or @4
5. set up of supabase

## APPLICATION

## LOG IN AND OUT

1. create login email and password states
2. create a user in supabase: go to authentication tab // go to providers and click on email > and for development purpose turn off verification under email -> and hit save
3. in users tab // add user -> give email: test@emaple.com and set password: test@123 and create user

### connecting supabase to react app -> DEFAULT FOR TEST LOGIN IN ALL APPS

1. go to API DOCS -> user management -> copy code of Log in user with email and password
2. make apiAuth.js service and make the function -> check code
3. for demo set state of email and password in Login.js file to 'test@emaple.com' and 'test@123'
4. make useLogin.js functionality in react query
5. implement in Login.js
6. should go to main page on login

### protecting routes

1, make ProtectedRoute component and wrap AppLayout under it routes under that components 2. implement getCurrentUser function in apiAuth.js 3. create useUser hook in react query 4. add functionality in ProtectedRoute // watch bug lecture just to make sure 5. for optimization -> add following to useLogin marked with #fff

### log out

1. make Log out button and add it to main page
2. add logic to apiAuth.js
3. make react query functionality
4. add to button

## SIGNING IN AND OUT

1. add conditions to signup form using hook form
2. add function to apiAuth
3. make react query
4. add to sign up form
5. in supabase -> go to URL CONFIGURATION: set the 1st link to main-page URL
   redirect URL to normal URL without aything like 'localhost:3000'
6. set back confirm email and ur done

### updating signed in data

1. make updateData.js and updatePassword.js files in signup folder
2. set up avatar bucket in supabase and the policies
3. make react query stuff called useUpdate.js
4. make the update user data component and the header menu
5. no need to password