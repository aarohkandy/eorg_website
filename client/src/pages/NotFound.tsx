import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">404</p>
      <h1 className="text-3xl font-semibold mb-3">Page not found</h1>
      <p className="text-muted-foreground text-base mb-8 text-center max-w-xs">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => setLocation("/")}
        className="inline-flex items-center justify-center h-10 px-5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity"
      >
        Back to home
      </button>
    </div>
  );
}
