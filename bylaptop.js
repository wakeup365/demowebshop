import { Selector } from "testcafe";
fixture`Login Test`.page`http://demowebshop.tricentis.com/`;
test("by laptop", async (t) => {
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

  await t
    .click(Selector("a").withText("BOOKS"))
    .click(Selector("a").withText("COMPUTERS"))
    .click(Selector("a").withText("ELECTRONICS"))
    .click(Selector("a").withText("APPAREL & SHOES"))
    .click(Selector("a").withText("DIGITAL DOWNLOADS"))
    .click(Selector("a").withText("JEWELRY"))
    .click(Selector("a").withText("GIFT CARDS"))
    .click(Selector("a").withText("COMPUTERS"))
    .click(
      Selector(
        '[alt="Picture for category Notebooks"][title="Show products in category Notebooks"]'
      )
    )
    .click(
      Selector(
        '[alt="Picture of 14.1-inch Laptop"][title="Show details for 14.1-inch Laptop"]'
      )
    )
    .click(Selector("#add-to-cart-button-31"))
    .click(Selector("span").withText("Shopping cart"))
    .click(Selector('[name="removefromcart"]'))
    .click(Selector("#checkout"))
    .click(Selector(".ui-button-icon-primary.ui-icon.ui-icon-closethick"));
});
