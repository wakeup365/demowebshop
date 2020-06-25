import { Selector } from "testcafe";

fixture`Login Test`.page`http://demowebshop.tricentis.com/`;

test("User login", async (t) => {
  const signInButton = Selector(".ico-login");
  await t.click(signInButton);
  const loginForm = Selector("#returning-wrapper");
  await t.expect(loginForm).ok();

  const loginType = Selector("#Email");
  const paswordType = Selector("#Password");

  await t.typeText(loginType, "Fordmondeo@mail.ru");
  await t.typeText(paswordType, "123456");
  const loginBatton = Selector(".login-button");
  await t.click(loginBatton);

  const erorMessage = Selector(".topic-html-content-header").innerText;
  await t.expect(erorMessage).contains("Welcome to our store");
});
