import React from "react";

import canoe from "@/assets/images/raffle/h2ocanoe.jpeg";

export default function Raffle() {
  return (
    <div id="page-content" className="container">
      <div className="text-center mb-8">
        <h1>Annual Raffle</h1>
      </div>

      <div className="mx-auto space-y-8">
        <section className="text-center">
          <h3 className="mb-6">Win a 16' H20 Canoe</h3>

          <img
            className="w-full max-w-2xl mx-auto img-border mb-6"
            src={canoe}
            alt="16' H20 Canoe - First Prize"
          />

          <div className="space-y-4 leading-relaxed mx-auto">
            <p>
              The Friends raise funds to help out with improvements at the Park,
              fund our regular activities and support special events. The Annual
              Raffle is part of that effort. Besides this great canoe as first
              prize, the second prize is a season pass valid at any Ontario
              Provincial Park.
            </p>

            <p className="text-lg font-semibold">
              Tickets for each raffle cost{" "}
              <strong>$5.00 each or $10.00 for 3.</strong>
            </p>

            <p>
              They will be available at the Park Gatehouse, canoe rentals, and
              local venues including Ribfest and Craft Fair in Gananoque and the
              Lyndhurst Turkey Fair.
            </p>
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

          <p className="mt-12 text-lg font-semibold mx-auto leading-relaxed">
            Thanks to all who supported us by purchasing tickets. All proceeds
            go to supporting the Park's many programs and activities.
          </p>
        </section>
      </div>
    </div>
  );
}
