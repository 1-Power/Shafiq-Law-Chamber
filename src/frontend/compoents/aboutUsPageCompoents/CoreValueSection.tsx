export default function CoreValueSection() {
  return (
    <section className="bg-dracula-current-line py-12">
      <h2 className="text-3xl font-bold text-center text-black">
        Our Core Values
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Integrity */}
        <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-dracula-green text-4xl">⚖️</div>
          <h3 className="mt-4 text-xl font-semibold text-black">Integrity</h3>
          <p className="mt-2 text-black">
            We uphold the highest standards of ethics and honesty in every case
            we handle.
          </p>
        </div>

        {/* Commitment */}
        <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-dracula-green text-4xl">🔒</div>
          <h3 className="mt-4 text-xl font-semibold text-black">Commitment</h3>
          <p className="mt-2 text-black">
            We are dedicated to providing our clients with unwavering support
            and excellent legal representation.
          </p>
        </div>

        {/* Justice */}
        <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-dracula-green text-4xl">⚔️</div>
          <h3 className="mt-4 text-xl font-semibold text-black">Justice</h3>
          <p className="mt-2 text-black">
            We are passionate about ensuring fairness and justice for all,
            championing your rights.
          </p>
        </div>

        {/* Excellence */}
        <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-dracula-green text-4xl">🏆</div>
          <h3 className="mt-4 text-xl font-semibold text-black">Excellence</h3>
          <p className="mt-2 text-black">
            We strive for excellence in all we do, delivering top-notch legal
            services every time.
          </p>
        </div>

        {/* Respect */}
        <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-dracula-green text-4xl">🤝</div>
          <h3 className="mt-4 text-xl font-semibold text-black">Respect</h3>
          <p className="mt-2 text-black">
            We treat every client with dignity and respect, valuing their trust
            in us.
          </p>
        </div>

        {/* Transparency */}
        <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
          <div className="text-dracula-green text-4xl">🔍</div>
          <h3 className="mt-4 text-xl font-semibold text-black">
            Transparency
          </h3>
          <p className="mt-2 text-black">
            We maintain open and honest communication, ensuring you are informed
            every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
