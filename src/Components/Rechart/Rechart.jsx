import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Rechart = ({ bookings }) => {
  // Total fee per doctor
  const doctorFees = bookings.reduce((acc, curr) => {
    acc[curr.name] = (acc[curr.name] || 0) + curr.fee;
    return acc;
  }, {});

  // Assign color to each doctor
  const colors = ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#f97316'];

  // Prepare one data point per doctor
  const chartData = Object.entries(doctorFees).map(([name, fee], index) => ({
    name,
    fee,
    color: colors[index % colors.length]
  }));

  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-center">Appointment Fees Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart margin={{ top: 10, right: 30, left: 30, bottom: 0 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {chartData.map((entry, index) => (
            <Area
              key={index}
              type="monotone"
              dataKey="fee"
              data={[entry]} // <== One point per Area creates the gap
              stroke={entry.color}
              fill={entry.color}
              fillOpacity={1}
              dot={false}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
