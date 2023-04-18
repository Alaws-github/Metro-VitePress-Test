![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/9-GCoLexRQahhaxlfYyLjn3y.png)

# Introduction

Welcome to the user manual and setup guide for the Metro platform!

This document aims to answer any questions you (The User) might have about the functions and capabilities of Metro. Congratulations on choosing Metro to facilitate your IPO underwriting operations! 🥳

# Architecture

The Metro platform is made up of three components,  which together make up the Metro ecosystem. These components are:

- The Metro Client Dashboard
- The Metro Admin Dashboard
- The Metro Core Integration

The relationship between these can be seen in the data flow diagram below:

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/Qx23u7dVmZyQjyJHysT9wsUa.png)



# Requirements

So, what Hardware and Software does Metro need to function? At the time of writing this document Metro needs the following;

**Hardware Required**:

- Intel® Xeon® Processor E3-1270 v3 (8M Cache, 4 cores, 3.50 GHz) **or Similar**
- 4GB RAM (**At least**)
- 60GB HDD/SSD

**Software Required**:

- PHP **v8.0**
- Nginx **v1.21.6**
- MySQL  **v8**
- Redis Server **v6.2**

# Metro Installation Guide

## Installation

- Manual Installation
- Docker Installation
- Ubuntu (Docker)
- Red Hat Enterprise Linux (Docker)

## Overview

The Metro platform can be provisioned in a number of ways. This guide covers how to install Metro across several different platforms.  However, we recommend the Docker approach, using containers and orchestration.



## Manual Installation

### Requirements



```
PHP >= 8.0.0
BCMath PHP Extension
Ctype PHP Extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP Extension
MySQL PHP Extension

```



### Step 1 : Clone Metro from the Source

Normally, an instance would have been provisioned by Orba when installing the Metro platform in your environment.  However, in the very rare and very extraordinary case where you need to clone the source, it can be done with the following steps.

In most instances, Metro would be installed under the `/var/www/` folder, for most Linux distributions.

```
$ mkdir -p /var/www/metro
$ cd /var/www/metro 
$ git clone https://github.com/metro-ipo/admin-dashboard

```

### 

### Step 2: Point the domain to the uploaded folder

Depending on your web server, you will need to point your domain or subdomain to the `public` directory inside the Metro folder.  In this case, the full path would be;

`/var/www/metro/admin-dashboard/public`.



**Please Note: Metro MUST be installed on a primary domain or subdomain. Installing on a sub-folder will NOT work. For example:**

```
`example.com/metro` (Invalid)
`localhost/metro` (Invalid)
`example.com` (Valid)
`metro.example.com` (Valid)
`metro.test` (Valid)

```

### 

### Step 4: Fix File Permissions

Ensure that your web server has the correct permissions. In your `metro` root folder.  Run the command: `chmod -R 775 ./`



**Step 5: Installing Dependencies**

Fundamentally, Metro is powered by Laravel.  Due to this, the **environment**, **dependencies**, **migrations**, and **seeders** have to be run.   While in the `metro`folder perform the following.

```
$ composer install
$ cp .env.example .env
$ php artisan storage:link || true
$ php artisan key:generate
$ php artisan migrate
$ php artisan db:seed --class=DatabaseSeeder --force

```

Once these commands have been run successfully, your base Metro instance is now configured and seeded.



### Step 6: Complete installation

