let check_button = document.querySelector("#check-btn");
let input = document.querySelector("#text-input");
check_button.addEventListener("click", handleCheck);
const result = document.querySelector("#result");
const reload = document.querySelector("#reload-btn");
reload.addEventListener("click", () => {
  location.reload();
});

function handleCheck() {
  let value = input.value;
  //   let no_space_value=''
  let check_value = '';
  let value2=value;

  if (
    value.includes(" ") ||
    value.includes(",") ||
    value.includes("_") ||
    value.includes(".") ||
    value.includes("-") ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes("/") ||
    value.includes("\\")||
    value.includes(":")||
    value.includes("(")||
    value.includes(")")
  ) {
    // value=value.split(' ')
    // value.forEach(element => {
    //   no_space_value=no_space_value.concat(element)
    // });
    // value=no_space_value;
    value = value.replaceAll(" ", "");
    value = value.replaceAll(",", "");
    value = value.replaceAll("_", "");
    value = value.replaceAll(".", "");
    value = value.replaceAll("-", "");
    value = value.replaceAll("{", "");
    value = value.replaceAll("}", "");
    value = value.replaceAll("/", "");
    value = value.replaceAll("\\", "");
    value = value.replaceAll(":", "");
    value = value.replaceAll("(", "");
    value = value.replaceAll(")", "");
  }

  value=value.toLowerCase()

  if (value === "") {
    // result.textContent='please enter a word first'
    alert("please input a value");
  } else if (value.length === 1) {
    result.textContent = `${value2} is a palindrome`;
  } else {
    if (value[0] !== value[value.length - 1] && value[0] !== "_")
      result.textContent = `${value2} is not a palindrome`;
    else {
      for (let i = 0; i < value.length; i++) {
        check_value = check_value.concat(value[value.length - 1 - i]);
      }
      if (check_value == value) {
        result.textContent = `${value2} is a palindrome`;
      } else {
        result.textContent = `${value2} is not a palindrome`;
      }
    }
  }
}
