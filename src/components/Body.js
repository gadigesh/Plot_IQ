import React from "react";
import { useState } from "react";
// import html2pdf from "html2pdf.js";
import { cities } from "../utils/Constant";

const Body = () => {
  const [formData, setFormData] = useState();
  const handleChange = (field, value) => {
    console.log(field, value);
    setFormData({ ...formData, [field]: value });
  };

  //   const handleDownloadPDF = () => {
  //     if (resultRef.current) {
  //       html2pdf().from(resultRef.current).save("building-plan-estimate.pdf");
  //     }
  //   };
  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-xl font-bold">🏗️ Building Plan Input</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Plot Length (ft)"
          className="border p-2 rounded"
          onChange={(e) => handleChange("length", e.target.value)}
        />
        <input
          type="text"
          placeholder="Plot Breadth (ft)"
          className="border p-2 rounded"
          onChange={(e) => handleChange("breadth", e.target.value)}
        />
      </div>

      <select
        className="border p-2 rounded w-full"
        onChange={(e) => handleChange("facing", e.target.value)}
        placeholder="Please Select the Direction face"
      >
        <option value="">Select the House Face Direction</option>
        <option value="east">East</option>
        <option value="west">West</option>
        <option value="north">North</option>
        <option value="south">South</option>
      </select>

      <select
        className="border p-2 rounded w-full"
        onChange={(e) => handleChange("floors", e.target.value)}
      >
        <option value="">Please select the House floors</option>
        <option value="G">Ground</option>
        <option value="G+1">Ground+1</option>
        <option value="G+2">Ground+2</option>
        <option value="G+3">Ground+3</option>
        <option value="Duflex">Duflex</option>
      </select>

      <select
        className="border p-2 rounded w-full"
        onChange={(e) => handleChange("bhk", e.target.value)}
      >
        <option value="1BHK">1BHK</option>
        <option value="2BHK">2BHK</option>
        <option value="3BHK">3BHK</option>
      </select>

      <select
        className="border p-2 rounded w-full"
        onChange={(e) => handleChange("type", e.target.value)}
      >
        <option value="">Select type of Living</option>
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
        <option value="luxury">Luxury</option>
      </select>
      <select
        className="border p-2 rounded w-full"
        onChange={(e) => handleChange("type", e.target.value)}
      >
        <option value="">Select type of Living(Optional)</option>
        <option value="compound">Compound wall</option>
        <option value="borewell">Borewell</option>
        <option value="parking">Parking</option>
        <option value="inside">Staircase Inside</option>
        <option value="outside">Staircase Outside</option>
      </select>
      <select
        className="border p-2 rounded w-full"
        onChange={(e) => handleChange("type", e.target.value)}
      >
        <option value="">Location (City/State)</option>
        {cities.map((city, index) => (
          <option value={city.index}>{city.city_name}</option>
        ))}
      </select>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};

export default Body;
