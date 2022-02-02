/**
 * It returns the background color of the status.
 * @returns The status background color.
 */
const statusBackground = (status) => {
  const allStatus = {
    مكتمل: "bg-gray-500",
    "تحت التنفيذ": "bg-blue-500",
    مفتوح: "bg-green-500",
  };
  return allStatus[status] || "bg-green-500";
};

export default statusBackground;
