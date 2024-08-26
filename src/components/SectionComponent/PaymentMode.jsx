import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaUniversity,
  FaCreditCard,
  FaWallet,
  FaLaptop,
  FaMobileAlt,
} from "react-icons/fa";

const PaymentMode = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[98%] border border-gray-600 mb-4 m-[auto]">
      <h2 className="text-lg font-semibold mb-4">Payment Mode</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          <FaUniversity className="text-blue-500 mr-2" />
          <span>Deposit to Account</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          <FaLaptop className="text-blue-500 mr-2" />
          <span>Net Banking</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          <FaCreditCard className="text-blue-500 mr-2" />
          <span>Credit Card/Debit Card</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          <FaMobileAlt className="text-blue-500 mr-2" />
          <span>UPI</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          <FaWallet className="text-blue-500 mr-2" />
          <span>Wallets (PayTM/PhonePe/Amazon etc.)</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          <FaWallet className="text-blue-500 mr-2" />
          <span>Wallets (PayTM/PhonePe/Amazon etc.)</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
