import { browser } from '@wdio/globals'

export default class Page {

    public open (ref:string) {
        switch (ref) {
          case "1":
              browser.url(`https://amazon.com/`);
            break;
          case "2":
              browser.url(`https://amazon.com/`);
            break;
          case "3":
              browser.url(`https://www.amazon.com/GeForce-Control-192-bit-Tarjeta-gr%C3%A1fica/dp/B0CB35FVSS/ref=sr_1_1_sspa?crid=2KDLVCPE8AJAX&keywords=gtx4090ti&qid=1695861567&sprefix=gtx4090%2Caps%2C183&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1`);
            break;
        }
        browser.maximizeWindow()
    }
}