Open the link to the domain in your browser (For Example: https://demo.metroipo.com) and log into Metro by using  the following **default**  email and password.

```
email: admin@admin
password: password

```

That&#39;s it!

Now, let&#39;s look at the Docker Installation process!

# Docker Installation

Before attempting the Docker installation it is **_recommended_** that you have adequate docker and container experience.

**Please   Note:** Metro is composed of several containers as described in it&#39;s `docker-compose.yml` file.



### Step 1: Install Docker

Install Docker on your host: [https://docs.docker.com/install/](https://docs.docker.com/install/)



### Step 2: Install Docker Compose

Install docker-compose by using this guide: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

**NOTE:**

If `docker-compose —version` fails with:

```
docker-compose: error while loading shared libraries: libz.so.1: failed to map segment from shared object: Operation not permitted

```

run this command: `sudo mount /tmp -o remount,exec`



### Step 3: Clone Metro from the Source

Normally, an instance would have been provided by Orba when installing the Metro platform in your environment.  However, in rare cases where you would need to clone the source, it can be done with the following steps:

```
$ mkdir -p /var/www/metro
$ cd /var/www/metro 
$ git clone https://github.com/metro-ipo/admin-dashboard

```

**NOTE:** In most instances, Metro would be installed under the `/var/www/` folder, for most Linux distributions.



### Step 4: Performing the Setup

Change your current working directory and run your app using the commands below:

```bash
$ cd metro-admin
$ cp .env.example .env
$ docker-compose up -d
$ chmod +x ./docker-compose/setup.sh
$ docker-compose exec app composer config --global --auth github-oauth.github.com `INSERT_GITHUB_ACCESS TOKEN`
$ docker-compose exec app composer i --ignore-platform-reqs
$ docker-compose exec app php artisan migrate --seed
$ docker-compose exec app php artisan key:generate
$ docker-compose exec app php artisan jwt:secret
$ docker-compose exec app php artisan config:clear

```



### Step 5: Complete installation

Open your web browser and go to your given domain (default: http://localhost)

On Installation - Database setup, use the following credentials  :

```
Database Host: `db`
Database Name: `metro`
Database Username: `metro`
Database Password: `metro`

```

That&#39;s it!

Now, let&#39;s look at how to execute  the Ubuntu Installation below.



## Ubuntu (Docker)

### Prerequisites;

1.   Access to an **Ubuntu 18.04** local machine or development server as a non-root user with sudo privileges. **NOTE:** If you’re using a remote server, we strongly suggest having an active firewall installed. To set these up, please refer to this guide [Initial Server Setup Guide for Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04) on Digital Ocean.
1. Ensure Docker is installed on your server, following Steps 1 and 2 of [How To Install and Use Docker on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04).
1. Docker Compose must be installed on your server. You can refer to this Guide: [How To Install Docker Compose on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04).

### 

# The Ubuntu (Docker) Installation Process

### Step 1: Clone Metro from the Source

Normally, an instance would have been provided by Orba when installing the Metro platform in your environment. however, in  extraordinary cases where you need to clone the source, it can be done with the following steps.

```
$ mkdir /var/www/metro
$ cd /var/www/metro 
$ git clone https://github.com/metro-ipo/admin-dashboard

```

**NOTE:** In most instances, Metro would be installed under the `/var/www/`  folder, for most Linux distributions.



### Step 2: Verify Permissions

Please verify that your **current user&#39;s** UID matches with the **given UID** on the `docker-compose.yml` file in the application&#39;s root folder:

```yaml
    build:
      args:
        user: metro-user
        uid: 1000

```

If it doesn&#39;t match, Update the compose.yml file before going ahead with step 3.

> Hint: You can get the UID by running `id` command in the terminal.
> **(_NOTE:_** _If  this is not done correctly, then you may get an error on step 4_).

### 



### Step 3: Setup Docker Containers

Change your current working directory and start containers using the given commands below:

```bash
$ cd /var/www/metro/admin-dashboard
$ cp .env.example .env
$ docker-compose up -d

```

Before running the setup script, double-check your `.env` file and ensure that the correct credentials are loaded.  If you want to opt for the MySQL instance running on Docker, ensure that the credentials in the `docker-compose.yml` and `.env` are the following:

```
Database Host: `db`
Database Name: `metro`
Database Username: `metro`
Database Password: `metro`

```



### Step 4: Install Composer Dependencies &amp; Generate App Key

After the containers are built and started, we can now run the commands below to _install_  **composer dependencies** &amp; _generate_ a **unique**  **application key.**

```
$ docker-compose exec app composer config --global --auth github-oauth.github.com `INSERT_GITHUB_ACCESS TOKEN`
$ docker-compose exec app composer i --ignore-platform-reqs
$ docker-compose exec app php artisan migrate --seed
$ docker-compose exec app php artisan key:generate
$ docker-compose exec app php artisan jwt:secret
$ docker-compose exec app php artisan config:clear

```



### Step 5: Complete installation

Open your web browser. Then go to your given domain and access the default user account with the following email and password.

```
email: admin@admin
password: password

```

That&#39;s it !

Now let&#39;s go through the steps to Install Red Hat Enterprise Linux ( Docker).



## Red Hat Enterprise Linux (Docker)

### Prerequisites:

1. Access to **RHEL 7/8** local machine or development server as a non-root user with sudo privileges. If you’re using a remote server, we strongly suggest having an active firewall installed.
1. Ensure that Docker is installed on your server.   Please refer to the official guide at [https://docs.docker.com/engine/install/rhel/](https://docs.docker.com/engine/install/rhel/).
1. Docker Compose **must** be installed on your server. You can refer to this Guide to get that done: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

# Installation of Red Hat Enterprise Linux (Docker)

### Step 1: Clone Metro from the Source

Remember that an instance would have been provided by Orba when installing the Metro platform in your environment. However, if you need to clone the source, it can be done with the following steps.

```
$ mkdir /var/www/metro
$ cd /var/www/metro 
$ git clone https://github.com/metro-ipo/admin-dashboard

```

In most instances, Metro would be installed under the `/var/www/` folder, for most Linux distributions.



### Step 2: Verify Permissions

Please verify that your **current user&#39;s UID** matches with the **given UID** on the `docker-compose.yml` file in the application&#39;s root folder:

```yaml
    build:
      args:
        user: metro-user
        uid: 1000

```

If it doesn&#39;t match, update the compose.yml file before going ahead with step 3.

> **Hint:** You can get the UID by running `id` command in the terminal.
> 
> **_NOTE:_** _If you don&#39;t do this step correctly, then you may get an error on step  4_.



### Step 3: Setup docker containers

Change your current working directory and start containers using the  commands given below:

```bash
$ cd /var/www/metro/admin-dashboard
$ cp .env.example .env
$ docker-compose up -d

```

**NOTE: Before running the setup script**, double-check your `.env` file and ensure that the correct credentials are loaded, if you want to opt for the MySQL instance running on Docker, ensure that the credentials in the `docker-compose.yml` and `.env` are as following:

```
Database Host: `db`
Database Name: `metro`
Database Username: `metro`
Database Password: `metro`

```



### Step 4: Install Composer Dependencies &amp; Generate App Key

After the containers are built and started, run commands  below to _install_  **composer dependencies** &amp; _generate_ a **unique application key**:

```
$ docker-compose exec app composer config --global --auth github-oauth.github.com `INSERT_GITHUB_ACCESS TOKEN`
$ docker-compose exec app composer i --ignore-platform-reqs
$ docker-compose exec app php artisan migrate --seed
$ docker-compose exec app php artisan key:generate
$ docker-compose exec app php artisan jwt:secret
$ docker-compose exec app php artisan config:clear

```

### 

### Step 5: Complete installation

Open your web browser. Then, go to your given domain and access the default user account with the email and password below.

```
email: admin@admin
password: password

```

# Getting Started - Administrator Dashboard

As with most web applications, the starting point is the login screen!

To get to the Metro login screen, enter the URL [admin.metroipo.com](http://admin.metroipo.com/) into your browser.  This will bring you to the screen shown below. Then, enter the administrator email and password combination and click the &quot;Login&quot; button to begin.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/sPMbQn9Ypx31lwrHBn1TOLDE.png)



After logging in, you will  see the Metro Dashboard. The dashboard shows a visual summary of the current IPOs available for subscription,  the applications made to those IPOs, and the Users on the site. It also displays various tabs/buttons that lead you to other functions in Metro.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/ZCpprIe2zTHjTj42DYQIpRLM.png)



---

# Offers 

Now let&#39;s look at Offers and what this section on the Metro Dashboard entails.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/qdIORfKgP5OIkzW4IZ5WQo8o.png)



## Public Offers

This section displays the offers that are currently available for customers to buy into.

Before proceeding to create an offer, **Brokers, Banks and Currencies MUST be created or you will be unable to proceed.** This will be demonstrated below.

Step 1: Click on the gear icon at the top right to open the Settings Menu.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/96ZNwNsOEcJKB9x8BYlsSX3O.png)

Step 2: From the drop-down menu, select &quot;Brokers&quot;.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/HnjYSXLPWyVjDh43G4GSDQCI.png)

Next, click the blue rectangular button in the top right-hand corner labeled &quot;Add Broker&quot;- It&#39;s in the image shown below:

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/La-RS4QmhFFlVbC1qz-NByWZ.png)



Step 3: A new window will appear. It is in the image below.  Fill out the fields in this window with the Broker&#39;s name and Code. Finish by clicking the blue &quot;Add Broker&quot; button.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/S6clG-S3K59GZEMWUI5cqeaP.png)

Step 4: Click on the gear icon again to open the settings menu. From the drop-down menu that appears, select &quot;Banks&quot;.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/-h0fGC3dtB4DhoWzv2eMd9k2.png)

