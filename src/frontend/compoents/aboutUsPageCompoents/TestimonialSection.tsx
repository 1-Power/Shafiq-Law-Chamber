export default function TestimonialSection() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-dracula-foreground">
        What Our Clients Say
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <p className="text-dracula-foreground">"Excellent legal service!"</p>
          <p className="mt-4 font-bold text-dracula-primary">- Jane Smith</p>
        </div>
        <div className="bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <p className="text-dracula-foreground">
            "Professional and supportive!"
          </p>
          <p className="mt-4 font-bold text-dracula-primary">- John Doe</p>
        </div>
        <div className="bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <p className="text-dracula-foreground">"Highly recommend!"</p>
          <p className="mt-4 font-bold text-dracula-primary">- Alice Johnson</p>
        </div>
        <div className="bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <p className="text-dracula-foreground">
            "Truly exceptional service!"
          </p>
          <p className="mt-4 font-bold text-dracula-primary">- Michael Brown</p>
        </div>
        <div className="bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <p className="text-dracula-foreground">
            "Very knowledgeable and thorough!"
          </p>
          <p className="mt-4 font-bold text-dracula-primary">- Emily Davis</p>
        </div>
        <div className="bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <p className="text-dracula-foreground">
            "Best legal advice I've received!"
          </p>
          <p className="mt-4 font-bold text-dracula-primary">- Chris Wilson</p>
        </div>
      </div>
    </section>
  );
}
