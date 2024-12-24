"use client";
import React, { useState, useEffect } from "react";
// Importing necessary components

export default function PersonalInfo({ formData, setFormData, onNext }: Props) {
  return (
    <form className="space-y-6">
      <h2 className="text-white text-2xl font-bold dark:text-gray-800">Personal Info</h2>

      <div>
        <label htmlFor="name" className="block text-white dark:text-gray-800">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
          className="w-full p-2 rounded border-2 border-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-white dark:text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))}
          className="w-full p-2 rounded border-2 border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-white dark:text-gray-800">Phone</label>
        <input
          type="text"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData((prevData) => ({ ...prevData, phone: e.target.value }))}
          className="w-full p-2 rounded border-2 border-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
}
