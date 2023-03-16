interface BHInterface {
    history: string[];
    length: number;
    index: number;
}

class BrowserHistory implements BHInterface {
    history: string[] = [];
    index: number = 0;
    length: number = 0;
    constructor(homepage: string) {
        this.history.push(homepage)
        this.length = 1;
    }

    visit(url: string): void {
        if (this.index === this.history.length - 1) {
            this.history.push(url);
        } else {
            this.history[this.index + 1] = url;
        }
        this.index++;
        this.length = this.index + 1;
    }

    back(steps: number): string {
        this.index = Math.max(0, this.index - steps);
        return this.history[this.index];
    }

    forward(steps: number): string {
        this.index = Math.min(this.length - 1, this.index + steps);
        return this.history[this.index];
    }
}


let bh = new BrowserHistory("esgriv.com");
console.log(bh, bh.history, bh.index)
let calls: Function[] = [bh.visit, bh.visit, bh.back, bh.visit, bh.forward, bh.visit, bh.visit, bh.forward, bh.visit, bh.back, bh.visit, bh.visit, bh.forward].map(fn => fn.bind(bh))
let inputs = [["cgrt.com"], ["tip.com"], [9], ["kttzxgh.com"], [7], ["crqje.com"], ["iybch.com"], [5], ["uun.com"], [10], ["hci.com"], ["whula.com"], [10]]

for (let i = 0; i < calls.length; i++) {
    console.log('input:', [calls[i], inputs[i][0]], 'output:', calls[i](inputs[i][0]));
    console.log(bh.history, bh.index, bh.length)
}
