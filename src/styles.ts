import { Step } from "react-joyride"


export type EventColorMapping = {
    'event-info': string;
    'event-warning': string;
    'event-danger': string;
    'event-success': string;
    'event-primary': string;
};



export const statusVariant = {
    yellow: 'bg-yellow-500 text-yellow-500 border border-yellow-500',
    theme: 'bg-theme-opacity text-theme border border-theme',
    green: 'bg-green-600 text-green-600 border border-green-600',
    danger: 'bg-danger text-danger border border-danger',

}


export const signal = {
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    danger: 'bg-red-500',
    theme:'bg-theme'
}


export const Steps: Step[] = [
    { title: "Create Invoice", content: "Click here to create a quick invoice", target: "#create-invoice", placement: "top-end", isFixed: true },
    { title: "Create Expenses", content: "Click here to create a quick expense", target: "#create-expense", placement: "top" },
    { title: "Create Deposit", content: "Click here to create a quick deposit", target: "#create-deposit", placement: "top" },
    { title: "Task Quick View", content: "Click here to create a quick deposit", target: "#task-summary", placement: "top" },
]


export const eventColors: EventColorMapping = {
    'event-info': 'bg-sky-500',
    'event-warning': 'bg-yellow-500',
    'event-danger': 'bg-red-500',
    'event-success': 'bg-green-500',
    'event-primary': 'bg-theme',
}

export const colorMapping: EventColorMapping = {
    'event-info': '#0ea5e9',
    'event-warning': '#eab308',
    'event-danger': '#ef4444',
    'event-success': '#22c55e',
    'event-primary': '#169AA6',
  };
