import React from 'react'
import Container from '../../../components/Container'
import PrescriptionTable from '../../../components/Tables/PrescriptionTable/PrescriptionTable'

const data = [
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "James Oshiomole",
      location: "No 4, Ike road, Amaku",
      filterOption: "Dispensed",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Okinda Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Rejected",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Rejected",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Dispensed",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Rejected",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Dispensed",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Dispensed",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Rejected",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Rejected",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Dispensed",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Dispensed",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Rejected",
  },
  {
      id: "#509484939",
      date: "12 April 2023, 12:43 AM",
      clientName: "Sunday Peters",
      location: "No 4, Ike road, Amaku",
      filterOption: "Pending",
  },
]


const filterOptions = ["Available prescriptions", "Rejected prescriptions", "Accepted quotes"];
const filterParameters = [{name: "Pending", options: ["Quote", "View Details"]}, 
{name: "Rejected", options: ["Delete", "View Details"]}, 
{name: "Dispensed", options: ["Delete", "View Details"]}]
const tableHeading = ["Order ID", "Date", "Client Name", "Location", "Status"]


const DispensaryTable: React.FC = () => {
  return (
    <Container type='blue-border'>
        <div style={{
            padding: '2em'
        }}>
            <PrescriptionTable data={data} filter={filterOptions} 
            params={filterParameters} heading={tableHeading}
            />
        </div>
    </Container>
  )
}

export default DispensaryTable
