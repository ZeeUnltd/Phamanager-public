import { toast } from "sonner";

const OK = "success"

const handleErrors = (err: any) => {
    const response = err.response;
    switch (response?.status) {
        case 500:
            toast.error(response.data.message);
            break;

        case 400:
        case 401:
        case 404:
        case 403:
        case 409:
        case 422:
            if (response.data.errors) {
                Object.keys(response.data.errors).forEach((field) => {
                    const errors = response.data.errors[field];
                    errors.forEach((errorMessage: any) => {
                        toast.error(`${field}: ${errorMessage}`);
                    });
                });
            } else {
                toast.error(response.data.message);
            }
            break;

        default:
            toast.error(err.message);
            break;
    }
};
export default handleErrors