"use client";
import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/personalinfo";
import AddressInfo from "./components/adressinfo";
import Preferences from "./components/Prefrencesinfo";
import Sidebar from "./components/sidebar";
import Review from "./components/review";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zipCode: "",
    preferences: {
      emailNotifications: false,
      smsAlerts: false,
      newsletters: false,
    },
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    if (storedMode) {
      setIsDarkMode(storedMode === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const updateFormData = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const updatePreferences = (field: string, value: boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      preferences: { ...prevData.preferences, [field]: value },
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-gray-800 text-white p-4 dark:bg-gray-100 dark:text-gray-800 dark:border-2 border-blue-500">
        <h1 className="text-2xl font-bold text-center">Multi-Step Form</h1>
      </header>

      <main className="bg-gray-100 min-h-screen flex justify-center items-center pt-3 py-12">
        <div className="bg-gray-800 dark:bg-white w-full max-w-7xl md:max-w-4xl rounded-lg shadow-md flex flex-col md:flex-row gap-8 p-4">
          <Sidebar />
          <div className="flex-1">
            {step === 1 && (
              <PersonalInfo
                formData={formData}
                setFormData={setFormData}
                onNext={handleNext}
              />
            )}
            {step === 2 && (
              <AddressInfo
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <Preferences
                formData={formData}
                updatePreferences={updatePreferences}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 4 && (
              <Review
                formData={formData}
                onSubmit={() => alert("Form Submitted!")}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:border-2 border-blue-500 text-white text-center py-4">
        <p>&copy; 2024 Multi-Step Form. All rights reserved.</p>
      </footer>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-5 right-5 p-3 bg-gray-800 text-white rounded-full shadow-md dark:text-gray-800 dark:bg-white dark:border-2 border-blue-500"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
