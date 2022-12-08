import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

const Statics = () => {

  const info = useLoaderData()

  return (
    <div className='flex justify-center  mt-10'>
      <ResponsiveContainer width={"80%"} height={300}>
        <LineChart width={600} height={300} data={info.data}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Statics;