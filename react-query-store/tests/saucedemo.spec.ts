import { expect, test } from '@playwright/test';


test('saucedemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    const itemContainer = await page.locator("#inventory_container .inventory_item").all();

    const randomIndex = Math.floor(Math.random() * itemContainer.length);

    const randomItem = itemContainer[randomIndex];



    const expectedDescription = await randomItem.locator(".inventory_item_desc").innerText();
    const expectedName = await randomItem.locator(".inventory_item_name").innerText();
    const expectedPrice = await randomItem.locator(".inventory_item_price").innerText();


    console.log(`Expected description: ${expectedDescription}`);
    console.log(`Expected name: ${expectedName}`);
    console.log(`Expected price: ${expectedPrice}`);

    await randomItem.getByRole("button", { name: "ADD TO CART" }).click();

    await page.locator("a.shopping_cart_link").click();

    await page.pause();

    expect(page.getByRole("link", { name: "CHECKOUT" })).toBeVisible();

    const actualName = await page.locator(".cart_item_name").innerText();
    const actualDescription = await page.locator(".cart_item_desc").innerText();
    const actualPrice = await page.locator(".cart_item_price").innerText();

    console.log(`Actual name: ${actualName}`);
    console.log(`Actual description: ${actualDescription}`);
    console.log(`Actual price: ${actualPrice}`);

    expect(actualName).toBe(expectedName);
    expect(actualDescription).toEqual(expectedDescription);
    expect(actualPrice).toBe(expectedPrice);
});


