import { expect, test as setup } from "@playwright/test";
import * as fs from "fs/promises";

interface Credentials {
  username: string;
  email: string;
  password: string;
}

const authFile =
  "./tests/advanced-testing-with-playwright/logic/utils/user.json";

setup("authenticate", async ({ page }) => {
  // Read credentials from the JSON file
  const credentials: Credentials = await readCredentials();

  // Perform authentication steps with the obtained credentials
  await page.goto("https://www.pokellector.com/signin");
  await page.locator('//input[@name="username"]').fill(credentials.username);
  await page.locator('//input[@name="password"]').fill(credentials.password);
  await page.locator('//button[@type="submit"]').click();

  // Wait until the page receives the cookies.
  await page.waitForURL("https://www.pokellector.com/my-account");
  // await expect(page.locator('//h1[@class="post-title"]')).toBeVisible();
  await expect(page).toHaveURL(
    new RegExp("https://www.pokellector.com/my-account")
  ); // End of authentication steps.

  // Save the storage state after authentication
  await page.context().storageState({ path: authFile });
});

async function readCredentials(): Promise<Credentials> {
  try {
    const rawData: string = await fs.readFile(authFile, "utf-8");
    const credentials: Credentials = JSON.parse(rawData);
    return credentials;
  } catch (error) {
    console.error("Error reading credentials:", (error as Error).message);
    throw new Error("Failed to read credentials from user.json");
  }
}