Next, click the blue rectangular button in the top right-hand corner labeled &quot;Add Bank&quot;- It&#39;s in the image shown below:

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/1QZop-Qv-94tFsmrQNaGePVR.png)

Step 5: A new window will appear. It is in the image below. Fill out the fields in this window with the Bank&#39;s name and Code. Finish by clicking the blue &quot;Add Bank&quot; button.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/5W5ElRhPHlESKB8CAOBeyy8P.png)

After the bank has been added, click on &quot;View&quot;.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/sqM42Hp0mVB0Zz1wS4lYf34a.png)

You may then click on the blue &quot;Add Branch&quot; button.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/Loek22UMy7NjwFmTYyqyKJSZ.png)

A new window will appear. Fill out the fields and complete by clicking the blue &quot;Add Branch&quot; button.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/DWSq91tQLHoPz7t7OCkMoJ10.png)



Step 6: Click on the gear icon again to open the settings menu. From the drop-down menu that appears, select &quot;Currencies and Fees&quot;.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/Qm0Q4PtEaQTeYKFmzHZXAxuU.png)

Next, click the blue rectangular button in the top right-hand corner labeled &quot;Add Currency&quot; as seen in the image shown below:

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/ZZThyCksKRm63fN199e2ckXK.png)

A new window will appear. It&#39;s in the image below. Fill out the fields in this window with the  Currency&#39;s Name, Code, and its Symbol along with any additional information that may be required. Finish by clicking the blue &quot;Add Currency&quot; button.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/-tY4KHKD7tCnisqSnJIUhfPf.png)

Now you&#39;re all set!  You can now create your  Offer!

# 

### How do you create a Public Offer?

You can create a public offer by:

1. Clicking the blue rectangular button in the top right-hand corner named &quot;Add Offer&quot;. 
1. Fill out the fields to create the offer, using your company&#39;s predetermined details for the offer.  

NOTE: If you would like to export the listing of ALL of the offers on the Administrative Dashboard, simply click the white rectangular button labeled &quot;**Export as**&quot;   in the top right-hand section of the screen (which is right beside the &quot;**Add Offer**&quot; button) to do so.

Let&#39;s get back to creating this offer!

These images below show the fields that will appear once you click the &quot;Add Offer&quot; button. Just fill them out with information provided by your company in order to hand-craft your offer to the desired specifications.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/AjHYrvY550-PkI5pf50GCarR.png)

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/BIAVfgihUr17qL7V4JTHSFuY.png)

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/NRQ9378pqBmxEHMYZoTtQbzw.png)

After filling out all the fields, finish by clicking the button, &quot;Add New Offer&quot;



3.  Once this new offer has been successfully created, the next step is to enter the following information in the fields under each tab:



### Add your  Company&#39;s Banking Details

On the newly created offer, click the &quot;View&quot; button to begin the process.  in order to see the &quot;View&quot; button, you will have to use the horizontal scroll bar. Use it by scrolling to the right, and the &quot;View&quot; button will appear alongside an &#39;eye&#39; icon. Here is a close-up of this process below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/MLjrVPb_VryHUbLP8BYweopI.png)



Once you click view, the &quot;View&quot; button for the particular offer that you have selected, a screen like the one in the image below will appear

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/UH10Eh3JfDK9WTZQA1dwRf_F.png)



If you look closely, you will see a series of tabs written in blue. Now click on the tab labeled &quot;Banking Details&quot;. You&#39;ll then be taken to the screen below.  Once you&#39;ve done that, the &quot;Add Banking Details&quot; button will appear. We&#39;ve circled it for you in the image below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/14f4oFoRwRHcUyhcBAwZn3IL.png)

Click the &quot;Add Banking Details&quot; button. Then, the window in the image below will appear.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/VoEFctMFknAlcfzbSQjJlVfZ.png)

Fill out this form with the Broker and Currency of your choice (these would have been added prior to creating the Offer) and upload an image of the banking details information. Finish by clicking &quot;Add Banking Details&quot;.



### Add Instructions For your Customers

Add instructions that you would like your customers to follow when applying to the offers on your site here.  Click the button &quot;Add Instructions&quot; to do so. It&#39;s highlighted for you below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/nkaGpP9fn-8amdb3KgyPjcJA.png)

After clicking this button, a text box will pop up.  Add a short name (an abbreviated name) for your offer in the relevant field and  type the instructions that you want your clients to follow. Click the blue &quot;Add instructions&quot; button at the bottom of the window to complete this step.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/Ir-54WeA5dKwpD-1OmHvAO5h.png)



### Add a Share Pool

Share Pools are critical and **MUST correspond to a JSE Batch number,** otherwise, a Share Pool can become invalid. So how can you add a share pool?

**Step 1**

Click on the &quot;Pools&quot; tab, then click on &quot;Add Share Pool&quot;. This has been highlighted below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/pZ7JhArojebrlWFib1lkDfiA.png)

**Step 2**. Fill out the form that appears once you&#39;ve clicked the &quot;Add Share Pool&quot; button. Fill out the form with the stock information provided by the JSE, which includes the Description for the Share Pool, its Minimum/Maximum Shares, the Increment Size, and the Unit Price.  Next, select the banking details and the currency. (You will be able to select the Banking Details and Currency from the mini drop-down menus at these fields because you entered this info in the previous steps.) Now click the &quot;Add Share Pool&quot; button at the bottom of this window to save the changes you&#39;ve just made.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/ChIZxChqFVqLvvssDYS0LVTL.png)



### Add Desired Fees

You may then move over to the tab labeled &quot;Fees&quot;. Click the button that says &quot;Add Fee&quot;. It has been highlighted in the image below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/YZ7brUfxMpMxC3lcmO7W7Tk6.png)

