const employees = [
    {
      name: "James",
      age: 40,
      hobbies: ["Football", "Social media"],
    },
    {
      name: "Alex",
      age: 25,
      hobbies: ["Cryptocurrency", "Social media"],
    },
  ];
  // Start coding here
  employees.push(
    {
      name: "Alicia",
      age: 29,
      hobbies: ["Shopping", "Reading Novels"]
    },
    {
      name: "Kody",
      age: 19,
      hobbies: ["Computer game", "Wakeboard"]
    },
  )
  let updateEmployees = employees.pop()
  console.log(employees);
  console.log(updateEmployees);