    describe('Calculator operations (positive tests) ', () => {
        it('should add 5 + 3= 8', async () => {
            await browser.url('http://juliemr.github.io/protractor-demo/');
            await $('input[ng-model="first"]').setValue(5); 
            await $('select[ng-model="operator"]').click();
            await $('option[value="ADDITION"]').click();
            await $('input[ng-model="second"]').setValue(3);
            await $('#gobutton').click();
            await expect($('.ng-binding')).toHaveText('8');
        }); 
        it('should substract 5 - 3= 2', async () => {
            await browser.url('http://juliemr.github.io/protractor-demo/');
            await $('input[ng-model="first"]').setValue(5); 
            await $('select[ng-model="operator"]').click();
            await $('option[value="SUBTRACTION"]').click();
            await $('input[ng-model="second"]').setValue(3);
            await $('#gobutton').click();
            await expect($('.ng-binding')).toHaveText('2');
        });
        it('should divide 15 / 3= 5', async () => {
            await browser.url('http://juliemr.github.io/protractor-demo/');
            await $('input[ng-model="first"]').setValue(15); 
            await $('select[ng-model="operator"]').click();
            await $('option[value="DIVISION"]').click();
            await $('input[ng-model="second"]').setValue(3);
            await $('#gobutton').click();
            await expect($('.ng-binding')).toHaveText('5');
        });
        it('should multiply 5 * 3= 15', async () => {
            await browser.url('http://juliemr.github.io/protractor-demo/');
            await $('input[ng-model="first"]').setValue(5); 
            await $('select[ng-model="operator"]').click();
            await $('option[value="MULTIPLICATION"]').click();
            await $('input[ng-model="second"]').setValue(3);
            await $('#gobutton').click();
            await expect($('.ng-binding')).toHaveText('15');
        });
        it('should module 5 % 3= 2', async () => {
            await browser.url('http://juliemr.github.io/protractor-demo/');
            await $('input[ng-model="first"]').setValue(5); 
            await $('select[ng-model="operator"]').click();
            await $('option[value="MODULO"]').click();
            await $('input[ng-model="second"]').setValue(3);
            await $('#gobutton').click();
            await expect($('.ng-binding')).toHaveText('2');
        });
    });
    
    describe('Calculator operations', () => {
        it('should save results in the history ', async () => {
            await browser.url('http://juliemr.github.io/protractor-demo/');
            await $('input[ng-model="first"]').setValue(5); 
            await $('select[ng-model="operator"]').click();
            await $('option[value="ADDITION"]').click();
            await $('input[ng-model="second"]').setValue(3);
            await $('#gobutton').click();
            await expect($('tr[ng-repeat="result in memory"]')).toExist();
            await expect($('body > div > table > tbody > tr:nth-child(1) > td:nth-child(1)')).toExist();
            await expect($('body > div > table > tbody > tr:nth-child(1) > td:nth-child(2)')).toExist();
            await expect($('body > div > table > tbody > tr:nth-child(1) > td:nth-child(3)')).toExist();
    
        });
    
    }); 