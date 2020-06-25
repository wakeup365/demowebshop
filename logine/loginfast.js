import { Selector } from "testcafe";
import { login } from "./helper";

fixture`Login Test`.page`http://demowebshop.tricentis.com/`;

test("User login", async (t) => {
  await login();
  const erorMessage = Selector(".topic-html-content-header").innerText;
  await t.expect(erorMessage).contains("Welcome to our store");


  
});