You will then be taken to the form  shown below,  where you can enter the Fee Name, the Fee Type (Flat or Percentage), the Amount, and the Currency.    Select the small box at the bottom of the window to indicate whether or not it is a JCSD processing fee. Complete this process by clicking &quot;Add Fee&quot;.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/_bjrXsJdAm6ye1cKV6Xbt0EL.png)



Once you click the &quot; Add Fee&quot; button, you will be redirected to page seen below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/9eTxSM09LwxOySyPd9qHSLmd.png)



Now that you&#39;ve added all the details for the offer and created the share pool you can finally publish your offer. To do this, click the &quot;**Publish&quot;** button ( its highlighted in the image above).

And that&#39;s it!

The offer will now be made public! This means that the offer can be viewed on the Client Dashboard and your customers can now apply to it!



Now let&#39;s learn about &quot;**Applications**&quot; on the Metro Platform.

### 

### Applications

Once a Public Offer has been published and your clients have completed the application process to a particular offer,  we can  _efficiently_ create and transfer application orders to the JCSD in batches.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/XXl9pIABZ_mpnW7lA4fTbyeT.png)

## 

### Creating Batches

We can arrive  at the Batches section of Metro by simply clicking the &quot;Applications&quot; drop-down menu. Then click on the blue rectangular button labeled &quot;View Batch&quot; which is found in the top-right section side of the screen.



![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/N9ZHIFezEIMpbA4OtqBb1psH.png)

Then click the &quot;Add Batch&quot; button seen here in the image above. This will bring up the form displayed in the image below.



![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/6j3dNpImYa17RIeFW-imqxJl.png)

Fill in the fields shown in the image above and click &quot;Add Batch&quot;.

Each batch needs an ID number which must be supplied by the JSE/JCSD in order to create a batch. Without this, you cannot create a batch.



### Grouping Applications in Batches

Metro automatically groups approved applications according to the IPO that was applied to! That means that sending applications to the JCSD can be done with a few steps!

**Step 1**. Identify the batch you want to send off. See a listing of batches in the image below.

**Step 2**. Click the &quot;View&quot; button. It is circled in green for you in the image below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/KRmBP1zD7dpq1keWiz_wEuIW.png)



**Step 3**. Click the button labeled &quot;Submit to JCSD&quot; located on the right side of the screen. And that&#39;s it! You have just sent a batch of applications off to the JCSD, in an efficient way!

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/SfBIqpFXG1rFkzi01ZULU03J.png)

---

## Private Offers (Private Placement)

This section displays the offers that your admin team has invited accredited investors and clients to participate in. They can only view and participate in these offers if they have been invited.

Before proceeding to create an offer, **brokers**, **banks**, **bank branches**, and **currencies** MUST be created or you will be unable to proceed. If you have already done this in the IPO section, this information will appear in the drop-down menus in the private placement section**.**

In the event that you need to **add new information** the steps below can be used to do this.

Step 1: Click on the gear icon at the top right-hand side of the screen to open the Settings Menu.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/96ZNwNsOEcJKB9x8BYlsSX3O.png)

Step 2: From the drop-down menu, select &quot;Brokers&quot;.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/HnjYSXLPWyVjDh43G4GSDQCI.png)

Step 3. Next, click the blue rectangular button in the top right-hand corner labeled &quot;Add Broker&quot;- It&#39;s in the image shown below:

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/ynXgtgA0murjl0n-8EALGCha.png)

Step 4: A new window will appear. It is in the image below. Fill out the fields in this window with the Broker&#39;s name and Code. Finish by clicking the blue &quot;Add Broker&quot; button.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/S6clG-S3K59GZEMWUI5cqeaP.png)



Step 5: Click on the gear icon again to open the settings menu. From the drop-down menu that appears, select &quot;Currencies and Fees&quot;.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/Qm0Q4PtEaQTeYKFmzHZXAxuU.png)

Next, click the blue rectangular button in the top right-hand corner labeled &quot;Add Currency&quot; as seen in the image shown below:

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/ZZThyCksKRm63fN199e2ckXK.png)

Step 6: A new window will appear. It&#39;s in the image below. Fill out the fields in this window with the Currency&#39;s Name, Code and its Symbol along with any additional information that may be required. Finish by clicking the blue &quot;Add Currency&quot; button.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/-tY4KHKD7tCnisqSnJIUhfPf.png)

Now you&#39;re all set! You can now create your Offer!



### How do you Create a Private Offer?

You can create a private offer by:

1. Go to the main menu on the left-hand side of the screen. Select the &quot;Offers&quot; Tab.
1. Click the blue rectangular button in the top right-hand corner of the screen named &quot;Add Offer&quot;.
1. Fill out the fields to create the offer, using your company&#39;s predetermined details for the offer.

If you would like to export the listing of ALL of the offers on the Administrative Dashboard, simply click the white rectangular button labeled &quot;Export as&quot; in the top right-hand section of the screen (which is right beside the &quot;Add Offer&quot; button) to do so.



Let&#39;s get back to creating this offer!

These images below show the fields that will appear once you click the &quot;Add Offer&quot; button. Just fill them out with information provided by your company in order to hand-craft your offer to the desired specifications.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/Th6b0OkciSD9O-hAK3n9oFdn.png)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/WsGb9pEdNUvV4r3Psku-geLz.png)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/c9LtSY6Penou5guRilB3pBw2.png)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/4MA2usxKii8_BbjH_krvGRBF.png)



After filling out all the fields, finish by clicking the button, &quot;Add New Offer&quot;. See this button in the image **above.**



Once this new offer has been successfully created, the next step is to enter the following information in the fields under each tab: &quot;How to pay&quot;, &quot;Users/ Invitees&quot;, Fees&quot;, &quot;Forms&quot;, and &quot;Video&quot;.



### Add Instructions on &quot;How to Pay&quot;

On the newly created offer, click the &quot;View&quot; button to begin the process. in order to see the &quot;View&quot; button, you will have to use the horizontal scroll bar. Use it by scrolling to the right, and the &quot;View&quot; button will appear alongside an &#39;eye&#39; icon. Here is a close-up of this process below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/XdlMH_sL1eRUltgLhZZda-dJ.png)



