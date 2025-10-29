import React from "react";

export default function Contributions() {
  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Special Thanks</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section className="text-center">
          <div className="space-y-4 leading-relaxed mx-auto">
            <p>
              Many thanks to{" "}
              <a
                href="https://www.frontenacoutfitters.com/"
                target="_blank"
                className="content-link"
                rel="noopener noreferrer"
              >
                Frontenac Outfitters
              </a>{" "}
              for their cooperation in the purchase of our H20 raffle canoe!
            </p>

            <p className="font-semibold underline mt-8">
              We wish to thank our corporate members and donors:
            </p>

            <p className="mb-12">Charleston Lake Association</p>

            <p className="mt-12">
              Thanks also to those who made donations to the Friends to help
              with our operations in the past year.
            </p>

            <p>
              All lake users owe a debt of gratitude to the{" "}
              <a
                href="https://www.charlestonlakeassociation.ca/home"
                target="_blank"
                className="content-link"
                rel="noopener noreferrer"
              >
                Charleston Lake Association
              </a>{" "}
              and its Safety Committee for providing and installing the buoys
              and shoal markers on the lake.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-center mb-8">The Friends' Contributions</h2>

          <div className="space-y-6 leading-relaxed">
            <p>
              The Friends work in many way to support and improve the Park. Most
              of our contribution is of the in-kind sort: monitoring trails,
              working on trail improvement, raising money and on and on. But we
              thought you would be interested in knowing that the money we raise
              is spent on things that make the Park a better (and occasionally a
              larger) place. A total of over $72,000 over ten years shows
              commitment.
            </p>

            <img
              className="mx-auto img-border my-8"
              src="/assets/images/plaque.png"
              alt="Ontario Parks Student Bursary Award Plaque"
            />

            <p className="text-center italic mx-auto">
              The plaque we received from Ontario Parks for our contribution to
              their annual Student Bursary Awards benefiting hardworking
              students who work in Ontario Parks.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="text-center">
          <h3 className="text-xl">
            <a
              href="/assets/docs/fclp_website_entry_ontario_nature_2019.odt"
              className="content-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ontario Nature Update
            </a>
          </h3>
        </section>
      </div>
    </div>
  );
}
