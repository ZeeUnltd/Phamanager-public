import { EventColorMapping, eventColors } from "../styles";
import { StylesConfig } from "react-select";
import _ from "lodash"
import { PermissionItem } from "./interface";

interface StatusData {
    [key: string]: string;
}


export const colorStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        // minHeight: "40px",
        borderRadius: "8px",
        border: 'none'
    }),

    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#169AA6' : '#EDEAEA',
        color: state.isFocused ? 'white' : 'black',
        margin: 0,
        fontSize: "12px"

    })
}


export const creatableStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "#FAFAFA",
        borderRadius: "8px",
        border: state.isFocused ? '0.5px solid #169AA6' : '0.5px solid #EDEAEA',
        '&:hover': { border: '1px solid #EDEAEA' }
    }),

    option: (provided, state) => ({
        ...provided,
        display: "flex",
        backgroundColor: state.isFocused ? '#169AA6' : '#EDEAEA',
        color: state.isFocused ? 'white' : 'black',
        margin: 0
    })
}


export const barOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Customized Bar Chart Title',
            font: {
                size: 18,
                weight: 'bold',
            },
        },
        legend: {
            display: true,
            position: 'right' as const,
            labels: {
                font: {
                    size: 12,
                },
            },
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            },
            offset: true,
            display: true,
            title: {
                display: true,
                font: {
                    size: 14,
                },
            },
            ticks: {
                font: {
                    size: 12,
                },
            },
        },
        y: {
            grid: {
                display: false
            },
            display: true,
            title: {
                display: true,
                font: {
                    size: 14,
                },
            },
            ticks: {
                font: {
                    size: 12,
                },
            },
            precision: 0,
        },
    },
    barPercentage: 0.5,
    categoryPercentage: 0.8,
};



// in progress, annual leave  = theme;
// pending, sick leave = yellow;
// compconsted, casual leave = green
//suspend = danger


export const statusGenerator = (title: string) => {
    switch (title) {
        case "open":
            return "theme";

        case "medium":
        case "onhold":
        case "Pending":
        case "in_active":
        case "Inactive":
        case "pending":
            return 'yellow';

        case "close":
        case "low":
        case "1":
        case "active":
        case "Approve":
        case "Paid":
        case "confirm":
            return "green";

        case "high":
        case "critical":
        case "0":
        case "Reject":
        case "UnPaid":
        case "cancel":
            return "danger";

        default:
            return "theme";
    }
};


export const returnPaginationRange = (noOfPage: number, currentPage: number, siblings: number) => {
    const totalPageNoInArray = 7 + siblings;
    if (totalPageNoInArray >= noOfPage) {
        return _.range(1, noOfPage + 1);
    }

    const leftSiblingsIndex = Math.max(currentPage - siblings, 1)
    const rightSiblingsIndex = Math.min(currentPage + siblings, noOfPage)

    const showLeftDots = leftSiblingsIndex > 2
    const showRightDots = rightSiblingsIndex < noOfPage - 2;

    if (!showLeftDots && showRightDots) {
        const leftItemsCount = 3 + 2 * siblings;
        const leftRange = _.range(1, leftItemsCount + 1)
        return [...leftRange, " ...", noOfPage]
    } else if (showLeftDots && !showRightDots) {
        const rightItemsCount = 3 + 2 * siblings;
        const rightRange = _.range(noOfPage - rightItemsCount + 1, noOfPage + 1);
        return [1, "... ", ...rightRange]
    } else {
        const middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1)
        return [1, "... ", ...middleRange, " ...", noOfPage]
    }
}


export const handlePaginateData = (currentPage: number, itemsPerPage: number, filteredData: any[]) => {
    const lastIndexPerPage = currentPage * itemsPerPage
    const firstIndexPerPage = lastIndexPerPage - itemsPerPage

    const paginatedData = itemsPerPage < filteredData.length ? filteredData?.slice(firstIndexPerPage, lastIndexPerPage) : filteredData;

    return paginatedData;
}



