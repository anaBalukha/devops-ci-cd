# about project
This project demonstrates a complete CI/CD (Continuous Integration and Continuous Deployment) pipeline using a simple Node.js application.
The focus of this project is not on application complexity, but on automating the software delivery lifecycle — from code commit to production deployment — while ensuring quality through automated testing.

This project successfully demonstrates a complete DevOps pipeline where: code is automatically tested, only valid code is deployed, deployment is fully automated and failures are prevented early

The system ensures reliability, automation, and maintainability which are key principles of modern software engineering.

# Live Application:
Access the deployed application here:

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
The Recreate strategy replaces the current running version with a new version:
             1.old version of the application is stopped
             2.new version is deployed
             3.new version starts running

i choose this strategy because it's: suitable for small applications, supported by free-tier hosting platforms and is simple and effective for this project


# Rollback Protocol:
In case a bug is discovered in production, the application can be reverted to a previous stable version.

# Steps to Rollback:
  1.go to GitHub repository
  2.open Commits history
  3.select the last stable commit
  4.click Revert
  5.push the reverted commit by git push
  6.render automatically redeploys the previous working version

#  Testing
   Framework: Jest
   Test Example: Verifies that the main route (/) returns expected response
   Run tests locally: npm test