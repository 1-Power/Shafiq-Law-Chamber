export default function TeamSection() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-dracula-foreground">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="text-center bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/path-to-team-member.jpg"
            alt="Team Member"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h3 className="mt-4 text-xl font-semibold text-dracula-foreground">
            John Doe
          </h3>
          <p className="text-dracula-comment">Senior Lawyer</p>
        </div>
        <div className="text-center bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/path-to-team-member.jpg"
            alt="Team Member"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h3 className="mt-4 text-xl font-semibold text-dracula-foreground">
            Jane Smith
          </h3>
          <p className="text-dracula-comment">Associate Lawyer</p>
        </div>
        <div className="text-center bg-dracula-current-line p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/path-to-team-member.jpg"
            alt="Team Member"
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h3 className="mt-4 text-xl font-semibold text-dracula-foreground">
            Michael Lee
          </h3>
          <p className="text-dracula-comment">Junior Lawyer</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
}
