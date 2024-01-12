let paymentM="paypal"

switch(paymentM){
    case "credit":
        console.log(paymentM," may have a processing fee of 2%");
        break;
    case "debit":
        console.log(paymentM," may have a processing fee of 1.5%");
        break;
    case "paypal":
        console.log(paymentM," may have a processing fee of 3%");
        break;
    default:
        console.log("invalid payment");
}