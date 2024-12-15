export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
