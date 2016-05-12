---
layout: post
title:  "Setup Continuous Deployment with Codeship and Modulus for your Meteor Application"
date:   2016-05-11 12:00:00
categories: meteor modulus codeship
---

In this tutorial you are going to learn how to setup a continuous deployment pipeline using Codeship and Modulus. Basically Codeship will listen to all your commits on a remote repository at the branch of your choice and trigger a deployment script that its going to install your project dependencies and deploy it to Modulus. Follow the next steps and your project will be ready in a couple of minutes.

## Setup your accounts
If you don't have an account on CodeShip or Modulus, just access the urls below
and register your account.

- <a href="https://my.modulus.io/register/" target="_blank">Create your account on Modulus</a>
- <a href="https://codeship.com/registrations/new" target="_blank">Create your account on Codeship</a>

## Create a project on modulus
Access your modulus account and then select **Create new project**. Give your project a name and the Meteor runtime envorinment.

![Modulus Runtime Environments]({{ site.url }}/assets/2016-05-11/modulus-create-project.png)

You can configure the **amount of memory allocated per servo** and the **provider and region** in the next sections of the form. I will choose **512MB** and **aws-us-east-1a** respectively. Make yourself confortable to setup the machine as you want.

## Create a project on Codeship
Access your Codeship profile, and in the top navigation menu, click on  **Select Project...** and then **Create a new project**. You
will need to specify your source control manager (Github or Bitbucket) and add your project url. You can skip the third step
by clicking in **Save and go to dashboard** on the bottom because we will not setup a test pipeline in this tutorial.

Now on your project dashboard click on **Project Settings** on the top right menu and select **Deployment**. We need to specify which branch will trigger the deployment process on every push. In this case, I will choose **master** but you can choose the branch you want. When you're done click on **Save pipeline settings**.

![Modulus Deployment Settings]({{ site.url }}/assets/2016-05-11/modulus-deployment-settings.png)

Let's add the first deployment pipeline. This pipeline will be responsible for downloading the meteor
distribution and install all your project dependencies. For this script, we will select the **Custom Script** option.

![Modulus Deployment Custom Script]({{ site.url }}/assets/2016-05-11/modulus-deployment-custom-script.png)

Now add the following script:

```bash
nvm install 0.10.28
nvm use 0.10.28
curl -s https://install.meteor.com/ 2>&1 | sed -e "s/type sudo >\/dev\/null 2>&1/\ false /g" | sh
export PATH=$PATH:~/.meteor/
meteor --version
meteor npm install
```

The next pipeline will be responsible for deploy on Modulus. For this one, select the **Modulus** option.

![Modulus Deployment Custom Script]({{ site.url }}/assets/2016-05-11/modulus-deployment-modulus-script.png)

Now we will need a token for Codeship be able to access our Modulus account. To get this token, we will need to install the [modulus-cli](https://github.com/onmodulus/modulus-cli).

```bash
npm install -g modulus
```

Now, authenticate with your credentials:

```bash
modulus login
# If you created an account using GitHub, you can use --github to log in with your github credentials.
```

Create a new API Token:

```bash
modulus token create
```

Copy the generated token and paste on the **API Token** field. Now at **Project Name** enter the same name of your Modulus project and then click on **Create Deployment** button. 

## We're almost done!
Last step is to setup the environment variables on Modulus. Jump to your Modulus account and access the administration section of your project.

![Modulus Project Administration]({{ site.url }}/assets/2016-05-11/modulus-project-administration.png)

First add the `ROOT_URL` variable with value of your project url that is on the top of this page. 
Now, if you have a MongoDB instance running on some cloud, add the `MONGO_URL` environment variable with
the connection string of your database. 

![Modulus Environment Variables]({{ site.url }}/assets/2016-05-11/modulus-environment-variables.png)

Else you can go to the <a href="https://addons.modulus.io/" target="_blank">Modulus Addons Section</a> and provision a new MongoDB instance. If you choose this option, the `MONGO_URL` variable will be added for you automatically.

Dont forget to **Save** your settings.


## References
- [Continuous Delivery Vs. Continuous Deployment: What's the Diff](https://puppet.com/blog/continuous-delivery-vs-continuous-deployment-what-s-diff)
- [Replacement for http://install.meteor.com script that doesn't require sudo and can be used on CodeShip CI](https://gist.github.com/MacRusher/4feca064287f3e488911)