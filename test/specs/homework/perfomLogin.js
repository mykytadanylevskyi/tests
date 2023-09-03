    import { expect, browser, $ } from '@wdio/globals'
    describe ('Perform Login', () =>{
        it ('should login using `standard_user`', async() =>{
            await browser.url (`https://www.saucedemo.com/`)

            //filling credentials
            await $('#user-name').setValue('standard_user')
            await $('#password').setValue('secret_sauce')
            await $('#login-button').click()
            await browser.setTimeout({ 'script': 5000 })

            //set up products amount
            const products = await $$('.inventory_item')

            //expected results
            await expect ($('.title')).toHaveTextContaining('Products')
            await expect ($('.shopping_cart_link')).toBeExisting()
            await expect(products.length).toBeGreaterThan(1);
        })  
    })