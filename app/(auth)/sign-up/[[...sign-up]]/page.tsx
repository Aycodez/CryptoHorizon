// const LoginPage = () => {
//   return (
//     <div className="h-screen bg-back gap-20 overflow-y-hidden w-full flex items-center ">
//       <div className="h-full w-1/2">
//         <Image
//           src="/bitcoin-cover.jpg"
//           width={400}
//           height={400}
//           className="object-conver h-full rounded-r-2xl w-full"
//           alt="bitcoin image"
//         />
//       </div>
//       <div className="p-6 bg-[#E3E6EC] fl-col-cen gap-4 lg:p-8 rounded shadow-lg w-80 lg:w-[450px]">
//         <h2 className="text-3xl font-bold">Welcome Back</h2>
//         <p className="font-semibold">Log in to your account</p>
//         <form className="w-full">
//           <div className="mb-4 w-full">
//             <div className="mb-6 w-full ">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="example@gmail.com"
//                 className="w-full rounded-md bg-slate-300 p-2 outline-none"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter password"
//                 className="w-full rounded-md bg-slate-300 p-2 outline-none"
//               />
//               <Link href="/">
//                 <p className="text-primcolor  hover:underline font-semibold text-sm text-end">
//                   Forget Password?
//                 </p>
//               </Link>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="mb-5 p-2 w-full font-semibold bg-primcolor text-white rounded-md"
//               >
//                 Continue with email
//               </button>
//             </div>
//             <div className="w-full h-px bg-white mt-3" />
//             <p className="text-center bg-[#E3E6EC] font-bold text-lg mx-2 bg z-20 -mt-4">
//               OR
//             </p>
//             <div>
//               <button
//                 type="submit"
//                 className="my-5 p-2 w-full font-semibold bg-white text-black rounded-md"
//               >
//                 Continue with Google
//               </button>
//             </div>

//             <span className="text-center font-semibold">
//               {" "}
//               New to DHI?{" "}
//               <Link
//                 className="text-center text-primcolor hover:underline mt-2"
//                 href="/register"
//               >
//                 Sign up now.
//               </Link>
//             </span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div className="h-screen bg-back gap-20 overflow-y-hidden w-full flex items-center ">
      <div className="h-full hidden lg:flex w-1/2">
        <Image
          src="/bitcoin-cover.jpg"
          width={400}
          height={400}
          className="object-conver h-full rounded-r-2xl w-full"
          alt="bitcoin image"
        />
      </div>
      <div className="p-6">
        <SignUp
          redirectUrl={"/auth-callback"}
          // afterSignInUrl={"/auth-callback"}
        />
      </div>
    </div>
  );
}
