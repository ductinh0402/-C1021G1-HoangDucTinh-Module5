var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let money = 10000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 1000001;
const promise = buyACar("  Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
let x = 0;
function r5() {
    return __awaiter(this, void 0, void 0, function* () {
        x += 1;
        console.log(x);
        return 5;
    });
}
(() => __awaiter(this, void 0, void 0, function* () {
    x += yield r5();
    console.log(x);
}))();
//# sourceMappingURL=main.js.map