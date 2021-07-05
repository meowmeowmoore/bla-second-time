
function increaseSalary() {
    return new Promise((resolve, reject) => {

        let arrObj = api.getEmployees().then(obj => {
            let arrSalary = obj.map(el => el.salary);
            let min = Math.min(...arrSalary);
            let minObj = obj.filter(el => {
                if (el.salary === min) {
                    return el;
                }
            })
            minObj = minObj[0];
            // console.log(arrObj, 'now')
            return api.setEmployeeSalary(minObj.id, minObj.salary * 1.2);
        }).then( minObj => {
            let text = `Hello, ${minObj.name}! Congratulations, your new salary is ${minObj.salary}!`;
            resolve(true);
            return api.notifyEmployee(minObj.id, text);
        }).catch (err => {
            // console.log(arrObj, 'nowErr');
            resolve(false);
            return api.notifyAdmin(err);
        })

    })
}

const api = {
    _employees: [
        { id: 1, name: 'Alex', salary: 140000 },
        { id: 2, name: 'Fred', salary: 120000 },
        { id: 3, name: 'Bob', salary: 80000 },
    ],
    getEmployees() {
        return new Promise((resolve) => {
            resolve(this._employees.slice());
        });
    },
    setEmployeeSalary(employeeId, newSalary) {
        return new Promise((resolve, reject) => {
            this._employees = this._employees.map((employee) =>
                employee.id !== employeeId
                    ? employee
                    : {
                        ...employee,
                        salary: newSalary,
                    }
            );
            reject(new Error('Something wrong happened'))
            // resolve(this._employees.find(({ id }) => id === employeeId));
        });
    },
    notifyEmployee(employeeId, text) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },
    notifyAdmin(error) {
        return new Promise((resolve) => {
            resolve(true);
        });
    },
    setEmployees(newEmployees) {
        return new Promise((resolve) => {
            this._employees = newEmployees;
            resolve();
        });
    },
};

console.log(increaseSalary())
