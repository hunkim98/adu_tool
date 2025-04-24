import { Box } from "@mantine/core";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

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
    useRef<d3.Selection<SVGSVGElement, unknown, null, undefined>>(null);

  const xRef = useRef<d3.ScaleBand<string>>(null);
  const yRef = useRef<d3.ScaleLinear<number, number>>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ---------- Create / update root <svg>
    if (!svgRef.current) {
      svgRef.current = d3.select(containerRef.current).append("svg");
    }
    svgRef.current.attr("width", width).attr("height", height);

    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const g = svgRef.current
      .selectAll<SVGGElement, unknown>("g.main")
      .data([null])
      .join("g")
      .attr("class", "main")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // ---------- Stack layout
    const keys = Object.keys(data[0]);
    const stackData = d3.stack<{ [k: string]: number }>().keys(keys)(data);

    const maxY = d3.max(stackData[stackData.length - 1], (d) => d[1])!;

    const x = d3
      .scaleBand()
      .domain(d3.range(data.length).map(String))
      .range([0, innerW])
      .padding(0.1);

    const y = d3.scaleLinear().domain([0, maxY]).range([innerH, 0]);

    const color = d3
      .scaleOrdinal<string>()
      .domain(keys)
      .range(d3.schemeCategory10);

    // ---------- Draw layers
    const layerG = g
      .selectAll<SVGGElement, d3.Series<{ [k: string]: number }, string>>(
        "g.layer"
      )
      .data(stackData, (d: any) => d.key)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (d: any) => color(d.key));

    layerG
      .selectAll("rect")
      .data((d: any) => d)
      .join("rect")
      .attr("x", (_, i) => x(String(i))!)
      .attr("y", (d: any) => y(d[1]))
      .attr("height", (d: any) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth());

    // ---------- y-axis (optional)
    g.selectAll(".y-axis")
      .data([null])
      .join((el: any) => el.append("g").attr("class", "y-axis"))
      .call(d3.axisLeft(y) as any);
  }, [data, width, height, margin]);

  return <Box ref={containerRef} w={width} h={height} />;
};

export default CapitalStackTool;
