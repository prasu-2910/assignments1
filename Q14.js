function evaluateEmployees(employees) {
  
  function getPerformanceLevel(rating) {
    if (rating > 4.5) return "Excellent";
    if (rating >= 3) return "Good";
    return "Needs Improvement";
  }


  const filtered = employees.filter(emp => emp.tasksCompleted > 5);


  const mapped = filtered.map(emp => ({
    name: emp.name,
    performance: getPerformanceLevel(emp.rating)
  }));
  
  const performancePriority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  mapped.sort((a, b) => performancePriority[b.performance] - performancePriority[a.performance]);

  return mapped;
}


const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));