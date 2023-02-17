function getValueById(elementById) {
  const input_field = document.getElementById(elementById);
  const input_field_string = input_field.value;
  const input_filed_convert_number = parseInt(input_field_string);
  if (isNaN(input_filed_convert_number)) {
    alert("Please enter a number");
  } else if (input_filed_convert_number < 0) {
    alert("Please enter a positive number");
  } else {
    return input_filed_convert_number;
  }
}

function getTxtById(textId) {
  const text_filed = document.getElementById(textId);
  const text_filed_value_string = text_filed.innerText;
  const text_filed_value_number = parseInt(text_filed_value_string);
  return text_filed_value_number;
}

document.getElementById("calculate_btn").addEventListener("click", function () {
  const income_field = getValueById("income_filed");
  const food_field = getValueById("food_filed");
  const rent_field = getValueById("rant_field");
  const clothes_field = getValueById("clothes_filed");
  const total_expenses_amount = food_field + rent_field + clothes_field;
  const balance_subtract_by_total_expenses =
    income_field - total_expenses_amount;
  if (balance_subtract_by_total_expenses < 0) {
    alert("Expense income er caite beshi hyte pare na ");
  }
  const total_expenses = document.getElementById("total_expenses");
  total_expenses.innerText = total_expenses_amount;
  const balance = document.getElementById("balance");
  balance.innerText = balance_subtract_by_total_expenses;
});

document.getElementById("save_btn").addEventListener("click", function () {
  const income_field = getValueById("income_filed");
  const percentage_value = getValueById("percentage_value");
  const percentage_calculate = (income_field / 100) * percentage_value;
  const saving_amount = document.getElementById("saving_amount");
  saving_amount.innerText = percentage_calculate;
  const remaining_balance_filed = document.getElementById("remaining_balance");
  const balance = getTxtById("balance");
  const remaining_balance = balance - percentage_calculate;
  remaining_balance_filed.innerText = remaining_balance;
});
