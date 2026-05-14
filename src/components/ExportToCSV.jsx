export const ExportToCSV = (data, columns, filename = "export.csv") => {
  const headers = columns.map(col => col.header);

  const rows = data.map(item =>
    columns.map(col => col.accessor(item))
  );

  const csvRows = rows.map(row => row.join(","));
  const csvData = [headers.join(","), ...csvRows].join("\n");

  const blob = new Blob([csvData], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  window.URL.revokeObjectURL(url);
};