import { Data } from "./model";

type filterPrescriptionFunction = (value: Data[], selectedFilterOption: string) => []

const filterPrescriptions: filterPrescriptionFunction = (value, selectedFilterOption) => {
    const filtered: any = value.filter((item) => {
    // Return items to be displayed on on desired criteria
    // For example, when a user clicks on `Accepted quotes`, the function returns an array of items whose filterOptions
    // are `Pending` and `Dispensed`
    if (selectedFilterOption === "Available prescriptions") {
        return true;
    } else if (selectedFilterOption === "Quoted prescriptions") {
        return item.filterOption === "Quoted";
    } else if (selectedFilterOption === "Accepted quotes") {
        return item.filterOption === "Pending" || item.filterOption === "Dispensed";
    }
    return true; // If no filter option is selected, show all prescriptions
    });
    return filtered
}

export default filterPrescriptions;