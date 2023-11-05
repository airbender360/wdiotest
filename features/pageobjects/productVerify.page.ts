import { $ } from '@wdio/globals';
import Page from './page';
import { browser } from '@wdio/globals';

export class ProductVerifyPage extends Page {

    public open (ref:number) {
        return super.open(ref);
    }
    
    public get featuresMenu(){return browser.$$('//*[@id="feature-bullets"]/ul/li')};  // #feature-bullets ul li
    
    public get amazonsChoice(){return $('span[class="a-size-small aok-float-left ac-badge-rectangle"]')};  // #acBadge_feature_div span span.a-size-small
    
    public get ram(){return $('(//*[@class="a-size-base po-break-word"])[3]')};

    public get brand(){return $('(//*[@class="a-size-base po-break-word"])[2]')};

    public get price(){return $('.a-price.aok-align-center')};

    public get detailsButton(){return $('#amazonGlobal_feature_div [role~="button"]')}; 

    public get total(){return $('(//*[@class="a-lineitem"]/tbody/tr[5]/td[3]/span)[2]')};
    
    public get importFee(){return $('#amazonGlobal_feature_div script+span')};  //script+span.a-size-base.a-color-secondary
}

export default new ProductVerifyPage();