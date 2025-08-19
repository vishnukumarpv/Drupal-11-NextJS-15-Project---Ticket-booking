type OrderSummaryProps = {
  subtotal: number;
  currency?: string;
};

export default function OrderSummary({ subtotal, currency = "£" }: OrderSummaryProps) {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md space-y-2">
      <div className="flex justify-between text-lg font-medium text-gray-800 dark:text-gray-100">
        <span>Sub total:</span>
        <span>
          {currency}
          {subtotal.toFixed(2)}
        </span>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Total fees will be calculated in the next step.
      </p>
    </div>
  );
}
