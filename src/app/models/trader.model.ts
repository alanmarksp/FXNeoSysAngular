import {Serializable} from "./serializable.interface";

export class Trader implements Serializable<Trader> {

    private username: string;
    private email: string;
    private first_name: string;
    private last_name: string;

    public getUsername() {
        return this.username;
    }

    public getEmail() {
        return this.email;
    }

    getFirst() {
        return this.first_name;
    }

    getLastName() {
        return this.last_name
    }

    deserialize(input: any): Trader {
        this.username = input.username;
        this.email = input.email;
        this.first_name = input.first_name;
        this.last_name = input.last_name;
        return this
    }
}