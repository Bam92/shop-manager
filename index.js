class Good {
    constructor(denomination, cost)

    {
        this.denomination = denomination;
        this.cost = cost;
    }
}

class Computer extends Good {
    constructor(denomination, cost, provider)

    {
        super(denomination, cost);
        this.provider = provider;
    }
}

class Phone {
    constructor() {
        this.goods = [];
    }

    newGood(cost, good) {
        this.goods.push(...Array(cost).fill(good));
    }
}
