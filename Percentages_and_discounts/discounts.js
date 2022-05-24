function price_with_discount(price, discount) {
    const percentage_discount = 100 - discount;
    const final_price = (price * percentage_discount) / 100;
    return final_price
};

function run_discount_calculator() {
    const input_price = document.getElementById("input_price");
    const price_value = input_price.value;

    const input_discount = document.getElementById("input_discount");
    const discount_value = input_discount.value;

    const discounted_price = price_with_discount(price_value, discount_value);

    const final_message = document.getElementById("final_message");
    final_message.innerText = "The discounted price is: $" + discounted_price;
};
