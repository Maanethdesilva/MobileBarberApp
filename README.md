# Overview

A mock Airbnb application that finds all available house call barbers in the area. Users can browse through barbers in their area and book appointments with available services. Additional information can be found below:

User requirements: https://whimsical.com/requirements-8ja8KQvRBLi7XSaetjp6pZ

Database Schema: https://whimsical.com/database-schema-Ciq3ZWBZrRnZWTzRWyXkPK

# Demo

<b> Customer Home Page </b>

Browsing through barbers in area on grid view:

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/94875583/192130163-f60bdf80-2bc1-417c-bcac-a95e17971343.png">

Browsing through barbers in area on map view:

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/94875583/192130204-a6c17994-5fcd-45b7-bc5f-a26e4e805ac4.png">

<b> Notification Page </b>

Shows all the notifications and all the different types

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/94875583/192130621-35eea0ae-56c5-46a2-9316-53d40783425b.png">

<b> Image Uploader </b>

Uploads images to a user's portfolio or profile picture. Backend is still incomplete but images are being uploaded to UploadCare.

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/94875583/192130669-31396ec1-b13d-4443-a61a-11911ca4726d.png">

# Environment Setup Instructions

1) Install MySQL, MySQL workbench, Node js, and React
2) Clone repository
3) Run 'cd client; npm install'
4) Then open another terminal and run 'cd server; npm install'
5) Create a database schema in MySQL workbench with the name being 'MBarbershop' and password being 'password'
6) Run the database setup and mock data query under /database/ in MySQL

# API Setup
1) Create a Google Maps API and enable 'Maps JavaScript API' and 'Places API'
2) Add the API key into the /Client/Components/MapsAPI/Maps.tsx file
3) Create an UploadCare account and add the API key into the /Client/Components/ImageUploader/ImageUploader.tsx

