import { CreditCard, Wallet, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: <CreditCard className="h-6 w-6" />,
    description: 'Visa, Mastercard, American Express',
  },
  {
    id: 'upi',
    name: 'UPI Payment',
    icon: <Smartphone className="h-6 w-6" />,
    description: 'Google Pay, PhonePe, BHIM',
  },
  {
    id: 'wallet',
    name: 'Digital Wallet',
    icon: <Wallet className="h-6 w-6" />,
    description: 'BookShop Wallet Balance',
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    icon: <Wallet className="h-6 w-6" />,
    description: 'Pay when you receive your order',
  },
];

interface PaymentMethodsProps {
  selectedMethod: string;
  onSelect: (methodId: string) => void;
}

export function PaymentMethods({ selectedMethod, onSelect }: PaymentMethodsProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg mb-4">Select Payment Method</h3>
      <div className="grid grid-cols-2 gap-3">
        {paymentMethods.map(method => (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selectedMethod === method.id
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'}>
                {method.icon}
              </span>
            </div>
            <p className="font-semibold text-sm">{method.name}</p>
            <p className="text-xs text-gray-500 mt-1">{method.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}