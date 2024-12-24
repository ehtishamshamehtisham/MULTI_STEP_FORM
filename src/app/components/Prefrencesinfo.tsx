import React from "react";

type Props = {
  formData: any;
  updatePreferences: (field: string, value: boolean) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function PreferencesInfo({ formData, updatePreferences, onNext, onBack }: Props) {
  return (
    <form className="space-y-6">
      <h2 className="text-white text-2xl font-bold dark:text-gray-800">Preferences</h2>

      <div>
        <label className="flex items-center text-white dark:text-gray-800">
          <input
            type="checkbox"
            checked={formData.preferences.emailNotifications}
            onChange={(e) => updatePreferences("emailNotifications", e.target.checked)}
          />
          <span className="ml-2">Receive Email Notifications</span>
        </label>
      </div>

      <div>
        <label className="flex items-center text-white dark:text-gray-800">
          <input
            type="checkbox"
            checked={formData.preferences.smsAlerts}
            onChange={(e) => updatePreferences("smsAlerts", e.target.checked)}
          />
          <span className="ml-2">Enable SMS Alerts</span>
        </label>
      </div>

      <div>
        <label className="flex items-center text-white dark:text-gray-800">
          <input
            type="checkbox"
            checked={formData.preferences.newsletters}
            onChange={(e) => updatePreferences("newsletters", e.target.checked)}
          />
          <span className="ml-2">Subscribe to Newsletters</span>
        </label>
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
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </form>
  );
}
