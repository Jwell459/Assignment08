// CREATE AN ARRAY OF EMPLOYEES
// employees = [{ id: 10000413, name: "Ashely Johnson", ext: 2456, email: "val@crole.com", dept: "Quality Assurance" },
// { id: 10000405, name: "Sam Regal", ext: 2456, email: "wic@crole.com", dept: "Marketing" }]
employees = [[10000413, "Ashely Johnson", 2456, "val@crole.com", "Quality Assurance"],
[10000405, "Sam Regal", 2456, "wic@crole.com", "Marketing"],
[10000404, "Alexander Ward", 2456, "oct@crole.com", "Engineering"],
[10000407, "Taliesin Jaffe", 2456, "bol@crole.com", "Administrative"],
[10000412, "Matthew Mercer", 2456, "jul@crole.com", "Sales"]]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
storage = localStorage.getItem('employees')
if (storage) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id)
let id = $('id')
let empName = $('name')
let extension = $('extension')
let email = $('email')
let department = $('department')
let empTable = $('empTable')
let form = $('addForm')
let empCount = $('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let idVal = id.value
    let empNameVal = empName.value
    let extVal = extension.value
    let emailVal = email.value
    let deptVal = department.value


    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    empArray = [idVal, empNameVal, extVal, emailVal, deptVal]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(empArray)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    form.focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        index = e.target.parentNode.parentNode.rowIndex - 1
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(index, 1)
        // BUILD THE GRID
        buildGrid()
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    document.querySelector('tbody').remove()

    // REBUILD THE TBODY FROM SCRATCH
    let empListNode = document.createElement('tbody')


    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (emp of employees) {
        empRow =
            `<tr>
                <td>${emp[0]}</td>
                <td>${emp[1]}</td>
                <td>${emp[2]}</td>
                <td>${emp[3]}</td>
                <td>${emp[4]}</td>
                <td><button class="btn btn-danger btn-sm float-end delete">X</button></td>           
            </tr>`;
        empListNode.innerHTML += empRow
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    let empList = empTable.appendChild(empListNode)

    // UPDATE EMPLOYEE COUNT
    empCount.value = employees.length

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))

};