// // // import { useEffect, useState } from "react";
// // // import "../styles/ListingDetails.scss";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import { facilities } from "../data";

// // // import "react-date-range/dist/styles.css";
// // // import "react-date-range/dist/theme/default.css";
// // // import { DateRange } from "react-date-range";
// // // import Loader from "../components/Loader";
// // // import Navbar from "../components/Navbar";
// // // import { useSelector } from "react-redux";
// // // import Footer from "../components/Footer"

// // // const ListingDetails = () => {
// // //   const [loading, setLoading] = useState(true);

// // //   const { listingId } = useParams();
// // //   const [listing, setListing] = useState(null);

// // //   const getListingDetails = async () => {
// // //     try {
// // //       const response = await fetch(
// // //         `http://localhost:3001/properties/${listingId}`,
// // //         {
// // //           method: "GET",
// // //         }
// // //       );

// // //       const data = await response.json();
// // //       setListing(data);
// // //       setLoading(false);
// // //     } catch (err) {
// // //       console.log("Fetch Listing Details Failed", err.message);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getListingDetails();
// // //   }, []);

// // //   console.log(listing)


// // //   /* BOOKING CALENDAR */
// // //   const [dateRange, setDateRange] = useState([
// // //     {
// // //       startDate: new Date(),
// // //       endDate: new Date(),
// // //       key: "selection",
// // //     },
// // //   ]);

// // //   const handleSelect = (ranges) => {
// // //     // Update the selected date range when user makes a selection
// // //     setDateRange([ranges.selection]);
// // //   };

// // //   const start = new Date(dateRange[0].startDate);
// // //   const end = new Date(dateRange[0].endDate);
// // //   const dayCount = Math.round(end - start) / (1000 * 60 * 60 * 24); // Calculate the difference in day unit

// // //   /* SUBMIT BOOKING */
// // //   const customerId = useSelector((state) => state?.user?._id)

