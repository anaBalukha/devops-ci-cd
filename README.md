# About Project

This project demonstrates a complete CI/CD (Continuous Integration and Continuous Deployment) pipeline built using a simple Node.js application.
for this project instead of focusing on application complexity, i demonstrate how modern DevOps practices automate the software delivery lifecycle from development to production. so the focus of this project is not on application complexity, but on automating the software delivery lifecycle — from code commit to production deployment — while ensuring quality through automated testing.
This project successfully demonstrates a complete DevOps pipeline where: code is automatically tested, only valid code is deployed, deployment is fully automated and failures are prevented early. every code change goes through an automated pipeline that ensures reliability and prevents broken code from reaching production.

The workflow is structured so that:
- code is pushed to GitHub repository
- automated tests are triggered using GitHub Actions
- only if tests pass, the deployment process continues
- the application is automatically deployed to Render

This setup ensures that every update is validated before going live, improving stability, automation, and maintainability — which are core principles of DevOps engineering.

# Live Application:
Access the deployed application here:

# application screenshot:
![Live App](screenshots/Screenshot%202026-04-28%20181436.png)

https://devops-ci-cd-1egp.onrender.com

# Continuous Integration (CI)
Every time code is pushed to the repository:
Dependencies are installed
Tests are executed automatically

i implemented it using GitHub Actions and Workflow file is located at:
.github/workflows/main.yml

# Pipeline Steps:
 1.Checkout repository code
 2.Install Node.js environment
 3.Run: npm install
 4.Execute tests: npx jest

 If tests fail, the pipeline:
   1.Stops immediately
   2.Prevents deployment
 If tests pass:
   1.Pipeline continues
   2.Deployment is triggered


# Continuous Deployment (CD)
my application is deployed using render

render is connected to the GitHub repository, every push to the main branch triggers deployment,
deployment occurs only after code is successfully pushed (after CI passes locally)
1.push code to GitHub
2.CI pipeline runs tests
    If tests pass:
          3.render automatically deploys the latest version
4.application becomes live


# Deployment Strategy Used: Recreate
In this project, I used the Recreate deployment strategy, which works by completely replacing the old version of the application with a new version whenever a new deployment is triggered.

# How it works in my project:
1. I push new code changes to the GitHub repository
2. GitHub Actions automatically runs the CI pipeline
3. The pipeline installs dependencies and executes all tests using Jest
4. If all tests pass successfully, the deployment process continues
5. Render receives the updated code from the GitHub repository
6. The current running version of the application is stopped
7. The new version is deployed and started on Render

# Why I chose this strategy:

I selected the Recreate strategy because:it is simple and suitable for small applications like this project and it is fully supported by free-tier hosting platforms such as Render also it ensures that only one version of the application runs at a time and it reduces complexity since no traffic splitting or multiple environments are required

Although this is a simplified deployment model, it still reflects the core idea of controlled production updates in DevOps systems.


# Rollback Strategy
In case a bug is discovered in production, the application can be reverted to a previous stable version.

# Rollback Steps:
1. Go to the GitHub repository
2. Open the "Commits" history
3. Identify the last stable commit (before the bug was introduced)
4. Click on that commit
5. Use the "Revert" option to create a rollback commit
6. Push the revert commit to the main branch using:
   git push origin main
7. Render automatically detects the new commit and redeploys the previous stable version

This process ensures that the application can be quickly restored without manual server intervention.

#  Testing
   Framework: Jest
   Test Example: Verifies that the main route (/) returns expected response
   Run tests locally: npm test

# GitHub Actions Pipeline:
![CI Pipeline](screenshots/Screenshot%202026-04-28%20181615.png)
![CI Pipeline](screenshots/Screenshot%202026-04-24%20165156.png)
