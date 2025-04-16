import React from "react";
// import { useState } from 'react';

const App = () => {
  const data = [
    {
      id: 1,
      name: "ram",
      age: 21,
      place: "khammam",
    },
    {
      id: 2,
      name: "shiva",
      age: 22,
      place: "warangal",
    },
    {
      id: 3,
      name: "karthik",
      age: 23,
      place: "hyderabad",
    },
    {
      id: 4,
      name: "tirupati",
      age: 24,
      place: "badrachalam",
    },
    {
      id: 5,
      name: "ramya",
      age: 25,
      place: "elluru",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Data</h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
        <table className="w-full bg-white text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            {/* <tr>
              <th className="py-3 px-6 border-b">ID</th>
              <th className="py-3 px-6 border-b">Name</th>
              <th className="py-3 px-6 border-b">Age</th>
              <th className="py-3 px-6 border-b">Place</th>
            </tr> */}
            <tr>
              {Object.keys(data[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr
                  key={index}
                  className={`
                    border-b hover:bg-gray-50 transition-colors
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  `}
                >
                  <td className="py-3 px-6 font-medium">{value.id}</td>
                  <td className="py-3 px-6">{value.name}</td>
                  <td className="py-3 px-6">{value.age}</td>
                  <td className="py-3 px-6">{value.place}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
