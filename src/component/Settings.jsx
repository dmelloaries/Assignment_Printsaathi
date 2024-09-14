import { useState } from "react";
import { Printer, Minus, Plus } from "lucide-react";
import BW from "../assets/BW.png";
import color from "../assets/color.png";

const Setting2 = () => {
  const [copies, setCopies] = useState(1);
  const [paperSize, setPaperSize] = useState("A4");
  const [paperType, setPaperType] = useState("Normal Paper");
  const [paperThickness, setPaperThickness] = useState("750GSM");
  const [printingSide, setPrintingSide] = useState("Single side");
  const [binding, setBinding] = useState("No binding");
  const [orientation, setOrientation] = useState("Portrait");
  const [printColor, setPrintColor] = useState("Color");

  const increaseCopies = () => setCopies((prev) => prev + 1);
  const decreaseCopies = () => setCopies((prev) => (prev > 1 ? prev - 1 : 1));

  const pricePerCopy = 3; // Example price per copy
  const totalAmount = copies * pricePerCopy;

  return (
    <div className="bg-white p-4 sm:p-8 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6">
        <h2 className="text-xl font-bold mb-1">Print Settings</h2>
        <p className="text-sm text-gray-500 mb-4 sm:mb-6">
          Same settings apply to all pages
        </p>
        <hr className="mb-4 sm:mb-6" />

        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
          {/* Copies */}
          <div className="flex items-center justify-between">
            <label htmlFor="copies" className="text-sm font-bold text-black">
              Copies
            </label>
            <div className="flex items-center border border-green-600 rounded-md">
              <button
                className="p-2 text-green-600 hover:bg-green-50"
                onClick={decreaseCopies}
                aria-label="Decrease copies"
              >
                <Minus size={16} />
              </button>
              <input
                id="copies"
                type="number"
                className="w-12 text-center border-x border-green-600 bg-green-50"
                value={copies}
                readOnly
              />
              <button
                className="p-2 text-green-600 hover:bg-green-50"
                onClick={increaseCopies}
                aria-label="Increase copies"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Paper Size */}
          <div className="flex items-center justify-between">
            <label htmlFor="paperSize" className="text-sm font-bold text-black">
              Paper Size
            </label>
            <select
              id="paperSize"
              className="w-48 border border-green-600 rounded-md p-2 bg-green-50"
              value={paperSize}
              onChange={(e) => setPaperSize(e.target.value)}
            >
              <option value="A4">A4</option>
              <option value="A3">A3</option>
              <option value="Letter">Letter</option>
            </select>
          </div>

          {/* Paper Type */}
          <div className="flex items-center justify-between">
            <label htmlFor="paperType" className="text-sm font-bold text-black">
              Paper Type
            </label>
            <select
              id="paperType"
              className="w-48 border border-green-600 rounded-md p-2 bg-green-50"
              value={paperType}
              onChange={(e) => setPaperType(e.target.value)}
            >
              <option value="Normal Paper">Normal Paper</option>
              <option value="Glossy Paper">Glossy Paper</option>
            </select>
          </div>

          {/* Paper Thickness */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="paperThickness"
              className="text-sm font-bold text-black"
            >
              Paper Thickness
            </label>
            <select
              id="paperThickness"
              className="w-48 border border-green-600 rounded-md p-2 bg-green-50"
              value={paperThickness}
              onChange={(e) => setPaperThickness(e.target.value)}
            >
              <option value="750GSM">750GSM</option>
              <option value="100GSM">100GSM</option>
              <option value="150GSM">150GSM</option>
            </select>
          </div>

          {/* Printing Side */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="printingSide"
              className="text-sm font-bold text-black"
            >
              Printing Side
            </label>
            <select
              id="printingSide"
              className="w-48 border border-green-600 rounded-md p-2 bg-green-50"
              value={printingSide}
              onChange={(e) => setPrintingSide(e.target.value)}
            >
              <option value="Single side">Single side</option>
              <option value="Double side">Double side</option>
            </select>
          </div>

          {/* Binding */}
          <div className="flex items-center justify-between">
            <label htmlFor="binding" className="text-sm font-bold text-black">
              Binding
            </label>
            <select
              id="binding"
              className="w-48 border border-green-600 rounded-md p-2 bg-green-50"
              value={binding}
              onChange={(e) => setBinding(e.target.value)}
            >
              <option value="No binding">No binding</option>
              <option value="Spiral binding">Spiral binding</option>
            </select>
          </div>

          {/* Orientation */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="orientation"
              className="text-sm font-bold text-black"
            >
              Orientation
            </label>
            <div className="flex space-x-2">
              <button
                className="p-2 border border-green-600 rounded-md hover:bg-green-50"
                onClick={() => setOrientation("Portrait")}
                aria-label="Portrait orientation"
              >
                <Printer size={24} />
              </button>
              <button
                className="p-2 border border-green-600 rounded-md hover:bg-green-50"
                onClick={() => setOrientation("Landscape")}
                aria-label="Landscape orientation"
              >
                <Printer size={24} className="rotate-90" />
              </button>
            </div>
          </div>

          {/* Print Color */}
          <div className="flex items-center justify-between">
            <label
              htmlFor="printColor"
              className="text-sm font-bold text-black"
            >
              Print Color
            </label>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 border border-green-600 rounded-md text-sm ${
                  printColor === "Black & White" ? "bg-green-50" : "bg-white"
                }`}
                onClick={() => setPrintColor("Black & White")}
                aria-label="Black & White"
              >
                <img src={BW} alt="Black & White" className="w-6 h-6" />
              </button>
              <button
                className={`px-3 py-1 border border-green-600 rounded-md text-sm ${
                  printColor === "Color" ? "bg-green-50" : "bg-white"
                }`}
                onClick={() => setPrintColor("Color")}
                aria-label="Color"
              >
                <img src={color} alt="Color" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Printing Instructions */}
          <div>
            <label
              htmlFor="instructions"
              className="block text-sm font-bold text-black mb-1"
            >
              Printing Instructions
            </label>
            <textarea
              id="instructions"
              className="w-full border border-green-600 rounded-md p-2 bg-green-50"
              rows="3"
              placeholder="Provide any additional printing preferences"
            ></textarea>
          </div>
        </div>

        {/* Summary and Add to Cart */}
        <div className="mt-8 flex items-center justify-between">
          <div className="bg-green-50 border border-green-200 rounded-md p-3 mr-4">
            <p className="text-sm">
              Number of Pages: <span className="font-bold">{copies}</span>
            </p>
            <p className="text-sm">
              Total Amount: <span className="font-bold">Rs {totalAmount}</span>
            </p>
          </div>
          <button className="bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 whitespace-nowrap">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting2;
