export default function footer() {
  return (
    <div className=" text-dracula-foreground">
      <footer className="bg-dracula-current-line py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Shafiq Law Chamber. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
