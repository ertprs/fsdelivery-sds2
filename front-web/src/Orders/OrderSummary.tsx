import { FormatPrice } from "./helper";


type Props = {
    amount : number;
    totalPrice : number;
    onSubmit : () => void
}

function OrderSummary({ amount, totalPrice, onSubmit: onSubmit } : Props){

    return(
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                <span className="amount-selected-container">
                    <strong className= "amount-selected">{amount}</strong>
                    Pedidos selecionados
                </span>
                <span className="order-summary-total">
                    <strong className= "amount-selected">{FormatPrice(totalPrice)}</strong>
                    valor total
                </span>
                </div>
                <button 
                className="order-summary-make-order"
                onClick={onSubmit}
                >
                    Fazer Pedido
                </button>
            </div>
        </div>
    )
}


export default OrderSummary;