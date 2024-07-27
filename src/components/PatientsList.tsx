import Image from "next/image";
import PatientCard from "./PatientCard";
import SearchPatients from "./SearchPatients";

type classNameType = {
  className: string;
};

const PatientsList = ({ className }: classNameType) => {
  const patientsArray = [
    {
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
      profile_picture: "https://fedskillstest.ct.digital/4.png",
      date_of_birth: "1996-08-23",
      phone_number: "(415) 555-1234",
      emergency_contact: "(415) 555-5678",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "March",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 160,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 78,
              levels: "Lower than Average",
            },
          },
          heart_rate: {
            value: 78,
            levels: "Lower than Average",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hypertension",
          description: "Chronic high blood pressure",
          status: "Under Observation",
        },
      ],
      lab_results: ["Blood Tests", "CT Scans"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
    {
      name: "John Smith",
      gender: "Male",
      age: 45,
      profile_picture: "https://fedskillstest.ct.digital/5.png",
      date_of_birth: "1979-05-14",
      phone_number: "(312) 555-8765",
      emergency_contact: "(312) 555-4321",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "February",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 145,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 85,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 22,
            levels: "Normal",
          },
          temperature: {
            value: 98.9,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Pre-diabetes",
          description: "Higher than normal blood sugar levels",
          status: "Managed",
        },
      ],
      lab_results: ["Blood Glucose Test", "ECG"],
    },
    {
      name: "Emily Davis",
      gender: "Female",
      age: 35,
      profile_picture: "https://fedskillstest.ct.digital/6.png",
      date_of_birth: "1988-11-09",
      phone_number: "(213) 555-3456",
      emergency_contact: "(213) 555-6543",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "January",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 120,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.7,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Asthma",
          description: "Chronic respiratory condition",
          status: "Managed",
        },
      ],
      lab_results: ["Spirometry", "Chest X-ray"],
    },
    // Add 97 more unique patients
    {
      name: "Michael Johnson",
      gender: "Male",
      age: 52,
      profile_picture: "https://fedskillstest.ct.digital/7.png",
      date_of_birth: "1972-03-22",
      phone_number: "(718) 555-6789",
      emergency_contact: "(718) 555-9876",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "April",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 150,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 90,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 82,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 19,
            levels: "Normal",
          },
          temperature: {
            value: 99.1,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Diabetes",
          description: "Chronic condition affecting blood sugar levels",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Blood Sugar Test", "HbA1c"],
    },
    {
      name: "Sarah Brown",
      gender: "Female",
      age: 40,
      profile_picture: "https://fedskillstest.ct.digital/8.png",
      date_of_birth: "1984-07-13",
      phone_number: "(510) 555-1235",
      emergency_contact: "(510) 555-5679",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "May",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 135,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 88,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.4,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Hyperlipidemia",
          description: "High levels of lipids in the blood",
          status: "Under Observation",
        },
      ],
      lab_results: ["Lipid Profile", "Liver Function Test"],
    },
    {
      name: "David Lee",
      gender: "Male",
      age: 37,
      profile_picture: "https://fedskillstest.ct.digital/9.png",
      date_of_birth: "1987-11-23",
      phone_number: "(213) 555-6780",
      emergency_contact: "(213) 555-7890",
      insurance_type: "HealthCare Plus",
      diagnosis_history: [
        {
          month: "June",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 125,
              levels: "Normal",
            },
            diastolic: {
              value: 80,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 75,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Allergies",
          description: "Hypersensitivity to certain substances",
          status: "Managed",
        },
      ],
      lab_results: ["Allergy Test", "Skin Prick Test"],
    },
    {
      name: "Laura Wilson",
      gender: "Female",
      age: 50,
      profile_picture: "https://fedskillstest.ct.digital/10.png",
      date_of_birth: "1974-02-15",
      phone_number: "(714) 555-1122",
      emergency_contact: "(714) 555-2233",
      insurance_type: "Wellness Cover",
      diagnosis_history: [
        {
          month: "July",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 140,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 85,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 80,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 20,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Osteoarthritis",
          description:
            "Degeneration of joint cartilage and the underlying bone",
          status: "Managed",
        },
      ],
      lab_results: ["X-ray", "MRI"],
    },
    //...add remaining unique patients here
    {
      name: "Sophia Martin",
      gender: "Female",
      age: 33,
      profile_picture: "https://fedskillstest.ct.digital/11.png",
      date_of_birth: "1991-01-10",
      phone_number: "(415) 555-3456",
      emergency_contact: "(415) 555-6543",
      insurance_type: "Prime Health Insurance",
      diagnosis_history: [
        {
          month: "August",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 118,
              levels: "Normal",
            },
            diastolic: {
              value: 75,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 70,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.6,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Thyroid Disorder",
          description: "Abnormal thyroid function",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Thyroid Function Test", "Ultrasound"],
    },
    {
      name: "James Rodriguez",
      gender: "Male",
      age: 46,
      profile_picture: "https://fedskillstest.ct.digital/12.png",
      date_of_birth: "1978-09-05",
      phone_number: "(312) 555-5678",
      emergency_contact: "(312) 555-8765",
      insurance_type: "Sunrise Health Assurance",
      diagnosis_history: [
        {
          month: "September",
          year: 2024,
          blood_pressure: {
            systolic: {
              value: 130,
              levels: "Higher than Average",
            },
            diastolic: {
              value: 82,
              levels: "Normal",
            },
          },
          heart_rate: {
            value: 72,
            levels: "Normal",
          },
          respiratory_rate: {
            value: 18,
            levels: "Normal",
          },
          temperature: {
            value: 98.5,
            levels: "Normal",
          },
        },
      ],
      diagnostic_list: [
        {
          name: "Gastritis",
          description: "Inflammation of the stomach lining",
          status: "Under Treatment",
        },
      ],
      lab_results: ["Endoscopy", "Biopsy"],
    },
  ];

  return (
    <section
      className={`${className} bg-unnamed-color-ffffff w-[367p w- full h-[1076px h-[full mt-[14px] rounded-[16px] p-5 pr -1 pb -20 overflow-hidde`}
    >
      <SearchPatients className="mb-10 mr-5" />

      <ul className="patient-list flex flex-col gap-y- h-fu  overflow-y-scroll h-[1076px] overflow-x-hidden w-full">
        {patientsArray.map((patient, index) => (
          <li key={index}>
            <PatientCard
              profile_picture={patient.profile_picture}
              name={patient.name}
              gender={patient.gender}
              age={patient.age}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientsList;
