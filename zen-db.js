//collection for user info
db.users.insertMany([
  {
    user_id: "1",
    user_name: "Arun",
    codekata: "25",
  },
  {
    user_id: "2",
    user_name: "Ranjith",
    codekata: "30",
  },
  {
    user_id: "3",
    user_name: "KUmar",
    codekata: "27",
  },
  {
    user_id: "4",
    user_name: "Dinesh",
    codekata: "15",
  },
  {
    user_id: "5",
    user_name: "Karthik",
    codekata: "5",
  },
  {
    user_id: "6",
    user_name: "Dhanush",
    codekata: "36",
  },
  {
    user_id: "7",
    user_name: "Vijay",
    codekata: "50",
  },
  {
    user_id: "8",
    user_name: "Raghul",
    codekata: "67",
  },
  {
    user_id: "9",
    user_name: "Nandhu",
    codekata: "50",
  },
  {
    user_id: "10",
    user_name: "Kanan",
    codekata: "70",
  },
]);
//collection for company drives
db.company_drives.insertMany([
  {
    id: "1",
    students_attended: "Fabgreen technologies",
    company_name: "Arun",
    Date: "15-cotober",
  },
  {
    id: "2",
    students_attended: "Ranjith",
    company_name: "Fabgreen technologies",
    Date: "20-october",
  },
  {
    id: "3",
    students_attended: "Kumar",
    company_name: "Es Magico",
    Date: "22-october",
  },
  {
    id: "4",
    students_attended: "Dinesh",
    company_name: "Meteriocoin technology solutions",
    Date: "28-october",
  },
  {
    id: "5",
    students_attended: "Karthik",
    company_name: "Meteriocoin technology solutions",
    Date: "31-october",
  },
  {
    id: "6",
    students_attended: "Dhanush",
    company_name: "Eveez",
    Date: "5-November",
  },
  {
    id: "7",
    students_attended: "Vijay",
    company_name: "Eveez",
    Date: "12-November",
  },
  {
    id: "8",
    students_attended: "Raghul",
    company_name: "datallingence",
    Date: "18-November",
  },
  {
    id: "9",
    students_attended: "Nandhu",
    company_name: "datallingence",
    Date: "25-November",
  },
  {
    id: "10",
    students_attended: "Kanan",
    company_name: "datallingence",
    Date: "28-November",
  },
]);
//collection for mentors
db.mentors.insertMany([
  {
    id: "1",
    mentor_name: "Mohan",
    mentee_count: "21",
  },
  {
    id: "2",
    mentor_name: "Drav",
    mentee_count: "10",
  },
  {
    id: "3",
    mentor_name: "Rhoit",
    mentee_count: "14",
  },
  {
    id: "4",
    mentor_name: "Sangeetha",
    mentee_count: "23",
  },
  {
    id: "5",
    mentor_name: "Dinesh",
    mentee_count: "11",
  },
]);
//collection for task
db.task.insertMany([
  {
    id: "1",
    user_name: "Arun",
    pending_task: "Node file sysytem task",
    Absent: "true",
    Date: "15-october",
  },
  {
    id: "2",
    user_name: "Ranjith",
    pending_task: "mongo db task",
    Absent: "true",
    Date: "15-october",
  },
  {
    id: "3",
    user_name: "KUmar",
    pending_task: "redux",
    Absent: "true",
    Date: "15-october",
  },
  {
    id: "4",
    user_name: "Dinesh",
    pending_task: "sql blot",
    Absent: "true",
    Date: "15-october",
  },
  {
    id: "5",
    user_name: "Karthik",
    pending_task: "contxt api",
    Absent: "true",
    Date: "16-october",
  },
  {
    id: "6",
    user_name: "Dhanush",
    pending_task: "Javascript task",
    Absent: "true",
    Date: "16-october",
  },
  {
    id: "7",
    user_name: "Vijay",
    pending_task: "sql bolt",
    Absent: "true",
    Date: "16-october",
  },
  {
    id: "8",
    user_name: "Raghul",
    pending_task: "Mongo db",
    Absent: "true",
    Date: "19-october",
  },
  {
    id: "9",
    user_name: "Nandhu",
    pending_task: "Node js task",
    Absent: "true",
    Date: "19-october",
  },
  {
    id: "10",
    user_name: "Kanan",
    pending_task: "redux",
    Absent: "true",
    Date: "30-october",
  },
]);
//collection for topics_task
db.topics_task.insertMany([
  {
    id: "1",
    topic: "html",
    task: "login page",
    month: "october",
  },
  {
    id: "2",
    topic: "css",
    task: "login page",
    month: "october",
  },
  {
    id: "3",
    topic: "javascript",
    task: "array methods",
    month: "october",
  },
  {
    id: "4",
    topic: "react",
    task: "context",
    month: "November",
  },
  {
    id: "5",
    topic: "react-redux",
    task: "redux",
    month: "November",
  },
]);

//1)Find all the topics and tasks which are thought in the month of October
db.topics_task.find({month:{$regex:/october/i}},{_id:0,id:0}).pretty()

//2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({Date:{$gte: "15-october", $lte: "31-october"}}).pretty();
//3)Find all the company drives and students who are appeared for the placement.
db.company_drive.find({},{_id:0,id:0,Date:0}).pretty();

//4)Find the number of problems solved by the user in codekata
db.users.find({}, { _id: 0, user_id: 0 }).pretty();

//5)Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ mentee_count: { $gt: "15" } }).pretty();

//6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.task.aggregate([
  {
    $match: {
      Date: { $gte: "15-october", $lte: "31-october" },
      Absent: "true",
    },
  },
  {
    $group: {
      _id: "$id",
      user_name: { $first: "$user_name" },
      pending_task: { $first: "$pending_task" },
    },
  }
]).pretty();
