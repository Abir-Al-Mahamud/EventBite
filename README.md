# README
# EventBite

By Abir-Al-Mahamud - Visit EventBite

Table of Contents

EventBite at a Glance

Application Architecture & Technologies Used

Frontend Overview

Backend Overview

Conclusion & Next Steps

# EventBite at a Glance
This app is an Event website, where you will find all of the events you may be interested in as well as the ability to create your own events.

![Eventbitept1](https://user-images.githubusercontent.com/75746588/141112522-1a185314-7797-4da7-aece-d4ab0db9f722.gif)

The signup page is one of the more complex aspects of this project and follows a similar layout to that of Eventbrite itself.

![Eventbitept2](https://user-images.githubusercontent.com/75746588/141112807-382aaf67-56d0-49bf-9ace-719ca21aa25d.gif)


The link to the live sight: https://eventbrite-a.herokuapp.com/

# Application Architecture & Technologies Used

Some of the technologies user were ```Ruby on Rails``` backend as well as a ```Postgresql``` database and for the frontend ```React/Redux``` was used. These technologies were very elegant yet powerful languages to use. 

The first and most significant feature was the Authentication feature which allows a user to create an account or login to an existing account. This feature involved both the backend authentication as well as the frontend authentication. So there most definitely a lot of moving pieces in this feature and therefore making the most challenging but rewarding aspect of building this website, this was involved very specific validations, and the difficult aspect was to keep the user logged in even after refreshing. However the solution was the bootstrap the user to the window. The second feature was the events page, the events are displayed not only on the homepage under widgets but they also have their own show page. Which presents more details of the actual event. This was rather challenging as the home page included tabs for the different categories, the solution to this involved a good amount of research on having the tabs updating when clicked on.

# Frontend Overview

React
At its very core, EventBite is a React application. It uses a small portion of the core React library besides passing a few props, but makes use of the technologies and libraries of the React sphere. Without the robust and well-documented React ecosystem, creating EventBite would have been a substantially more challenging project.

Redux
Redux and the react-redux library are used to manage application state and make fetch requests to the server for data.

All event information is fetched on page load and kept in the Redux store. While this expensive operation extends the initial load time, it also allows for a smoother experience after it loads up.


Redux also allows for a lot of flexibility if new features are to be implemented.

<img width="715" alt="Screen Shot 2021-11-10 at 7 37 53 AM" src="https://user-images.githubusercontent.com/75746588/141114391-9f8c18ce-fc95-4512-aa64-c20973e144a7.png">

<img width="893" alt="Screen Shot 2021-11-10 at 7 38 14 AM" src="https://user-images.githubusercontent.com/75746588/141114439-f8429c80-d1d4-45b6-846d-adda1e10296d.png">


# Backend Overview

Ruby on Rails 
Although syntactically a rather simple language to work around, the levels of complexity and flexibility is very handy. The layers in which the Ruby works with Rails allows for a lot of work to be done under the hood, making for a smooth and friendly user experience.

<img width="767" alt="Screen Shot 2021-11-10 at 7 35 31 AM" src="https://user-images.githubusercontent.com/75746588/141114110-b7105c5e-eced-4dfd-b41c-613f70c4968c.png">

# Conclusion & Next Steps

This was a very challenging yet rewarding project to build. This project feels like a son that I raised from the birth, it had its ups and downs and took some patience to say the least. But the satisfaction to see it grow to what it is now brings me joy. The creating of events is something that I am extremely familiar with and find myself doing very often so I found this project to be very useful for me in my own life.

The languages used in this were very versatile as well as very powerful languages, and it has definitely opened my eyes up to the potential of these languages. I will most definitely be working further with these languages when I can.

Next Steps: 

The next steps involve continuing to build projects using this stack as well as other stacks such as the MERN stack. Also I would like to continue furthering my knowledge in computer science in the future.

