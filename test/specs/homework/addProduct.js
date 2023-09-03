import { expect, browser, $ } from '@wdio/globals'


describe ('addProduct',()=>{
    before(async()=>{
        await browser.url (`https://www.saucedemo.com/`)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()
    })


    it('should add the first product to the cart',async()=>{
        
        //Steps to execute
        await $('#add-to-cart-sauce-labs-backpack').click()

        //Expected result
        await expect ($('.shopping_cart_badge')).toHaveText('1');
    })


    it ('verify the added product', async ()=>{

        //Steps to execute
        await $ ('.shopping_cart_link').click()

        //Expected result
        await expect($('.inventory_item_name')).toHaveText('Sauce Labs Backpack')
    })


    it ('remove the product', async()=>{

        //Steps to execute
        await $ ('#remove-sauce-labs-backpack').click()

        //Expected result
        await expect ($('.shopping_cart_link')).not.toHaveAttr('.shopping_cart_badge')
    })
        
})
