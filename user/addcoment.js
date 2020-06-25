import { Selector } from "testcafe";
import { login } from "../logine/helper.js";

fixture`Login Test`.page`http://demowebshop.tricentis.com/`;

test("User add comment to wishlist", async (t) => {
  await login();
  const erorMessage = Selector(".topic-html-content-header").innerText;
  await t.expect(erorMessage).contains("Welcome to our store");
  await t

    .click(Selector("span").withText("Wishlist"))
    .click(Selector("a").withText("Digital SLR Camera - Black"))
    .click(Selector("a").withText("Add your review"))
    .typeText(Selector("#AddProductReview_Title"), "Friends")

    .typeText(
      Selector("#AddProductReview_ReviewText"),
      "Go to my insta 365wakeup "
    )

    .click(Selector("#AddProductReview_ReviewText"))
    .click(Selector('[name="add-review"].button-1.write-product-review-button'))
    .click(Selector("span").withText("Wishlist"));
});