Once you click view, the &quot;View&quot; button for the particular offer that you have selected, a screen like the one in the image below will appear

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/2glunmQSlxon1Taeyj0v4Lwe.png)



If you look closely, you will see a series of tabs written in blue. Now click on the tab labeled &quot;How to Pay&quot;. You&#39;ll then be taken to the screen below. Once you&#39;ve done that, the &quot;Add Instructions&quot; button will appear. We&#39;ve circled it for you in the image below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/h1rbAl6kXd6CVHba53b5Onlh.png)



Click the &quot;Add Instructions&quot; button. Then, the window in the image below will appear.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/D8FV6fF63jT0XuLax3MknUD3.png)



Fill out this text box with the instructions for the payment method you have selected for the offer. Finish by clicking &quot;Add Instructions&quot;.



### Add &quot;Users/Invitees&quot;

Add Users/Invitees that you would like to invite to participate in this offer. Click the button &quot;Add Invitee&quot; to do so. It&#39;s highlighted for you below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/TuuVrG1u_khTwvYMcbAjOiWb.png)



After clicking this button, a new window will pop up. Select the names of the users you would like to invite to participate in the offer. Then click the blue &quot;Add Invitee&quot; button at the bottom of the window to complete this step.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/bpZLmAC_4PblIw298TE6k12M.png)



### Add Fees

Click on the word &quot;Fees&quot;. Then the option of &quot;Add Fees&quot; will appear. This is highlighted below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/iTxG3Fgmnguw7bCS9PqE4D9d.png)

A new window will appear. Select the type of fee ( flat/percentage), the name and the amount in order to fill in the fields. Then click &quot;Save&quot;.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/hRnMkQJ3gwdZqEzHt6rlagKG.png)

**Forms**

In this section, upload the templates for the forms for your application, the confirmation document, and the mandate form templates.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/btMAITu-XtzNRrqrIEH5di4Z.png)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/HgiGBRceaQpT9ocCpW_0MzIy.png)

Then click &quot;**Save**&quot;.

### Video

Add a link for the YouTube video about your offer in the field below. This video will provide your clients with more info about the offer.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/kIziNp7uUGL3f5YMAbHw2_uR.png)



Now that you&#39;ve added all the details for the offer you can finally publish your offer. To do this, click the &quot;**Publish&quot;** button ( its highlighted in the image below).

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/x4gXBLtvtdbolbXPCxL4zFrG.png)

And that&#39;s it!

The offer will now be made available for viewing by the clients that you have invited. **Once you click publish, an email is sent to the clients you added to the offer**. Once the offer is open, your customers can now apply to it!



Now let&#39;s learn about Applications in the Private Placement section.



### Applications

Once a Private Offer has been published and your Invitees have completed the application process to a particular offer, you may then **review applications** and **** approve or reject those applications.

## 

### Steps to Reviewing Applications.

1. Select &quot; Applications&quot; in the Main Menu
1. A list of applications will appear. Select the individual application you would like to review by scrolling to the right and clicking on &quot;view&quot;.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/-DiRx7bfw4QQTcbKgkF0c4QD.png)

1. The application details will appear. Review them, check the documents uploaded by the client and go through each tab to make sure all is well with the application. These tabs are as follows &quot;Details&quot;, &quot;Refunds&quot;, &quot;Checklist&quot;, &quot;Other Details&quot; and &quot;Directors&quot; or &quot;Joint Holders&quot; ( where applicable).



![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/cBmq9zUvSZW9KjPk7Jq_9Yd6.png)



4. If all is well, click the &quot;Approve&quot; button.

If something is wrong with the application, click the &quot;Reject&quot; button.

- Note once an application is approved or rejected, this status **cannot** be changed. In the event that the administrator selected a status in error, the client will have to submit a new application.

---

### Clients

### How to Add New Invitees

1. Click on the Clients _tab_
1. Click on the &quot; Add Invitee&quot; button.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/tLbVRWf9l88ff79YBzmMrmWd.png)

1. A new window will appear- See below. Fill out the fields and click &quot;Add Invitee&quot;.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/EEiMG3V3Mp60Ew1fLxuqlwnB.png)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/49vSPFN9kSQio-iNjKL63fmW.png)



**Assign Accreditation status**

Once you invite a client to a private offer, you can grant them &quot;Accredited Investor&quot; status. Here are the steps to do so.

1. Click on the client&#39;s tab.
1. Select a client from the client list, Scroll to the right, and click on &quot;Edit&quot;

A new window will appear.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/u62pfcfRGp8enB8gA9YjLiwy.png)



Step 3. Look at the bottom left-hand corner of this new window. You can either select the check box to assign accredited investor status to the client, OR you can de-select it, to remove this status from a client. See the image below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/EyNwubwK39oHCFmDWyxPw2fR.png)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/3OchRfFp1-soQY5LYxtFnQfE.png)

Final Step- Step 4. Click &quot;Edit Invitee&quot;.



**How to Edit or Delete Client Info.**

1. To edit a client&#39;s information simply click **&quot;Edit&quot;**, found in the same row as their name. - Your client&#39;s info will appear. Make the desired changes and save them.
1. To delete a client from the system, simply click the word **&quot;Delete&quot;** within the same row as their personal info. Follow the prompt that will appear and complete the deletion process.

See the image below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/ZkNOkEXsRo689djGsDFsvOsH.png)





**How to Exporting Client Data**

To export the information in this section, do the following:

Steps:

1. Select the users you would like to gather information for, by using the checkboxes on the extreme left-hand side of the screens.
1. Click the &quot;Export All As&quot; button. ( see the image below)
1. 

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/i1jhaoyK4t0Co3saJPKXnRsc.png)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/ieMGu8LmVyniQZC4V1oBob9-.png)

1. Select the format you would like the information to be presented in &quot; CSV, PDF or EXCEL&quot; and click on that format.

The document will be downloaded and you will then be able to edit it/ use it as desired.



### Investors

### How to View Investor Details



- Select an investor and click the word &quot;View&quot;, found in the same row as their name.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/PCvJX7aVfKCWPXcIlnzb324Q.png)



- A new screen will appear, showing a checklist that shows the information that the client entered. This is indicated by the grayed-out check boxes that **cannot be edited by the administrator**. This info is a compilation of the criteria that the client has met, which has granted them Accredited Investor Status.

