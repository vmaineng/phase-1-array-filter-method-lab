// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers, string) {
   return drivers.filter(function (name) {
        return name.toLowerCase() === string.toLowerCase();
      });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function (name) {
         return name.splice(0) === string.splice(0);
       });
 }

 function matchName(drivers, string) {
    return drivers.filter(function (name) {
         return name === string;
       });
 }
