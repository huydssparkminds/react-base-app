const LoadingPage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-content1">
      <div className="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-primary-500"></div>
    </div>
  );
};

export default LoadingPage;
