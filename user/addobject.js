import { Selector } from "testcafe";
import { login } from "../logine/helper.js";

fixture`Login Test`.page`http://demowebshop.tricentis.com/`;

test("User add ten books", async (t) => {
  await login();
  const erorMessage = Selector(".topic-html-content-header").innerText;
  await t.expect(erorMessage).contains("Welcome to our store");
  await t

    .click(Selector("a").withText("BOOKS"))
    .click(
      Selector("div")
        .withText("35.00")
        .nth(10)
        .find(".button-2.product-box-add-to-cart-button")
    )
    .click(Selector("span").withText("Shopping cart"))
    .click(Selector("#termsofservice"))
    .click(Selector("#checkout"))
    .click(Selector("#billing-address-select"))
    .click(Selector("option").withText("New Address"))
    .click(Selector("#BillingNewAddress_CountryId"))
    .click(
      Selector("#BillingNewAddress_CountryId").find("option").withText("Canada")
    )
    .click(Selector("#BillingNewAddress_StateProvinceId"))
    .click(
      Selector("#BillingNewAddress_StateProvinceId")
        .find("option")
        .withText("Ontario")
    )
    .typeText(Selector("#BillingNewAddress_City"), "Krakow")
    .typeText(Selector("#BillingNewAddress_Address1"), "Dolnych mlynow")
    .typeText(Selector("#BillingNewAddress_Address2"), "krakowska")
    .typeText(Selector("#BillingNewAddress_ZipPostalCode"), "60101331")
    .typeText(Selector("#BillingNewAddress_PhoneNumber"), "854616558")
    .typeText(Selector("#BillingNewAddress_FaxNumber"), "sdsddsd1221212")
    .click(
      Selector("#billing-buttons-container").find(
        '[title="Continue"].button-1.new-address-next-step-button'
      )
    )
    .click(Selector("#PickUpInStore"))
    .click(
      Selector("#shipping-buttons-container").find(
        '.button-1.new-address-next-step-button[title="Continue"]'
      )
    )
    .click(Selector(".button-1.payment-method-next-step-button"))
    .click(Selector(".button-1.payment-info-next-step-button"))
    .click(Selector(".button-1.confirm-order-next-step-button"))
    .click(Selector(".button-2.order-completed-continue-button"));
});
