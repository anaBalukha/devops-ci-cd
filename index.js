const express = require("express");
const app = express();

// MAIN PAGE
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>DevOps Project</title>
      <style>
        body {
          background-color: #ffe6f0;
          font-family: Arial, sans-serif;
          padding: 40px;
          line-height: 1.6;
        }
        h1 {
          color: #cc0066;
        }
        h2 {
          margin-top: 30px;
        }
        a {
          display: inline-block;
          margin-top: 40px;
          font-size: 20px;
          color: white;
          background-color: #cc0066;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 8px;
        }
      </style>
    </head>
    <body>

      <h1>
        Hello, I'm Anna Balukhashvili, 3rd year student of KIU (Kutaisi International University).
        Right now I will present what I learned so far in DevOps.
      </h1>

      <h2>What is DevOps?</h2>
      <p>
        DevOps is a combination of development and operations. It is a methodology that helps developers and IT operations teams work together efficiently. 
        The main goal of DevOps is to automate processes, improve software quality, and deliver applications faster and more reliably.
      </p>

      <h2>What is CI (Continuous Integration)?</h2>
      <p>
        Continuous Integration is the process where developers frequently push code to a shared repository. Each time code is pushed, 
        automated tests are run to ensure that the application still works correctly. This helps detect errors early.
      </p>

      <h2>What is CD (Continuous Deployment)?</h2>
      <p>
        Continuous Deployment means that after code passes all tests, it is automatically deployed to production without manual intervention. 
        This ensures fast and consistent delivery of updates.
      </p>

      <h2>What is Deployment?</h2>
      <p>
        Deployment is the process of making an application available to users. It involves transferring code from development environment 
        to a live server so that users can access it through a browser.
      </p>

      <h2>Types of Deployment Strategies</h2>
      <p>
        There are several deployment strategies such as Recreate, Rolling Update, Blue-Green Deployment, and Canary Deployment.
        In this project, I used the Recreate strategy, where the old version is stopped and replaced by a new version.
      </p>

      <a href="/homework">HOMEWORK 1</a>

    </body>
    </html>
  `);
});

// HOMEWORK PAGE
app.get("/homework", (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Homework Explanation</title>
      <style>
        body {
          background-color: #fff0f5;
          font-family: Arial;
          padding: 40px;
        }
        h1 {
          color: #cc0066;
        }
      </style>
    </head>
    <body>

      <h1>Homework 1 Explanation</h1>

      <p>
        First, I created a simple Node.js application using Express because it is easy to build a server with it.
      </p>

      <p>
        Then, I initialized a Git repository and uploaded my project to GitHub because version control is important for collaboration and automation.
      </p>

      <p>
        After that, I created a test using Jest to ensure that my application works correctly. I did this because CI requires automated testing.
      </p>

      <p>
        Next, I configured GitHub Actions to automatically run tests whenever I push code. This ensures that broken code will not be accepted.
      </p>

      <p>
        Then, I connected my repository to Render to deploy my application. I chose Render because it provides free hosting and integrates with GitHub.
      </p>

      <p>
        Finally, I tested the full CI/CD pipeline by pushing code, observing test execution, and verifying that deployment works automatically.
      </p>

    </body>
    </html>
  `);
});

module.exports = app;
