import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "sonner";
import { AuthProvider } from "./AuthProvider";


const App = () => {
    return(
        <>
<Toaster
  position={"top-center"}
  toastOptions={{
 
    classNames: {
      error: 'bg-red-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      info: 'bg-blue-400',
    },
  }}
/>
        <RouterProvider router={router} />

        </>
    )
} ;

export default App;