There is also a checklist on the right-hand side of the screen, that you can edit. If you need to add more information about the investor, just click the check-boxes to do so.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/FVGWmk1Mlm48fQNiss42UQR9.png)





Note. If you need to View the Users details, Click &quot; View User&quot;. This will take you to the following page where you can edit the user&#39;s information if necessary.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/m1bD0J0BIththdYX_LM3WfCx.png)



### Exporting Investor Details

1. Click the &quot;Investors&quot; tab.
1. Click on the Checkbox next to &quot;Name&quot; and select &quot;Export All As&quot;. This is demonstrated in the image below.
1. 

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/9Tkjq5SIJzXaJ0BcYSo15ZYv.png)

1. Select the format you would like the information to be presented in: &quot; CSV, PDF, or EXCEL&quot; and click on that format.



The document will be downloaded and you will then be able to edit it/ use it as desired.

### How to Generate Reports

In this section, the admin user, can generate reports of 3 types;

1. Issue Book
1. Offer Status Summary
1. Offer Participation Summary

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/znyRC2ZSKSSfgrjX_33n8ha3.png)



**To Generate a Report:**

1. Select the Report Type from the drop-down.
1. Select a Start and End date. - This time frame will show data for the offers that are open, from the first day of the offer being open, up to the same day that you generate the report.    If an offer has closed within that time frame, data with also be generated. 
1. Click &quot;Generate&quot;

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/1EaN58izsJrQj4kQPALEszrJ.png)

1. The report will then be generated. You may then select &quot;Export All As&quot; and click on a format (CSV, PDF, Excel). The document will then be downloaded and you will be able to use it as desired.



## Closure Letters

Once an offer closes, it is possible to manually generate a closure letter which will be disseminated to all applicants of that offer (Note that this will only work after configuring the closure letter settings present on the general setting page; more information can be found in the general settings section of the manual).

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/KNFTZFpsOoRGCpNJxlo2CIVV.png)

Once the user clicks the &quot;Generate Closure Letter&quot; button and confirms their selection, a notification will appear to notify the user that the generation process has begun.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/MpMl97xdKrvytdFArDIEBpQ3.png)

An email will be sent to the &quot;notify email&quot; that was entered in the general settings, with the result of the closure letter generation.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/gQsdUaSXgAYWYOGHj-muj3UI.png)

Emails will also be sent to all applicants of that offer with an attached closure letter pdf file.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/gWWK0vBdcnXEn6FeBcMFzSwY.png)



# Settings

Now that we&#39;ve covered the main aspects of Metro, we can move on to the other functions that the Metro Platform facilitates. These include customization and general configuration.

To access the Settings menu, click on the gear icon in the top-right corner of the screen. Just in case you are having difficulty finding it, we&#39;ve circled it for you in the image below.

NOTE: There is ONE settings menu that applies to both the private and IPO sections of Metro.

NOTE:  The JSCD Entries Section does not apply to private placements.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/PD-lvhYTh9mI_P0woicMveFc.png)



Remember, this gear opens a drop-down menu, which lists menu options.  Check out this image below to see these menu options up-close.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/hgr7FDMX6NwuXeCpVtnaMdqx.png)



Now let&#39;s talk about what each of these options allows you to do.

## General

The first Settings menu option you will see is &quot;General&quot;. This allows you to set up reminder Email Notification settings for your Offers as well as for Closure Letters. Simply enter the email address into the empty fields that you would like notifications to be sent to or sent from.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/ENeXHU5f30pqMl901NkDB0fN.png)

### General Settings

This section now only contains an input field to toggle Mandatory Two Factor Authentication.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/5K4Yc5ZnonucvDqNOhGW4QRK.png)

When this is toggled on, both the client and the admins will have to enable Two Factor Authentication in order to use the application. If an admin or client does not have Two Factor Authentication turned on, a pop-up will show up after login prompting them to enable it.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/YdnhkiYXs9gXkLZfU4GDiuRO.png)

After clicking Enable, you will be brought to the screen displayed below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/jqFqAx23yzfke_3YQAcQQJqx.png)

This screen displays the 2FA QR code meant to be scanned with an authenticator app on a mobile device as well as the recovery codes if the device cannot be accessed for whatever reason. You also have the option to download the codes and disable 2FA.

**Client**

Here is what 2FA would look like on the client side:

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/HETZrizG39ArcbbLwUbz6Rl6.png)

Note that the client side does not provide the option to download the recovery codes and only to copy/paste them. They are limited until more are generated using the &quot;Regenerate Recovery codes&quot; button.



**Oversubscription Validation**

By default, the system will allow administrative users to approve offer applications even after the maximum number of units has been applied for.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/i3IIzDSGi_Mb0GNDNKkyBn_7.png)

To disable this behavior and allow oversubscription validation, administrative users must navigate to the general settings page and &quot;Enable Oversubscription Validation&quot;

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/dGvbgfZM4lKJ9gHAR5O1EVsM.png)

Once the changes are saved, users will no longer be able to approve applications that will go over the subscription limit.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/y_tTh2HZHxILSOgl_gE_zxqb.png)



### Client Settings

The general settings contain information that is relevant to the client-side application. Those fields are:

- Client Logo and Banner
- Company name
- Platform Name
- Mobile App Name
- Contact Email
- Link to Android or IOS signature application
- Link to embedded map *
- A toggle for joint holder validation *
- A toggle for joint holder confirmation
- A toggle for enabling mandatory two factor authentication for both client and admin

**Please note**: For the embedded map link input field, you should put the URL found in the `src` attribute of the copied embedded map. An example of embedded map would look like this:

> &lt;iframe src=&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15176.326707049588!2d-76.7779862880707!3d18.021412726057477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3efcb798432d%3A0x29b3e98bc79c4dcc!2sSovereign%20Centre!5e0!3m2!1sen!2sjm!4v1662564586581!5m2!1sen!2sjm&quot; width=&quot;600&quot; height=&quot;450&quot; style=&quot;border:0;&quot; allowfullscreen=&quot;&quot; loading=&quot;lazy&quot; referrerpolicy=&quot;no-referrer-when-downgrade&quot;&gt;&lt;/iframe&gt;

However, only the part highlighted in green should be placed in the embedded map link input.

