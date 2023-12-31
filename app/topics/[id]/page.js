import TopicCard from "@/components/cards/TopicCard";
import NewCard from "@/components/cards/NewCard";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getTopic(id){
    const topicResponce =await fetch(`${NEXT_PUBLIC_API_URL}/api/topics/${id}`,{cache:"force-cache"})
    return topicResponce.json();
}

import React from 'react'

const TopicPage = async({params}) => {
    const {topic} = await getTopic(params.id)
  return (
    <div className="w-full flex flex-wrap justify-center">
         <NewCard topics={[topic]} />
    </div>
  )
}

export default TopicPage