import { t } from "testcafe";

export async function login(login, password) 

{
  await t.click(".ico-login");
  await t.typeText("#Email", "Fordmondeo@mail.ru", { paste: true });
  await t.typeText("#Password", "123456", { paste: true });
  await t.click(".login-button");
}
