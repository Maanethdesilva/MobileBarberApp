-- Create a mysql database called 

-- Create client
CREATE TABLE Client (
    ClientId int NOT NULL AUTO_INCREMENT,
    Username varchar(255) NOT NULL,
    Area varchar(255),
    AccountType int,
    Email varchar(255) NOT NULL,
    PRIMARY KEY (ClientId)
);

-- Create customer
CREATE TABLE Customer (
    CustomerId int NOT NULL AUTO_INCREMENT,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    ClientId int NOT NULL,
    PRIMARY KEY (CustomerId)
);

-- Create service provider
CREATE TABLE ServiceProvider (
    SPId int NOT NULL AUTO_INCREMENT,
    DisplayName varchar(255) NOT NULL,
    AvailableHours JSON,
    ClientId int NOT NULL,
    PricePerKM float,
    Bio varchar(255),
    PRIMARY KEY (SPId)
);

Use MBarbershop;
-- Create service
CREATE TABLE Services (
    ServiceId int NOT NULL AUTO_INCREMENT,
    SName varchar(255) NOT NULL,
    SPId int NOT NULL,
    SDescription varchar(255),
    Duration int,
    Price float,
    Requirements varchar(255),
    PRIMARY KEY (ServiceId)
);

-- Create images
CREATE TABLE Images (
    ImageId int NOT NULL AUTO_INCREMENT,
    ClientId int NOT NULL,
    ImageType int,
    PRIMARY KEY (ImageId)
);

-- Notification
CREATE TABLE Notifications (
    NotificationId int NOT NULL AUTO_INCREMENT,
    FromClient int NOT NULL,
    ToClient int NOT NULL,
    TimeSent timestamp,
    Response int,
    MessageContext varchar(255),
    PRIMARY KEY (NotificationId)
);