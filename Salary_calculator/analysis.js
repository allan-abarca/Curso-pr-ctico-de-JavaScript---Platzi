// navigate the main array with the information
const salary_costa_rica = costa_rica.map(
    function (employee) {
        return employee.salary;
    }
);

// sort the values (salaries)
const salary_cr_sorted = salary_costa_rica.sort(
    function (salary_a, salary_b) {
        return salary_a - salary_b;
    }
);

// function to see if values are par or not, to calculate the median  // helper
function is_par(value) {
    return (value % 2 === 0);
};

// calculate mean  // helper
function calculate_mean(list) {
    let sum_list = 0;
    for (let i = 0; i < list.length; i++) {
        sum_list = sum_list + list[i];
    };

    const mean_list = sum_list / list.length;
    return mean_list;
};

// calculate general salary median
function salary_median(list) {
    const mid_list = parseInt(list.length / 2);

    if (is_par(list.length)) {
        const mid_value_1 = list[mid_list - 1];
        const mid_value_2 = list[mid_list];

        const mid_value = calculate_mean([mid_value_1, mid_value_2]);
        return mid_value;
    } else {
        const mid_value = list[mid_list];
        return mid_value;
    };
};

// general median result
const general_median = salary_median(salary_cr_sorted);

// top 10 median

// splicing array to extract 10%
const splice_start = (salary_cr_sorted.length * 0.9);
const splice_quantity = salary_cr_sorted.length - splice_start;

const top10_salary = salary_cr_sorted.splice(splice_start, splice_quantity);

const top10_median = salary_median(top10_salary);


console.log({
    general_median,
    top10_median,
});
