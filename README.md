# CI/CD Pipeline Assignment

## Live Application

https://devops-ci-cd-1egp.onrender.com

---

## Project Description

This project demonstrates a complete CI/CD pipeline using Node.js, GitHub Actions, and Render.

---

## Continuous Integration (CI)

* Implemented using GitHub Actions
* Triggered on every push and pull request
* Steps:

  1. Install dependencies (`npm install`)
  2. Run automated tests (`jest`)
* If tests fail, deployment is blocked

---

## Continuous Deployment (CD)

* Deployed using Render
* Connected to GitHub repository
* Automatic deployment on successful push

---

## Deployment Strategy

**Strategy Used: Recreate (Simple Deployment)**

Explanation:

* Each deployment replaces the previous version completely
* Suitable for small applications and free-tier hosting
* Ensures a clean environment on every deploy

---

## Rollback Strategy

If a bug is found:

1. Go to GitHub repository
2. Revert to previous working commit
3. Push the change:

   ```
   git revert <commit-id>
   git push
   ```
4. Render will automatically redeploy the stable version

---


* GitHub Actions successful run
* Live application running

---

## Conclusion

This project successfully implements a CI/CD pipeline with automated testing and deployment, ensuring reliable and efficient software delivery.
