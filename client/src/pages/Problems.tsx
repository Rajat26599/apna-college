import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Leetcode from '../assets/img/leetcode.png'
import Codeforce from '../assets/img/code-force.png'
import Article from '../assets/img/article.png'

export const ProblemsPage = () => {
    let initialProblems: {title: string, solved: boolean}[] = []

    const {topic} = useParams()
    const [problems, setProblems] = useState(initialProblems)

    const fetchProblems = () => {
        fetch('http://localhost:3000/topic/' + topic)
            .then(res => res.json())
            .then(data => setProblems(data.problems))
    }

    useEffect(() => {
        fetchProblems()
    }, [])


    return (
        <>
            <h1 className="text-3xl text-center mt-4 mb-4">{topic}</h1>
            <div className="grid grid-cols-1 gap-4 m-4">
                {
                    problems.map((item, idx) => (
                        <Link to={`/problem/${item?.title}`} key={idx} className="flex justify-between border-1 p-1 rounded-sm bg-sky-200 hover:bg-sky-300 cursor-pointer">
                            <div>
                                <input type="checkbox" className="mr-1 size-4" />
                                <span>{item?.title}</span>
                            </div>
                            <div className="flex items-center">
                                <img src={Leetcode} className='size-6 mr-4' />
                                <img src={Codeforce} className='size-6 mr-4' />
                                <img src={Article} className='size-6 mr-4' />
                                <button className="bg-green-600 pl-4 pr-4 rounded-sm text-white cursor-pointer">Solve</button>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}