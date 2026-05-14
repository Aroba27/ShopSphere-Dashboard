import {ExportToCSV} from "../utilis/CSVExport"
import { Download } from "lucide-react";

export const ExportButton = ({ data, columns, filename }) => {
  const handleExport = () => {
    ExportToCSV(data, columns, filename);
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition"
    >
      <Download size={16} />
      Export
    </button>
  );
};