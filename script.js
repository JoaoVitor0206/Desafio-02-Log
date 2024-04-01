let students = [
  {
    name: "João",
    grade1: 5,
    grade2: 8,
  },
  {
    name: "Maria",
    grade1: 7,
    grade2: 9,
  },
  {
    name: "José",
    grade1: 3,
    grade2: 4,
  }
]

function getAverage(grade1, grade2) {
  let average = (grade1 + grade2) / 2;
  return average;
}

for (let student of students) {
  studentAverage = getAverage(student.grade1, student.grade2);
  let approved = studentAverage >= 6 ? "Aprovado" : "Reprovado";

  alert(`O aluno ${student.name} teve uma média de ${studentAverage} e foi ${approved}!`)
}