**Please Note**: When the joint holder validation is enabled, the features related joint holders will become available. After the applicant reaches step 2 (joint holder step), certain information (such as names and emails) for all joint holders on the JCSD account will be automatically populated. The applicant will not be able to continue the application process unless the number of joint holders in step 2 matches the number on the JCSD account.



![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/qLPPP4mhDKt3y0j4vGjpz2HG.png)



### Closure Letter Settings

The final section of the general settings page corresponds to the closure letter. A closure letter can be generated once an offer is closed. All clients that applied to the offer will receive a closure letter once this is done.

To configure the closure letter, administrative users will need to populate the displayed field and they will appear within the generated closure letter. The fields relating to the closure letter are as follows:

- Signee Full Name
- Signee Title
- Signee Signature (Optional)
- Investment Bank Name
- Address Lines 1 and 2
- Telephone Number
- Fax
- Customer Service Number
- Website
- Directors
- Logo (Optional)

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/0Yw0aqlA2eiqrgTicdTT_o9-.png)



Then save these changes that you&#39;ve made, by clicking the &quot;Save Changes&quot; button. And that&#39;s it!

## Users

The  next menu option is called **&quot;Users&quot;**. This displays all current users. It allows you to:

1. **Add a new user**. Do this by clicking &quot;Add User&quot; and filling in the fields that appear. Then save the changes you&#39;ve made by clicking &quot;Create User&quot;.
1. **View or edit user information**. You can do this when you click on the words &quot;View&quot; or &quot;Edit&quot;  on the right-hand side of the page in the same line as the particular user&#39;s name.  If you have edited a user&#39;s information, click &quot;Edit User&quot; to save the changes you have made. 
1. **Delete a user(s) from the system.  You can do this by clicking on the word &quot;Delete&quot;,** which can be found on the right-hand side of the page in the same line as the particular user&#39;s name.  A drop-down window will appear with a red button called &quot;Delete User&quot;. Click it. 
1. **Export the existing list of users in various file formats.** Simply click the white rectangular button in the top right section of the page labeled &quot;Export as&quot;, then view the drop-down menu and click on the format you would like the information to be compiled in. Then look  out for the downloaded document. Double click on it to open it! Now you have information at your fingertips in your chosen format!

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/oSdYmsUXe2Z6O1ehlx5ylgBC.png)

**Audits**

Every action in the Metro platform is recorded and logged and can be found under &quot;**Audits**&quot;**.** The audit log shows you which user logged on, what section they conducted an activity/function in, and what activity/ function they executed. It even shows very granular data stemming down to the data changed.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/130BcnoWobPZrvosRCt-tPq5.png)

To view the data that was changed, scroll across and click on the &quot;View&quot; button.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/kcn7Px_Pu1VsvMtNqlp5TWth.png)

This will generate a breakdown of the Audit itself. This is shown in the below image.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/-2nNkORsc0J-NCxAA-X_izHU.png)



## Brokers

In this section, you can add brokers and broker numbers to the system. We executed this step earlier before we began creating the offer. To review this go to the section entitled, &quot; Public Offers&quot;

## Banks and Bank Branches

In this section, you can add a bank name to the system. We executed this step earlier before we began creating the offer. To review this go to the section entitled, &quot; Public Offers&quot;

## Currencies And Fees

In this section, you can add currencies and fees to the system. We executed this step earlier before we began creating the offer. To review this go to the section entitled, &quot; Public Offers&quot;

## FAQs

Adding an FAQ ( Frequently Asked Question) is very simple.

1. Click on the FAQ tab in the Settings Menu.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/xPzvkagYD3DDrqhsNAo0Fbgu.png)

1. Click the &quot;Add FAQ&quot; button.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/VlfmA62Ix52kMic5kO2FQo8D.png)

1. A text box will appear. Fill in the information that will assist your clients in the text box as seen here in the image below.  Then click &quot;Add FAQ&quot;. This information will appear on the client website, in the FAQ Tab seen in the main menu. 

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/P8_OenTJbm5m8ekihC2Jy3oN.png)



## JCSD Entries

You can store valid JCSD number entries in this section. This enables you to manually check validity while reviewing applications in the event of any Depend system downtime. This will be demonstrated below:



1. Go to the settings menu and select &quot;JCSD Entries&quot;. Note- there is a horizontal menu that houses the same tabs, which you can also click on. See this below. 

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/e7U7u_6AeBZlaCxUrHUQJs11.png)

1. Click the following button in the image below. 

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/rwAr9nXSRZnfTOTw0vTknOjs.png)

1. A new window will appear. See this in the image below. Fill out the fields and click the blue &quot;Add JCSD Entry&quot; button. 

NOTE- assign a status to the JCSD number so that the reviewer knows which numbers are ACTIVE.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/VeLlMugrBLWerIkNaHjgE_XN.png)



## Roles and Permissions

**Definition of Terms**

Our permission system has two components Permission Types and Permission Actions. Each Permission Type has a generic list of 7 Permission Actions. You can enable and disable permission actions for each permission type when creating and editing a role. Example:

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/3AZrRX8pbUl1pVLQUaRthS_Y.png)

The permission has a large list of permission types and permission actions. Permission types include things such as Application and Share Pool. Permission types should cover most of the features within the application.

Full List of Permission Types

- Accredited Investor
- Application
- Private Application
- Private Offer
- Dashboard
- Audit
- Bank
- Broker
- Broker Selling Agent
- Currency
- Director
- Faq
- Invitee
- Jcsd Number Entries
- Prospectus
- Selling Agent
- Setting
- General Settings
- Share Pool
- Theme
- User
- Role
- Permission
- User Management
- Video
- Client
- Report
- Batch
- Submit JCSD

Each permission type is associated with 7 permission actions: View, Create, Edit, Delete, Approve, Reject and Allow.

The first six permission actions are functionally defined: View, Create, Edit, Delete, Approve, Reject and Allow. For example, for the Application permission type, the view action allows users to view applications and the create permission allows users to create applications. This pattern continues for all permission Types.

The seventh permission action, Allow, is used for all use cases not covered by the others. These are the edge cases this allows permission covers:

