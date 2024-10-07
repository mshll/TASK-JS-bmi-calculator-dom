function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById('age').value;
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;
  let male = document.getElementById('m').checked;
  let female = document.getElementById('f').checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  const bmi = weight / (height * 0.01) ** 2;
  // window.alert(`You are ${getBMIState(bmi)} (BMI: ${bmi.toFixed(2)})`); // challenge 1 & 2

  const normal_bmi = getAgeNormalBMI(age);
  const is_healthy = bmi >= normal_bmi[0] && bmi <= normal_bmi[1] ? 'Healthy' : 'Unhealthy';
  window.alert(`You are ${is_healthy} (${getBMIState(bmi)}) (BMI: ${bmi.toFixed(2)})`);
}

function getBMIState(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi >= 18.5 && bmi < 25.0) return 'Healthy Weight';
  if (bmi >= 25.0 && bmi < 30.0) return 'Overweight';
  return 'Obesity';
}

function getAgeNormalBMI(age) {
  if (age >= 19 && age <= 24) return [19, 24];
  if (age >= 25 && age <= 34) return [20, 25];
  if (age >= 35 && age <= 44) return [21, 26];
  if (age >= 45 && age <= 54) return [22, 27];
  if (age >= 55 && age <= 64) return [23, 28];
  if (age > 65) return [24, 29];
  return [19, 24]; // for age < 19
}
