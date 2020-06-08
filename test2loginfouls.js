import { Selector } from "testcafe";

fixture`Login Test`.page`http://demowebshop.tricentis.com/`;

test("User not a true login", async (t) => {
  const signInButton = Selector(".ico-login");
  await t.click(signInButton);
  const loginForm = Selector("#returning-wrapper");
  await t.expect(loginForm).ok();

  const loginType2 = Selector("#Email");
  const paswordType2 = Selector("#Password");

  await t.typeText(loginType2, "Fordmondeo@mail.ru");
  await t.typeText(paswordType2, "122222222");
  const loginBatton = Selector(".login-button");
  await t.click(loginBatton);

  const erorMessage1 = Selector(".validation-summary-errors");
  await t.expect(erorMessage1).ok();
});
