//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
  return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){
  if(formation.length == 0){
    return null;
  }
  else{
  var formed = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  }
}
  return formed;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var yearData = players.filter((player) => player.debut == year);
  return yearData;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var positionData = players.filter((player) => player.position == position);
  return positionData;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(award){
  let awardForPlayers = []
  players.forEach((player,index)=>{
    let playerAwardArray = player.awards
    let flag = false
    playerAwardArray.forEach((awardRecieved,index)=>{
      if(awardRecieved.name === award){
        flag = true
        return
      }
    })
    if(flag){
      awardForPlayers.push(player)
    }
  })
  return awardForPlayers
}


//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let numberOfAwards  = player.filter((player)=>{
    let noOfTimes = 0;
    for(let i=0; i<player.awards.length; i++){
      if(players.awards[i].name == awardName){
        noOfTimes += 1
      }
    }
    return noOfTimes;
  })
  return numberOfAwards;
}

function filterByAwardxTimes(awardSearch,times){
  let awardAndTimesData = [];
  players.forEach((player,index)=>{
    let awardArray = player.awards
    let hasAward = false
    let count = 0
    awardArray.forEach((gottenaward,index)=>{
      if(gottenaward.name === awardSearch){
        hasAward = true
        count +=1
      }
    })
    if(hasAward){if(count==times){awardAndTimesData.push(player)}}
  })
  // console.log(playersByAward)
  return awardAndTimesData
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  var awardsData = filterByAward(awardName);
  var countryData = awardsData.filter(player => player.country == country)
  return countryData
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var ageData = players.filter((player) => player.age <age && player.team == team && player.awards.length >= noOfAwards) 
  return ageData;
}

//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  let descending = players.sort((a,b) => b.age - a.age);
  return descending
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let filter = player.filter((player)=>{
    return player.team == team;
  })
  return filter.sort((a,b)=> b.awards.length - a.length);
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  let array = player.filter((player)=>{
    let turns = 0;
    for(let i=0; i<player.awards.length;  i++){
      if(player.awards[i].name == awardName){
        turns += 1;
      }
    }
    return player.country == country, noOfTimes;
  })
  return array.sort((a,b)=>a.name.localeCompare(b.name))
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order


function sortByAgexAwardYear(age){
  let array = players.filter((player)=>{
    return player.age >= age
  })
  array.sort((a,b)=>a.name.localeCompare(b.name))
  array.forEach((player)=>{
    player.awards.sort((a,b)=>b.year - a.year)
  })
}