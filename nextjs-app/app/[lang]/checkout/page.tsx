import CheckoutForm from "../components/checkout/Checkout";
import OrderSummary from "./components/OrderSummary";

const Checkout = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold tracking-tight text-gray-800 mb-10">Match Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className=""><CheckoutForm /></div>
        <div>
          <OrderSummary subtotal={12} />
        </div>
      </div>
      
    </div>
  )
}

export default Checkout;