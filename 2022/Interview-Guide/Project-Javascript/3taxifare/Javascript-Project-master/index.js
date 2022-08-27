const taxifare = () => {
  let km = document.getElementById('kilometer').value
  let fare = 0

  if (km <= 10) {
    fare += 5 * km
    console.log('upto 10=', fare)
  } else if (km > 10 && km <= 30) {
    fare += 5 * 10 + 2 * Math.abs(10 - km)
    console.log('upto 30', fare)
  } else {
    fare += 5 * 10 + 2 * 20 + Math.abs(30 - km)
    console.log('greater than 30', fare)
  }
  document.getElementById('total_fare').innerHTML = Math.round(fare);
}
