const fs = require("fs");

// Read CSV file and parse data
function readCSV() {
  const data = fs.readFileSync("./users.csv", { encoding: "utf-8" });
  // split to return array (\n so each line will be an element) && slice to delete the first line which is a header
  const lines = data.split("\n").slice(1);
  const users = lines.map((line) => {
    // get data using array destructuring 
    const [username, birthDate, address, mobileNumber, gender] =
      line.split(", ");
    return { username, birthDate, address, mobileNumber, gender };
  });
  console.log("Read File Complete");
  return users;
}

// Save data to file
function saveToFile(data) {
  const jsonData = JSON.stringify(data);
  fs.writeFileSync("./users.json", jsonData, { encoding: "utf-8" });
  console.log("Data saved to file!");
}

// Read JSON file and print to console
function readJsonFile() {
  const data = fs.readFileSync("./users.json", { encoding: "utf-8" });
  const users = JSON.parse(data);
  console.log(users);
}

// Read CSV file and save data to JSON file
const users = readCSV();
console.log(users);
saveToFile(users);

// Read data from JSON file and print to console
console.log("Reading from json file:");
readJsonFile();
