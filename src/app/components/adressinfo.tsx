import React from "react";

type Props = {
  formData: any;
  updateFormData: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function AddressInfo({ formData, updateFormData, onNext, onBack }: Props) {
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.city || !formData.state || !formData.zipCode) {
      alert("Please fill in all the required fields.");
      return;
    }

    onNext();
  };

  return (
    <form className="space-y-6" onSubmit={handleNext}>
      <h2 className="text-white text-2xl font-bold dark:text-gray-800">Address Details</h2>

      <div>
        <label htmlFor="city" className="block text-white dark:text-gray-800">City</label>
        <input
          type="text"
          id="city"
          value={formData.city}
          onChange={(e) => updateFormData("city", e.target.value)}
          className="w-full p-2 rounded border-2 border-blue-500"
          placeholder="Enter your city"
          required
        />
      </div>

      <div>
        <label htmlFor="state" className="block text-white dark:text-gray-800">State</label>
        <input
          type="text"
          id="state"
          value={formData.state}
          onChange={(e) => updateFormData("state", e.target.value)}
          className="w-full p-2 rounded border-2 border-blue-500"
          placeholder="Enter your state"
          required
        />
      </div>

      <div>
        <label htmlFor="zipCode" className="block text-white dark:text-gray-800">ZIP Code</label>
        <input
          type="text"
          id="zipCode"
          value={formData.zipCode}
          onChange={(e) => updateFormData("zipCode", e.target.value)}
          className="w-full p-2 border rounded border-2 border-blue-500"
          placeholder="Enter your ZIP Code"
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
}
