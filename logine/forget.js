import { Selector } from "testcafe";

fixture`Register Test`.page`http://demowebshop.tricentis.com/`;

test("User Forget password1 ", async (t) => {
  const icologin = Selector(".ico-login");
  const forgetPassword = Selector("a").withText("Forgot password?");

  await t.click(icologin);
  await t.click(forgetPassword);

  const tooltip = Selector(".tooltip");
  await t.expect(tooltip).ok();

  const forgetEmail = Selector("#Email");
  await t.typeText(forgetEmail, "Fordmondeo@mail.ru");

  const sendEmail = Selector(".password-recovery-button");
  await t.click(sendEmail);
  const result = Selector("result").withText(
    "Email with instructions has been sent to you."
  );
  await t.expect(result).ok();
});
