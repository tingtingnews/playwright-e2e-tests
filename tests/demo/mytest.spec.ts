import { test, expect } from "@playwright/test";

test("Should load homepage with correct title", async ({ page }) => {
  //1. Goto the home page
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  //2. assert if the title is correct
  await expect(page).toHaveTitle("CURA Healthcare Service");
  //3. assert header text is correct
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});



test("Should do something",{tag:"@amoke"} ,async ({page}) => {
  await page.locator("//h1").click();
  
});


test.only("Should demo locators", async ({page}) => {
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  let makeAppmtBtn = page.getByRole("link", { name: "Make Appointment"})
  console.log(`>> The type of locator: ${typeof makeAppmtBtn}, The value of locator: ${JSON.stringify(makeAppmtBtn)}`);
  await makeAppmtBtn.click();
  // await page.getByRole('link', { name: 'Make Appointment' }).click();
  // await expect(page.getByText('Please login to make')).toBeVisible();
  await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
});