const refs = {
  form: document.getElementById("form"),
  price: document.getElementById("price"),
  quantity: document.getElementById("quantity"),
  amount: document.getElementById("amount"),
  total: document.getElementById("total"),
};

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};
dataFill();
displeyTotal();
refs.amount.textContent = data.quantity;
// console.log(data);
refs.form.addEventListener("input", handleFormInput);

function handleFormInput({ target }) {
  const { value } = target;

  if (target === refs.quantity) {
    refs.amount.textContent = value;
    // console.log("RANGE");
  }

  target.setAttribute("value", value);
  dataFill();
  displeyTotal();
}

function dataFill() {
  data.price = Number(refs.price.value);
  data.quantity = Number(refs.quantity.value);
}

function displeyTotal() {
  refs.total.textContent = `Total: ${data.calcTotalPrice()}$`;
}
