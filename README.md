# InstaMinutes Assignment

# Instructions for run the Assignment 

1. Download VS Code from https://code.visualstudio.com/download
2. Install NodeJs from https://nodejs.org/en/download/
3. write on terminal  "git clone https://github.com/RahulGoyal03/HappyCredit.git"
4. npm install
5. After that write npm start 


# Prerequisites 
* VS Code


# Installation 
* Clone the repository
    ``` 
    git clone https://github.com/RahulGoyal03/InstaMinutes.git
    ```

# Tech Stack

* JAVASCRIPT
* NodeJS

# Approch To Solve -:
1. Install Nodejs and download the node-scheduler.
2. Make a items file, which have list of events in a format of 
   {
    text: "textOne",
    dateTime: "2022-03-18 06:10:40.000",
   }
3. Iterate through the dat with the help of forEach loop and pass each element/event to the next function i.e scheduleItem.
4. In the scheduleItem function I have scheduled the job for the given item using scheduleJob function of node-scheduler.
5. Then I am call the delayTime function for delay the process for a particular time (i.e text.length * 1000) with the help of SetTimeout.
6. After SetTimeout expires then the next function call is reverseString, which will reverse the string and return back to where it is called.
7. Now I console the return output from the function reverseString.
8. And at last I cancel my node-scheduler.


# Challenge-:
I faced one problem that was how to schedule a job for a given date and time. For that I search a lot and after that i found the node-schedule package which is very useful for scheduling a job at a given date.

# Learning-:
* Learn new npm package node-scheduler.
* How to schedule a job or event for a given time and delay it with the help of SetTimout.

# Final Output -:
![Screenshot (145)](https://user-images.githubusercontent.com/91531231/159049420-940cab82-b2d2-4e7c-87d8-f7e96606548a.png)


