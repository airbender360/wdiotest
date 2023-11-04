import { $ } from '@wdio/globals'
import Page from './page';
import { browser } from '@wdio/globals'
import axios from 'axios';

export class ProductVerifyPage extends Page {

    public open (ref:number) {
        return super.open(ref);
    }
    
    public get featuresMenu(){return browser.$$('//*[@id="feature-bullets"]/ul/li')} // #feature-bullets ul li
    
    public get amazonsChoice(){return $('span[class="a-size-small aok-float-left ac-badge-rectangle"]')}; // #acBadge_feature_div span span.a-size-small

    public get amazonsChoiceAmazon(){return $('span.ac-badge-text-primary')};
    
    public get amazonsChoiceChoice(){return $('span.ac-badge-text-secondary')};
    
    public get ram(){return $('(//*[@class="a-size-base po-break-word"])[3]')};

    public get brand(){return $('(//*[@class="a-size-base po-break-word"])[2]')};

    public get price(){return $('//*[@id="corePrice_feature_div"]/div/div/span[1]/span[1]')}; // apunta al precio directo (#corePrice_feature_div .a-offscreen) -- xpath> //*[@id="corePrice_feature_div"]/div/div/span[1]/span[1]

    public get total(){return $('.a-size-medium.a-color-base._p13n-desktop-sims-fbt_fbt-desktop_total-amount__wLVdU')};
    
    public get importFee(){return $('script+span.a-size-base.a-color-secondary')};
}

export default new ProductVerifyPage();