import axios from "axios";
import { encode } from "base-64";
import { PatientDataType } from "../../types/Patient";

export const fetchPatientData = async (): Promise<PatientDataType[]> => {
  const username = "coalition";
  const password = "skills-test";

  const authHeader = `Basic ${encode(`${username}:${password}`)}`;

  try {
    const response = await axios.get<PatientDataType[]>(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching patient data:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Could not fetch patient data");
  }
};
