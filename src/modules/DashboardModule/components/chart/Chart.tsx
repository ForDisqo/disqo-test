import {LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush,} from "recharts";

interface IProps {
  title: string;
  data: any;
}

const Chart: React.FC<IProps> = ({ title, data }) => {
  return (<>
      <div className="flex space-beetwen"><h1>{title}</h1></div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="length" stroke="#82ca9d" />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;