| Permission Type | Permission Action |  |
| --- | --- | --- |
| Prospectus | Allow | This determines whether the user can publish an offer |
|  |  | This determines whether the user can unpublish an offer |
|  |  | This determines whether the user can download an offer’s banking details. |
|  |  | This determines whether the user can generate a closure letter (this is a letter that is sent out after an offer is closed) |
| Submit JCSD | Allow | This determines whether the user can submit batches to the JCSD. |



**Adding New Roles**

You can also customize the roles that you would like to have on your system by clicking the &quot;Add Role&quot; button. The &quot;Add Role&quot; button has been circled for you below.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/8vMXw0hxg4-99mzbvHNtux0t.png)

# 

After clicking the &quot;Add Role&quot; button, the following will appear. Fill out the fields. Be sure to add the Permissions for the Role. Simply select the permissions from this list and click &quot;Add Role&quot;.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/3gM4HDeZyrciqtRf3LH8bWo2.png)



The image below shows what the saved role with specific permissions will look like. You can see this by going to &quot;Roles&quot; and clicking on &quot;Edit&quot;.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/7uAu9lRtsADm3xa-LeDP0wY8.png)

There is a master list of permissions on the Metro platform. To see this list, simply select the specific Role, and click &quot;Edit&quot;. After doing this, the following list will come up. You can then select or de-select the permission (action) that a person assigned to this role can execute by clicking on the purple boxes.

![](https://static.slab.com/prod/uploads/55j7qjmx/posts/images/GhyT5kdodK8KX_dmHo7hr-Gz.png)

## Theme

In this section, you can make changes to the &quot;look and feel&quot; of the site. Add your logo, change the colours and the and add the links for your social media here. See the arrows in the image below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/V0krMnMZCJ9fX2jRYJXADLsQ.png)

Then save the changes you have made.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/TOFa2H41p7R-m4SpZG0IxKTh.png)



## System Health

This section provides engineers with status updates that can be used to determine the root cause of any issue that may arise. This is shown below.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/E9bZeHIjQxe2quFM-zbvlG5W.png)

# Troubleshooting

This section will outline Orba&#39;s recommendations for potential, but not probable, issues that may arise after installation. To ensure that our customers’ solutions/services are reliable and stable, we perform the necessary internal optimization tests to ensure our solutions meet the needs of our customers’ business and maintain the confidence of our stakeholders.

##  Black Screen

When attempting to export large numbers of applications, an issue related to memory limit may arise that results in a black screen being displayed. To that end, Orba has ensured that the PHP memory size is at least 512M in order to handle large loads and uses a method that queues chunks of applications instead of attempting to handle one set of data.

**Recommendations:**

- We suggest that the client&#39;s UAT Team performs both load testing and stress testing prior to application go-live. This ensures that the testing covers the software performance under some expected load (regular or peak) and pushes the bar beyond peak conditions to determine the system’s load capacity as well as any point of a complete failure for loads that only they can project.

## Application Slowness/Lag

There  may sometimes be, depending on the client&#39;s system configurations, a slowdown in performance experienced by the client.

**Recommendations:**

-  **** Client should ensure that the **minimum** application system requirements stated in this manual are adhered to. 
- Application server&#39;s minimum specs should  be 16GB of RAM; 4 vCPUs; and 25-100GB of free disk space. If slowdown persists, then increase as needed. 
- Both UAT and Production are required to have the same specifications in terms of hardware to support Docker containers on-site.
- Additionally, migrating to a cloud platform such as Amazon Web Services, Google Cloud Platform or Microsoft Azure would adequately allow resources to scale on demand, relative to the workload. 

# Accounts with Missing Passwords in Database

There may be situations where users in the database appear not to have a password.

- This is by design; Once a primary applicant lists a Joint Holder via the application process, a User Account is automatically created and the Joint Holder is emailed, prompting the user to activate their account which involves creating and confirming their password and logging in.

# Connectivity Issues

If Depend Credentials are not valid for whatever reason, then users will not be able to complete the application process.

**Recommendations:**

- Client should ensure that Depend Credentials are valid well before the IPO open date.

# Frequently Asked Questions

## What other application(s) does Metro depend on?

Metro only depends on the Depend API provided by the JCSD.

## _What are the User password requirements?_ 

Password must have at least 8 characters. Passwords must contain upper and lowercase letters, a number and special character.

## _How many incorrect attempts can users make?_ 

All users receive 3 attempts to enter an incorrect password. If they get it wrong again a fourth time, then a security email will be sent to them.

## _Is there password expiration?_ 

Not currently.

## _Are previous passwords stored to prevent re-use? If so, how many hashes are stored?_ 

_No, they aren&#39;t. However, a client isn&#39;t allowed to reset their password to the one that is currently stored in the database._

## _Is there a system timeout?_  

Yes. Users are logged out after 20 minutes of inactivity by default. However, you can change the `JWT_TTL` variable in the **.env** file located in the application&#39;s root folder.  Please note that this variable accepts a number which represents the time in minutes.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/39tGLiT0PHneXZ2kyrvrWw9U.png)

## _Does Metro allow multiple sessions?_  

Concurrent sessions are not allowed. There is a prompt that allows a user to log out of sessions on other devices built into the system.

## _How do I get access to the NGINX logs?_

- SSH into the admin server
- Go to the path where the app is installed: `cd /var/www/metro/admin/dashboard/docker`
- Run `docker ps` to list the running containers

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/2QkxlQIDy42iosDGtbNYujI8.png)

- Copy the name of the container
- Now type `docker logs [nginx container name]` to see the logs. If you want to send them to a file, you can run this command: `docker logs [nginx container name] > log.txt`

## _What do I do if a user has enabled 2fa and is unable to access their 2fa codes?_

If a user is locked out of their account due to losing access to their 2fa information, simply navigate to their account page on the admin dashboard, scroll to the bottom of the page, and disable 2fa manually.

To get to the user&#39;s page, navigate to the &quot;Clients&quot; page shown on the side navigation, search for the corresponding user, and click &quot;View&quot;.

![](https://slabstatic.com/prod/uploads/55j7qjmx/posts/images/MSugrUgjXK_rMn6eP7ZVVj_A.png)



# Support

If you have any questions, concerns, or queries about your Metro Instance, please reach out to **jjones@orba.io** or **dwight@orba.io**.

Thanks for reading 😄 🚀.

Orba - We make The Best software for your company!
