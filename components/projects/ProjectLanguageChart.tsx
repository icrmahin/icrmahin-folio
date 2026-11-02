"use client";

import { useMemo } from "react";
import { barX, defineChart } from "@tanstack/charts";
import { Chart } from "@tanstack/charts/react";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { scaleOrdinal } from "@tanstack/charts/scales/ordinal";
import { tooltip } from "@tanstack/charts/tooltip";
import type { RepositoryLanguage } from "@/lib/github";

const palette = ["#f16b52", "#d7c68f", "#858f90", "#c35a45", "#aeb6b5"];

export default function ProjectLanguageChart({
  data,
  title,
}: {
  data: RepositoryLanguage[];
  title: string;
}) {
  const definition = useMemo(
    () =>
      defineChart({
        marks: [
          barX(data, {
            id: "language-share",
            x: "share",
            y: "name",
            z: "name",
          }),
        ],
        scales: {
          x: {
            scale: scaleLinear,
            nice: true,
            grid: true,
            axis: {
              label: "Share of repository code (%)",
              ticks: { format: (value) => `${Math.round(value)}%` },
            },
          },
          y: { scale: () => scaleBand<string>().padding(0.2) },
        },
        color: {
          scale: () => scaleOrdinal<string, string>().range(palette),
        },
        tooltip,
      }),
    [data],
  );

  return (
    <Chart
      ariaLabel={`${title} repository language composition`}
      definition={definition}
      height={260}
    />
  );
}
