// square **************
console.group("SQUARE");

function square_perimeter(side) {
    const result = side * 4 + " cm";
    return result;
};

function square_area(side) {
    const result = side * side + " cm2";
    return result;
};
console.groupEnd();


// triangle **************
console.group("TRIANGLE");

function triangle_perimeter(side1, side2, base) {
    const result = side1 + side2 + base + " cm";
    return result
};

function triangle_area(base, heigth) {
    const result = ((base * heigth) / 2) + " cm2";
    return result
};

function triangle_isosceles_height(side1, side2, base) {
    if (side1 == side2) {
        const half_base = base / 2;
        const height = Math.sqrt((side1**2) - (half_base**2));
        return "The height of the triangle is: " + height + " cm";
    } else {
        return "This is not an isosceles triangle";
    }
};
console.groupEnd();


// circle **************
console.group("CIRCLE");

const pi = Math.PI;

function circle_perimeter(radius) {
    return Math.round((radius * 2 * pi)) + " cm";
};

function circle_area(radius) {
    return Math.round(((radius**2) * pi)) + " cm2";
};
console.groupEnd();


// ************** interaction with HTML **************

// square **************
function run_square_perimeter() {
    const input = document.getElementById("square_input");
    const value = input.value;

    const perimeter = square_perimeter(value);
    alert(perimeter);
};

function run_square_area() {
    const input = document.getElementById("square_input");
    const value = input.value;

    const area = square_area(value);
    alert(area);
};


// triangle **************
function run_triangle_perimeter() {
    const input_1 = document.getElementById("triangle_input_side1");
    const side_1 = parseInt(input_1.value);

    const input_2 = document.getElementById("triangle_input_side2");
    const side_2 = parseInt(input_2.value);

    const input_3 = document.getElementById("triangle_input_base");
    const base = parseInt(input_3.value);

    const perimeter = triangle_perimeter(side_1, side_2, base);
    alert(perimeter);
};

function run_triangle_area() {
    const input_1 = document.getElementById("triangle_input_base");
    const base = input_1.value;

    const input_2 = document.getElementById("triangle_input_height");
    const height = input_2.value;

    const area = triangle_area(base, height);
    alert(area);
};

function run_triangle_isosceles_height() {
    const input_1 = document.getElementById("triangle_input_side1");
    const side_1 = parseInt(input_1.value);

    const input_2 = document.getElementById("triangle_input_side2");
    const side_2 = parseInt(input_2.value);

    const input_3 = document.getElementById("triangle_input_base");
    const base = parseInt(input_3.value);

    const height = triangle_isosceles_height(side_1, side_2, base);
    alert(height);
}

// circle **************
function run_circle_perimeter() {
    const input = document.getElementById("circle_input");
    const value = input.value;

    const perimeter = circle_perimeter(value);
    alert(perimeter);
};

function run_circle_area() {
    const input = document.getElementById("circle_input");
    const value = input.value;

    const area = circle_area(value);
    alert(area);
};