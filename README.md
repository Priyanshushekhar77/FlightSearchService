/
## src folder contains/
   -  index.js //for servers
   -  models/
   -  controllers/ - -> taking req ,sending res returns to route
   -   middlewares/
   -  services/  -> all business logic returns to controller
   -  utills//for extra stuffs
   -  config/
   -  respository/ -> communicates with db returns to service
   - seeders /-> used for generating datas
             npx sequelize db:seed:all;
   - RELATION -- index -> route -> controller -> service -> repository -> models and migrations


<!--  -->


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport


  
## Tables

##  City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id(ref-associated with city), created_at, updated_at
(Relationship -> City has many airports and Airport belongs to a city (association -> one to many))

## Airplane table -> id, model no, capacity, created at, updated at;
## Flights -> id,airplane id(ref), src_airport_id(ref),dest_airport_id(ref), departure_date,arrival_date,departure_time,arrival_time, flight Number,Price,boardingGate,totalSeats;

code -> npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
npx sequelize db:migrate
npx sequelize seed:generate --name add-airports//refer doc

npx sequelize seed:generate --name add-airport
npx sequelize db:seed:all;
```

### Dependices:
//sequelize cli->makes our life easy without of classes creation,commands become simple
//sequelize->(ORM for RDBMS),   modern typescript and Nodejs ORM(object relational model) for SQL server and featurs solid transaction support,relations,lazy loading and read replications etc.
//mysql,mariadb->act as driver for helping sequelize connect comfortably with rdbms(server)


//migrations helps in incremental changes(create,update,delete) in your table and keep logs of changes,it apply all the changes of db in ur database;
//seeder is initial sets of datas;
//association sequelize cli