export const generateUniqueColors = (length: number) => {
    const predefinedColors = [
        '#f87171', '#fb923c', '#34d399',
        '#2dd4bf', '#38bdf8', '#60a5fa', '#a78bfa',
        '#f472b6'
    ];

    if (length <= predefinedColors.length) {
        // If the requested length is less than or equal to the predefined colors
        return predefinedColors.slice(0, length);
    } else {
        // If the requested length is greater, cycle through the predefined colors
        return Array.from({ length }, (_, i) => predefinedColors[i % predefinedColors.length]);
    }
}


export const getPermissionName = (words: string[]) => {
    if (words.length > 2) {
        return words.slice(-2).join(' ');
    } else if (words.length === 2) {
        return words[1];
    } else {
        return words[0];
    }
};


export const groupPermission = (sortedData: PermissionItem[]) => {

    const groupedData: Record<string, { id: string; value: string }[]> = {};

    for (const item of sortedData) {
        const name = item.name;
        const firstWord = item.data.split(' ')[0];

        if (!groupedData[name]) {
            groupedData[name] = [];
        }

        // Check if the same "data" value already exists in the grouped data
        const duplicateExists = groupedData[name].some(existingItem => existingItem.value === firstWord);

        if (!duplicateExists) {
            groupedData[name].push({ id: item.id, value: firstWord });
        }
    }

    return groupedData;
}


// export function removeDuplicatesPermissions(data: any[]|never) {
//     const uniqueRows = [];
//     const seen = new Map();

//     for (const row of data) {
//         const { name, data: rowData } = row; // Object destructuring
//         const key = `${name}-${rowData}`; // Using template literals

//         if (!seen.has(key)) {
//             seen.set(key, true);
//             uniqueRows.push(row);
//         }
//     }

//     return uniqueRows;
// }



export const mappedObject = (data: StatusData | undefined) => {
    if (data) {
        const newArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            name: value
        }));
        return newArray;
    } else {
        return [];
    }
};


export const downloadExcelFile = ({ data, fileName }: { data: ArrayBuffer, fileName: string }) => {
    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
};


export const eventColorGen = (inputArray: (keyof EventColorMapping)[] | undefined) => {
    type NewType = {
        class: keyof EventColorMapping;
        color: string;
    };

    if (inputArray) {
        const colorCodedArray: NewType[] = inputArray.map(className => {
            return {
                class: className,
                color: eventColors[className],
            };
        });

        return colorCodedArray;
    } else {
        return [] as NewType[];
    }
}


export const hexToRGBA = (hex: any, alpha: any) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
};


export const updateCompanyTheme = (color: string) => {

    const firtChar = color.charAt(0)

    if (firtChar === "#") {
        const root = document.documentElement;
        root.style.setProperty('--state-theme', color);
        const hexColor = color;
        const opacityAdjustedColor = hexToRGBA(hexColor, 0.10);
        root.style.setProperty('--state-theme-opacity', opacityAdjustedColor);
    } else {
        const root = document.documentElement;
        root.style.setProperty('--state-theme', "#169AA6");
        const hexColor = "#169AA6";
        const opacityAdjustedColor = hexToRGBA(hexColor, 0.10);
        root.style.setProperty('--state-theme-opacity', opacityAdjustedColor);
    }

}


export function generateYearsRange(): number[] {
    const currentYear = new Date().getFullYear();
    const yearsBefore = 2;
    const yearsAfter = 3;

    const startYear = currentYear - yearsBefore;
    const endYear = currentYear + yearsAfter;

    const yearsRange: number[] = [];

    for (let year = startYear; year <= endYear; year++) {
        yearsRange.push(year);
    }

    return yearsRange;
}


export const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {

    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    }
    const R = 6371e3; // Radius of the Earth in meters
    const radlat1 = lat1 * Math.PI / 180;
    const radlat2 = lat2 * Math.PI / 180;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(radlat1) * Math.cos(radlat2) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters

    return distance;
};

