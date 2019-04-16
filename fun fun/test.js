password = "abc"

function change() {
  password = "123"
  doSomething();
}

function doSomething() {
  do {
    console.log(password)
    change();
  } while (password == "123")
}
