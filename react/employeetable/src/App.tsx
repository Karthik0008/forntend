import React, { useEffect, useState } from 'react';
import './App.css';
import EmployeeTable from './components/Employeestable';
import { Employee } from './types/Employees';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]); // State to hold employees

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/employees.json')
      .then((response) => response.json())
      .then((data: Employee[]) => {
        setEmployees(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className="App">
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default App;
