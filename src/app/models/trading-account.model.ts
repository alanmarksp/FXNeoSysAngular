import {Serializable} from "./serializable.interface";
export class TradingAccount implements Serializable<TradingAccount>{

    private id: number;
    private funds: number;
    private realized_profit: number;

    public getId() {
        return this.id
    }

    public getFunds() {
        return this.funds
    }

    public getRealizaedProfit() {
        return this.realized_profit
    }

    deserialize(input: any): TradingAccount {
        this.id = input.id;
        this.funds = input.funds;
        this. realized_profit = input.realized_profit;
        return this;
    }
}