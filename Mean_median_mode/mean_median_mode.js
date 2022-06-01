// **********MEAN**********

// mean main function
function calculate_mean(list) {

    // *****reduce option*****

    // const sum_list = list.reduce(
    //     function (sum_value = 0, new_value) {
    //         return sum_value + new_value;
    //     }
    // );

    // *****for option*****

    let sum_list = 0;
    for (let i = 0; i < list.length; i++) {
        sum_list = sum_list + list[i];
    }

    const mean_list = sum_list / list.length;

    return mean_list;
};
// for this function, the values must be entered inside []  ===> calculate_mean([xx, xx, xx, xx])


// **********MEDIAN**********

// median main function
function calculate_median(list) {
    const mid_list = parseInt(list.length / 2);

    //sorting the list
    const sorted_list = list.sort(function(a, b) {
            return a - b;
        });
    console.log(sorted_list);

    // function to check if the number of index (list) are par or not
    function is_par(number) {
        if (number % 2 === 0) {
            return true;
        } else {
            return false;
        };
    };

    // calculating median
    let median;

    if (is_par(list.length)) {
        const element_1 = list[mid_list - 1];
        const element_2 = list[mid_list];

        const mean_element_1and2 = calculate_mean([
            element_1,
            element_2
        ]);
        return median = mean_element_1and2;

    } else {
        return median = list[mid_list];
    };
};

// **********MODE**********

// mode main function
function calculate_mode(list) {
    
    const list_object = {};

    list.map(
        function(element) {
            if (list_object[element]) {
                list_object[element] += 1;
            } else {
                list_object[element] = 1;
            };
            
        }
    );

    const new_array = Object.entries(list_object).sort(
        function(element_a, element_b) {
            return element_a[1] - element_b[1];
        }
    );

    const mode = new_array[new_array.length - 1];
    return mode;
};
