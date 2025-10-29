import React from "react";
import { Link } from "react-router-dom";
import ontarioNatureImg from "@/assets/images/ontario_nature.jpg";

export default function Activities() {
  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Activities</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section>
          <div className="space-y-4 leading-relaxed">
            <p>
              We raise funds in a variety of ways to augment and upgrade
              existing Park facilities, and to make Charleston Lake Park a great
              place to explore, camp and enjoy nature.
            </p>
            <p>
              By searching out and obtaining funding from charitable foundations
              and government grants, we support research into species at risk,
              and ongoing studies of the natural and cultural history inventory
              of the Park.
            </p>
            <p>
              Through the selling of our annual canoe raffle tickets at various
              venues, we are able to fund Park activities. For example, we
              supply funds for the interpretive programs and special events
              (Birds Of Prey, Seniors Day). We publish the trail brochures and
              purchase wood chips for the trails.
            </p>
            <p>
              Many Friends participate in the trail monitoring program, and
              assist Park staff in keeping the trails in first class shape by
              ditching, brushing and reporting problems.
            </p>
            <p>
              We send an annual donation to Ontario Parks to help fund its{" "}
              <strong>Student Bursary</strong> program, which awards 40
              bursaries each year to OP summer student employees who are
              returning to school in the fall.
            </p>
            <p>
              Friends also assist in research programs where they help staff to
              monitor turtles, control invasive species, and report on
              significant flora and fauna sightings.
            </p>
            <p>
              All of these are fund and rewarding; and they contribute to the
              Park users' enjoyment of Park facilities.
            </p>
            <p className="text-center mt-8 text-lg">
              <strong>
                Why not get{" "}
                <Link to="/join" className="content-link">
                  involved!
                </Link>
              </strong>
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="md:text-center">
          <img
            className="w-full max-w-2xl mx-auto img-border mb-6"
            src={ontarioNatureImg}
            alt="Ontario Nature Youth Summit"
          />
          <p className="italic leading-relaxed mx-auto">
            Each September, Ontario Nature hosts the Youth Summit for
            Biodiversity and Environmental Leadership for high school students
            from across the province. The Friends proudly sponsor a local
            student for this amazing three day summit in Orillia.
          </p>
        </section>
      </div>
    </div>
  );
}
