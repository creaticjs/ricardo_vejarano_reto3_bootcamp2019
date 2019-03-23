function calculate() {
    // First its evaluated if there are an empty entry
    var salary = document.getElementById('salary-entry').value;
    salary = Number(salary);

    if (salary > 0 && salary <= 9000) {
        salary = salary + salary * 0.2;
    } else if (salary > 9000 && salary <= 15000) {
        salary = salary + salary * 0.1;
    } else if (salary > 15000 && salary <= 20000) {
        salary = salary + salary * 0.05;
    } else if (salary > 20000) {
        salary = salary;
    }

    document.getElementById('salary').innerHTML = '<p>New Salary: ' + salary + ' </p>';;

}



