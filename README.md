<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use">How to use</a></li>
    <li><a href="#code-structure">Code Structure</a></li>
       <ul>
        <li><a href="#model-and-controller">Model and Controller</a></li>
        <li><a href="#view">View</a></li>
      </ul>
    <li>
    <li><a href="#known-issues">Known Issues</a></li>
       <ul>
        <li><a href="#bugs">Bugs</a></li>
        <li><a href="#place-of-improvements">Place of improvements</a></li>
      </ul>
    <li>
    <a href="#contact">Contact</a></li>
  </ol>
</details>

# Device management System

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
<img src="https://user-images.githubusercontent.com/37354732/161404919-9f47cf05-516e-46a1-ad5e-6e25e1e52b4a.png" alt="dashboard" width="800" />
<p/>

<br>This project is to build an inventory system to manage our company's IT equipment. The system is built with React.js, C#, MySQL which are also used by our company in software development. Users will be able to store, edit and search for items.

### Functionalities

- Display all items
- View details of an individual product
- Update product details
- Store items one at a time or in batch
- Sort the inventory list according to keywords

### Built With

- React.js
- C#
- MySQL

<!-- GETTING STARTED -->

## Getting Started

The system requires node.js and a local database to function. It's designed to work in a local environment so a local database is needed for the application.

### Prerequisites

Install npm and setup local database

1. npm

```sh
npm install npm@latest -g
```

2. setup local database

- Install MySQL
- Create a new connection, remember the login credentials as you'll need to enter them in the app settings
- Download the [dbModel.zip](https://github.com/Denzic/AlphaSystem/files/8403554/dbModel.zip)
- create database by forward engineer the dbModel
- Make sure MySQL is not using strict mode

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Denzic/AlphaSystem.git
   ```
2. Navigate to ClientApp folder and install React.js packages
   ```sh
   npx install
   ```
3. change the `sqlconnection` string according to your database login credentials in appsettings.json
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/163566779-8e6e1566-3fc0-40e0-bc9e-7083cae87457.png" alt="dashboard" width="600" />
<p/>

<!-- USAGE EXAMPLES -->

## How to use

1. Open terminal and navigate to AlphaSystem folder then run `dotnet run`
   ```sh
   dotnet run
   ```

- After loading you should see a clean landing page<br>
- Now you can start adding new item by click on Add item
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/161737233-158e0deb-4cbb-4e25-bc15-07df1b03b12c.png" alt="dashboard" width="600" />
<p/>
- Fill out the form then press save. <br>
- The item will be stored to the database, you can check it by going back to the item list.
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/161954905-1534daf3-70b5-441c-bdc1-3f4c3b4d808f.png" alt="dashboard" width="600" />
<p/>
- Click on the edit button to change the details
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/163575012-1a5f24d6-a544-4f7a-84f8-403d56183239.png" alt="dashboard" width="600" />
<p/>
- Here you can edit the details as well as add device history<br>
- History is a track record of what has been done to the item
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/163576796-fb44bd31-fea2-4c89-bf8d-0d743bca4dbd.png" alt="dashboard" width="600" />
<p/>
- Click on add history to record a new hisotry. <br>
- History can be edited later
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/163582840-e10ee57c-c28f-47d7-8092-83170730f0d4.png" alt="dashboard" width="600" />
<p/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/163583662-2a11ebfc-4d0f-4983-a15f-7a87a0cbdf0f.png" alt="dashboard" width="400" />
<p/>
- Use the search function to find the item by it's properties<br>
- It also supports combined search
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/163586965-3ba04f7f-675e-4a7a-bf81-c8e0478bc130.png" alt="dashboard" width="800" />
<p/>
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/163586970-9cc5d87e-e145-462a-b35e-c5d9a6daf018.png" alt="dashboard" width="800" />
<p/>
<br>
These are the main functions

## Code Structure

### Model and Controller

Model: There two types of model, the ones with DTO suffix are for sending data to the view, the normal ones are for storing data to the database
controller: Executing CRUD operations to the database and sending data to the view layer

<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/161414633-786746c7-1052-4cb4-a72f-7b5ad254b0cb.png" alt="dashboard" width="300" />
<p/>

### View

App.js is the entrance of the app

- default/totalItem routes are both link to the landing page
- AddItem redirects to a form with empty fields
- EditItem redirects to a page that pre-filled with corresponding details which users can modify, it also contains history section
<p align="center">
  <img src="https://user-images.githubusercontent.com/37354732/161425279-157994b0-f479-4423-b4a6-7b6c46ffea10.jpg" alt="dashboard" width="500" />
<p/>

<!-- ROADMAP -->

## Known issues

### Bugs

- searching function only work on the first page
- deleting one of the field during combined search doesn't return correct result
- The operator column in the history section is not editable

### Place of improvements

- Only work with local database
- Inconsistent variable names
- Some actions don't have UI showing what happened, need to add UI feedbacks.

<!-- CONTACT -->

## Contact

Dean Wang - [Email](denzicw@gmail.com)<br>
Project Link: [https://github.com/your_username/repo_name](https://github.com/Denzic/AlphaSystem)
