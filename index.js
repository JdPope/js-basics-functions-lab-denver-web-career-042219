function distanceFromHqInBlocks(pickup){
  let numberBlocks
  if (pickup >= 42){
    numberBlocks = pickup - 42}
  else {
    numberBlocks = 42 - pickup
  }


  return numberBlocks
}


function distanceFromHqInFeet(block){
  let feet = distanceFromHqInBlocks(block) * 264
  return feet

}

function distanceTravelledInFeet(a,b){
  let response
  if (a > b){
    response = a - b}
  else {
    response = b - a
  }


  return response * 264
  }

function calculatesFarePrice(a,b){
  let fare
  let distance = distanceTravelledInFeet(a,b)
  switch(true){
    case distance <= 400:
      fare = 0
      break
    case distance <= 2000:
      fare = (distance - 400) * .02
      break
    case distance <= 2500:
      fare = 25
      break
    case distance > 2500:
      fare = 'cannot travel that far'
    }
    return fare



}
