import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Karta raqami: ${data.cardNumber}\nAmal qilish sanasi: ${data.expiryDate}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          To'lovni amalga oshirish
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="card-number"
              className="block text-gray-700 font-semibold mb-2"
            >
              Karta Raqami
            </label>
            <input
              type="text"
              id="card-number"
              placeholder="8600 1234 5678 9101"
              className={`w-full px-4 py-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-indigo-200`}
              maxLength="19"
              {...register("cardNumber", {
                required: "Karta raqami kiritilishi shart!",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Karta raqami faqat raqamlardan iborat bo‘lishi kerak va 16 ta raqamdan iborat bo‘lishi kerak!",
                },
              })}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="expiry-date"
              className="block text-gray-700 font-semibold mb-2"
            >
              Amal Qilish Sanasi
            </label>
            <input
              type="text"
              id="expiry-date"
              placeholder="MM/YY"
              className={`w-full px-4 py-2 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring focus:ring-indigo-200`}
              maxLength="5"
              {...register("expiryDate", {
                required: "Amal qilish sanasi kiritilishi shart!",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                  message: "Amal qilish sanasi MM/YY formatida bo‘lishi kerak!",
                },
              })}
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            To'lovni amalga oshirish
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
