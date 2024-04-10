// // useAuth.js

// import { useEffect, useState } from 'react';
// import { getSession } from 'next-auth/react';

// export function useAuth() {
//   const [session, setSession] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const session = await getSession();
//       setSession(session);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   return { session, loading };
// }
