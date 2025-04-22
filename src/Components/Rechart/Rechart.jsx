import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer
} from "recharts";

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`
);


const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const Rechart = ({ bookings }) => {

  const lawyerFees = bookings.reduce((acc, curr) => {
    acc[curr.name] = (acc[curr.name] || 0) + curr.fee;
    return acc;
  }, {});

  const colors = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#f97316'];
  const chartData = Object.entries(lawyerFees).map(([name, fee], index) => ({
    name,
    fee,
    fill: colors[index % colors.length]
  }));

  return (
    <div className="mb-10">
   
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
              <LabelList dataKey="fee" position="top" fill="#333" fontSize={14} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
     <div>
     <h2 className="text-2xl font-bold mb-6 text-center  mt-5">My Today Appointments</h2>
     <p className="text-gray-600 text-center">Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
     </div>
    </div>
  );
};

export default Rechart;
