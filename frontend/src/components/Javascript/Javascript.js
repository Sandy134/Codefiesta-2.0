// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// const Javascript = () => {
//   const userProfile = localStorage.getItem("user");
//   const userObject = JSON.parse(userProfile);
//   const [sub, setSub] = useState();
//   const [giveComment, setGiveComment] = useState("");
//   const [comments,setComments] = useState([]);
//    useEffect(() => {
//      (async () => {
//        try {
//          const { data } = await axios.get("http://localhost:5000/api/comments");
//          // console.log(data);
//          setComments(data.comments);
//        } catch (error) {
//          console.log(error.message);
//        }
//      })();
//    }, []);
//   const navigate = useNavigate("");
//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await axios.get(
//           "https://raw.githubusercontent.com/Sandy134/Eduhub/main/Scripting%20Languages/Scripting.json"
//         );
//         setSub(data["Javascript"]);
//       } catch (error) {
//         console.log(error.message);
//       }
//     })();
//   }, []);

//   const testHandler = () => {
//     navigate("scripting/javascript/test");
//   };

//   const submitComment = async () => {
//     try {
//       const { data } = await axios.post("http://localhost:5000/api/comments", {
//         question: giveComment,
//         user: userObject._id,
//       });
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col d-flex justify-content-center align-items-center">
//           <img
//             loading="lazy"
//             width="500"
//             height="500"
//             src={sub.image}
//             alt="C logo"
//           />
//         </div>
//         <div className="col shadow p-3 mb-5 bg-body rounded">
//           <h1 className="fw-bolder">Javascript</h1>
//           <h3 className="fw-bold">Overview</h3>
//           <p className="fs-5">{sub.description}</p>
//         </div>
//       </div>
//       <div className="row">
//         <h1 className="fw-bolder mt-5 mb-5 d-flex justify-content-center">
//           Videos
//         </h1>
//         <div className="col-md-9 mx-auto shadow-lg p-3 mb-5 bg-body rounded">
//           <div className="ratio ratio-16x9">
//             <iframe
//               src="https://www.youtube.com/embed/cvvwkgp4HBg"
//               title="YouTube video"
//               style={{ maxWidth: "100%", height: "100%" }}
//               allowfullscreen
//             ></iframe>
//           </div>
//         </div>
//         <div>
//           <p className="mt-5 fw-bold fs-2">More Links:</p>
//           <ul>
//             {sub.videos.map((video) => (
//               <>
//                 <li className="fs-5">
//                   <p>
//                     Install C Compiler:{" "}
//                     <a href={video} target="_blank">
//                       {video}
//                     </a>
//                   </p>
//                 </li>
//               </>
//             ))}
//           </ul>
//         </div>
//         <div className="mt-5 text-center shadow-lg p-3 mb-5 bg-body rounded ">
//           <p className=" fw-bold fs-2 d-flex justify-content-center">
//             You feel good about this course? Test your self!
//           </p>
//           <button
//             onClick={testHandler}
//             className="btn btn-outline-primary btn-lg mt-1"
//           >
//             Take a Test
//           </button>
//         </div>
//       </div>
//       <div>
//         <p className="mt-5 fw-bold fs-2">Post your doubts:</p>
//         <form className="form-group" />
//         <textarea
//           value={giveComment}
//           onChange={(e) => setGiveComment(e.target.value)}
//           className="form-control"
//           id="doubts"
//           rows="3"
//         ></textarea>
//         <div className="text-center">
//           <button
//             onClick={submitComment}
//             className="btn btn-outline-primary btn-lg mt-2"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//       <div className="mb-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded">
//         <p className=" fw-bold fs-2">Doubts:</p>
//         <div className="row">
//           <div className="col-md-12">
//             {comments.map((comment) => (
//               <p className="fs-5">
//                 <span className="fw-bold">Q: {comment.question}</span>
//                 <br />
//                 <span className="">
//                   <b>A: </b>
//                   {comment.answer}
//                 </span>
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Javascript;
