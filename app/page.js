const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
// const getTopics = async () => {
//   try {
//     const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/topics`, {
//       cache:"force-cache",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };
export default async function Home() {
  const {topics} = await getTopics();
  return (
   <>
   <div>
   {topics.map((topic)=>{
    return(
      <div key={topic._id}>
      {topic.title}
      </div>
    )
   })}
   </div>
   </>
  )
}
