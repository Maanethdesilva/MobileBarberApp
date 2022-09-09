INSERT INTO `Client` (`Username`,`Area`,`AccountType`,`Email`)
VALUES
  ("Rana Crane","Anápolis",2,"morbi.metus@protonmail.org"),
  ("Igor Walsh","Neu-Ulm",1,"a.auctor.non@icloud.net"),
  ("Malachi Holman","Sosnowiec",2,"a.nunc@icloud.ca"),
  ("Trevor Michael","Cape Town",1,"tempor.est@google.couk"),
  ("Mona Reynolds","Garzón",2,"tincidunt.nibh@outlook.com"),
  ("Kiona Cummings","Navadwip",2,"ornare.egestas.ligula@icloud.edu"),
  ("Wanda Poole","Torreón",1,"elit.elit.fermentum@google.net"),
  ("Yoshio Durham","Feilding",1,"eget@aol.com"),
  ("Lee Atkinson","Sullana",2,"ullamcorper.duis@protonmail.net"),
  ("Francis Boyd","Panjim",1,"quis.diam.luctus@aol.ca"),
  ("Lunea Barker","Uyo",1,"neque.morbi@google.ca"),
  ("Mariko Valencia","Belfast",1,"rhoncus@aol.ca"),
  ("Angelica Rodriguez","Chungju",1,"mauris.molestie@google.com"),
  ("Angelica Reed","Bucheon",1,"sem.nulla.interdum@google.org"),
  ("Shaine Curry","Karnal",1,"euismod@aol.net");

INSERT INTO `Customer` (`FirstName`,`LastName`,`ClientId`)
Select Username, '', ClientId From Client
WHERE AccountType = 1;

INSERT INTO `ServiceProvider` (`DisplayName`,`ClientId`, `PricePerKM`, `Bio`)
Select Username, ClientId, 4, 'barber' From Client
WHERE AccountType = 2;

INSERT INTO `Notifications` (`FromClient`,`ToClient`,`TimeSent`,`Response`,`MessageContext`)
VALUES
  (3,7,"2022-05-21 00:01:05",0,"tristique"),
  (3,3,"2021-01-04 00:01:05",1,"amet,"),
  (13,9,"2021-06-05 00:01:05",0,"enim. Etiam imperdiet"),
  (16,10,"2021-05-13 00:01:05",2,"nonummy ac, feugiat non,"),
  (14,2,"2021-02-02 00:01:05",3,"Nam"),
  (3,7,"2022-05-21 00:01:05",2,"tristique"),
  (3,3,"2021-01-04 00:01:05",3,"amet,"),
  (13,9,"2021-06-05 00:01:05",0,"enim. Etiam imperdiet"),
  (16,10,"2021-05-13 00:01:05",1,"nonummy ac, feugiat non,"),
  (14,2,"2021-02-02 00:01:05",2,"Nam"),
  (3,7,"2022-05-21 00:01:05",0,"tristique"),
  (3,3,"2021-01-04 00:01:05",1,"amet,"),
  (13,9,"2021-06-05 00:01:05",0,"enim. Etiam imperdiet"),
  (16,10,"2021-05-13 00:01:05",2,"nonummy ac, feugiat non,"),
  (14,2,"2021-02-02 00:01:05",3,"Nam"),
  (3,7,"2022-05-21 00:01:05",2,"tristique"),
  (3,3,"2021-01-04 00:01:05",3,"amet,"),
  (13,9,"2021-06-05 00:01:05",0,"enim. Etiam imperdiet"),
  (16,10,"2021-05-13 00:01:05",1,"nonummy ac, feugiat non,"),
  (14,2,"2021-02-02 00:01:05",2,"Nam");
