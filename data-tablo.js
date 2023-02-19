/*** Data Tablo ****/
const date = new Date();
const [month, day, year] = [
  date.toLocaleString("default", { month: "long" }),
  date.getDate(),
  date.getFullYear(),
];
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

$(document).ready(function () {
  $("#dataTable").DataTable();
});

let dataArray = [
  {
    name: "Giacomo Guilizzoni",
    company: "Makrovit",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 6,
    },
    employee: "Selim Yılmaz",
    checkbox: false,
  },
  {
    name: "Marco Botton",
    company: "Solimpeks Müh.",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 5,
    },
    employee: "Burakhan Senkal",
    checkbox: false,
  },
  {
    name: "Mariah Maclachlan",
    company: "Better Half",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 10,
    },
    employee: "Salih Kaya",
    checkbox: false,
  },
  {
    name: "Joe Duo",
    company: "Half Closk",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes + 6,
    },
    employee: "Deniz Yılmaz",
    checkbox: false,
  },
  {
    name: "Garrett Winters",
    company: "Denty",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 3,
    },
    employee: "Hasan uyar",
    checkbox: false,
  },
  {
    name: "Ashton Cox",
    company: "Mia",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 10,
    },
    employee: "Mahmut Kocaman",
    checkbox: false,
  },
  {
    name: "Cedric Kelly",
    company: "Ketty",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 9,
    },
    employee: "Lale Tunç",
    checkbox: false,
  },
  {
    name: "Airi Satou",
    company: "Sefl Cont",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 0,
    },
    employee: "Yurdagül Kaşık",
    checkbox: false,
  },
  {
    name: "Brielle Williamson",
    company: "Yora",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 7,
    },
    employee: "Esin Yılmaz",
    checkbox: false,
  },
  {
    name: "Garrett Winters ",
    company: "Denty",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 9,
    },
    employee: "Hasan uyar",
    checkbox: false,
  },
  {
    name: "Ashton Cox",
    company: "Mia",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 8,
    },
    employee: "Mahmut Kocaman",
    checkbox: false,
  },
  {
    name: "Herrod Chandler",
    company: "Ketty",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 5,
    },
    employee: "Lale Tunç",
    checkbox: false,
  },
  {
    name: "Rhona Davidson",
    company: "Sefl Cont",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 2,
    },
    employee: "Yurdagül Kaşık",
    checkbox: false,
  },
  {
    name: "Colleen Hurst",
    company: "Yora",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 3,
    },
    employee: "Esin Yılmaz",
    checkbox: false,
  },
  {
    name: "Sonya Frost",
    company: "Ketty",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 3,
    },
    employee: "Lale Tunç",
    checkbox: false,
  },
  {
    name: "Jena Gaines",
    company: "Sefl Cont",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 1,
    },
    employee: "Yurdagül Kaşık",
    checkbox: false,
  },
  {
    name: "Quinn Flynn",
    company: "Yora",
    date: {
      month: month,
      day: day,
      hour: hour,
      minutes: minutes - 3,
    },
    employee: "Esin Yılmaz",
    checkbox: false,
  },
];

let tableBody = document.querySelector("#dataTable tbody");

// Loop through the array and create a table row for each student
for (let data of dataArray) {
  // Create a new row
  let row = document.createElement("tr");

  // Create a cell for the name
  let nameCell = document.createElement("td");
  nameCell.textContent = data.name;
  row.appendChild(nameCell);

  // Create a cell for the company
  let companyCell = document.createElement("td");
  companyCell.textContent = data.company;
  row.appendChild(companyCell);

  // Create a cell for the date
  let dateCell = document.createElement("td");
  const dataArray = data.date;
  dateCell.textContent = `${dataArray.month} ${dataArray.day} ${dataArray.hour}.${dataArray.minutes}`;
  row.appendChild(dateCell);

  // Create a cell for the employee
  let employeeCell = document.createElement("td");
  employeeCell.textContent = data.employee;
  row.appendChild(employeeCell);

  // Create a cell for the checkbox
  let checkboxCell = document.createElement("td");
  let checkboxCheckbox = document.createElement("input");
  checkboxCheckbox.type = "checkbox";
  checkboxCheckbox.name = "checkbox-cell";
  checkboxCheckbox.checked = data.checkbox;

  // Add an event listener to the checkbox to allow only one checkbox to be selected
  checkboxCheckbox.addEventListener("change", function () {
    // Uncheck all other checkboxes in the table
    for (let otherCheckbox of document.querySelectorAll(
      "#dataTable input[type='checkbox']"
    )) {
      if (otherCheckbox !== this) {
        otherCheckbox.checked = false;
        otherCheckbox.parentNode.parentNode.style.backgroundColor = "";
      }
    }

    const editButton = document.getElementById("edit-button");
    // Toggle the background color of the row
    if (this.checked) {
      row.style.backgroundColor = "#8CBAF260";
      let cells = row.querySelectorAll("td");

      const name = cells[0].textContent;
      const company = cells[1].textContent;
      const date = cells[2].textContent;
      const employee = cells[3].textContent;
      const checkbox = true;
      const data = { name, company, date, employee, checkbox };
      editData(data);
    } else {
      row.style.backgroundColor = "";
    }
  });

  checkboxCell.appendChild(checkboxCheckbox);
  row.appendChild(checkboxCell);

  // Add the row to the table body
  tableBody.appendChild(row);
}

function editData(data) {
  //set data
  document.getElementById("company-name-form").textContent = data.company;
  document.getElementById("connection-form").textContent = data.name;
  document.getElementById("employee-form").textContent = data.employee;
  const dateArray = data.date.split(" ");
  const hourArray = dateArray[2].split(".");
  console.log(`2023-01-${dataArray[1]}`);
  document.getElementById("date-from").value = `2023-01-20`;
  document.getElementById(
    "time-from"
  ).value = `${hourArray[0]}:${hourArray[1]}`;
  document.getElementById("a-tab-control-3").textContent =`Çağrı Düzenleme [${data.name}] `
}

/*** <--- Data Tablo ---> ***/
