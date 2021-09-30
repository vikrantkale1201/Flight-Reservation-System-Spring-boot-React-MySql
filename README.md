# Flight-Reservation-System
Technologies : Spring Boot, rest API, JPA, React JS, MySQL

E-DAC Project (may 2021, IACSD PUNE)

User interface developed for Flight Reservation System using React.js Library
Flight Reservation System is an Flight reservation/booking system.
The backend API is built in Spring boot

# Features
- Attractive and responsive UI.
- User can register and login.
- User can search for flights, book the flight, add passengers, make payement and generate tickets.
- A super user - Admin will be responsible for manipulating flights.
- Interacts with API using Fetch API and Axios library
- Additional feature to check weather for the present day and to email ticket
- User can also check booking history
- React-Router-DOM used for routing

The service will make calls to our backend API (BookMyFlight)
Emailjs ued for sending ticket details to user
Weather API used to get today's weather
Images are for personal use only and a big credit to Flaticons

## How to Use/Control?

1. User can search for flights based on source, destination and date without logging in.
2. User can be directed to login/register using options from navbar
3. To book a flight user has to login.
4. For booking user has to enter passengers information.
5. User enter payment details for ticket generation.
6. User can either print the ticket and mail the ticket.

## How To Install.

1. Clone this project
2. Start by installing npm if you don't have it already.
3. Navigate to Project Directory by :
```
cd BookMyFlight_UI
```
4. run following commands :
```
npm install 
npm start or react-scripts start
```

## Directory Structure

`/src` - all code files <br>
`/src/components` - all react components <br>
`/src/services` - service classes <br>
`/src/assests` - css files, images and logos <br>



### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
