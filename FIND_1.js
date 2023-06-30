db.customers.find({"device":"Apple iPhone"});

//Address

db.customers.find({
    "address.state": {$in:["Washington","Oregon"]}});
//
//double cmd
db.customers.find({
    "address.state": {$in:["Washington","Oregon"]},
    "device" :/.*iphone.*/i
} );

//limiting the result
db.customers.find({
    "address.state": {$in:["Washington","Oregon"]},
    "device" :/.*iphone.*/i
} , {
    first:1,last:1,user_name:1}
);

//sorting the result 
db.customers.find({
    "address.state": {$in:["Washington","Oregon"]},
    "device" :/.*android.*/i
} , {
    first:1,last:1,user_name:1
}
).sort({last:1,first:1});

//