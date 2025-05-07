import { Box } from "@mantine/core";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BAR_WIDTH = 50;

interface CapitalStackToolProps {
  data: { [key: string]: number }[];
  width: number;
  height: number;
  margin: { top: number; right: number; bottom: number; left: number };
}

const CapitalStackTool: React.FC<CapitalStackToolProps> = ({
  data,
  width,
  height,
  margin,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef =
    useRef<d3.Selection<SVGSVGElement, unknown, null, unknown>>(undefined);
  const svgDefsRef =
    useRef<d3.Selection<SVGDefsElement, unknown, null, unknown>>(undefined);
  const mainGRef =
    useRef<d3.Selection<SVGGElement, unknown, null, null>>(undefined);
  const xRef = useRef<d3.ScaleBand<string>>(undefined);
  const yRef = useRef<d3.ScaleLinear<number, number>>(undefined);
  const behindRectGRef =
    useRef<d3.Selection<SVGRectElement, unknown, null, null>>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!svgRef.current) {
      svgRef.current = d3.select(containerRef.current).append("svg");
    }
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;
    svgRef.current.attr("width", width).attr("height", height);

    // const svgWidth = width;
    // const svgHeight = height - margin.top - margin.bottom;

    const svgDefs =
      svgDefsRef.current ||
      (svgDefsRef.current = svgRef.current.append("defs"));

    const gradient = svgDefs
      .append("linearGradient")
      .attr("id", "mainGradient")
      .attr("gradientTransform", "rotate(123)");

    gradient
      .append("stop")
      .attr("offset", "1.15%")
      .attr("stop-color", "#6573B7");

    gradient
      .append("stop")
      .attr("offset", "96.62%")
      .attr("stop-color", "#858DC6");

    const mainG =
      mainGRef.current ||
      (mainGRef.current = svgRef.current
        .append("g")
        .attr("class", "main")
        .attr("transform", `translate(${margin.left},${margin.top})`));

    // ---------- Stack layout
    const keys = Object.keys(data[0]);
    const stackData = d3.stack<{ [k: string]: number }>().keys(keys)(data);

    const maxY = d3.max(stackData[stackData.length - 1], (d) => d[1])!;

    const x = d3
      .scaleBand()
      .domain(d3.range(data.length).map(String))
      .range([0, innerW])
      .padding(0.1);

    const y = d3.scaleLinear().domain([0, 100]).range([innerH, 0]);

    const color = d3.scaleOrdinal<string>().domain(keys).range([
      "#FBECEB", // pink-200
      "#F9B8AD", // red-200
      "#A8ADD7", // blue-200
      "#F8DDDC", // pink-400
      "#F37870", // red-400
      "#BDBDBC", // grey-200
      "#576196", // blue-600
      "#C2B0B1", // pink-600
      "#BF655D", // red-600
      "#CFD2EA", // blue-100
      "#F9E4E3", // pink-300
      "#F6978C", // red-300
      "#595D7D", // blue-700
      "#91888A", // pink-700
    ]);

    // ---------- Draw layers

    const behindRectG = behindRectGRef.current
      ? behindRectGRef.current
      : (behindRectGRef.current = mainG
          .append("rect")
          .attr("stroke", "white") // OUTLINE color
          .attr("stroke-width", 2)
          .attr("fill", "url(#mainGradient)"));

    behindRectG
      .attr("x", width / 2 - BAR_WIDTH / 2)
      .attr("y", 0)
      .attr("height", innerH)
      .attr("width", BAR_WIDTH);

    const layerG = mainG
      .selectAll<SVGGElement, d3.Series<{ [k: string]: number }, string>>(
        "g.layer"
      )
      .data(stackData, (d: any) => d.key)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (d: any) => color(d.key))
      .attr("stroke", "white")
      .attr("stroke-width", 2);

    layerG
      .selectAll("rect")
      .data((d: any) => d)
      .join("rect")
      .attr("x", width / 2 - BAR_WIDTH / 2)
      .attr("y", (d: any) => y(d[1]))
      .attr("height", (d: any) => y(d[0]) - y(d[1]))
      .attr("width", BAR_WIDTH);

    // // ---------- y-axis (optional)
    // g.selectAll(".y-axis")
    //   .data([null])
    //   .join((el: any) => el.append("g").attr("class", "y-axis"))
    //   .call(d3.axisLeft(y) as any);
  }, [data, width, height, margin]);

  return <Box ref={containerRef} w={width} h={height} />;
};

export default CapitalStackTool;
