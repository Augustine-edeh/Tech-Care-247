"use client";

import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchPatientData } from "@/services/patientsService";
import { PatientDataType } from "../../types/Patient";
import usePatientsStore from "@/store/usePatientsStore";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const { patients, setPatientsData, isLoading, error, selectedPatient } =
    usePatientsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPatientData();
        console.log(data); // Log the complete data structure

        // Update Zustand Store
        setPatientsData(data);
      } catch (error) {
        console.error("Failed to fetch patient data:", error);
      }
    };

    fetchData();
  }, [setPatientsData]);

  const patientData = patients.find(
    (patient) => patient.name === "Jessica Taylor"
  );

  if (isLoading || !patientData) {
    return (
      <div className="flex justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  // // Prepare data for the chart
  // const bloodPressureHistory = patientData.diagnosis_history
  //   .map((entry) => ({
  //     date: `${entry.month.substring(0, 3)}, ${entry.year}`,
  //     systolic: entry.blood_pressure.systolic.value,
  //     diastolic: entry.blood_pressure.diastolic.value,
  //   }))
  //   .filter((entry, index) => index < 6)
  //   .reverse();

  // Prepare data for the chart
  const bloodPressureHistory = selectedPatient?.diagnosis_history
    .map((entry) => ({
      date: `${entry.month.substring(0, 3)}, ${entry.year}`,
      systolic: entry.blood_pressure.systolic.value,
      diastolic: entry.blood_pressure.diastolic.value,
    }))
    .filter((entry, index) => index < 6)
    .reverse();

  const labels = bloodPressureHistory?.map((entry) => entry.date);
  const systolicData = bloodPressureHistory?.map((entry) => entry.systolic);
  const diastolicData = bloodPressureHistory?.map((entry) => entry.diastolic);

  // Chart data and options
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#E66FD2",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#E66FD2",
      },
      {
        label: "Diastolic",
        data: diastolicData,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#8C6FE6",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#8C6FE6",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 180,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
