/// <reference path="coin.ts" />
class VendingMachine {
	private paid: number = 0;
	acceptCoin = (coin: Quarter): void => {
		this.paid += coin.Value
		var el = document.getElementById("total");
		el.innerHTML = this.paid.toString();
	};
}
