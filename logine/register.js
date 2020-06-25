import { Selector } from "testcafe";

fixture`Register Test`.page`http://demowebshop.tricentis.com/`;

test("User register positive", async (t) => {
  const icoRegister = Selector(".ico-register");
  const registrationPage = Selector(".registration-page");
  await t.click(icoRegister);
  await t.expect(registrationPage).ok();

  const genderMale = Selector("#gender-male");
  const firstName = Selector("#FirstName");
  const lastName = Selector("#LastName");
  const email = Selector("#Email");
  const password = Selector("#Password");
  const confirmPassword = Selector("#ConfirmPassword");
  const registerButton = Selector("#register-button");
  const registerContinue = Selector(".register-continue-button");
   
  await t.click(genderMale);
  await t.typeText(firstName, "Ford");
  await t.typeText(lastName, "Mondeo");
  await t.typeText(email, "1222dwwwFordmondeo@mail.ru");
  await t.typeText(password, "1223456");
  await t.typeText(confirmPassword, "1223456");

  await t.click(registerButton);
  await t.click(registerContinue);
});
