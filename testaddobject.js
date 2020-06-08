import { Selector } from "testcafe";
// import { login } from "..//helper";
fixture`Login Test`.page`http://demowebshop.tricentis.com/`;
// test.before(async (t) => {
//   await login(username, pasword);
// })
test("User logining", async (t) => {
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

  const buttonBooks = Selector("a").withText("BOOKS");
  await t.click(buttonBooks);

  const booksPage = Selector(".center-2");
  await t.expect(booksPage.exists).ok();

  const computers = Selector("a").withText("COMPUTERS");
  await t.click(computers);

  const ELECTRONICS = Selector("a").withText("ELECTRONICS");
  await t.click(ELECTRONICS);
  const APPAREL = Selector("a").withText("APPAREL & SHOES");
  await t.click(APPAREL);
  const DIGITAL = Selector("a").withText("DIGITAL DOWNLOADS");
  await t.click(DIGITAL);
  const EWELRY = Selector("a").withText("JEWELRY");
  await t.click(EWELRY);
  const GIFTCARDS = Selector("a").withText("GIFT CARDS");
  await t.click(GIFTCARDS);
});
