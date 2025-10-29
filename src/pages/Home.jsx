import Banner from "../components/ui/Banner.jsx";
import Image1 from "@/assets/images/banner/banner1.png";
import Image2 from "@/assets/images/banner/banner2.png";
import Image3 from "@/assets/images/banner/banner3.png";
import Image4 from "@/assets/images/banner/banner4.png";
import Image5 from "@/assets/images/banner/banner5.png";

function Home() {
  const resources = [
    { text: "View Our Pamphlet", href: "#" },
    { text: "View Our Strategic Plan", href: "#" },
  ];

  const raffleWinners = [
    {
      place: "1st Prize",
      name: "Steve Hayward",
      location: "Powell, Ohio",
    },
    {
      place: "2nd Prize - 2024 Ontario Parks Pass",
      name: "Nino Delos Reyes",
      location: "Kingston, ON",
    },
  ];

  return (
    <>
      <Banner images={[Image1, Image2, Image3, Image4, Image5]} />

      <main className="container mx-auto px-4">
        <section className="text-left">
          <h2>Who We Are</h2>
          <p>
            The Friends of Charleston Lake Park is a devoted volunteer
            organization dedicated to the preservation and sustainability of the
            park, its visitors, and its wildlife inhabitants. We actively
            contribute to the park's welfare through vigilant trail monitoring,
            upkeep, and resource equipment fundraising for special projects.
            Additionally, we support engaging programs and events tailored to
            campers and park users while also endorsing research initiatives
            within the park.
          </p>
        </section>

        <hr />

        <section>
          <h2>Resources</h2>
          <ul>
            {resources.map((r, index) => (
              <li key={index}>
                <a href={r.href}>{r.text}</a>
              </li>
            ))}
          </ul>
        </section>

        <hr />

        <section>
          <h2>Our 2024 Raffle Winners</h2>
          {raffleWinners.map((winner, index) => (
            <article key={index}>
              <p>
                <strong>{winner.place}</strong>
              </p>
              <p>{winner.name}</p>
              <p>{winner.location}</p>
            </article>
          ))}

          <p>
            Thanks to all who supported us by purchasing tickets. All proceeds
            go to supporting the Park's many programs and activities.
          </p>
        </section>

        <section>
          <h3>Begin exploring the park now!</h3>
          <img
            src="path/to/image.jpg"
            alt="Scenic view of Charleston Lake Park"
          />
        </section>
      </main>
    </>
  );
}

export default Home;
