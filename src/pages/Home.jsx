import { useEffect, useState } from "react";
import Banner from "../components/ui/Banner.jsx";
import Image1 from "@/assets/images/banner/banner1.png";
import Image2 from "@/assets/images/banner/banner2.png";
import Image3 from "@/assets/images/banner/banner3.png";
import Image4 from "@/assets/images/banner/banner4.png";
import Image5 from "@/assets/images/banner/banner5.png";
import mobileImage1 from "@/assets/images/banner/mobile/banner1.png";
import mobileImage2 from "@/assets/images/banner/mobile/banner2.png";
import mobileImage3 from "@/assets/images/banner/mobile/banner3.png";
import mobileImage4 from "@/assets/images/banner/mobile/banner4.png";
import mobileImage5 from "@/assets/images/banner/mobile/banner5.png";
import winners from "@/assets/images/raffle/2025winners.png";
import cta from "@/assets/images/home_cta.jpg";

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      <Banner
        images={
          isMobile
            ? [
                mobileImage1,
                mobileImage2,
                mobileImage3,
                mobileImage4,
                mobileImage5,
              ]
            : [Image1, Image2, Image3, Image4, Image5]
        }
      />

      <div id="page-content" className="container">
        <div className="mx-auto space-y-8">
          <section className="mt-12">
            <h2 className="text-center mb-6">Who We Are</h2>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
              The Friends of Charleston Lake Park is a devoted volunteer
              organization dedicated to the preservation and sustainability of
              the park, its visitors, and its wildlife inhabitants. We actively
              contribute to the park's welfare through vigilant trail
              monitoring, upkeep, and resource equipment fundraising for special
              projects. Additionally, we support engaging programs and events
              tailored to campers and park users while also endorsing research
              initiatives within the park.
            </p>

            <div className="text-center mt-12">
              <h3 className="mb-6">Notice of Annual General Meeting</h3>
              <p className="text-lg leading-relaxed">
                The Friends AGM will be held on Saturday, April 26, at 10 a.m.
                at the Park's Main Office.
              </p>
            </div>

            <div className="text-center mt-12">
              <h4 className="text-xl">
                <a href="/pavilion" className="content-link">
                  Help Us Build a Pavilion at Charleston Lake—Every Donation
                  Makes a Difference!
                </a>
              </h4>
            </div>
          </section>

          <hr className="my-8" />

          <section className="text-center">
            <h2 className="mb-8">Resources</h2>
            <div className="space-y-4">
              <h4 className="text-xl">
                <a
                  href="/images/Pamphlet.png"
                  target="_blank"
                  className="content-link"
                  rel="noopener noreferrer"
                >
                  View Our Pamphlet
                </a>
              </h4>
              <h4 className="text-xl">
                <a
                  href="/docs/Strategic Plan 2024.pdf"
                  target="_blank"
                  className="content-link"
                  rel="noopener noreferrer"
                >
                  View Our Strategic Plan
                </a>
              </h4>
            </div>
          </section>

          <hr className="my-8" />

          <section className="text-center">
            <h3 className="!mb-8">2025 Canoe Raffle Winners</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <p className="font-bold text-lg !mb-0">
                  1st Place - Winner of H20 Canoe
                </p>
                <p className="underline !mb-0">Jenness and Jason Cathray</p>
                <p>Ottawa, ON</p>
              </div>

              <div className="space-y-2">
                <p className="font-bold text-lg !mb-0">
                  2nd Place - Winner of Annual Ontario Park Pass
                </p>
                <p className="underline !mb-0">Hyunjung Kim</p>
                <p>Ottawa, ON</p>
              </div>
            </div>

            <img
              src={winners}
              className="w-full max-w-2xl mx-auto img-border rounded mb-6"
              alt="2025 Canoe Raffle Winners"
            />

            <p className="mt-12 text-lg font-semibold mx-auto leading-relaxed">
              Thanks to all who supported us by purchasing tickets. All proceeds
              go to supporting the Park's many programs and activities.
            </p>
          </section>

          <hr className="my-8" />

          <section className="text-center mb-12">
            <h3 className="mb-6">Begin exploring the park now!</h3>
            <a href="/trails">
              <img
                className="w-full max-w-2xl mx-auto img-border rounded hover:opacity-90 transition-opacity"
                src={cta}
                alt="Explore the trails at Charleston Lake Park"
              />
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
