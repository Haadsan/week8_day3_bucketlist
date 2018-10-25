use bucketlist_hub;
db.dropDatabase();

db.bucketlist.insertMany([
{
activity: "explore",
country: "Japan",
location: ["Osaka", 'Tokyo'],
date: "2019-06-20"
},
{
activity: "Bunjy Jump",
country: "Zimbabwe",
location: "Zambizi River",
date: "2020-05-06"
},
{
activity: "Sky Dive " ,
country: "Kenya",
location: "Diani Beach",
date: "2020-06-10"
},
{
activity: "Samba Parade",
country: "Brazil",
location: "Brazilian Carnaval",
date: "2021-03-10"
}
]);
