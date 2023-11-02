import { assert, expect } from "chai";

export class Assertions{

    public async isTrue(par:number,variable:boolean){
        par === 0 ? assert.isTrue(variable) : assert.isNotTrue(variable);
    }

    public async toEqual(par:number,actual:any, expected:any){
        par === 0 ? expect(actual).to.equal(expected) : expect(actual).to.not.equal(expected);
    }
}