// // //   const navigate = useNavigate()

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const bookingForm = {
// // //         customerId,
// // //         listingId,
// // //         hostId: listing.creator._id,
// // //         startDate: dateRange[0].startDate.toDateString(),
// // //         endDate: dateRange[0].endDate.toDateString(),
// // //         totalPrice: listing.price * dayCount,
// // //       }

// // //       const response = await fetch("http://localhost:3001/bookings/create", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(bookingForm)
// // //       })

// // //       if (response.ok) {
// // //         navigate(`/${customerId}/trips`)
// // //       }
// // //     } catch (err) {
// // //       console.log("Submit Booking Failed.", err.message)
// // //     }
// // //   }

// // //   return loading ? (
// // //     <Loader />
// // //   ) : (
// // //     <>
// // //       <Navbar />
      
// // //       <div className="listing-details">
// // //         <div className="title">
// // //           <h1>{listing.title}</h1>
// // //           <div></div>
// // //         </div>

// // //         <div className="photos">
// // //           {listing.listingPhotoPaths?.map((item) => (
// // //             <img
// // //               src={`http://localhost:3001/${item.replace("public", "")}`}
// // //               alt="listing photo"
// // //             />
// // //           ))}
// // //         </div>

// // //         <h2>
// // //           {listing.type} in {listing.city}, {listing.province},{" "}
// // //           {listing.country}
// // //         </h2>
// // //         <p>
// // //           {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
// // //           {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
// // //         </p>
// // //         <hr />

// // //         <div className="profile">
// // //           <img
// // //             src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
// // //               "public",
// // //               ""
// // //             )}`}
// // //           />
// // //           <h3>
// // //             Hosted by {listing.creator.firstName} {listing.creator.lastName}
// // //           </h3>
// // //         </div>
// // //         <hr />

// // //         <h3>Description</h3>
// // //         <p>{listing.description}</p>
// // //         <hr />

// // //         <h3>{listing.highlight}</h3>
// // //         <p>{listing.highlightDesc}</p>
// // //         <hr />

// // //         <div className="booking">
// // //           <div>
// // //             <h2>What this place offers?</h2>
// // //             <div className="amenities">
// // //               {listing.amenities[0].split(",").map((item, index) => (
// // //                 <div className="facility" key={index}>
// // //                   <div className="facility_icon">
// // //                     {
// // //                       facilities.find((facility) => facility.name === item)
// // //                         ?.icon
// // //                     }
// // //                   </div>
// // //                   <p>{item}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div>
// // //             <h2>How long do you want to stay?</h2>
// // //             <div className="date-range-calendar">
// // //               <DateRange ranges={dateRange} onChange={handleSelect} />
// // //               {dayCount > 1 ? (
// // //                 <h2>
// // //                   ${listing.price} x {dayCount} nights
// // //                 </h2>
// // //               ) : (
// // //                 <h2>
// // //                   ${listing.price} x {dayCount} night
// // //                 </h2>
// // //               )}

// // //               <h2>Total price: ${listing.price * dayCount}</h2>
// // //               <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
// // //               <p>End Date: {dateRange[0].endDate.toDateString()}</p>

// // //               <button className="button" type="submit" onClick={handleSubmit}>
// // //                 BOOKING
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <Footer />
// // //     </>
// // //   );
// // // };


// // // export default ListingDetails;

// // import { useEffect, useState } from "react";
// // import "../styles/ListingDetails.scss";
// // import { useNavigate, useParams } from "react-router-dom";
// // import { facilities } from "../data";

// // import "react-date-range/dist/styles.css";
// // import "react-date-range/dist/theme/default.css";
// // import { DateRange } from "react-date-range";

// // import Loader from "../components/Loader";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { useSelector } from "react-redux";

// // // ✅ Add this import
// // import MockPayment from "../components/MockPayment";

// // const ListingDetails = () => {
// //   const [loading, setLoading] = useState(true);
// //   const { listingId } = useParams();
// //   const [listing, setListing] = useState(null);
// //   const navigate = useNavigate();
// //   const customerId = useSelector((state) => state?.user?._id);

// //   const getListingDetails = async () => {
// //     try {
// //       const response = await fetch(
// //         http://localhost:3001/properties/${listingId},
// //         {
// //           method: "GET",
// //         }
// //       );
// //       const data = await response.json();
// //       setListing(data);
// //       setLoading(false);
// //     } catch (err) {
// //       console.log("Fetch Listing Details Failed", err.message);
// //     }
// //   };

// //   useEffect(() => {
// //     getListingDetails();
// //   }, []);

// //   /* BOOKING CALENDAR */
// //   const [dateRange, setDateRange] = useState([
// //     {
// //       startDate: new Date(),
// //       endDate: new Date(),
// //       key: "selection",
// //     },
// //   ]);

// //   const handleSelect = (ranges) => {
// //     setDateRange([ranges.selection]);
// //   };

// //   const start = new Date(dateRange[0].startDate);
// //   const end = new Date(dateRange[0].endDate);
// //   const dayCount = Math.round((end - start) / (1000 * 60 * 60 * 24));

// //   /* 🔒 Booking Submit */
// //   const handleSubmit = async () => {
// //     try {
// //       const bookingForm = {
// //         customerId,
// //         listingId,
// //         hostId: listing.creator._id,
// //         startDate: dateRange[0].startDate.toDateString(),
// //         endDate: dateRange[0].endDate.toDateString(),
// //         totalPrice: listing.price * dayCount,
// //       };

// //       const response = await fetch("http://localhost:3001/bookings/create", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(bookingForm),
// //       });

// //       if (response.ok) {
// //         navigate(/${customerId}/trips);
// //       }
// //     } catch (err) {
// //       console.log("Submit Booking Failed.", err.message);
// //     }
// //   };

// //   // ✅ Handle Mock Payment Popup State
// //   const [showMockPayment, setShowMockPayment] = useState(false);

// //   const handleMockPaymentSuccess = (paymentResult) => {
// //     console.log("Mock payment succeeded:", paymentResult);
// //     handleSubmit();
// //     setShowMockPayment(false);
// //   };

// //   return loading ? (
// //     <Loader />
// //   ) : (
// //     <>
// //       <Navbar />

// //       <div className="listing-details">
// //         <div className="title">
// //           <h1>{listing.title}</h1>
// //           <div></div>
// //         </div>

// //         <div className="photos">
// //           {listing.listingPhotoPaths?.map((item) => (
// //             <img
// //               key={item}
// //               src={http://localhost:3001/${item.replace("public", "")}}
// //               alt="listing"
// //             />
// //           ))}
// //         </div>

// //         <h2>
// //           {listing.type} in {listing.city}, {listing.province},{" "}
// //           {listing.country}
// //         </h2>
// //         <p>
// //           {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
// //           {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
// //         </p>
// //         <hr />

// //         <div className="profile">
// //           <img
// //             src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
// //               "public",
// //               ""
// //             )}`}
// //             alt="host"
// //           />
// //           <h3>
// //             Hosted by {listing.creator.firstName} {listing.creator.lastName}
// //           </h3>
// //         </div>
// //         <hr />

// //         <h3>Description</h3>
// //         <p>{listing.description}</p>
// //         <hr />

// //         <h3>{listing.highlight}</h3>
// //         <p>{listing.highlightDesc}</p>
// //         <hr />

// //         <div className="booking">
// //           <div>
// //             <h2>What this place offers?</h2>
// //             <div className="amenities">
// //               {listing.amenities[0].split(",").map((item, index) => (
// //                 <div className="facility" key={index}>
// //                   <div className="facility_icon">
// //                     {
// //                       facilities.find((facility) => facility.name === item)
// //                         ?.icon
// //                     }
// //                   </div>
// //                   <p>{item}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div>
// //             <h2>How long do you want to stay?</h2>
// //             <div className="date-range-calendar">
// //               <DateRange ranges={dateRange} onChange={handleSelect} />
// //               <h2>
// //                 ${listing.price} x {dayCount}{" "}
// //                 {dayCount === 1 ? "night" : "nights"}
// //               </h2>
// //               <h2>Total price: ${listing.price * dayCount}</h2>
// //               <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
// //               <p>End Date: {dateRange[0].endDate.toDateString()}</p>

// //               {/* ✅ Replaced booking button */}
// //               <button
// //                 className="button"
// //                 onClick={() => setShowMockPayment(true)}
// //                 disabled={dayCount === 0}
// //               >
// //                 BOOKING
// //               </button>

// //               {/* ✅ Show MockPayment component when true */}
// //               {showMockPayment && (
// //                 <MockPayment
// //                   totalAmount={listing.price * dayCount}
// //                   onSuccess={handleMockPaymentSuccess}
// //                   onClose={() => setShowMockPayment(false)}
// //                 />
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <Footer />
// //     </>
// //   );
// // };

// // export default ListingDetails;

// import { useEffect, useState } from "react";
// import "../styles/ListingDetails.scss";
// import { useNavigate, useParams } from "react-router-dom";
// import { facilities } from "../data";

// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { DateRange } from "react-date-range";

// import Loader from "../components/Loader";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useSelector } from "react-redux";

// // ✅ Add this import
// import MockPayment from "../components/MockPayment";

// const ListingDetails = () => {
//   const [loading, setLoading] = useState(true);
//   const { listingId } = useParams();
//   const [listing, setListing] = useState(null);
//   const navigate = useNavigate();
//   const customerId = useSelector((state) => state?.user?._id);

//   const getListingDetails = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3001/properties/${listingId}`,
//         {
//           method: "GET",
//         }
//       );
//       const data = await response.json();
//       setListing(data);
//       setLoading(false);
//     } catch (err) {
//       console.log("Fetch Listing Details Failed", err.message);
//     }
//   };

//   useEffect(() => {
//     getListingDetails();
//   }, []);

//   /* BOOKING CALENDAR */
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   const handleSelect = (ranges) => {
//     setDateRange([ranges.selection]);
//   };

//   const start = new Date(dateRange[0].startDate);
//   const end = new Date(dateRange[0].endDate);
//   const dayCount = Math.round((end - start) / (1000 * 60 * 60 * 24));

//   /* 🔒 Booking Submit */
//   const handleSubmit = async () => {
//     try {
//       const bookingForm = {
//         customerId,
//         listingId,
//         hostId: listing.creator._id,
//         startDate: dateRange[0].startDate.toDateString(),
//         endDate: dateRange[0].endDate.toDateString(),
//         totalPrice: listing.price * dayCount,
//       };

//       const response = await fetch("http://localhost:3001/bookings/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingForm),
//       });

//       if (response.ok) {
//         navigate(`/${customerId}/trips`);
//       }
//     } catch (err) {
//       console.log("Submit Booking Failed.", err.message);
//     }
//   };

//   // ✅ Handle Mock Payment Popup State
//   const [showMockPayment, setShowMockPayment] = useState(false);

//   const handleMockPaymentSuccess = (paymentResult) => {
//     console.log("Mock payment succeeded:", paymentResult);
//     handleSubmit();
//     setShowMockPayment(false);
//   };

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Navbar />

//       <div className="listing-details">
//         <div className="title">
//           <h1>{listing.title}</h1>
//           <div></div>
//         </div>

//         <div className="photos">
//           {listing.listingPhotoPaths?.map((item) => (
//             <img
//               key={item}
//               src={`http://localhost:3001/${item.replace("public", "")}`}
//               alt="listing"
//             />
//           ))}
//         </div>

//         <h2>
//           {listing.type} in {listing.city}, {listing.province},{" "}
//           {listing.country}
//         </h2>
//         <p>
//           {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
//           {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
//         </p>
//         <hr />

//         <div className="profile">
//           <img
//             src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
//               "public",
//               ""
//             )}`}
//             alt="host"
//           />
//           <h3>
//             Hosted by {listing.creator.firstName} {listing.creator.lastName}
//           </h3>
//         </div>
//         <hr />

//         <h3>Description</h3>
//         <p>{listing.description}</p>
//         <hr />

//         <h3>{listing.highlight}</h3>
//         <p>{listing.highlightDesc}</p>
//         <hr />

//         <div className="booking">
//           <div>
//             <h2>What this place offers?</h2>
//             <div className="amenities">
//               {listing.amenities[0].split(",").map((item, index) => (
//                 <div className="facility" key={index}>
//                   <div className="facility_icon">
//                     {
//                       facilities.find((facility) => facility.name === item)
//                         ?.icon
//                     }
//                   </div>
//                   <p>{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2>How long do you want to stay?</h2>
//             <div className="date-range-calendar">
//               <DateRange ranges={dateRange} onChange={handleSelect} />
//               <h2>
//                 ${listing.price} x {dayCount}{" "}
//                 {dayCount === 1 ? "night" : "nights"}
//               </h2>
//               <h2>Total price: ${listing.price * dayCount}</h2>
//               <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
//               <p>End Date: {dateRange[0].endDate.toDateString()}</p>

//               {/* ✅ Replaced booking button */}
//               <button
//                 className="button"
//                 onClick={() => setShowMockPayment(true)}
//                 disabled={dayCount === 0}
//               >
//                 BOOKING
//               </button>

//               {/* ✅ Show MockPayment component when true */}
//               {showMockPayment && (
//                 <MockPayment
//                   totalAmount={listing.price * dayCount}
//                   onSuccess={handleMockPaymentSuccess}
//                   onClose={() => setShowMockPayment(false)}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ListingDetails;

// import { useEffect, useState } from "react";
// import "../styles/ListingDetails.scss";
// import { useNavigate, useParams } from "react-router-dom";
// import { facilities } from "../data";

// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { DateRange } from "react-date-range";

// import Loader from "../components/Loader";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useSelector } from "react-redux";
// import MockPayment from "../components/MockPayment"; // ✅ Mock payment component

// const ListingDetails = () => {
//   const [loading, setLoading] = useState(true);
//   const { listingId } = useParams();
//   const [listing, setListing] = useState(null);
//   const navigate = useNavigate();
//   const customerId = useSelector((state) => state?.user?._id);

//   const getListingDetails = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:3001/properties/${listingId}`,
//         { method: "GET" }
//       );
//       const data = await response.json();
//       setListing(data);
//       setLoading(false);
//     } catch (err) {
//       console.log("Fetch Listing Details Failed", err.message);
//     }
//   };

//   useEffect(() => {
//     getListingDetails();
//   }, []);

//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   const handleSelect = (ranges) => {
//     setDateRange([ranges.selection]);
//   };

//   const start = new Date(dateRange[0].startDate);
//   const end = new Date(dateRange[0].endDate);
//   const dayCount = Math.max(
//     1,
//     Math.round((end - start) / (1000 * 60 * 60 * 24))
//   );

//   const handleSubmit = async () => {
//     try {
//       const bookingForm = {
//         customerId,
//         listingId,
//         hostId: listing.creator._id,
//         startDate: dateRange[0].startDate.toDateString(),
//         endDate: dateRange[0].endDate.toDateString(),
//         totalPrice: listing.price * dayCount,
//       };

//       const response = await fetch("http://localhost:3001/bookings/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingForm),
//       });

//       if (response.ok) {
//         navigate(`/${customerId}/trips`);
//       }
//     } catch (err) {
//       console.log("Submit Booking Failed.", err.message);
//     }
//   };

//   // ✅ Handle Mock Payment Popup State
//   const [showMockPayment, setShowMockPayment] = useState(false);

//   const handleMockPaymentSuccess = (paymentResult) => {
//     console.log("Mock payment succeeded:", paymentResult);
//     handleSubmit(); // Proceed with booking after successful mock payment
//     setShowMockPayment(false);
//   };

//   return loading ? (
//     <Loader />
//   ) : (
//     <>
//       <Navbar />
//       <div className="listing-details">
//         <div className="title">
//           <h1>{listing.title}</h1>
//         </div>

//         <div className="photos">
//           {listing.listingPhotoPaths?.map((item) => (
//             <img
//               key={item}
//               src={`http://localhost:3001/${item.replace("public", "")}`}
//               alt="listing"
//             />
//           ))}
//         </div>

//         <h2>
//           {listing.type} in {listing.city}, {listing.province},{" "}
//           {listing.country}
//         </h2>
//         <p>
//           {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
//           {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
//         </p>
//         <hr />

//         <div className="profile">
//           <img
//             src={`http://localhost:3001/${listing.creator.profileImagePath.replace(
//               "public",
//               ""
//             )}`}
//             alt="host"
//           />
//           <h3>
//             Hosted by {listing.creator.firstName} {listing.creator.lastName}
//           </h3>
//         </div>
//         <hr />

//         <h3>Description</h3>
//         <p>{listing.description}</p>
//         <hr />

//         <h3>{listing.highlight}</h3>
//         <p>{listing.highlightDesc}</p>
//         <hr />

//         <div className="booking">
//           <div>
//             <h2>What this place offers?</h2>
//             <div className="amenities">
//               {listing.amenities[0].split(",").map((item, index) => (
//                 <div className="facility" key={index}>
//                   <div className="facility_icon">
//                     {facilities.find((f) => f.name === item)?.icon}
//                   </div>
//                   <p>{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h2>How long do you want to stay?</h2>
//             <div className="date-range-calendar">
//               <DateRange ranges={dateRange} onChange={handleSelect} />

//               <h2>
//                 ${listing.price} x {dayCount} {dayCount > 1 ? "nights" : "night"}
//               </h2>
//               <h2>Total price: ${listing.price * dayCount}</h2>
//               <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
//               <p>End Date: {dateRange[0].endDate.toDateString()}</p>

//               <button
//                 className="button"
//                 onClick={() => setShowMockPayment(true)}
//               >
//                 Continue to Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />

//       {/* ✅ Show Mock Payment Popup */}
//       {showMockPayment && (
//         <MockPayment
//           amount={listing.price * dayCount}
//           onSuccess={handleMockPaymentSuccess}
//           onClose={() => setShowMockPayment(false)}
//         />
//       )}
//     </>
//   );
// };

// export default ListingDetails;
import { useEffect, useState } from "react";
import "../styles/ListingDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { facilities } from "../data";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import MockPayment from "../components/MockPayment"; // ✅ Mock payment component

const ListingDetails = () => {
  const [loading, setLoading] = useState(true);
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const navigate = useNavigate();
  const customerId = useSelector((state) => state?.user?._id);

  const getListingDetails = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/properties/${listingId}`,
        { method: "GET" }
      );
      const data = await response.json();
      setListing(data);
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listing Details Failed", err.message);
    }
  };

  useEffect(() => {
    getListingDetails();
  }, []);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const start = new Date(dateRange[0].startDate);
  const end = new Date(dateRange[0].endDate);
  const dayCount = Math.max(
    1,
    Math.round((end - start) / (1000 * 60 * 60 * 24))
  );

  const handleSubmit = async () => {
    try {
      const bookingForm = {
        customerId,
        listingId,
        hostId: listing.creator._id,
        startDate: dateRange[0].startDate.toDateString(),
        endDate: dateRange[0].endDate.toDateString(),
        totalPrice: listing.price * dayCount,
      };

      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/bookings/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      });

      if (response.ok) {
        navigate(`/${customerId}/trips`);
      }
    } catch (err) {
      console.log("Submit Booking Failed.", err.message);
    }
  };

  // ✅ Handle Mock Payment Popup State
  const [showMockPayment, setShowMockPayment] = useState(false);

  const handleMockPaymentSuccess = (paymentResult) => {
    console.log("Mock payment succeeded:", paymentResult);
    handleSubmit(); // Proceed with booking after successful mock payment
    setShowMockPayment(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <div className="listing-details">
        <div className="title">
          <h1>{listing.title}</h1>
        </div>

        <div className="photos">
          {listing.listingPhotoPaths?.map((item) => (
            <img
              key={item}
              src={`${process.env.REACT_APP_BASE_URL}/${item.replace("public", "")}`}
              alt="listing"
            />
          ))}
        </div>

        <h2>
          {listing.type} in {listing.city}, {listing.province},{" "}
          {listing.country}
        </h2>
        <p>
          {listing.guestCount} guests - {listing.bedroomCount} bedroom(s) -{" "}
          {listing.bedCount} bed(s) - {listing.bathroomCount} bathroom(s)
        </p>
        <hr />

        <div className="profile">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/${listing.creator.profileImagePath.replace(
              "public",
              ""
            )}`}
            alt="host"
          />
          <h3>
            Hosted by {listing.creator.firstName} {listing.creator.lastName}
          </h3>
        </div>
        <hr />

        <h3>Description</h3>
        <p>{listing.description}</p>
        <hr />

        <h3>{listing.highlight}</h3>
        <p>{listing.highlightDesc}</p>
        <hr />

        <div className="booking">
          <div>
            <h2>What this place offers?</h2>
            <div className="amenities">
              {listing.amenities[0].split(",").map((item, index) => (
                <div className="facility" key={index}>
                  <div className="facility_icon">
                    {facilities.find((f) => f.name === item)?.icon}
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2>How long do you want to stay?</h2>
            <div className="date-range-calendar">
              <DateRange ranges={dateRange} onChange={handleSelect} />

              <h2>
                ${listing.price} x {dayCount} {dayCount > 1 ? "nights" : "night"}
              </h2>
              <h2>Total price: ${listing.price * dayCount}</h2>
              <p>Start Date: {dateRange[0].startDate.toDateString()}</p>
              <p>End Date: {dateRange[0].endDate.toDateString()}</p>

              <button
                className="button"
                onClick={() => setShowMockPayment(true)}
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* ✅ Show Mock Payment Popup */}
      {showMockPayment && (
        <MockPayment
          amount={listing.price * dayCount}
          onSuccess={handleMockPaymentSuccess}
          onClose={() => setShowMockPayment(false)}
        />
      )}
    </>
  );
};

export default ListingDetails;
