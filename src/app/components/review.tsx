import React from "react";

export default function Review({ formData, onSubmit, onBack }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-white text-2xl font-bold dark:text-gray-800">Review & Submit</h2>

      <div>
        <p className="text-white dark:text-gray-800">Name: {formData.name}</p>
        <p className="text-white dark:text-gray-800">Email: {formData.email}</p>
        <p className="text-white dark:text-gray-800">Phone: {formData.phone}</p>
        <p className="text-white dark:text-gray-800">City: {formData.city}</p>
        <p className="text-white dark:text-gray-800">State: {formData.state}</p>
        <p className="text-white dark:text-gray-800">ZIP Code: {formData.zipCode}</p>
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
          type="button"
          onClick={onSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
