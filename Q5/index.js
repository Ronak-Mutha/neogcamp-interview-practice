const readlineSync = require('readline-sync');

console.log('Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?');

const studentRecord = [];

for (let i=0; i<5; i++) {
    const studentName = readlineSync.question('Enter student\'s name: ');
      
    let unitTestMarks = readlineSync.question(`Enter ${studentName}'s unit test marks :  `);
    while(isNaN(unitTestMarks)) {
      unitTestMarks = readlineSync.question(`Please enter numerical values only for unit test marks  :  `);
    }

        let preFinalMarks = readlineSync.question(`Enter ${studentName}'s pre final test marks :  `);
    while(isNaN(preFinalMarks)) {
      preFinalMarks = readlineSync.question(`Please enter numerical values only pre final test marks :  `);
    }

        let finalMarks = readlineSync.question(`Enter ${studentName}'s final test marks :  `);
    while(isNaN(finalMarks)) {
      finalMarks = readlineSync.question(`Please enter numerical values only for final test marks :  `);
    }

  const total = Number(unitTestMarks) + Number(preFinalMarks) + Number(finalMarks);

  const studentObject = {
    'name': studentName.toUpperCase(),
    'unit test marks': unitTestMarks,
    'pre finals marks': preFinalMarks,
    'final marks': finalMarks,
    total,
    'avg': Number((total/ 3).toFixed(2))
  }
  studentRecord.push(studentObject);

  console.log(studentRecord);

}



const sortedArray = studentRecord.sort((a,b) => parseFloat(a.total) - parseFloat(b.total));

const printHighestMarks = sortedArray => sortedArray[sortedArray.length - 1].total;

const printLowestMarks = sortedArray => sortedArray[0].total;

console.log('Highest Marks :    ' + printHighestMarks(sortedArray));
console.log('Lowest Marks :     ' + printLowestMarks(sortedArray));


const averageMarksByName = studentToBeSearched => {
  for(let i=0; i<studentRecord.length;i++) {
    if(studentToBeSearched.toUpperCase() === studentRecord[i].name) {
    return studentRecord[i].avg;
    }  
  }
  return `Oops!! ${studentToBeSearched} not found in database`;
};

const averageMarks = (studentRecord.reduce((a, { avg }) => a + avg, 0) / studentRecord.length).toFixed(2);

console.log('Average Marks of given : ' + averageMarksByName( 'POR'));
console.log('AverageMarks of class = ' + averageMarks);