import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const LandingPage = () => {
    
    const [topics, setTopics] = useState([])

    const fetchTopics = () => fetch('http://localhost:3000/topics')
        .then(res => res.json())
        .then(data => setTopics(data))

    useEffect(() => {
        fetchTopics()
    }, [])

    return (
        <>
            <h1 className="text-3xl text-center mt-4 mb-4">Topics</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
                {
                    topics.map((item: any) => (
                        <Link to={`topic/${item.title}`} key={item._id} className="border-1 p-1 rounded-sm bg-sky-200 hover:bg-sky-300 cursor-pointer">
                            <input type="checkbox" className="mr-1 size-4" />
                            <span>{item.title}</span>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}