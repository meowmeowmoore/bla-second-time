async function increaseSalary() {
    let sumSalary = 0;
    let sumPers = 0;
    let arrayPerson = await api.getEmployees();

    let arrSalary = arrayPerson.map(el => el.salary);
    let averageSalary = Math.floor((arrSalary.reduce((prev, cur) => prev + cur)) / arrayPerson.length);

    for (const person of arrayPerson) {

        let newSalary = 0;
        if (person.salary < averageSalary) {
            newSalary = Math.floor(person.salary * 1.2);
        } else {
            newSalary = Math.floor(person.salary * 1.1);
        }
        try {
            await api.setEmployeeSalary(person.id, newSalary);
            sumSalary += newSalary;
            sumPers++;
            let text = `Hello, ${person.name}! Congratulations, your new salary is ${newSalary}!`;
            await api.notifyEmployee(person.id, text);
        } catch (err) {
            await api.notifyAdmin(err);
        }
    }

    await api.sendBudgetToAccounting(sumSalary);
    return Promise.resolve(sumPers);
}




const api = {
    _employees: [
        { id: 1, name: 'Alex', salary: 120000 },
        { id: 2, name: 'Fred', salary: 110000 },
        { id: 3, name: 'Bob', salary: 80000 },
        { id: 10, name: 'Tim', salary: 135000 },
    ],
    getEmployees() {
        return new Promise((resolve) => {
            resolve(this._employees.slice());
        });
    },
    setEmployeeSalary(employeeId, newSalary) {
        return new Promise((resolve, reject) => {
            const updatedEmployees = this._employees.map((employee) =>
                employee.id !== employeeId
                    ? employee
                    : {
                        ...employee,
                        salary: newSalary,
                    }
            );
            // this._employees = updatedEmployees;
            resolve(this._employees.find(({ id }) => id === employeeId)/*'hello'*/);
        });
    },
    notifyEmployee(employeeId, text) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },
    notifyAdmin(error) {
        return new Promise((resolve) => {
            resolve();
        });
    },
    setEmployees(newEmployees) {
        return new Promise((resolve) => {
            this._employees = newEmployees;
            resolve();
        });
    },
    sendBudgetToAccounting(newBudget) {
        return new Promise((resolve) => {
            resolve();
        });
    },
};

console.log(increaseSalary())
