import CEOImage from "../../../assets/images/slc-Copy.png";
export default function IntroductionSection() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row py-12 items-center">
      <div className="md:w-1/2 px-6">
        <img src={CEOImage} alt="Founder" className="rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2 px-6 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold">
          Leadership at Shafiq Law Chamber: Saqib Shafiq, CEO
        </h2>
        <p className="mt-4 text-dracula-foreground text-justify">
          <span className="text-dracula-foreground font-bold">
            Saqib Shafiq,
          </span>{" "}
          CEO of Shafiq Law Chamber, is a seasoned legal professional with
          expertise in Business, Criminal, Family, Civil, and Corporate Law. His
          extensive experience allows him to navigate complex legal matters,
          providing tailored solutions for businesses and individuals alike.
          From corporate governance and contracts to defending clients in
          criminal cases and resolving family and civil disputes, Saqib combines
          strategic insight with a deep commitment to his clients' success. His
          proficiency in guiding businesses through legal frameworks and
          regulatory challenges further underscores his role as a trusted
          advisor in the legal community.
        </p>
      </div>
    </section>
  );
}
