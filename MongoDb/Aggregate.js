//Match
{
    "address.state": "California"   
}

//Group

{
    _id:"$address.city",
    total: {$sum:"$transaction"}
}

//Project
{
    _id:1,
    city:"$_id", 
    total:1
    
}

//Replaceroot
{
    newRoot: {city:"$city" , total:"$total"}
}

//Sort
{
    total: 1
    //total:-1   
}
