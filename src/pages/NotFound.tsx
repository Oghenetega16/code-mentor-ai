export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-700">The page you're looking for doesn't exist or has been moved.</p>
        </div>
    );
}
