import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Triangle shape function
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`
);

// Custom shape component
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Chart component
const Rechart = ({ bookings }) => {
  // Group fee by doctor
  const doctorFees = bookings.reduce((acc, curr) => {
    acc[curr.name] = (acc[curr.name] || 0) + curr.fee;
    return acc;
  }, {});

  // Convert to chart data format
  const colors = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#f97316'];
  const chartData = Object.entries(doctorFees).map(([name, fee], index) => ({
    name,
    fee,
    fill: colors[index % colors.length]
  }));

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-center">Appointment Fees Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fee" shape={<TriangleBar />} isAnimationActive={true}>
            {
              chartData.map((entry, index) => (
                <TriangleBar key={index} fill={entry.fill} {...entry} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
