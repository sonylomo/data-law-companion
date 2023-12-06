// import axios from "axios";
// import { useMutation } from "@tanstack/react-query";
// import { toast } from "react-toastify";

// const generateSummary = async (section: number, country: string) => {
//   section = 5;
//   country = "Kenya";

//   const response = await axios.post(
//     "https://compliancecompanion-compliancecompanion.hf.space/summary",
//     { country, section },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   return response.data;
// };

// const useSummary = (topicNumber: number, country: string) => {

//   return useMutation(generateSummary(topicNumber, country), {
//     onSuccess: () => {
//       toast.success("Summary generted successfully!");
//     },
//     onError: () => {
//       toast.error("Error generating summary!");
//     },
//   });
// };

// export default useSummary;
