let input = document.getElementById("text");
let btn = document.getElementById("convert-btn");
let camel = document.getElementById("camel-case");
let pascal = document.getElementById("pascal-case");
let snake = document.getElementById("snake-case");
let snakeScreaming = document.getElementById("screaming-snake-case");
let kebab = document.getElementById("kebab-case");
let kebabScreaming = document.getElementById("screaming-kebab-case");
btn.addEventListener("click", () => {
  if (input.value) {
    console.log();
    camel.innerText = camelCase(input.value);
    pascal.innerText = pascalCase(input.value);
    snake.innerText = snakeCase(input.value);
    snakeScreaming.innerText = screamingSnakeCase(input.value);
    kebab.innerText = kebabCase(input.value);
    kebabScreaming.innerText = screamingKebabCase(input.value);
  } else {
    input.placeholder = "❌ Enter a valid string";
    input.addEventListener(
      "click",
      () => (input.placeholder = "Enter the text")
    );
  }
});
input.removeEventListener;

function camelCase(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\s\b(\w)/g, (firstChar) => {
      return firstChar.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function pascalCase(string) {
  return string
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\b\w/g, (firstChar) => {
      return firstChar.toUpperCase();
    })
    .replace(/\s+/g, "");
}
// console.log(snakeCase(input));

function snakeCase(string) {
  return string
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\s+/g, "_");
}

function screamingSnakeCase(string) {
  return string
    .trim()
    .toUpperCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\s+/g, "_");
}

function screamingKebabCase(string) {
  return string
    .trim()
    .toUpperCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\s+/g, "-");
}

function kebabCase(string) {
  return string
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\s+/g, "-");
}
