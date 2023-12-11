function calculateAverageGrade(grades) {
    let totalGrade = 0;
    for (const grade of grades) {
      totalGrade += grade;
    }
    const averageGrade = totalGrade / grades.length;
    return averageGrade;
  }
  const studentGrades = [56, 89, 23, 50];
  const averageGrade = calculateAverageGrade(studentGrades);
  console.log("Average grade:", averageGrade);
  
  
  