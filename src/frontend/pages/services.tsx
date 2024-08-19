export default function services() {
  return (
    <div>
      <main>
        {/* Services Section */}
        <section id="services" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Services</h2>
            <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-dracula-current-line p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Service 1</h3>
                <p className="mt-4">Description of service 1.</p>
              </div>
              <div className="bg-dracula-current-line p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Service 2</h3>
                <p className="mt-4">Description of service 2.</p>
              </div>
              <div className="bg-dracula-current-line p-6 rounded-lg">
                <h3 className="text-xl font-semibold">Service 3</h3>
                <p className="mt-4">Description of service 3.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
