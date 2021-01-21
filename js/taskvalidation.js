function Validation() {
    this.arrThongBao = ["(*)Vui Nhập Task(*)", "(*)Task Đã Tồn Tại(*)"];

    //Check empty
    this.checkEmpty = function (input, idSpan, messID) {
        if (input === "") {
            getEle(idSpan).style.display = "inline-block";
            getEle(idSpan).style.color = "pink";
            getEle(idSpan).innerHTML = this.arrThongBao[messID];
            return false;
        }
        getEle(idSpan).innerHTML = "";
        return true;
    };

    //check trung
    this.checkTrung = function (input, idSpan, messID, taskArray) {
        for (i = 0; i < taskArray.length; i++) {
            if (input.toLowerCase() === taskArray[i].taskName.toLowerCase()) {
                getEle(idSpan).style.display = "inline-block";
                getEle(idSpan).style.color = "pink";
                getEle(idSpan).innerHTML = this.arrThongBao[messID + 1];
                return false;
            }
        }
        return true;
    }
}