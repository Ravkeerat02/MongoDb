//elem match
db.customers.find(
  { "interests": { $elemMatch: {$eq: "Database"} } }, 
  { "last" : 1.0, "interests": 1.0 } );

//size
db.customers.find(
  { interests: { $size: 4 } }, 
  { "last" : 1.0, "interests": 1.0 } );

//and
db.customers.find(
  { 
    "$and": [
      { "interests": { $elemMatch: { $eq: "Database" } } }, 
      { "interests": { $elemMatch: { $eq: "Web Design" } } } ]
  }, 
  { "last" : 1.0, "interests" : 1.0 } );

//all
db.customers.find(
  { "interests": { $all: ["Database", "Web Design"] } }, 
  { "last" : 1.0, "interests" : 1.0 } );
